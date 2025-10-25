// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        link.classList.add('active');
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, 100);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.experience-card, .education-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    timelineItems.forEach(item => observer.observe(item));
    projectCards.forEach(card => observer.observe(card));
});

console.log('Portfolio loaded successfully!');