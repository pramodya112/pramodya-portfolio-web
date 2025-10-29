// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Professional Skills Animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, barIndex) => {
                    setTimeout(() => {
                        const targetWidth = bar.getAttribute('data-progress') + '%';
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.transition = 'width 1.5s ease';
                            bar.style.width = targetWidth;
                        }, 100);
                    }, barIndex * 200);
                });
            }, index * 200);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Animate other elements
const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'all 0.6s ease';
        skillsObserver.observe(category);
    });

    const animatedElements = document.querySelectorAll('.experience-card, .education-card, .project-card, .reference-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        generalObserver.observe(element);
    });

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.skill-progress');
            progressBar.style.animation = 'pulse 0.5s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.skill-progress');
            progressBar.style.animation = '';
        });
    });
});

// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav-toggle');
    const navMenu   = document.querySelector('.nav-menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            toggleBtn.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('open');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                toggleBtn.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
            });
        });
    }
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(1.1); }
    }
    .skill-item:hover { transform: translateX(5px); transition: transform 0.3s ease; }
`;
document.head.appendChild(style);

console.log('Portfolio loaded successfully with professional navigation!');