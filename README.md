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
- **Project Showcase** - 10 featured projects with detailed individual pages
- **Professional Sections** - Home, About, Experience, Education, Projects, Skills, References
- **Contact Integration** - Direct links to email, phone, GitHub, and LinkedIn
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
├── about.html                 # About me page
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
├── images/
│   ├── profile.png           # Profile photo
│   └── projects/             # Project screenshots (4 per project)
│       ├── fingerprint1-4.jpg
│       ├── gps1-4.jpg
│       ├── travel1-4.jpg
│       ├── restaurant1-4.jpg
│       ├── billing1-4.jpg
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
    ├── restaurant.html
    ├── billing.html
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

### 5. Billing Management System
**Tech Stack:** Java, JSP/Servlets, MySQL, Maven  
Enterprise billing system with role-based authentication.

### 6. Dog Food Mobile App
**Tech Stack:** Kotlin, Java, Android SDK, Firebase  
E-commerce mobile app with real-time inventory updates.

### 7. ForecastFlow Weather App
**Tech Stack:** ASP.NET Core, Razor Pages, OpenWeatherMap API  
Modern weather forecast app with glassmorphic design.

### 8. .NET Interview Quiz
**Tech Stack:** ASP.NET Core MVC, Entity Framework, SQL Server  
Professional quiz app for interview preparation.

### 9. PahanaEdu Bookshop
**Tech Stack:** Java Servlets, MySQL, Bootstrap  
Comprehensive bookshop management system.

### 10. Resume Screening System
**Tech Stack:** ASP.NET, C#, ML Algorithms  
AI-powered resume analysis with ranking dashboard.

---

## 🎨 Key Features Breakdown

### 🏠 Home Section
- Eye-catching hero section with gradient overlay
- Profile photo with floating animation
- Quick contact links
- Call-to-action buttons

### 💼 Experience Section
- Vertical timeline design
- Animated markers with pulse effect
- Achievement cards with icons
- Hover effects and transitions

### 🎓 Education Section
- Professional card layout
- Icon badges for each education level
- Gradient dividers
- Hover animations

### 🚀 Projects Section
- Grid layout with 10 projects
- Click-to-navigate to detail pages
- Technology tags
- Smooth hover effects

### 💻 Skills Section
- Animated progress bars
- Staggered animations on scroll
- Technical & soft skills separation
- Icon-based categories

### 📧 References Section
- Professional card design
- Avatar icons with gradients
- Contact information
- Hover effects

### 📱 Footer
- 4-column layout
- Social media links
- Quick navigation
- Contact information
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

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
```

3. **Using VS Code Live Server** (Recommended)
```bash
# Install Live Server extension in VS Code
# Right-click on index.html
# Select "Open with Live Server"
```

### Customization

1. **Update Personal Information**
   - Edit `index.html` - Update name, contact details, bio
   - Replace `images/profile.png` with your photo

2. **Modify Colors**
   - Edit `css/styles.css` - Change CSS variables:
   ```css
   :root {
       --primary-pink: #ff1493;  /* Main pink color */
       --light-pink: #ff69b4;    /* Light pink accent */
       --dark-pink: #c71585;     /* Dark pink shade */
   }
   ```

3. **Add/Remove Projects**
   - Edit project cards in `index.html`
   - Create new project pages in `projects/` folder
   - Add project images to `images/projects/`

4. **Update Social Links**
   - Edit links in navigation and footer
   - Update GitHub, LinkedIn URLs

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
3. Configure build settings
4. Deploy

### Vercel
1. Import GitHub repository
2. Configure project
3. Deploy instantly

---

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time:** < 2 seconds
- **Mobile Friendly:** Yes
- **SEO Optimized:** Yes

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Contact

**Pramodya Warnakula**

- 📧 Email: pramodyawarnakula295@gmail.com
- 💼 LinkedIn: [pramodya-warnakula](https://linkedin.com/in/pramodya-warnakula)
- 🐙 GitHub: [pramodya112](https://github.com/pramodya112)
- 🌐 Portfolio: [https://pramodya-warnakula.netlify.app/]

---

## 🙏 Acknowledgments

- Font Awesome for icons
- Unsplash for placeholder images
- Google Fonts for typography inspiration
- GitHub community for open-source inspiration

---

## 📝 Version History

- **v1.0.0** (2025-01-01) - Initial release
  - 10 featured projects
  - Responsive design
  - Animated sections
  - Professional navbar
  - Contact integration

---

## 🚀 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add testimonials section
- [ ] Create project filters
- [ ] Add contact form with backend
- [ ] Implement analytics
- [ ] Add more animations
- [ ] Create certificate showcase

---


