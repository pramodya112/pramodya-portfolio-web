// Project Pages Shared JavaScript

function openImg(img) {
    document.getElementById('lightbox').classList.add('active');
    document.getElementById('lightbox-img').src = img.src;
    document.body.style.overflow = 'hidden';
}

function closeImg() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
        closeImg();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImg();
    }
});

// Close lightbox on click outside
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
        closeImg();
    }
});

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImg();
    }
});

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-element');
        observer.observe(section);
    });

    // Observe features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.classList.add('fade-in-element');
        feature.style.animationDelay = `${index * 0.1}s`;
        observer.observe(feature);
    });

    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery img, .gallery-item, .image-gallery img');
    galleryItems.forEach((item, index) => {
        item.classList.add('fade-in-element');
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.classList.add('fade-in-element');
        stat.style.animationDelay = `${index * 0.15}s`;
        observer.observe(stat);
    });

    // Animate stats numbers on scroll
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('counted')) {
                    animateNumber(statNumber);
                    statNumber.classList.add('counted');
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statObserver.observe(stat));

   
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.github-link, .back-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid #ff1493';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 500);
            }
        };
        setTimeout(typeWriter, 500);
    }

 
});

// Animate numbers counting up
function animateNumber(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

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

// Create ripple effect
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

    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// Add floating particles effect
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}


createFloatingParticles();

console.log('Project page loaded with professional animations! 🚀');