#!/bin/bash

# Adonis Beauty School - Local Server Starter
# This script starts a simple HTTP server for development

echo "🚀 Starting Adonis Beauty School Management System..."
echo ""
echo "Checking for available server options..."

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✓ Using Python 3 (http.server)"
    echo ""
    echo "📱 Server running at: http://localhost:8000"
    echo "📱 Server running at: http://127.0.0.1:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000

# Check if Python 2 is available
elif command -v python &> /dev/null; then
    echo "✓ Using Python 2 (SimpleHTTPServer)"
    echo ""
    echo "📱 Server running at: http://localhost:8000"
    echo "📱 Server running at: http://127.0.0.1:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000

# Check if Node.js is available
elif command -v npx &> /dev/null; then
    echo "✓ Using Node.js (http-server)"
    echo ""
    echo "Installing http-server (one-time only)..."
    npx http-server

# Check if Node http-server is globally installed
elif command -v http-server &> /dev/null; then
    echo "✓ Using http-server"
    echo ""
    http-server

else
    echo "❌ No server found. Please install one of:"
    echo ""
    echo "Option 1: Python (usually pre-installed)"
    echo "  python -m http.server 8000"
    echo ""
    echo "Option 2: Node.js"
    echo "  npm install -g http-server"
    echo "  http-server"
    echo ""
    exit 1
fi
