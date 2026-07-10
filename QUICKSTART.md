# Quick Start Guide

## Getting Started in 30 Seconds

### ⚠️ IMPORTANT: You MUST Use a Local Server

❌ **DON'T** double-click `index.html` (this will cause "Failed to fetch" error)  
✅ **DO** run a local server (see options below)

### Option 1: Easiest - Use Built-in Server Scripts

**Mac/Linux:**
1. Open terminal in the project folder
2. Run: `bash start-server.sh`
3. Visit: **http://localhost:8000**

**Windows:**
1. Double-click `start-server.bat`
2. Visit: **http://localhost:8000**

### Option 2: Manual - Python (Pre-installed on Mac/Linux)

1. Open terminal in the project folder
2. Run one of these:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Or Python 2
   python -m http.server 8000
   ```
3. Visit: **http://localhost:8000**

### Option 3: Node.js / NPM

1. Open terminal in the project folder
2. Run: `npx http-server`
3. Visit the URL it shows (usually `http://127.0.0.1:8080`)

### What's Happening?

When you open `index.html` directly in the browser:
- ❌ Browser uses `file://` protocol
- ❌ `fetch()` requests are blocked by browser security
- ❌ Pages fail to load with "Failed to fetch" error

When you use a server:
- ✅ Browser uses `http://` protocol  
- ✅ `fetch()` requests work correctly
- ✅ App loads all pages successfully

## What You Get

A fully functional beauty school management system with:

### 📊 **Dashboard** - Start here for an overview
- Quick statistics
- Recent check-ins
- Key metrics
- Quick action buttons

### ✅ **Check-in** - Register student arrivals
- Search students by name or ID
- Auto-timestamp (adjustable)
- Notes for special cases
- Real-time list of today's check-ins

### 🔙 **Check-out** - Register student departures  
- Search checked-in students
- Automatic hours calculation
- Track time spent on-site
- Daily check-out summary

### 📈 **Reports** - View and export data
- Filter by date range and student
- View full attendance history
- Export to CSV
- Print-friendly format
- Attendance statistics

### 📝 **Online Registration** - Enroll new students
- 3-step registration process
- Course selection
- Session preferences
- Confirmation workflow

### 📅 **Practical Sessions** - Manage training sessions
- Browse all sessions
- Filter by course
- View availability
- Enroll students
- Track capacity

### 💳 **Payments** - Process tuition
- Record student payments
- Multiple payment methods
- Payment history
- Revenue tracking
- Collection metrics

### 🌐 **Website Manager** - Edit school content
- About section
- Contact information
- Social media links
- Student testimonials
- Website preview

## Demo Data

All data is pre-loaded with sample information:
- **5 Students**: Sarah Johnson, Maria Garcia, Emma Davis, Jessica Williams, Lisa Anderson
- **5 Sessions**: Cosmetology, Hair Styling, Nail Art, Esthetics, Professional Makeup
- **Sample Attendance**: March 2024 attendance records
- **Sample Payments**: Recent payment transactions

## How Data Works

- **On First Load**: Reads from `data/*.json` files
- **User Actions**: Saved to browser's localStorage
- **Data Persists**: Across page refreshes (same browser)
- **No Server Needed**: Everything runs locally in your browser

## Responsive Design

Test on different devices:
- **Mobile** (< 600px): Try on phone or browser DevTools
- **Tablet** (600-1024px): Try iPad or tablet DevTools
- **Desktop** (1024px+): Full interface with sidebar

All features are touch-optimized for tablets and phones!

## Features Overview

| Feature | Where | What It Does |
|---------|-------|------------|
| Attendance Tracking | Check-in / Check-out | Record student arrival/departure times |
| Reports | Reports page | View and export attendance data |
| Registration | Online Registration | New student enrollment forms |
| Sessions | Practical Sessions | Browse and enroll in training programs |
| Payments | Payments page | Track and record student payments |
| Content | Website Manager | Edit school information and content |
| Dashboard | Dashboard | See overview and quick actions |

## Tips & Tricks

1. **Search Students**: Start typing names or IDs in search fields
2. **Auto-Fill Time**: Current time is auto-filled, change if needed
3. **Notes**: Add details in notes field (e.g., "Late arrival", "Excused absence")
4. **Export Data**: Go to Reports → Export to CSV for further analysis
5. **Print Reports**: Reports page has a print button for physical copies
6. **Mobile Testing**: Use browser DevTools to test on different screen sizes
7. **Dark Mode**: There's a dark mode toggle in the sidebar (ready for future implementation)

## Troubleshooting

### System not loading?
- Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check browser console for errors (F12)

### Data not saving?
- localStorage is browser-specific; data won't sync across browsers
- Use the same browser and don't clear browsing data
- Data is saved automatically when you submit forms

### Need more students?
- Edit `data/students.json` to add more students
- Restart page to load new data

### Want to modify colors?
- Edit `tailwind.config.js` for brand colors
- Or modify inline in `index.html` Tailwind config

## Next Steps

### For Development:
1. Install Node.js
2. Run `npm install`
3. Run `npm run css:watch` for live CSS compilation
4. Build with `npm run css:build` for production

### For Backend Integration:
1. Create API endpoints for data
2. Replace `fetch('data/*.json')` with `fetch('/api/...')`
3. Update localStorage calls to API calls
4. Add authentication

### For Deployment:
1. Build with `npm run css:build`
2. Upload `index.html`, `js/`, `pages/`, `css/` to web server
3. No special server needed (static files only)

## Need Help?

- Check `README.md` for detailed documentation
- Look at `js/main.js` for core functionality
- Each page has inline JavaScript explaining features
- Data structure is in `data/*.json` files

---

**Ready to start?** Open `index.html` in your browser and explore! 🎉
