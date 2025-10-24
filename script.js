// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all nav links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Project details data
const projectDetails = {
    fingerprint: {
        title: 'Fingerprint Authentication System',
        description: 'A sophisticated biometric authentication system designed to provide secure and seamless user verification. This C# application integrates advanced biometric SDK technology with a robust Web API infrastructure.',
        images: [
            'images/projects/fingerprint1.jpg',
            'images/projects/fingerprint2.jpg',
            'images/projects/fingerprint3.jpg',
            'images/projects/fingerprint4.jpg'
        ],
        features: [
            'Real-time fingerprint capture and validation',
            'Secure API integration for authentication requests',
            'Multi-user biometric database management',
            'Quick response time for authentication verification',
            'Error handling and fallback mechanisms',
            'User-friendly interface for enrollment and verification'
        ],
        technologies: ['C#', 'Biometric SDK', 'Web API', '.NET Framework', 'SQL Server'],
        challenges: 'Integrating third-party biometric hardware with custom software while maintaining security standards and ensuring fast response times.',
        outcome: 'Successfully implemented a secure authentication system that reduced login time by 60% while maintaining high security standards.'
    },
    gps: {
        title: 'Vehicle GPS Tracking System',
        description: 'A comprehensive web application developed during my internship at Ceylon Electricity Board for real-time vehicle tracking and fleet management.',
        images: [
            'images/projects/gps1.jpg',
            'images/projects/gps2.jpg',
            'images/projects/gps3.jpg',
            'images/projects/gps4.jpg'
        ],
        features: [
            'Real-time GPS location tracking',
            'Interactive map visualization',
            'Third-party GPS API integration',
            'Vehicle route history and analytics',
            'Geofencing and alerts system',
            'Multi-vehicle monitoring dashboard',
            'Export functionality for tracking reports'
        ],
        technologies: ['C#', 'ASP.NET Core', 'JavaScript', 'GPS API', 'Google Maps API', 'SQL Server'],
        challenges: 'Handling real-time data updates efficiently while maintaining map performance and ensuring accurate location tracking across different network conditions.',
        outcome: 'Deployed system now actively tracks the CEB vehicle fleet, improving operational efficiency by 35% and reducing unauthorized vehicle usage.'
    },
    travel: {
        title: 'Travel Agency Website',
        description: 'A full-featured travel booking platform designed to streamline the customer booking experience while providing comprehensive administrative tools.',
        images: [
            'images/projects/travel1.jpg',
            'images/projects/travel2.jpg',
            'images/projects/travel3.jpg',
            'images/projects/travel4.jpg'
        ],
        features: [
            'User registration and profile management',
            'Browse and search travel packages',
            'Secure online payment gateway integration',
            'Booking management and confirmation system',
            'Customer review and rating system',
            'Admin panel for package management',
            'Email notifications for bookings',
            'Responsive design for mobile devices'
        ],
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Payment Gateway API'],
        challenges: 'Implementing secure payment processing while ensuring smooth user experience and maintaining data integrity across multiple booking transactions.',
        outcome: 'Created a fully functional booking platform that handles multiple concurrent bookings with 99.9% uptime and secure payment processing.'
    },
    restaurant: {
        title: 'Restaurant Management Website',
        description: 'A dynamic restaurant management system that bridges the gap between customers and restaurant operations, featuring comprehensive menu management and reservation capabilities.',
        images: [
            'images/projects/restaurant1.jpg',
            'images/projects/restaurant2.jpg',
            'images/projects/restaurant3.jpg',
            'images/projects/restaurant4.jpg'
        ],
        features: [
            'Dynamic menu display with categories',
            'Online table reservation system',
            'Customer review and feedback system',
            'Order management dashboard',
            'Admin panel for menu and reservation management',
            'Special offers and promotions section',
            'Image gallery for dishes',
            'Contact and location information'
        ],
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'AJAX'],
        challenges: 'Managing real-time table availability while preventing double bookings and ensuring seamless coordination between frontend reservations and backend management.',
        outcome: 'Developed a comprehensive platform that increased online reservations by 45% and improved customer engagement through the review system.'
    },
    billing: {
        title: 'Login & Billing Management System',
        description: 'An enterprise-grade billing management system built with Java technologies, featuring robust authentication, comprehensive CRUD operations, and automated invoice generation.',
        images: [
            'images/projects/billing1.jpg',
            'images/projects/billing2.jpg',
            'images/projects/billing3.jpg',
            'images/projects/billing4.jpg'
        ],
        features: [
            'Role-based authentication and authorization',
            'User management with different access levels',
            'Complete CRUD operations for billing records',
            'Automated invoice generation and PDF export',
            'Payment tracking and history',
            'Customer database management',
            'Reporting and analytics dashboard',
            'Design patterns implementation (MVC, DAO, Singleton)',
            'JUnit testing for reliability and quality assurance'
        ],
        technologies: ['Java', 'JSP', 'Servlets', 'MySQL', 'Maven', 'Apache Tomcat', 'JUnit', 'JDBC'],
        challenges: 'Implementing complex design patterns while maintaining code quality, ensuring proper separation of concerns, and achieving high test coverage with JUnit.',
        outcome: 'Delivered a reliable billing system with 95% test coverage, reducing billing errors by 80% and improving processing time by 50%.'
    },
    dogfood: {
        title: 'Dog Food Mobile App',
        description: 'An Android e-commerce application designed for pet owners to conveniently purchase dog food and pet supplies with a seamless mobile shopping experience.',
        images: [
            'images/projects/dogfood1.jpg',
            'images/projects/dogfood2.jpg',
            'images/projects/dogfood3.jpg',
            'images/projects/dogfood4.jpg'
        ],
        features: [
            'User authentication with Firebase',
            'Product catalog with search and filtering',
            'Shopping cart functionality',
            'Real-time product updates and availability',
            'Order history and tracking',
            'User profile management',
            'Push notifications for offers and order updates',
            'Product reviews and ratings',
            'Secure checkout process'
        ],
        technologies: ['Kotlin', 'Java', 'Android SDK', 'Firebase Authentication', 'Firebase Realtime Database', 'Firebase Cloud Messaging'],
        challenges: 'Ensuring smooth performance with real-time database synchronization while maintaining offline capabilities and optimizing image loading for product catalogs.',
        outcome: 'Created a user-friendly mobile app with real-time inventory updates, achieving a 4.5-star rating from beta testers and processing over 100 test orders successfully.'
    }
};

