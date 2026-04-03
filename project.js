// ============================================
// PROJECTS PAGE SPECIFIC JAVASCRIPT
// ============================================

// ============================================
// ANIMATE STATS ON SCROLL
// ============================================

function animateProjectStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const target = parseInt(entry.target.textContent);
                const text = entry.target.textContent;
                
                // Handle different formats (numbers with + or just numbers)
                let numValue = target;
                let suffix = '';
                
                if (text.includes('+')) {
                    numValue = parseInt(text);
                    suffix = '+';
                }
                
                let current = 0;
                const increment = numValue / 30;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numValue) {
                        entry.target.textContent = numValue + suffix;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

// Call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateProjectStats);
} else {
    animateProjectStats();
}

// ============================================
// SCROLL REVEAL ANIMATIONS FOR PROJECT CARDS
// ============================================

const projectRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('reveal');
            }, index * 100);
            projectRevealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Add reveal animation to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        projectRevealObserver.observe(card);
    });
});

// ============================================
// ADD REVEAL ANIMATION STYLES
// ============================================

const projectStyles = document.createElement('style');
projectStyles.textContent = `
    .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .project-card.reveal {
        opacity: 1;
        transform: translateY(0);
    }

    .company-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }

    .company-card {
        animation: slideUpCompany 0.5s ease forwards;
    }

    @keyframes slideUpCompany {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(projectStyles);

// ============================================
// FILTER PROJECTS (OPTIONAL FEATURE)
// ============================================

function filterProjects(type) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else if (type === 'completed' && card.classList.contains('completed-card')) {
            card.style.display = 'block';
        } else if (type === 'ongoing' && card.classList.contains('ongoing-card')) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// PROGRESS ANIMATION FOR ONGOING PROJECTS
// ============================================

function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const targetWidth = entry.target.style.width;
                entry.target.style.width = '0%';
                
                setTimeout(() => {
                    entry.target.style.transition = 'width 1.5s ease';
                    entry.target.style.width = targetWidth;
                }, 100);
                
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressFills.forEach(fill => {
        progressObserver.observe(fill);
    });
}

// Call progress animation when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateProgressBars);
} else {
    animateProgressBars();
}

// ============================================
// COMPANY LOGOS ANIMATION
// ============================================

const companyCards = document.querySelectorAll('.company-card');
companyCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ============================================
// INTERACTIVE PROJECT DETAILS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                this.classList.toggle('expanded');
            }
        });
    });
});

// ============================================
// SHARE FUNCTIONALITY (Optional)
// ============================================

function shareProject(projectName) {
    const text = `Check out this amazing project - ${projectName} by POP Studio India!`;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'POP Studio India Project',
            text: text,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        const shareText = `${text}\n${url}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Project details copied to clipboard!');
        });
    }
}

// ============================================
// PARALLAX EFFECT ON PROJECT IMAGES
// ============================================

const projectImages = document.querySelectorAll('.project-image-container');
window.addEventListener('scroll', () => {
    projectImages.forEach(image => {
        const rect = image.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const element = image.parentElement;
        const elementOffset = element.offsetTop;
        
        if (rect.top < window.innerHeight) {
            const yPos = (scrolled - elementOffset) * 0.5;
            image.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// ============================================
// SERVICE TAGS TOOLTIP (Optional)
// ============================================

const serviceTags = document.querySelectorAll('.service-tag');
serviceTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// COUNTER ANIMATION FOR PROJECT STATISTICS
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    function update() {
        current += increment;
        if (current >= target) {
            element.textContent = target;
        } else {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('load', () => {
    console.log('Projects page loaded successfully!');
    
    // Add hover effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

function handleResponsive() {
    const isMobile = window.innerWidth <= 768;
    
    // Adjust parallax for mobile
    if (isMobile) {
        // Disable parallax on mobile for better performance
        projectImages.forEach(image => {
            image.style.transform = 'none';
        });
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();

// ============================================
// SCROLL RESTORATION
// ============================================

if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}
