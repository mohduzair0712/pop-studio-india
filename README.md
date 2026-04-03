# POP Studio India - Premium Interior Design Website

A modern, professional, fully responsive website for POP Studio India - a premium interior design company specializing in POP work, false ceilings, wall designs, painting, and complete interior solutions.

## 📋 Project Overview

This is a complete website built with **pure HTML, CSS, and JavaScript** (no frameworks required). The website showcases the company's services, portfolio, and projects with a premium, modern design aesthetic.

### Color Theme
- **Primary Dark**: #1a1a1a (Black)
- **Primary Light**: #ffffff (White)
- **Accent Gold**: #d4af37 (Gold)
- **Accent Orange**: #ff9500 (Orange)

## 📁 File Structure

```
RnS/
├── index.html          # Main home page
├── project.html        # Projects and portfolio page
├── styles.css          # All styling (responsive, animations)
├── main.js             # Navigation, forms, animations on home
├── project.js          # Project page specific interactions
├── images/             # Placeholder folder for images
└── README.md           # This file
```

## 🎯 Features

### ✨ Home Page (index.html)
- **Sticky Navigation Bar** with smooth scrolling to sections
- **Responsive Hamburger Menu** for mobile devices
- **Hero Section** with strong call-to-action buttons
- **About Section** with company stats and counters
- **Services Grid** (6 services with hover effects)
- **Before & After Slider** for project transformations
- **Gallery Section** with responsive image grid
- **Testimonials** from clients
- **Contact Form** with validation
- **Google Maps Integration** (placeholder)
- **WhatsApp Floating Button** for quick contact

### 📱 Projects Page (project.html)
- **Company Partnership Showcase** (Lakhani Group, Mayuresh Group)
- **Completed Projects Section** (4 projects with badges)
  - Mayuresh Planet
  - Mayuresh Square
  - Lakhani Empire Tower
  - Lakhani Empire Heritage
- **Ongoing Projects Section** (with progress bars)
  - Lakhani Empire Dynasty
- **Project Statistics** counters
- **Call-to-Action Section** to start new projects
- **Responsive Card Layouts** with animations

## 🚀 Getting Started

### Opening the Website Locally

1. **Download/Extract Files**: Ensure all files (HTML, CSS, JS) are in the same folder
2. **Open in Browser**: 
   - Right-click on `index.html`
   - Select "Open with" → Choose your browser (Chrome, Firefox, Edge, Safari, etc.)
   - Or drag-and-drop `index.html` into your browser

### To Test Locally (Alternative Method)
- Use a local server (recommended for best results):
  ```bash
  # Python 3.x
  python -m http.server 8000
  
  # Or Python 2.x
  python -m SimpleHTTPServer 8000
  
  # Or using Node.js (http-server)
  npx http-server
  ```
- Then open `http://localhost:8000` in your browser

## 🎨 Design Highlights

### Modern & Premium Aesthetics
- Clean, minimalist design with premium spacing
- Smooth animations and transitions
- Gradient backgrounds for visual appeal
- Professional color scheme with gold accents

### Animations & Effects
- Fade-in animations on page scroll
- Parallax effects on hero section
- Hover effects on buttons and cards
- Before & After slider for project transformations
- Counter animations for statistics
- Smooth page transitions

### Fully Responsive
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (up to 767px)
- Touch-friendly buttons and spacing
- Optimized hamburger menu for mobile

## 📝 Content Sections

### Navigation
- Home
- About
- Services
- Gallery
- Projects (separate page)
- Contact

### Services Offered
1. **POP Work** - Custom designs and decorative installations
2. **False Ceilings** - Modern systems with integrated lighting
3. **Wall Designs** - Feature walls and 3D panels
4. **Premium Painting** - Expert finishes and color consultation
5. **Lighting Solutions** - Ambient, accent, and task lighting
6. **Complete Interiors** - End-to-end interior design

