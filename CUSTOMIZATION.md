# 🎨 CUSTOMIZATION TEMPLATE - POP Studio India

## Business Information to Update

### Company Details
```
Current: POP Studio India
Update to: [Your Company Name]

Current Tagline: "Transforming Spaces with Elegant POP & Interior Designs"
Update to: [Your Tagline]
```

### Contact Information
```
Phone: +91 9876543210
Replace with: [Your Phone Number - include country code]

Email: info@popstudioindia.com
Replace with: [Your Email Address]

Address: Mumbai, India
Replace with: [Your City/Address]

Hours: Monday - Saturday: 9:00 AM - 6:00 PM, Sunday: Closed
Replace with: [Your Business Hours]
```

### Social Links (WhatsApp)
```
Current WhatsApp: +91 9876543210
Replace in:
- index.html: Line 571
- project.html: Line 291
```

## Content Updates

### Services Section (index.html - Around line 135)
Current services to update:
1. POP Work
2. False Ceilings
3. Wall Designs
4. Premium Painting
5. Lighting Solutions
6. Complete Interiors

**To modify:** Edit service names, descriptions, and emojis

### Projects Section (project.html)

#### Companies (Around line 40-80)
Current companies:
- Lakhani Group
- Mayuresh Group

**To modify:** 
- Update company names
- Change logos (replace SVG)
- Update descriptions
- Update project counts

#### Completed Projects (Around line 120-280)
Current projects:
1. Mayuresh Planet
2. Mayuresh Square
3. Lakhani Empire Tower
4. Lakhani Empire Heritage

**To modify:**
- Update project names
- Change descriptions
- Update locations and dates
- Modify service tags
- Replace project images

#### Ongoing Projects (Around line 290-360)
Current: Lakhani Empire Dynasty

**To modify:**
- Update project name
- Change progress percentage
- Update description
- Modify timeline

### Testimonials (index.html - Around line 310)
Current testimonials to update with real client feedback:
1. Rajesh Kumar - CEO, Tech Solutions Inc.
2. Priya Sharma - Interior Decorator
3. Arjun Patel - Restaurant Owner

**To modify:**
- Replace names with real clients
- Replace testimonial text
- Update job titles/roles

## Design Customization

### Color Scheme
Located in `styles.css` - Line 29-37:

```css
:root {
    --primary-dark: #1a1a1a;      /* Main dark color */
    --primary-light: #ffffff;      /* Main light color */
    --accent-gold: #d4af37;        /* Primary accent */
    --accent-orange: #ff9500;      /* Secondary accent */
    --text-light: #666;            /* Light text */
    --text-dark: #333;             /* Dark text */
    --border-light: #f0f0f0;       /* Border color */
}
```

**To change colors:**
1. Replace hex values with your preferred colors
2. All elements automatically update
3. Test on different sections to ensure good contrast

### Typography
Located in `styles.css`:
- Add custom Google Fonts by importing in `<head>` of HTML
- Change font-family in CSS rules

### Logo
Current: "POP" text with "Studio" accent

**To change:**
1. Replace text in navbar (index.html line 17)
2. Modify styling in styles.css (.logo rules)
3. Or upload image logo

## Image Updates

### Gallery Images
**Location:** index.html - Lines ~290-315

Current: SVG placeholders

**To replace with real images:**
```html
<!-- Old -->
<img src="data:image/svg+xml,%3Csvg..." alt="Gallery 1">

<!-- New -->
<img src="images/your-image.jpg" alt="Gallery 1">
```

**Steps:**
1. Create `images/` folder if not exists
2. Add your images (.jpg, .png, .webp)
3. Update src paths in HTML
4. Use descriptive alt text

### Project Images
**Location:** project.html - Lines ~130-350

Same process as gallery images

### Before & After Slider
**Location:** index.html - Lines ~253-275

**To customize:**
1. Create before and after image pair
2. Replace SVG sources with actual images
3. Ensure same aspect ratio for both

## Form Customization

### Contact Form (index.html - Lines 395-420)
Current fields:
- Name (required)
- Email (required)
- Phone (required)
- Project Type
- Message (required)

**To modify:**
1. Add/remove fields as needed
2. Update validation in main.js
3. Update form handler function

### Form Validation (main.js - Lines 70-120)
Current validation:
- Name: Required
- Email: Email format check
- Phone: 10-digit format
- Message: Required

**To modify:**
Update the `handleFormSubmit()` function with your rules

### Form Submission
**Current:** Shows success message (requires backend for actual email)

**To enable email delivery:**
1. Option A: Use Formspree (recommended - free)
   - Add `action="https://formspree.io/f/YOUR_ID"` to form
