// ==== shared-script.js ====
// Includes: Navbar/Footer loader, scroll-spy, floating icons, scroll progress, animations

// Load Navbar & Footer
document.addEventListener('DOMContentLoaded', () => {
    fetch('../navbar.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
            const projLink = document.querySelector('.nav-link[href="#projects"]');
            if (projLink) projLink.classList.add('active');
            activateScrollSpy();
        });

    fetch('../footer.html')
        .then(r => r.text())
        .then(html => document.getElementById('footer-container').innerHTML = html);
});

// Scroll Spy
function activateScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const setActive = () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 150;
            if (pageYOffset >= top && pageYOffset < top + sec.clientHeight) current = sec.getAttribute('id');
        });

        navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
        });
    };

    window.addEventListener('scroll', setActive);
    setActive();
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Floating Icons Parallax
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.floating-icons').forEach((icon, i) => {
        const speed = 0.5 + (i * 0.2);
        icon.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Scroll Progress Bar
const progress = document.createElement('div');
progress.className = 'scroll-progress';
document.body.appendChild(progress);
window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (window.pageYOffset / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = scrolled + '%';
});

// Add animation styles
const animStyle = document.createElement('style');
animStyle.textContent = `
    .scroll-progress { position: fixed; top: 0; left: 0; height: 4px; background: linear-gradient(90deg, var(--primary-pink), var(--light-pink)); z-index: 9999; box-shadow: 0 0 10px rgba(255, 20, 147, 0.8); transition: width 0.1s ease; }
    .animate-in { animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    .bounce-in { animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
    .fill-animation { animation: fillBar 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes bounceIn { 0% { opacity: 0; transform: translateY(50px) scale(0.8); } 50% { transform: translateY(-10px) scale(1.05); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
    @keyframes fillBar { from { width: 0; opacity: 0; } to { opacity: 1; } }
`;
document.head.appendChild(animStyle);

console.log('Shared navbar, footer, and animations loaded!');