### Companies Worked With
- **Lakhani Group** - 4 projects completed
- **Mayuresh Group** - 2 projects completed

## 🔧 Customization Guide

### Changing Text Content
Edit directly in HTML files:
- Company name: Search for "POP Studio India"
- Tagline: "Transforming Spaces with Elegant POP & Interior Designs"
- Phone number: Replace "+91 9876543210" with your actual number
- Email: Replace "info@popstudioindia.com" with your email

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #1a1a1a;
    --primary-light: #ffffff;
    --accent-gold: #d4af37;
    --accent-orange: #ff9500;
    --text-light: #666;
    --text-dark: #333;
}
```

### Adding Real Images
Replace SVG placeholders with actual images:
```html
<!-- Replace -->
<img src="data:image/svg+xml,..." alt="...">

<!-- With -->
<img src="images/your-image.jpg" alt="...">
```

### Updating Contact Information
1. **Phone**: Line 545 in index.html
2. **Email**: Line 551 in index.html
3. **Address**: Line 547 in index.html
4. **Google Maps**: Line 559 in index.html (change src URL)
5. **WhatsApp Button**: Line 571 in index.html (update phone number)

### Editing Projects
Edit in `project.html`:
- Add/remove project cards in completed or ongoing sections
- Update project names, descriptions, and details
- Change company logos or information
- Modify statistics numbers

## 💡 Interactive Features

### Form Validation
The contact form validates:
- Required fields (name, email, phone, message)
- Email format
- Phone number format (10 digits)

### Keyboard Shortcuts
- Try pressing 'G' to scroll to gallery
- Try pressing 'C' to scroll to contact

### Smooth Scrolling
- All navigation links use smooth scroll behavior
- Automatic section highlighting while scrolling

### Mobile Navigation
- Hamburger menu automatically appears on mobile
- Menu closes when links are clicked
- Touch-friendly spacing and sizing

## 📊 Performance Features

- Minimal file sizes (optimized CSS and JS)
- No external dependencies (no framework bloat)
- Lazy loading ready for images
- GPU-accelerated animations
- Debounced scroll events for smooth performance
- Intersection Observer API for efficient animations

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Alt text for all images
- Focus indicators on interactive elements

## 📱 Browser Support

- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links & Navigation

### Internal Links
- All navigation smoothly scrolls to sections
- Project page links back to home
- Contact CTA buttons work from anywhere

### External Links
- WhatsApp integration with pre-filled message
- Google Maps embedded (editable location)
- Footer links for easy navigation

## 🎓 Code Quality

- **Well-commented code** for easy understanding
- **Organized CSS** with clear sections
- **Clean JavaScript** with explanatory comments
- **DRY principles** - no code repetition
- **Consistent naming conventions**

## 🚀 Future Enhancements (Ideas)

- [ ] Add real images/portfolio photos
- [ ] Integrate backend contact form (PHP/Node.js)
- [ ] Add Instagram feed integration
- [ ] Implement client testimonial carousel
- [ ] Add video tours of completed projects
- [ ] Build quote calculator tool
- [ ] Add blog section for interior design tips
- [ ] Implement appointment booking system

## 📄 License & Usage

This website template is ready for use by POP Studio India. Customize as needed for your business.

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths in HTML
- Ensure images are in the correct folder
- Use absolute paths if relative paths don't work

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure styles.css is in the same folder as HTML files
- Check browser console for CSS errors (F12)

### JavaScript Not Working
- Ensure main.js and project.js are in correct folders
- Check browser console (F12) for errors
- Enable JavaScript in browser settings

### Form Not Submitting
- Check browser console for errors
- Validate all required fields are filled
- For actual email delivery, you'll need a backend service

## 📞 Support & Contact

For customization or technical support, contact a web developer or refer to the code comments for detailed explanations.

---

**Created**: 2024
**Website**: POP Studio India - Premium Interior Design Solutions
**Tagline**: "Transforming Spaces with Elegant POP & Interior Designs"
