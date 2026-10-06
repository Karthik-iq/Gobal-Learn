# GlobalPath Education - Premium Study Abroad & Overseas Education Consultancy HTML5 Template

**GlobalPath Education** is a modern, responsive, commercial-grade frontend HTML5 template designed specifically for overseas education consultancies, study abroad agencies, international student immigration firms, language test prep academies (IELTS/TOEFL), and global university admissions advisors.

Created for **ThemeForest, TemplateMonster, Creative Market**, and enterprise client deployments.

---

## 🚀 Key Highlights & Features

- **Zero Backend Dependency**: Fully functional static frontend. Open HTML files directly in any browser or serve via any static HTTP web server (Live Server, Netlify, GitHub Pages, Vercel, Apache, Nginx).
- **Two Distinct Homepages**:
  - `index.html`: Corporate education consultancy & service-business landing page.
  - `home-2.html`: Specialized Study Abroad & Destination Explorer with interactive country selector.
- **Dynamic Routing via URL Query Parameters**:
  - `service-details.html?id=university-selection`
  - `service-details.html?id=visa-assistance`
  - `blog-details.html?id=top-countries-study-abroad-2026`
  - `blog-details.html?id=complete-student-visa-guide`
- **100% Realistic Education Data**: Zero "Lorem Ipsum". Contains 10 consulting services, 12 complete blog articles, 8 world universities, 8 destination nations, 10 student applicant profiles, 10 applications, 8 verified reviews, 10 messages, and 10 payment orders.
- **Bidirectional RTL / LTR Toggle**: Compact `LTR ⇄ RTL` button with CSS logical properties and automatic layout flipping. Persists in `localStorage`.
- **Light & Dark Mode**: Smooth transition between light and dark themes using Bootstrap 5.3 `[data-bs-theme]` and custom CSS variables. Detects system `prefers-color-scheme` automatically. Persists in `localStorage`.
- **Complete Admin Dashboard UI with Functional Frontend CRUD**:
  - Manage Students (`admin/students.html`)
  - Manage Universities (`admin/universities.html`)
  - Manage Services (`admin/services.html`)
  - Manage Applications Tracker (`admin/applications.html`)
  - Manage Package Invoices & Orders (`admin/orders.html`)
  - Manage Consultation Inquiries with Reply simulation (`admin/messages.html`)
  - Manage Educational Blog (`admin/blog.html`)
  - Manage Testimonials (`admin/testimonials.html`)
  - Manage Media Gallery (`admin/gallery.html`)
  - Manage Pricing Tiers (`admin/pricing.html`)
  - System Configurations & Factory Reset (`admin/settings.html`)
- **Student Portal Dashboard**:
  - 6-Stage Visual Application Tracker (Profile -> Documents -> Applied -> Offer -> Visa -> Departure)
  - Document Locker with verified badges
  - Counselor messaging modal and deadline countdown widgets
- **Interactive Lightbox Modal**: Clickable gallery grid with category filtering (Campus, Students, Events, Counselling, Visa, University Visits).
- **Interactive Charts**: 4 responsive Chart.js widgets (line, bar, doughnut) dynamically theme-synchronized.

---

## 📁 Project Directory Structure

```text
c:/Users/Lenovo/Desktop/Education Consultancy/
├── index.html                  # Home 1 - Corporate Consultancy Landing Page
├── home-2.html                 # Home 2 - Specialized Study Abroad Destination Finder
├── about.html                  # Company Story, Mission, Timeline, Leadership Team
├── services.html               # 10 Consulting Services with Category Filtering
├── service-details.html        # Dynamic Service Reader (?id=...)
├── gallery.html                # Campus & Student Life Gallery with Lightbox
├── pricing.html                # Consultation Tiers, Pricing Packages & Comparison Matrix
├── blog.html                   # 12 Educational Guides with Search, Category & Pagination
├── blog-details.html           # Dynamic Blog Reader with Working Social Shares & Comments
├── contact.html                # Office Locations (NY, London, Melbourne, Singapore), Forms & Map
├── login.html                  # Student & Admin Portal Login with Quick Demo Credentials
├── register.html               # Student Registration Form with Destination Selector
├── student-dashboard.html      # Student Application Portal & 6-Stage Progress Tracker
├── 404.html                    # Creative Education-Themed 404 Error Page
├── coming-soon.html            # Intake 2026 Live Countdown Timer & Notification Signup
├── maintenance.html            # Scheduled Maintenance Mode Page with Hotline Contacts
│
├── admin/
│   ├── index.html              # Admin Analytics Dashboard with Chart.js
│   ├── students.html           # Students Directory (CRUD: Add, Edit, Delete, View, Filter)
│   ├── universities.html       # Partner Universities Directory (CRUD)
│   ├── services.html           # Services Offerings Management (CRUD)
│   ├── applications.html       # Student University Applications Tracker (CRUD)
│   ├── orders.html             # Package Invoicing & Payment Status (CRUD)
│   ├── messages.html           # Consultation Inquiries & Direct Email Reply (CRUD)
│   ├── blog.html               # Blog Post Manager (CRUD & Draft/Publish)
│   ├── testimonials.html       # Student Testimonials & Ratings (CRUD)
│   ├── gallery.html            # Media Gallery Items (CRUD)
│   ├── pricing.html            # Pricing Tier Configuration (CRUD)
│   └── settings.html           # System Settings, Localization & Database Factory Reset
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Master Stylesheet, CSS Variables, Theming, RTL, Animations
│   │   └── admin.css           # Admin Dashboard Layout, Sidebar, DataTables & Badges
│   ├── js/
│   │   ├── data.js             # Master Dataset & LocalStorage CRUD Synchronizer
│   │   ├── main.js             # Theming Engine, RTL Switcher, Dynamic Routing, Lightbox, Toasts
│   │   ├── admin.js            # Universal CRUD Engine, Pagination, Real-Time Search, Export CSV
│   │   └── charts.js           # Chart.js Analytics Visualizations with Theme Awareness
│   └── images/                 # Media assets & photo placeholders
│
└── README.md                   # Comprehensive Technical Documentation
```