// Show project details modal
function showProjectDetails(projectKey) {
    const project = projectDetails[projectKey];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    let featuresHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
    let techHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    // Create images HTML
    let imagesHTML = '';
    if (project.images && project.images.length > 0) {
        imagesHTML = `
            <h3 style="color: var(--light-pink); margin-bottom: 1rem;">Project Screenshots</h3>
            <div class="project-images">
                ${project.images.map(img => `<img src="${img}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Add+Project+Image'">`).join('')}
            </div>
            <div class="image-upload-section">
                <h4><i class="fas fa-info-circle"></i> Image Setup Instructions</h4>
                <p>To add your project images:</p>
                <ul style="margin-left: 1.5rem; margin-top: 0.5rem; line-height: 1.8;">
                    <li>Create a folder: <code style="background: rgba(255,20,147,0.1); padding: 0.2rem 0.5rem; border-radius: 5px;">images/projects/</code></li>
                    <li>Add 4 images for this project named: <code style="background: rgba(255,20,147,0.1); padding: 0.2rem 0.5rem; border-radius: 5px;">${projectKey}1.jpg, ${projectKey}2.jpg, ${projectKey}3.jpg, ${projectKey}4.jpg</code></li>
                    <li>The images will automatically appear here once added</li>
                </ul>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <h2 style="color: var(--primary-pink); margin-bottom: 1.5rem;">${project.title}</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">${project.description}</p>
        
        ${imagesHTML}
        
        <h3 style="color: var(--light-pink); margin-bottom: 1rem;">Key Features</h3>
        <ul style="margin-bottom: 2rem; line-height: 2; margin-left: 1.5rem;">
            ${featuresHTML}
        </ul>
        
        <h3 style="color: var(--light-pink); margin-bottom: 1rem;">Technologies Used</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
            ${techHTML}
        </div>
        
        <h3 style="color: var(--light-pink); margin-bottom: 1rem;">Challenges & Solutions</h3>
        <p style="margin-bottom: 2rem; line-height: 1.8;">${project.challenges}</p>
        
        <h3 style="color: var(--light-pink); margin-bottom: 1rem;">Outcome & Impact</h3>
        <p style="line-height: 1.8;">${project.outcome}</p>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll behavior for all navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
        }
    });
});

// Add scroll animations for timeline items
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

// Observe timeline items and project cards when they become visible
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.experience-card, .education-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    timelineItems.forEach(item => observer.observe(item));
    projectCards.forEach(card => observer.observe(card));
});

console.log('Portfolio loaded successfully! 💖✨');