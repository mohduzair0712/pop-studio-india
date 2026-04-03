// ============================================
// NAVIGATION & HAMBURGER MENU
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// SCROLL TO CONTACT
// ============================================

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const project = document.getElementById('project').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !phone || !message) {
        showFormError('Please fill in all required fields');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormError('Please enter a valid email address');
        return;
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
        showFormError('Please enter a valid 10-digit phone number');
        return;
    }

    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.classList.add('show-message');

    // Reset form
    document.getElementById('contactForm').reset();

    // Hide success message after 5 seconds with fade out
    setTimeout(() => {
        successMessage.classList.remove('show-message');
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 300);
    }, 5000);
}

// Show form error
function showFormError(message) {
    const formGroup = document.querySelector('.form-group');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = '⚠ ' + message;
    
    // Remove existing error if any
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    formGroup.parentElement.insertBefore(errorDiv, formGroup);
    
    // Remove error after 4 seconds
    setTimeout(() => {
        errorDiv.classList.add('fade-out');
        setTimeout(() => errorDiv.remove(), 300);
    }, 4000);
}

// ============================================
// WHATSAPP BUTTON ENHANCEMENT
// ============================================

const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    // Update WhatsApp message with business details
    const businessPhone = '919876543210'; // Replace with actual business number
    const businessMessage = 'Hi POP Studio India! I would like to know more about your interior design services and get a quote for my project.';
    whatsappBtn.href = `https://wa.me/${businessPhone}?text=${encodeURIComponent(businessMessage)}`;
    
    // Add tooltip on hover
    whatsappBtn.addEventListener('mouseenter', function() {
        this.setAttribute('title', 'Chat with us on WhatsApp');
    });
}

// ============================================
// SCROLL TO TOP BUTTON (Enhancement)
// ============================================

function createScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.title = 'Scroll to top';
    document.body.appendChild(scrollTopBtn);
    
    // Show button when scrolled down
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createScrollToTop();

// ============================================
// SMOOTH SCROLL EFFECT FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// NAVIGATION HIGHLIGHT ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.classList.add('observe-me');
    observer.observe(card);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.classList.add('observe-me');
    observer.observe(item);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.classList.add('observe-me');
    observer.observe(card);
});

// ============================================
// ADD ANIMATION STYLES DYNAMICALLY
// ============================================

const style = document.createElement('style');
style.textContent = `
    .observe-me {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .observe-me.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-link.active {
        color: var(--accent-gold);
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL TO TOP EFFECT ON NAVBAR
// ============================================

let scrollTimeout;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    clearTimeout(scrollTimeout);
    
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 6px 40px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    }
});

// ============================================
// ENHANCED COUNTER ANIMATION FOR STATS
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const startTime = Date.now();
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const numbers = entry.target.querySelectorAll('.stat h3');
            numbers.forEach(num => {
                const target = parseInt(num.textContent);
                animateCounter(num, target, 2500);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================

window.addEventListener('scroll', () => {
    const gradientSphere = document.querySelector('.gradient-sphere');
    if (gradientSphere) {
        const scrolled = window.pageYOffset;
        gradientSphere.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// FORM INPUT FOCUS EFFECTS
// ============================================

const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// ============================================
// GALLERY HOVER EFFECT
// ============================================

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const allItems = document.querySelectorAll('.gallery-item');
        allItems.forEach(i => {
            if (i !== this) {
                i.style.opacity = '0.6';
            }
        });
    });

    item.addEventListener('mouseleave', function() {
        document.querySelectorAll('.gallery-item').forEach(i => {
            i.style.opacity = '1';
        });
    });
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Don't trigger shortcuts if modifier keys are pressed (Ctrl, Cmd, Alt)
    // This prevents interfering with copy (Ctrl+C), cut (Ctrl+X), paste (Ctrl+V), etc.
    if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
    }

    // Press 'G' to go to gallery
    if (e.key === 'g' || e.key === 'G') {
        const gallery = document.getElementById('gallery');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        scrollToContact();
    }

    // Press 'H' for home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'S' for services
    if (e.key === 's' || e.key === 'S') {
        const services = document.getElementById('services');
        if (services) {
            services.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ============================================
// PERFORMANCE: Debounce function
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// LAZY LOAD IMAGES (for future implementation)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PRINT STYLES CHECK
// ============================================

if (window.matchMedia('print').matches) {
    console.log('Page is being printed');
}

// ============================================
// PROJECT FILTERING FUNCTIONALITY
// ============================================

function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('#filter-lakhani, #filter-mayuresh, #filter-all');
    
    // Set "View Portfolio" (all) as active by default
    const allButton = document.getElementById('filter-all');
    if (allButton) {
        allButton.classList.add('active');
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.id.replace('filter-', '');
            filterProjects(filterType);
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function filterProjects(category) {
    const allProjects = document.querySelectorAll('.project-card, .ongoing-project');
    
    allProjects.forEach(project => {
        const projectCategory = project.dataset.category;
        
        // Add fade out animation
        project.style.opacity = '0';
        project.style.transform = 'scale(0.95)';
        project.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            if (category === 'all' || projectCategory === category) {
                project.style.display = 'block';
                // Fade in
                setTimeout(() => {
                    project.style.opacity = '1';
                    project.style.transform = 'scale(1)';
                }, 50);
            } else {
                project.style.display = 'none';
            }
        }, 300);
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('POP Studio India website loaded successfully!');
    
    // Initialize project filters
    initializeProjectFilters();
    
    // Initialize any features that need to run on page load
    const beforeAfterSlider = document.querySelector('.before-after-slider');
    if (beforeAfterSlider && !beforeAfterSlider.dataset.initialized) {
        beforeAfterSlider.dataset.initialized = 'true';
        updateSlider(50); // Initialize at 50%
    }
});
