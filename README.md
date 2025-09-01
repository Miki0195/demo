# Creative Studio Portfolio Website

A modern, dynamic, and visually stunning portfolio website for a creative company specializing in social media content creation, video making, and editing. Built with React, Tailwind CSS, and Framer Motion.

## Features

### 🎨 Design & UI
- **Modern, Fresh Design**: Young and dynamic aesthetic with smooth animations
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Interactive Elements**: Hover effects, transitions, and micro-animations
- **Gradient Backgrounds**: Beautiful gradient overlays and color schemes
- **Clean Typography**: Professional fonts with playful elements

### 📱 Pages & Structure
- **Home/Landing Page**: Hero section with dynamic animations and company introduction
- **About Us Page**: Company story, mission, values, and team showcase
- **Services Page**: Comprehensive service offerings with animated cards
- **Portfolio Page**: Separated tabs for Individuals and Companies with project showcases
- **Contact Page**: Dynamic forms that adapt based on client type (Individual/Company)

### ⚡ Animations & Interactions
- **Page Transitions**: Smooth transitions between pages using Framer Motion
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive cards and buttons with scale and shadow effects
- **Mouse Tracking**: Background elements that follow mouse movement
- **Parallax Scrolling**: Floating elements with different scroll speeds

### 🛠️ Technical Features
- **React Router**: Seamless navigation between pages
- **Framer Motion**: Professional animations and transitions
- **Tailwind CSS**: Utility-first styling with custom configurations
- **Lucide Icons**: Modern, minimal icon set
- **Form Handling**: Dynamic contact forms with validation
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with animations
│   ├── Footer.js       # Site footer with contact info
│   ├── ServiceCard.js  # Service display card component
│   ├── PortfolioCard.js # Portfolio project card
│   └── PageTransition.js # Page transition wrapper
├── pages/              # Main page components
│   ├── Home.js         # Landing page with hero section
│   ├── About.js        # About us page
│   ├── Services.js     # Services showcase
│   ├── Portfolio.js    # Portfolio with tabs
│   └── Contact.js      # Contact forms
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Colors & Branding
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  accent: {
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
  }
}
```

### Content Updates
- **Company Information**: Update company details in Footer.js and About.js
- **Services**: Modify service offerings in Services.js
- **Portfolio Projects**: Update project data in Portfolio.js
- **Contact Information**: Update contact details in Contact.js and Footer.js

### Animation Customization
Animations can be adjusted in individual component files or in the Tailwind config:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 6s ease-in-out infinite',
}
```

## Key Features Explained

### Dynamic Contact Forms
The contact page features smart forms that adapt based on whether the user is an individual or company:
- **Individual Form**: Focuses on personal projects, budget ranges, and creative needs
- **Company Form**: Includes company details, industry, team size, and project scope

### Portfolio Separation
The portfolio is intelligently separated into two categories:
- **Individuals**: Personal brands, influencers, content creators
- **Companies**: Businesses, startups, corporate clients

### Responsive Navigation
The header features:
- Sticky navigation that changes appearance on scroll
- Mobile-friendly hamburger menu with smooth animations
- Active page indicators with smooth transitions

### Performance Optimizations
- Lazy loading of animations with Intersection Observer
- Optimized images and assets
- Minimal bundle size with tree shaking
- Smooth 60fps animations

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is for demonstration purposes. Please respect the design and code when using for your own projects.

---

**Built with ❤️ for creative professionals who want to showcase their work beautifully.**