2. Option B: Use custom backend service
3. Option C: Use email service provider (SendGrid, AWS SES)

## Navigation Updates

### Main Menu (index.html - Lines 17-23)
Current menu items:
- Home
- About
- Services
- Gallery
- Projects
- Contact

**To modify:**
1. Add/remove links in nav-menu
2. Create corresponding sections
3. Update main.js if adding new sections

### Footer Links (index.html - Lines 565-569)
Update footer navigation links if needed

## SEO Updates

### Meta Tags (index.html - Lines 5-8)
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="...">
<title>...</title>
```

**To customize:**
1. Write unique description (155-160 chars)
2. Add relevant keywords
3. Update author name
4. Create compelling title

### Project Page Meta (project.html - Lines 5-8)
Same meta tag updates for project page

## Statistics Updates

### About Section Stats (index.html - Lines 90-100)
Current:
- 500+ Projects Completed
- 200+ Happy Clients
- 10+ Years Experience

**To update:**
1. Change numbers to your actual stats
2. Update labels as needed
3. Styling auto-adjusts

### Project Statistics (project.html - Lines 270-290)
Current:
- 500+ Total Projects
- 4 Companies Partnered
- 10+ Cities
- 1000+ Happy Customers

**To update:**
Change numbers to match your company data

## Company Information Sections

### About Section (index.html - Lines 77-87)
Current about text to replace with:
- Your company history
- Your mission and values
- Company achievements
- Team highlights

### Service Descriptions
Update each service card with:
- Relevant description
- Your approach
- Benefits to customers
- Unique selling points

## Link Updates Checklist

- [ ] WhatsApp numbers (2 locations)
- [ ] Email addresses
- [ ] Phone numbers
- [ ] Google Maps location
- [ ] Company website (if any)
- [ ] Social media links (if adding)
- [ ] Terms/Privacy pages (if creating)

## Mobile Testing

After customizations, test on:
- [ ] iPhone/iOS devices
- [ ] Android devices
- [ ] Tablet (portrait & landscape)
- [ ] Desktop at different resolutions
- [ ] Different browsers

## Quick Replace Guide

### Using Find & Replace (Ctrl+H in code editor)
1. Find: `POP Studio India`
   Replace with: `Your Company Name`

2. Find: `+91 9876543210`
   Replace with: `Your Phone`

3. Find: `info@popstudioindia.com`
   Replace with: `Your Email`

4. Find: `#d4af37` (Gold color)
   Replace with: `Your Color`

## Backup Before Changes

1. Save original files with "_backup" suffix
2. Make changes to new copies
3. Test thoroughly
4. Keep originals as reference

## Testing After Customization

- [ ] All links working
- [ ] Contact form validation works
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Colors match branding
- [ ] No broken elements
- [ ] No console errors (F12)
- [ ] Performance acceptable
- [ ] All text updated
- [ ] Contact info correct

## Performance Optimization

After adding images:
1. Compress images (use TinyPNG or similar)
2. Use appropriate formats (.jpg, .webp)
3. Add lazy loading for gallery
4. Minimize CSS/JS if needed (>10KB each)

## SEO Optimization Tips

1. **Meta descriptions** - Write compelling descriptions
2. **Header tags** - Use proper H1, H2, H3 hierarchy
3. **Keywords** - Include in titles, descriptions, content
4. **Image alt text** - Descriptive alt attributes
5. **Mobile friendly** - Already responsive
6. **Page speed** - Optimize images
7. **Structured data** - Add schema.org markup (optional)

## Common Customizations

### Change Hero Button Text
Line ~60 in index.html:
```html
<button class="btn btn-primary" onclick="scrollToContact()">Get Quote</button>
```

### Change Section Backgrounds
Edit in styles.css:
```css
.services {
    background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
}
```

### Adjust Spacing/Padding
Find padding values in styles.css and modify:
```css
padding: 80px 20px;  /* Change 80px for more/less space */
```

### Change Font Size
Modify font-size values:
```css
.hero-title {
    font-size: 3.5rem;  /* Change this value */
}
```

---

## Final Checklist Before Launch

- [ ] All text content reviewed
- [ ] Real images added
- [ ] Contact information correct
- [ ] No typos or grammatical errors
- [ ] Colors match brand
- [ ] Mobile responsive works
- [ ] Links all functional
- [ ] Contact form ready
- [ ] WhatsApp number correct
- [ ] SEO meta tags updated
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Ready for production!

---

**Version:** 1.0
**Date:** 2024
**Status:** Ready for Customization ✨

For detailed explanations, see README.md
