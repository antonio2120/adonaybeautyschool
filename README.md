# Adonay Beauty School - Management System

A comprehensive web-based management system for Adonay Beauty School with responsive design for PCs, tablets, and mobile devices.

## Features

### ✅ Core Features (Implemented)

1. **Dashboard**
   - Quick statistics and overview
   - Recent activity display
   - Quick action buttons
   - Key metrics and performance indicators

2. **Check-in/Check-out System**
   - Student search and selection
   - Auto-timestamp with manual override
   - Notes for special circumstances
   - Real-time check-in/check-out records

3. **Reports & Analytics**
   - Attendance records with filtering
   - Date range selection
   - Student-specific reports
   - CSV export functionality
   - Print-friendly reports
   - Key statistics (attendance rate, avg hours, etc.)

4. **Online Registration**
   - Multi-step registration form
   - Course selection
   - Session preference selection
   - Terms acceptance
   - Confirmation email simulation

5. **Practical Sessions Management**
   - Browse available sessions
   - Filter by course and availability
   - Student enrollment
   - Capacity tracking
   - Schedule and instructor information

6. **Payment Processing**
   - Student payment recording
   - Multiple payment methods (card, bank transfer, check)
   - Payment history and tracking
   - Revenue statistics
   - Collection rate monitoring

7. **Website Content Manager**
   - Edit school information
   - About section management
   - Contact information management
   - Social media links
   - Student testimonials
   - Website preview and publish

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Tailwind CSS 3
- **Layout**: Responsive grid and flexbox
- **Data**: JSON mock data with localStorage persistence
- **Icons**: SVG and Unicode icons

## Getting Started

### ⚠️ IMPORTANT: Must Use HTTP Server

The app **requires a local HTTP server** to run (not file:// protocol).

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python (usually pre-installed) OR Node.js
- Optional: Node.js and npm (for Tailwind CSS compilation)

### Quick Start (Choose One)

**Easiest - Automated Server Scripts:**
```bash
# Mac/Linux
bash start-server.sh

# Windows
start-server.bat
```

**Or Manual - Python (Mac/Linux):**
```bash
cd adonaisbeautyschool
python3 -m http.server 8000
# Then open: http://localhost:8000
```

**Or Manual - Node.js:**
```bash
cd adonaisbeautyschool
npx http-server
```

### Installation (for development)

1. **Clone or download the repository**
   ```bash
   cd adonaisbeautyschool
   ```

2. **Install dependencies** (optional, for CSS compilation)
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   # Option 1: Use automated server script
   bash start-server.sh        # Mac/Linux
   # or
   start-server.bat            # Windows
   
   # Option 2: Manual server
   python3 -m http.server 8000  # Python
   # or
   npx http-server              # Node.js
   ```

4. **Open in browser**
   - Visit: `http://localhost:8000`
   - Never open `index.html` directly!

### Development

To watch for CSS changes and recompile Tailwind:
```bash
npm run css:watch
```

To build production CSS:
```bash
npm run css:build
```

## Project Structure

```
adonaisbeautyschool/
├── index.html                 # Main application entry point
├── css/
│   ├── input.css             # Tailwind CSS input
│   └── output.css            # Compiled styles
├── js/
│   └── main.js               # Core application logic
├── pages/                    # Feature pages
│   ├── dashboard.html
│   ├── checkin.html
│   ├── checkout.html
│   ├── reports.html
│   ├── registration.html
│   ├── sessions.html
│   ├── payments.html
│   └── website.html
├── data/                     # Mock data (JSON)
│   ├── students.json
│   ├── attendance.json
│   ├── sessions.json
│   └── payments.json
└── README.md
```

## Features by Priority

### Priority 1 ✅ COMPLETE
- Check-in/Check-out System
- Dashboard with statistics
- Student attendance tracking

### Priority 2 ✅ COMPLETE
- Reports & Analytics
- Attendance filtering and export
- Key metrics visualization

### Priority 3 ✅ COMPLETE
- Online Registration
- Session Management
- Multi-step enrollment forms

### Secondary Features ✅ COMPLETE
- Payment Processing
- Website Content Manager
- Student testimonials
- Social media integration

## Data Persistence

The system uses:
- **JSON files** for initial mock data
- **localStorage** for user-created data (check-ins, check-outs, registrations, payments)

Data is NOT lost on page refresh and persists within the same browser session.

## Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px and above) - Full sidebar navigation
- **Tablet** (768px - 1023px) - Responsive layout with touch optimization
- **Mobile** (below 768px) - Hamburger menu, stacked layout, touch-friendly buttons

### Mobile/Tablet Optimizations
- Large touch-friendly buttons (min 44px x 44px)
- Simplified navigation with hamburger menu
- Single-column layouts on small screens
- Horizontal scrolling tables with better mobile formatting
- Optimized form layouts for small screens
- Readable text sizes (minimum 16px on inputs)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators for all interactive elements

## Features Included

### Visual Enhancements
- Modern gradient headers
- Smooth animations and transitions
- Icon integration (SVG and Unicode)
- Professional color scheme (Primary: Purple, Secondary: Orange)
- Card-based UI layout
- Status badges and indicators
- Toast notifications
- Modal dialogs

### User Experience
- Client-side form validation
- Real-time search suggestions
- Dropdown filtering
- Date and time pickers
- Auto-calculation of hours logged
- Summary displays before confirmation
- Success/error feedback messages
- Responsive tables with horizontal scroll on mobile

### Data Management
- Local data persistence
- CSV export for reports
- Print-friendly layouts
- Data filtering and sorting
- Bulk record display
- Statistics calculation

## Future Enhancements

- Backend API integration
- User authentication system
- Database integration
- SMS/Email notifications
- Calendar view for sessions
- Advanced reporting with charts
- Invoice generation
- Mobile app version
- Dark mode toggle (framework ready)
- Offline PWA support

## Known Limitations

1. **Demo Data Only** - Using mock JSON data and localStorage
2. **Single User** - No authentication system
3. **No Backend** - All data is client-side
4. **Limited File Handling** - Cannot upload files yet
5. **No Real Payments** - Payment form is demo only

## Customization

### Colors
Edit `tailwind.config.js` to customize:
- Primary color (purple tones)
- Secondary color (orange tones)
- Font family
- Shadow styles

### Mock Data
Update JSON files in `data/` folder to change:
- Student information
- Course names
- Session schedules
- Payment amounts

### Pages
Add new feature pages to `pages/` folder and link them in `index.html` navigation.

## Support & Contribution

For issues, feature requests, or improvements, please refer to the project documentation.

## License

MIT License - Feel free to use and modify as needed.

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Status**: Production Ready (Frontend)
# adonaybeautyschool
# adonaybeautyschool
