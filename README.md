# Pramodya Warnakula - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and professional experience as a Full Stack Software Engineer.

[![Live Demo](https://img.shields.io/badge/Live-Demo-ff1493?style=for-the-badge)](https://pramodya-warnakula.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-pramodya112-black?style=for-the-badge&logo=github)](https://github.com/pramodya112)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/pramodya-warnakula)

---

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices (Desktop, Tablet, Mobile)
- **Modern UI/UX** - Clean, professional design with pink and black theme
- **Smooth Animations** - Scroll-triggered animations for enhanced user experience
- **Interactive Elements** - Hover effects, animated skill bars, and smooth transitions
- **Project Showcase** - 9 featured projects with detailed individual pages
- **Professional Sections** - Home, Experience, Education, Projects, Skills
- **Contact Integration** - Direct links to email, GitHub, and LinkedIn
- **Resume Download** - One-click resume download button
- **SEO Optimized** - Meta tags and semantic HTML structure

---

## 🚀 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons library

### Design
- **Color Scheme** - Black (#0a0a0a) & Pink (#ff1493)
- **Typography** - Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Layout** - CSS Grid & Flexbox
- **Animations** - CSS Keyframes & Intersection Observer API

---

## 📂 Project Structure

```
portfolio/
│
├── index.html                 # Main portfolio page
├── navbar.html                # Navigation component
├── footer.html                # Footer component
├── README.md                  # Project documentation
│
├── css/
│   ├── styles.css            # Main portfolio styles
│   └── project-styles.css    # Shared project page styles
│
├── js/
│   ├── script.js             # Main portfolio JavaScript
│   └── project-script.js     # Shared project page JavaScript
│
├── assets/
│   └── Pramodya_Warnakula_Resume.pdf  # Downloadable resume
│
├── images/
│   ├── profile.png           # Profile photo
│   └── projects/             # Project screenshots (4 per project)
│       ├── fingerprint1-4.jpg
│       ├── gps1-4.jpg
│       ├── travel1-4.jpg
│       ├── restaurant1-4.jpg
│       ├── dogfood1-4.jpg
│       ├── forecastflow1-4.jpg
│       ├── dotnetquiz1-4.jpg
│       ├── pahanaedu1-4.jpg
│       └── resumescreening1-4.jpg
│
└── projects/                  # Individual project pages
    ├── fingerprint.html
    ├── gps.html
    ├── travel.html
    ├── resturant.html
    ├── dogfood.html
    ├── forecastflow.html
    ├── dotnet-quiz.html
    ├── pahanaedu.html
    └── resume-screening.html
```

---

## 💻 Featured Projects

### 1. Fingerprint Authentication System
**Tech Stack:** C#, Biometric SDK, Web API, SQL Server  
Real-time biometric authentication with secure API integration.

### 2. Vehicle GPS Tracking System
**Tech Stack:** C#, ASP.NET Core, GPS API, JavaScript  
Fleet management system with live tracking and analytics.

### 3. Travel Agency Website
**Tech Stack:** PHP, MySQL, Payment Gateway, Bootstrap  
Full-featured booking platform with secure payments.

### 4. Restaurant Management Website
**Tech Stack:** PHP, MySQL, AJAX, Bootstrap  
Dynamic restaurant system with reservations and reviews.

### 5. Dog Food Mobile App
**Tech Stack:** Kotlin, Java, Android SDK, Firebase  
E-commerce mobile app with real-time inventory updates.

### 6. ForecastFlow Weather App
**Tech Stack:** ASP.NET Core, Razor Pages, OpenWeatherMap API  
Modern weather forecast app with glassmorphic design.

### 7. .NET Interview Quiz
**Tech Stack:** ASP.NET Core MVC, Entity Framework, SQL Server  
Professional quiz app for interview preparation.

### 8. PahanaEdu Bookshop
**Tech Stack:** Java Servlets, MySQL, Bootstrap  
Comprehensive bookshop management system.

### 9. Resume Screening System
**Tech Stack:** ASP.NET, C#, ML Algorithms  
AI-powered resume analysis with ranking dashboard.

---

## 🎨 Key Features Breakdown

### 🏠 Home Section
- Eye-catching hero section with gradient overlay
- Profile photo with floating animation
- Quick contact links (Email, GitHub, LinkedIn)
- Call-to-action buttons (View My Work, Get In Touch, Download Resume)
- Animated background with floating icons

### 💼 Experience Section
- Professional timeline design
- Animated markers with pulse effect
- Achievement cards with icons highlighting key contributions
- Hover effects with smooth transitions
- Detailed internship information (Ceylon Electricity Board)

### 🎓 Education Section
- Professional card layout with 3D hover effects
- Icon badges for each education level
- Gradient dividers
- Rotating icon animations
- Educational timeline (BSc, A/L, O/L)

### 🚀 Projects Section
- Grid layout with 9 featured projects
- Click-to-navigate to detailed project pages
- Technology tags with gradient backgrounds
- Shine effect on hover
- Project descriptions and tech stacks

### 💻 Skills Section
- **Technical Skills:**
  - Programming Languages (Java, C#, PHP, JavaScript)
  - Frontend Development (HTML/CSS, Angular, Bootstrap)
  - Backend Development (ASP.NET Core, PHP)
  - Database Technologies (MySQL, Firebase, MongoDB)
- Animated progress bars with shimmer effects
- Staggered animations on scroll
- Icon-based categories
- **Soft Skills:**
  - Leadership & Team Management
  - Effective Communication
  - Time Management
  - Problem Solving
  - Teamwork & Collaboration
  - Confidence & Presentation Skills

### 📱 Footer
- Multi-column layout
- Social media links with hover animations
- Quick navigation
- Contact information
- Heartbeat animation
- Technology showcase

---

## 🛠️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, JavaScript

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/pramodya112/portfolio.git
cd portfolio
```

2. **Add your resume**
```bash
# Place your PDF resume in the assets folder
# Name it: Pramodya_Warnakula_Resume.pdf
```

3. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
```

4. **Using VS Code Live Server** (Recommended)
```bash
# Install Live Server extension in VS Code
# Right-click on index.html
# Select "Open with Live Server"
```

### Customization

1. **Update Personal Information**
   - Edit `index.html` - Update name, contact details, bio
   - Replace `images/profile.png` with your photo
   - Update resume in `assets/` folder

2. **Modify Colors**
   - Edit `css/styles.css` - Change CSS variables:
   ```css
   :root {
       --primary-pink: #ff1493;  /* Main pink color */
       --light-pink: #ff69b4;    /* Light pink accent */
       --dark-pink: #c71585;     /* Dark pink shade */
       --black: #0a0a0a;         /* Background black */
       --dark-gray: #1a1a1a;     /* Dark gray */
       --mid-gray: #2a2a2a;      /* Mid gray */
   }
   ```

3. **Add/Remove Projects**
   - Edit project cards in `index.html`
   - Create new project pages in `projects/` folder
   - Add project images to `images/projects/`
   - Update project links and descriptions

4. **Update Social Links**
   - Edit links in `navbar.html` and `footer.html`
   - Update GitHub, LinkedIn, Email URLs

5. **Modify Navbar/Footer**
   - Edit `navbar.html` for navigation changes
   - Edit `footer.html` for footer content

---

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px

Mobile features:
- Hamburger menu navigation
- Stacked layouts
- Touch-friendly buttons
- Optimized images
- Full-width CTAs

---

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main) and root folder
4. Save and wait for deployment

### Netlify
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Configure build settings (none needed for static site)
4. Deploy

### Vercel
1. Import GitHub repository
2. Configure project settings
3. Deploy instantly

---

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time:** < 2 seconds
- **Mobile Friendly:** Yes
- **SEO Optimized:** Yes
- **Accessibility:** WCAG 2.1 compliant

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

---

## 🎯 Key Animations

- **Hero Section:** Gradient zoom, floating profile photo, text glow
- **Navigation:** Slide down, underline hover effects
- **Skills:** Animated progress bars, bouncing arrows
- **Projects:** Shine effect, 3D tilt on hover
- **Education:** Card rotation, icon spin
- **Buttons:** Ripple effect, gradient hover, download bounce
- **Scroll:** Intersection Observer triggered animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Contact

**Pramodya Warnakula**

- 📧 Email: pramodyawarnakula295@gmail.com
- 💼 LinkedIn: [pramodya-warnakula](https://linkedin.com/in/pramodya-warnakula)
- 🐙 GitHub: [pramodya112](https://github.com/pramodya112)
- 🌐 Portfolio: [https://pramodya-warnakula.netlify.app/](https://pramodya-warnakula.netlify.app/)
- 📍 Location: Negombo, Western Province, LK

---

## 🙏 Acknowledgments

- Font Awesome for icons
- Unsplash for hero background images
- Google Fonts for typography inspiration
- GitHub community for open-source inspiration
- Cardiff Metropolitan University for education

---

## 📝 Version History

- **v1.1.0** (2025-01-19)
  - Added download resume button with animations
  - Improved responsive button layout
  - Enhanced CTA section with three-button design
  - Removed references section
  - Updated project count to 9 featured projects
  
- **v1.0.0** (2025-01-01)
  - Initial release
  - 9 featured projects
  - Responsive design
  - Animated sections
  - Professional navbar and footer components
  - Contact integration

---

## 🚀 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add testimonials section
- [ ] Create project filters by technology
- [ ] Add contact form with backend integration
- [ ] Implement Google Analytics
- [ ] Add more micro-animations
- [ ] Create certificate showcase section
- [ ] Add project search functionality
- [ ] Implement lazy loading for images

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pramodya112/portfolio/issues).

---

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Made with ❤️ by Pramodya Warnakula**
