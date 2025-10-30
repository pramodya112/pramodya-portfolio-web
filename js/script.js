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

// Parallax effect for floating icons
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingIcons = document.querySelectorAll('.floating-icons');
    
    floatingIcons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.2);
        icon.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Mouse parallax effect for hero section
const heroSection = document.querySelector('#home');
const heroContent = document.querySelector('.hero-content');

if (heroSection && heroContent) {
    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;
        
        heroContent.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
    });
}

// Enhanced Skills Animation with stagger effect
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, barIndex) => {
                setTimeout(() => {
                    bar.classList.add('fill-animation');
                }, barIndex * 150);
            });

            const listItems = entry.target.querySelectorAll('li');
            listItems.forEach((item, itemIndex) => {
                setTimeout(() => {
                    item.classList.add('slide-in');
                }, itemIndex * 100);
            });
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Animate other elements with bounce effect
const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('bounce-in');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Skill categories animation
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        skillsObserver.observe(category);
    });

    // General elements animation
    const animatedElements = document.querySelectorAll('.experience-card, .education-card, .project-card, .reference-card');
    animatedElements.forEach(element => {
        generalObserver.observe(element);
    });

    // Enhanced hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            const progressBar = this.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.classList.add('pulse-glow');
            }
            
            // Ripple effect
            createRipple(e, this);
        });
        
        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.classList.remove('pulse-glow');
            }
        });
    });

    // Soft skills hover effect
    const softSkillItems = document.querySelectorAll('.skill-category ul li');
    softSkillItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            this.classList.add('skill-hover');
            createSparkle(this);
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('skill-hover');
        });
    });

    // Project cards 3D tilt effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    // Education cards rotation on hover
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateY(5deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Experience achievements sequential reveal
    const achievements = document.querySelectorAll('.achievement-item');
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const items = entry.target.parentElement.querySelectorAll('.achievement-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('reveal-achievement');
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.5 });

    achievements.forEach(achievement => {
        if (achievement.parentElement) {
            achievementObserver.observe(achievement.parentElement);
        }
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid var(--primary-pink)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 500);
            }
        };
        setTimeout(typeWriter, 500);
    }

    // Section title animation on scroll
    const sectionTitles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('title-reveal');
            }
        });
    }, { threshold: 0.5 });

    sectionTitles.forEach(title => titleObserver.observe(title));
});

// Ripple effect function
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Sparkle effect function
function createSparkle(element) {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.classList.add('sparkle-effect');
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// 3D tilt effect for project cards
function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = '';
}

// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

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

// Scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// Add all animation styles
const style = document.createElement('style');
style.textContent = `
    /* Scroll Progress Bar */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-pink), var(--light-pink));
        z-index: 9999;
        box-shadow: 0 0 10px rgba(255, 20, 147, 0.8);
        transition: width 0.1s ease;
    }

    /* Animation Classes */
    .animate-in {
        animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .bounce-in {
        animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }

    .fill-animation {
        animation: fillBar 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .slide-in {
        animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .pulse-glow {
        animation: pulseGlow 0.6s ease infinite;
    }

    .skill-hover {
        animation: skillBounce 0.4s ease;
    }

    .reveal-achievement {
        animation: revealAchievement 0.5s ease forwards;
    }

    .title-reveal {
        animation: titleReveal 1s ease forwards;
    }

    /* Keyframe Animations */
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
        }
        50% {
            transform: translateY(-10px) scale(1.05);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @keyframes fillBar {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes pulseGlow {
        0%, 100% {
            filter: brightness(1);
            box-shadow: 0 0 10px rgba(255, 20, 147, 0.5);
        }
        50% {
            filter: brightness(1.3);
            box-shadow: 0 0 25px rgba(255, 20, 147, 1);
        }
    }

    @keyframes skillBounce {
        0%, 100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
    }

    @keyframes revealAchievement {
        from {
            opacity: 0;
            transform: translateX(-30px) rotate(-5deg);
        }
        to {
            opacity: 1;
            transform: translateX(0) rotate(0);
        }
    }

    @keyframes titleReveal {
        from {
            opacity: 0;
            transform: translateY(-30px);
            letter-spacing: 10px;
        }
        to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: normal;
        }
    }

    /* Ripple Effect */
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 20, 147, 0.3);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    /* Sparkle Effect */
    .sparkle-effect {
        position: absolute;
        pointer-events: none;
        animation: sparkle 1s ease-out forwards;
        font-size: 1.2rem;
    }

    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0);
        }
        50% {
            transform: translateY(-20px) scale(1.5);
        }
        100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
        }
    }

    /* Hero content transition */
    .hero-content {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Enhanced transitions */
    .skill-category {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .education-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Floating icons enhanced */
    .floating-icons {
        transition: transform 0.1s ease-out;
        will-change: transform;
    }

    /* Smooth scroll behavior */
    * {
        scroll-behavior: smooth;
    }
`;
document.head.appendChild(style);

console.log('Portfolio loaded with advanced animations and movements! 🚀');