---

## 🛠️ How to Customize

### 1. Changing Brand Colors
Open `assets/css/style.css` and locate the `:root` variables block at the top:

```css
:root {
  --gp-primary: #1d4ed8;         /* Primary brand color (Royal Blue) */
  --gp-primary-hover: #1e40af;   /* Darker hover state */
  --gp-secondary: #0f172a;       /* Deep slate */
  --gp-accent: #06b6d4;          /* Vibrant cyan */
  --gp-accent-warm: #f59e0b;     /* Gold / Amber for scholarships */
  --gp-success: #10b981;         /* Emerald for visa approvals */
}
```
Adjusting these variables automatically updates buttons, badges, icons, active nav links, and accents across the entire website.

### 2. Changing the Brand Logo & Name
Search for `.brand-logo` in the HTML files:
```html
<a class="brand-logo" href="index.html">
  <div class="brand-icon">
    <i class="bi bi-globe-americas"></i>
  </div>
  <span>GlobalPath<span class="text-primary">.</span></span>
</a>
```
Replace the icon or swap in your SVG/PNG `<img>` tag:
```html
<a class="brand-logo" href="index.html">
  <img src="assets/images/your-logo.svg" alt="Your Agency Name" height="38">
</a>
```

### 3. Adding or Editing Services & Blog Posts
All data is centrally defined in `assets/js/data.js` within `INITIAL_DATA.services` and `INITIAL_DATA.blog`.
Simply add a new object to the array:
```javascript
{
  id: "my-new-service",
  title: "Aviation Academy Placement",
  category: "Admissions",
  shortDesc: "Guidance for commercial pilot licensing and aerospace degrees.",
  price: "$399",
  image: "https://images.unsplash.com/...",
  overview: "Full overview paragraph...",
  deliverables: ["Flight school shortlist", "Aviation medical checks"],
  process: [{ step: 1, title: "Initial Screen", desc: "Evaluate flight hours" }],
  faqs: [{ q: "What are entry requirements?", a: "High school physics and math." }]
}
```
Because the template uses `GlobalData`, any new service automatically renders on `services.html` and loads on `service-details.html?id=my-new-service` without requiring any additional HTML file creation!

### 4. Admin CRUD Operations & LocalStorage Reset
- All changes made in the Admin Dashboard (creating a student, editing a university, deleting an inquiry) are saved in browser `localStorage`.
- To restore the default sample dataset at any time, visit `admin/settings.html` -> click **Demo Data & Reset** -> click **Reset All Data to Factory Default**.

### 5. Replacing Social Media Links
In `index.html` and other public footers, replace the destination URLs:
```html
<a href="https://facebook.com/your-brand" target="_blank" rel="noopener noreferrer" class="social-icon-btn"><i class="bi bi-facebook"></i></a>
<a href="https://instagram.com/your-brand" target="_blank" rel="noopener noreferrer" class="social-icon-btn"><i class="bi bi-instagram"></i></a>
<a href="https://youtube.com/@your-brand" target="_blank" rel="noopener noreferrer" class="social-icon-btn"><i class="bi bi-youtube"></i></a>
<a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer" class="social-icon-btn"><i class="bi bi-whatsapp"></i></a>
```

---

## 🌐 Browser Support & Accessibility

- **Google Chrome**: Version 90+
- **Mozilla Firefox**: Version 88+
- **Apple Safari**: Version 14+
- **Microsoft Edge**: Version 90+
- **Opera**: Version 76+
- **Mobile Browsers**: iOS Safari, Chrome for Android, Samsung Internet

WCAG 2.1 AA friendly with visible focus indicators, accessible ARIA attributes, semantic headings (`h1` through `h6`), and contrast ratios conforming to global accessibility guidelines.

---

## 📄 License & Credits

- **Bootstrap 5.3**: MIT License
- **Bootstrap Icons**: MIT License
- **Chart.js**: MIT License
- **Google Fonts**: Plus Jakarta Sans & Outfit (OFL)
- **Imagery**: Curated high-resolution royalty-free photography via Unsplash

Developed with excellence for modern global education businesses.
