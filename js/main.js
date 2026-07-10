/**
 * Main Application Initialization
 * Handles page routing, theme management, and global utilities
 */

class BeautySchoolApp {
  constructor() {
    this.currentPage = 'dashboard';
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.currentRole = localStorage.getItem('userRole') || 'student';
    this.init();
  }

  init() {
    this.setupRoleButtons();
    this.setupEventListeners();
    this.restoreSidebarState();
    this.filterMenuByRole(this.currentRole);
    this.loadPage('dashboard');
    this.setupTheme();
  }

  setupRoleButtons() {
    // Setup role buttons
    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedRole = btn.getAttribute('data-role');
        this.setRole(selectedRole);
      });
    });

    // Highlight active role button
    this.updateRoleButtonState();
  }

  setRole(role) {
    this.currentRole = role;
    localStorage.setItem('userRole', role);
    this.filterMenuByRole(role);
    this.updateRoleButtonState();
    this.loadPage('dashboard');
  }

  updateRoleButtonState() {
    document.querySelectorAll('.role-btn').forEach(btn => {
      const role = btn.getAttribute('data-role');
      if (role === this.currentRole) {
        btn.style.borderColor = 'rgba(0, 191, 165, 0.8)';
        btn.style.backgroundColor = 'rgba(0, 191, 165, 0.2)';
        btn.style.color = '#00BFA5';
      } else {
        btn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'rgba(255, 255, 255, 0.7)';
      }
    });
  }

  filterMenuByRole(role) {
    // Hide all sections
    const allSections = document.querySelectorAll('.menu-section');
    allSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show sections for current role
    allSections.forEach(section => {
      const rolesText = section.getAttribute('data-roles');
      if (rolesText) {
        const roles = rolesText.split(',').map(r => r.trim());
        if (roles.includes(role)) {
          section.style.display = 'block';
        }
      }
    });

    // Always show dashboard
    const dashboard = document.querySelector('[data-nav="dashboard"]');
    if (dashboard) {
      dashboard.style.display = 'flex';
    }
  }

  setupEventListeners() {
    // Navigation links
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-nav');
        this.loadPage(page);
        this.updateActiveNav(page);
        this.closeMobileMenu();
      });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('translate-x-full');
      });
    }

    // Desktop sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        this.toggleDarkMode();
      });
    }

    // Modal close buttons
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = btn.closest('[data-modal]');
        if (modal) this.closeModal(modal.id);
      });
    });

    // Close modal when clicking outside
    document.querySelectorAll('[data-modal]').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal.id);
      });
    });
  }

  loadPage(page) {
    const content = document.getElementById('page-content');

    // Load page content
    fetch(`pages/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error(`Page not found: ${page}`);
        return response.text();
      })
      .then(html => {
        content.innerHTML = html;
        this.currentPage = page;

        // Ejecutar scripts inline después de insertar el contenido
        const scripts = content.querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });

        // Load page-specific scripts
        this.loadPageScripts(page);

        // Trigger custom event for page-specific initialization
        document.dispatchEvent(new CustomEvent('pageLoaded', { detail: { page } }));
      })
      .catch(error => {
        console.error('Error loading page:', error);

        // Provide helpful error message with instructions
        let errorMessage = error.message;
        let helpText = '';

        if (error.message.includes('Failed to fetch')) {
          helpText = `
            <div class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p class="font-semibold text-yellow-900 mb-2">💡 Solution:</p>
              <p class="text-yellow-800 mb-2">The app needs to run on a local server. Open your terminal and run:</p>
              <code class="block bg-gray-900 text-green-400 p-3 rounded-lg mb-2 font-mono text-sm">python -m http.server 8000</code>
              <p class="text-yellow-800 mb-2">Then open: <strong>http://localhost:8000</strong></p>
              <p class="text-sm text-yellow-700">Or double-click <strong>start-server.sh</strong> (Mac/Linux) or <strong>start-server.bat</strong> (Windows)</p>
            </div>
          `;
        }

        content.innerHTML = `<div class="alert alert-error m-6">
          <h3 class="font-bold">Error Loading Page</h3>
          <p>${errorMessage}</p>
          ${helpText}
        </div>`;
      });
  }

  loadPageScripts(page) {
    // Remove previous page scripts
    document.querySelectorAll('[data-page-script]').forEach(script => {
      script.remove();
    });

    // Load new page script if it exists
    const script = document.createElement('script');
    script.src = `js/modules/${page}.js`;
    script.setAttribute('data-page-script', '');
    script.onerror = () => {
      // Script doesn't exist or failed to load - that's OK
      console.log(`No specific module for page: ${page}`);
    };
    document.body.appendChild(script);
  }

  updateActiveNav(page) {
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.classList.remove('border-primary-600', 'text-primary-600', 'bg-primary-50');
      if (link.getAttribute('data-nav') === page) {
        link.classList.add('border-primary-600', 'text-primary-600', 'bg-primary-50');
      }
    });
  }

  closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.add('translate-x-full');
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar) {
      sidebar.classList.toggle('sidebar-collapsed');
      if (main) {
        main.classList.toggle('sidebar-collapsed');
      }
      // Save state to localStorage
      const isCollapsed = sidebar.classList.contains('sidebar-collapsed');
      localStorage.setItem('sidebarCollapsed', isCollapsed);
    }
  }

  restoreSidebarState() {
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isCollapsed) {
      const sidebar = document.getElementById('sidebar');
      const main = document.querySelector('main');
      if (sidebar) sidebar.classList.add('sidebar-collapsed');
      if (main) main.classList.add('sidebar-collapsed');
    }
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode);
    this.setupTheme();
  }

  setupTheme() {
    const html = document.documentElement;
    if (this.darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  // Utility: Show toast notification
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white animate-slideIn z-50
      ${type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Utility: Format date
  formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Utility: Format time
  formatTime(time) {
    return new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  // Utility: Get current time
  getCurrentTime() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new BeautySchoolApp();
});
