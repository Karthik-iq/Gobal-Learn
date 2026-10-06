/**
 * GlobalPath Education - Main Frontend Engine
 * Handles Theme (Dark/Light), RTL/LTR, Dynamic Page Rendering, Modals, Lightbox & Forms
 */

(function () {
  'use strict';

  // --- 1. THEME ENGINE (Dark / Light Mode) ---
  const THEME_KEY = 'gp_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update all theme toggle button icons
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill';
      }
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  window.toggleTheme = function () {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // --- 2. RTL ENGINE (LTR ⇄ RTL) ---
  const DIRECTION_KEY = 'gp_direction';

  function initDirection() {
    const savedDir = localStorage.getItem(DIRECTION_KEY) || 'ltr';
    applyDirection(savedDir);
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem(DIRECTION_KEY, dir);

    // Update RTL toggle button labels if present
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      const label = btn.querySelector('.rtl-label');
      if (label) {
        label.textContent = dir === 'rtl' ? 'LTR ⇄' : '⇄ RTL';
      }
      btn.setAttribute('aria-label', `Switch to ${dir === 'rtl' ? 'LTR' : 'RTL'}`);
    });
  }

  window.toggleRTL = function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
  };

  // --- 3. TOAST NOTIFICATION UTILITY ---
  window.showToast = function (message, type = 'success', title = 'GlobalPath') {
    let toastContainer = document.getElementById('gpToastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'gpToastContainer';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast gp-toast align-items-center shadow-lg border-0 mb-2';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    const iconClass = type === 'success' ? 'bi-check-circle-fill text-success' :
                      type === 'danger' ? 'bi-exclamation-triangle-fill text-danger' :
                      'bi-info-circle-fill text-primary';

    toastEl.innerHTML = `
      <div class="d-flex p-3 align-items-center">
        <i class="bi ${iconClass} fs-4 me-3"></i>
        <div class="toast-body p-0 flex-grow-1">
          <strong class="d-block mb-1">${title}</strong>
          <span class="small">${message}</span>
        </div>
        <button type="button" class="btn-close ms-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    toastContainer.appendChild(toastEl);
    if (window.bootstrap && window.bootstrap.Toast) {
      const bsToast = new bootstrap.Toast(toastEl, { delay: 4500 });
      bsToast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    } else {
      setTimeout(() => toastEl.remove(), 4500);
    }
  };

  // --- 4. NAVBAR SCROLL & ACTIVE LINK HIGHLIGHTER ---
  function initNavbar() {
    const navbar = document.querySelector('.main-navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }

    // Set active nav item based on current URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === currentPath || href.endsWith(currentPath))) {
        link.classList.add('active');
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });
  }

  // --- 5. DYNAMIC SERVICE DETAILS PAGE (?id=...) ---
  function initServiceDetails() {
    const serviceContainer = document.getElementById('serviceDetailsContainer');
    if (!serviceContainer || typeof GlobalData === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id') || 'university-selection';
    const services = GlobalData.get('services');
    const service = services.find(s => s.id === serviceId) || services[0];

    // Populate Dynamic Content
    document.title = `${service.title} | GlobalPath Education`;

    const titleEl = document.getElementById('serviceTitle');
    if (titleEl) titleEl.textContent = service.title;

    const breadcrumbEl = document.getElementById('serviceBreadcrumb');
    if (breadcrumbEl) breadcrumbEl.textContent = service.title;

    const categoryBadge = document.getElementById('serviceCategory');
    if (categoryBadge) categoryBadge.textContent = service.category;

    const priceEl = document.getElementById('servicePrice');
    if (priceEl) priceEl.textContent = service.price;

    const ratingEl = document.getElementById('serviceRating');
    if (ratingEl) ratingEl.textContent = `${service.rating} / 5.0 (${service.reviewsCount} verified reviews)`;

    const imageEl = document.getElementById('serviceImage');
    if (imageEl) {
      imageEl.src = service.image;
      imageEl.alt = service.title;
    }

    const overviewEl = document.getElementById('serviceOverview');
    if (overviewEl) overviewEl.textContent = service.overview;

    // Deliverables list
    const deliverablesList = document.getElementById('serviceDeliverables');
    if (deliverablesList && service.deliverables) {
      deliverablesList.innerHTML = service.deliverables.map(item => `
        <li class="d-flex align-items-center mb-3">
          <i class="bi bi-check-circle-fill text-success fs-5 me-3"></i>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // Process Timeline
    const processContainer = document.getElementById('serviceProcess');
    if (processContainer && service.process) {
      processContainer.innerHTML = service.process.map(step => `
        <div class="col-md-6 mb-3">
          <div class="p-3 border rounded-3 bg-body h-100 shadow-sm">
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="badge bg-primary rounded-pill">Step ${step.step}</span>
              <h6 class="mb-0 fw-bold">${step.title}</h6>
            </div>
            <p class="text-muted small mb-0">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // FAQs Accordion
    const faqContainer = document.getElementById('serviceFaqs');
    if (faqContainer && service.faqs) {
      faqContainer.innerHTML = service.faqs.map((faq, i) => `
        <div class="accordion-item border mb-2 rounded-3 overflow-hidden">
          <h2 class="accordion-header" id="faqHeading${i}">
            <button class="accordion-button ${i !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse${i}">
              ${faq.q}
            </button>
          </h2>
          <div id="faqCollapse${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#serviceFaqs">
            <div class="accordion-body text-muted">
              ${faq.a}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Related Services list
    const relatedContainer = document.getElementById('relatedServicesList');
    if (relatedContainer) {
      const otherServices = services.filter(s => s.id !== service.id).slice(0, 5);
      relatedContainer.innerHTML = otherServices.map(s => `
        <a href="service-details.html?id=${s.id}" class="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-3 border-0 border-bottom">
          <div class="d-flex align-items-center gap-2">
            <i class="bi ${s.icon} text-primary fs-5"></i>
            <span class="fw-medium">${s.title}</span>
          </div>
          <i class="bi bi-chevron-right text-muted small"></i>
        </a>
      `).join('');
    }
  }

  // --- 6. DYNAMIC BLOG DETAILS PAGE (?id=...) ---
  function initBlogDetails() {
    const blogContainer = document.getElementById('blogDetailsContainer');
    if (!blogContainer || typeof GlobalData === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 'top-countries-study-abroad-2026';
    const blogPosts = GlobalData.get('blog');
    const post = blogPosts.find(b => b.id === blogId) || blogPosts[0];

    document.title = `${post.title} | GlobalPath Education Blog`;

    const titleEl = document.getElementById('blogTitle');
    if (titleEl) titleEl.textContent = post.title;

    const breadcrumbEl = document.getElementById('blogBreadcrumb');
    if (breadcrumbEl) breadcrumbEl.textContent = post.title;

    const categoryBadge = document.getElementById('blogCategory');
    if (categoryBadge) categoryBadge.textContent = post.category;

    const dateEl = document.getElementById('blogDate');
    if (dateEl) dateEl.textContent = post.date;

    const readTimeEl = document.getElementById('blogReadTime');
    if (readTimeEl) readTimeEl.textContent = post.readTime;

    const authorNameEl = document.getElementById('blogAuthorName');
    if (authorNameEl) authorNameEl.textContent = post.author;

    const authorRoleEl = document.getElementById('blogAuthorRole');
    if (authorRoleEl) authorRoleEl.textContent = post.authorRole;

    const authorImgEl = document.getElementById('blogAuthorImg');
    if (authorImgEl) authorImgEl.src = post.authorImg;

    const imageEl = document.getElementById('blogImage');
    if (imageEl) {
      imageEl.src = post.image;
      imageEl.alt = post.title;
    }

    const contentEl = document.getElementById('blogContent');
    if (contentEl) contentEl.innerHTML = post.content;

    // Tags
    const tagsContainer = document.getElementById('blogTags');
    if (tagsContainer && post.tags) {
      tagsContainer.innerHTML = post.tags.map(tag => `
        <span class="badge bg-secondary-subtle text-secondary me-2 mb-2 p-2">${tag}</span>
      `).join('');
    }

    // Recent Posts in Sidebar
    const recentPostsContainer = document.getElementById('recentPostsSidebar');
    if (recentPostsContainer) {
      const recent = blogPosts.filter(b => b.id !== post.id).slice(0, 4);
      recentPostsContainer.innerHTML = recent.map(r => `
        <div class="d-flex align-items-center gap-3 mb-3">
          <img src="${r.image}" class="rounded-3" style="width: 70px; height: 60px; object-fit: cover;" alt="${r.title}">
          <div>
            <a href="blog-details.html?id=${r.id}" class="fw-bold text-main d-block lh-sm mb-1 small hover-primary">${r.title}</a>
            <span class="text-muted small fs-xs"><i class="bi bi-calendar3 me-1"></i>${r.date}</span>
          </div>
        </div>
      `).join('');
    }
  }

  // --- 7. FORMS INTERACTION & TOAST NOTIFICATION ENGINE ---
  function initForms() {
    // Real-time phone number input restriction & error display
    const phoneInputs = document.querySelectorAll('input[name="phone"], input[type="tel"]');
    phoneInputs.forEach(input => {
      let feedback = input.parentElement.querySelector('.phone-feedback');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback phone-feedback';
        feedback.textContent = 'Only numbers are accepted! Alphabets are not allowed.';
        input.parentElement.appendChild(feedback);
      }

      function showNumberOnlyWarning() {
        input.classList.add('is-invalid');
        feedback.textContent = 'Only numbers are accepted! Alphabets are not allowed.';
        feedback.style.display = 'block';
        clearTimeout(input._warnTimer);
        input._warnTimer = setTimeout(() => {
          const digits = (input.value.match(/\d/g) || []).length;
          if (digits >= 7 || input.value.trim().length === 0) {
            input.classList.remove('is-invalid');
            feedback.style.display = 'none';
          }
        }, 2200);
      }

      // Block alphabet keystrokes immediately on keydown
      input.addEventListener('keydown', function (e) {
        // Allow navigation & editing keys
        if (
          e.key === 'Backspace' ||
          e.key === 'Tab' ||
          e.key === 'Delete' ||
          e.key === 'ArrowLeft' ||
          e.key === 'ArrowRight' ||
          e.key === 'ArrowUp' ||
          e.key === 'ArrowDown' ||
          e.key === 'Enter' ||
          e.key === 'Home' ||
          e.key === 'End' ||
          e.ctrlKey ||
          e.metaKey
        ) {
          return;
        }

        // Prevent alphabets from being typed into the box
        if (/[a-zA-Z]/.test(e.key)) {
          e.preventDefault();
          showNumberOnlyWarning();
          return;
        }

        // Allow numbers 0-9 and standard phone symbols: +, -, (, ), space
        if (!/[0-9+\s\-()]/.test(e.key)) {
          e.preventDefault();
          showNumberOnlyWarning();
        }
      });

      // Block beforeinput (virtual keyboards, IME)
      input.addEventListener('beforeinput', function (e) {
        if (e.data && /[a-zA-Z]/.test(e.data)) {
          e.preventDefault();
          showNumberOnlyWarning();
        }
      });

      // Filter paste event so alphabets are never inserted
      input.addEventListener('paste', function (e) {
        const pasteData = (e.clipboardData || window.clipboardData)?.getData('text') || '';
        if (/[a-zA-Z]/.test(pasteData)) {
          e.preventDefault();
          const cleanData = pasteData.replace(/[a-zA-Z]/g, '');
          const start = this.selectionStart;
          const end = this.selectionEnd;
          const currentVal = this.value;
          this.value = currentVal.substring(0, start) + cleanData + currentVal.substring(end);
          this.selectionStart = this.selectionEnd = start + cleanData.length;
          showNumberOnlyWarning();
          this.dispatchEvent(new Event('input'));
        }
      });

      // Final safety net on input event: strip any alphabets immediately
      input.addEventListener('input', function () {
        if (/[a-zA-Z]/.test(this.value)) {
          this.value = this.value.replace(/[a-zA-Z]/g, '');
          showNumberOnlyWarning();
        } else {
          const digits = (this.value.match(/\d/g) || []).length;
          if (digits >= 7 || this.value.trim().length === 0) {
            this.classList.remove('is-invalid');
            feedback.style.display = 'none';
          }
        }
      });

      // Check on blur if incomplete
      input.addEventListener('blur', function () {
        const digits = (this.value.match(/\d/g) || []).length;
        if (this.value.trim().length > 0 && digits < 7) {
          this.classList.add('is-invalid');
          feedback.textContent = 'Phone number is too short (min 7 digits required).';
          feedback.style.display = 'block';
        }
      });
    });

    // Consultation booking modal & inline consultation forms
    const consultationForms = document.querySelectorAll('.consultation-form');
    consultationForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('[name="name"]')?.value || 'Student';
        const email = form.querySelector('[name="email"]')?.value || '';
        const phoneInput = form.querySelector('[name="phone"]');
        const phone = phoneInput?.value.trim() || '';
        const country = form.querySelector('[name="country"]')?.value || 'General Inquiry';
        const service = form.querySelector('[name="service"]')?.value || 'Consultation Request';
        const message = form.querySelector('[name="message"]')?.value || 'Requested Free Consultation session';

        // Phone validation: must not contain alphabets and must have at least 7 digits
        const digits = (phone.match(/\d/g) || []).length;
        if (digits < 7 || /[a-zA-Z]/.test(phone)) {
          if (phoneInput) {
            phoneInput.classList.add('is-invalid');
            let feedback = phoneInput.parentElement.querySelector('.phone-feedback');
            if (feedback) feedback.style.display = 'block';
            phoneInput.focus();
          }
          window.showToast(
            'Please enter a valid phone number with numbers only (min 7 digits). Alphabets are not accepted.',
            'danger',
            'Invalid Phone Number'
          );
          return;
        }

        if (typeof GlobalData !== 'undefined') {
          GlobalData.add('messages', {
            name,
            email,
            phone,
            subject: `Consultation: ${country} (${service})`,
            message,
            date: new Date().toISOString().replace('T', ' ').substring(0, 16),
            status: 'Unread'
          });
        }

        form.reset();

        // Close modal if inside modal
        const modalEl = form.closest('.modal');
        if (modalEl && window.bootstrap && window.bootstrap.Modal) {
          const bsModal = bootstrap.Modal.getInstance(modalEl);
          if (bsModal) bsModal.hide();
        }

        window.showToast(
          `Thank you ${name}! Your consultation request has been received. Our senior counselor will call you within 24 hours.`,
          'success',
          'Consultation Booked'
        );
      });
    });

    // Contact Us Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = contactForm.querySelector('[name="name"]')?.value || 'Visitor';
        const email = contactForm.querySelector('[name="email"]')?.value || '';
        const phoneInput = contactForm.querySelector('[name="phone"]');
        const phone = phoneInput?.value.trim() || '';
        const subject = contactForm.querySelector('[name="subject"]')?.value || 'General Enquiry';
        const message = contactForm.querySelector('[name="message"]')?.value || '';

        // Phone validation
        const digits = (phone.match(/\d/g) || []).length;
        if (digits < 7 || /[a-zA-Z]/.test(phone)) {
          if (phoneInput) {
            phoneInput.classList.add('is-invalid');
            let feedback = phoneInput.parentElement.querySelector('.phone-feedback');
            if (feedback) feedback.style.display = 'block';
            phoneInput.focus();
          }
          window.showToast(
            'Please enter a valid phone number with numbers only (min 7 digits). Alphabets are not accepted.',
            'danger',
            'Invalid Phone Number'
          );
          return;
        }

        if (typeof GlobalData !== 'undefined') {
          GlobalData.add('messages', {
            name,
            email,
            phone,
            subject,
            message,
            date: new Date().toISOString().replace('T', ' ').substring(0, 16),
            status: 'Unread'
          });
        }

        contactForm.reset();
        window.showToast(
          `Message sent! Thank you ${name}, our admissions officer will respond shortly.`,
          'success',
          'Message Delivered'
        );
      });
    }

    // Newsletter Subscriptions
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          window.showToast(
            `Thank you for subscribing! Free study guides have been dispatched to ${emailInput.value}.`,
            'success',
            'Newsletter Confirmed'
          );
          form.reset();
        }
      });
    });
  }

  // --- 8. GALLERY FILTER & LIGHTBOX ---
  function initGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');

    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
          filterBtns.forEach(b => b.classList.add('btn-outline-primary'));
          btn.classList.add('active', 'btn-primary');
          btn.classList.remove('btn-outline-primary');

          const filterValue = btn.getAttribute('data-filter');
          const items = document.querySelectorAll('.gallery-grid-item');
          items.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // Lightbox modal setup
    let lightboxModal = document.getElementById('gpLightbox');
    if (!lightboxModal) {
      lightboxModal = document.createElement('div');
      lightboxModal.id = 'gpLightbox';
      lightboxModal.className = 'lightbox-modal';
      lightboxModal.innerHTML = `
        <div class="lightbox-content">
          <button type="button" class="lightbox-close" id="gpLightboxClose">&times;</button>
          <img src="" id="gpLightboxImg" alt="Enlarged view">
          <div class="lightbox-caption" id="gpLightboxCaption"></div>
        </div>
      `;
      document.body.appendChild(lightboxModal);

      const closeBtn = document.getElementById('gpLightboxClose');
      closeBtn.addEventListener('click', () => lightboxModal.classList.remove('active'));
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) lightboxModal.classList.remove('active');
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') lightboxModal.classList.remove('active');
      });
    }

    document.addEventListener('click', (e) => {
      const targetItem = e.target.closest('.gallery-item');
      if (targetItem) {
        const img = targetItem.querySelector('img');
        const caption = targetItem.querySelector('.gallery-overlay h6, .gallery-overlay p')?.textContent || '';
        if (img) {
          const lightboxImg = document.getElementById('gpLightboxImg');
          const lightboxCaption = document.getElementById('gpLightboxCaption');
          lightboxImg.src = img.src;
          lightboxCaption.textContent = caption;
          lightboxModal.classList.add('active');
        }
      }
    });
  }

  // --- 9. COUNTDOWN TIMER (Coming Soon Page) ---
  function initCountdown() {
    const timerEl = document.getElementById('comingSoonCountdown');
    if (!timerEl) return;

    // Target: 90 days from now (Intake 2026)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 90);

    function update() {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference < 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const dEl = document.getElementById('cdDays');
      const hEl = document.getElementById('cdHours');
      const mEl = document.getElementById('cdMinutes');
      const sEl = document.getElementById('cdSeconds');

      if (dEl) dEl.textContent = days.toString().padStart(2, '0');
      if (hEl) hEl.textContent = hours.toString().padStart(2, '0');
      if (mEl) mEl.textContent = minutes.toString().padStart(2, '0');
      if (sEl) sEl.textContent = seconds.toString().padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // --- 10. RAPID ELIGIBILITY EVALUATOR ---
  function initEligibilityCalculator() {
    const form = document.getElementById('eligibilityForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const country = document.getElementById('evalCountry').value;
      const degree = document.getElementById('evalDegree').value;
      const grade = document.getElementById('evalGrade').value;
      const english = document.getElementById('evalEnglish').value;

      const resultBox = document.getElementById('evalResult');
      const badge = document.getElementById('evalBadge');
      const matchRate = document.getElementById('resultMatchRate');
      const scholarship = document.getElementById('resultScholarship');
      const advice = document.getElementById('resultAdvice');

      if (!resultBox) return;

      let score = 92;
      let grant = '$6,000 – $18,000 / yr';
      let tier = 'High Admission Likelihood';
      let badgeClass = 'badge bg-success mb-1';

      if (grade === 'high' && english === 'high') {
        score = 98;
        grant = '$12,000 – $25,000 / yr';
        tier = 'Elite Tier-1 / Ivy / Russell Group Match';
        badgeClass = 'badge bg-success mb-1';
        advice.textContent = `Outstanding academic profile! You are highly eligible for full direct admission and merit fellowships in ${country} for ${degree}.`;
      } else if (grade === 'pass' || english === 'none') {
        score = 78;
        grant = '$3,000 – $7,500 / yr';
        tier = 'Pathway / Foundation Match';
        badgeClass = 'badge bg-warning mb-1';
        advice.textContent = `We recommend pairing your application with an intensive language booster or university pathway route in ${country}.`;
      } else {
        score = 88;
        grant = '$5,000 – $14,000 / yr';
        tier = 'Strong National Top-50 Match';
        badgeClass = 'badge bg-primary mb-1';
        advice.textContent = `Strong competitive profile for accredited global universities in ${country}. Qualified for university international student merit discount.`;
      }

      badge.className = badgeClass;
      badge.textContent = tier;
      matchRate.textContent = `${score}% Admissions & Visa Match`;
      scholarship.textContent = grant;
      resultBox.classList.remove('d-none');
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Wire prefill into the modal when user clicks book consultation button
      const modalCountry = document.querySelector('#consultationModal select[name="country"]');
      const modalDegree = document.querySelector('#consultationModal select[name="studyLevel"]');
      if (modalCountry) modalCountry.value = country;
      if (modalDegree) modalDegree.value = degree;
    });

    // Also support any [data-prefill-country] buttons
    document.querySelectorAll('[data-prefill-country]').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = btn.getAttribute('data-prefill-country');
        const modalCountry = document.querySelector('#consultationModal select[name="country"]');
        if (modalCountry && c) modalCountry.value = c;
      });
    });
  }

  // Dashboard & Portal Mobile Sidebar Toggle
  function initSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggleBtn');
    const sidebarClose = document.getElementById('sidebarCloseBtn');
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('show');
        if (overlay) overlay.classList.toggle('active');
      });
    }

    if (sidebarClose && sidebar) {
      sidebarClose.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.remove('show');
        if (overlay) overlay.classList.remove('active');
      });
    }

    if (overlay && sidebar) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('active');
      });
    }
  }

  // Document Ready Execution
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initNavbar();
    initSidebar();
    initServiceDetails();
    initBlogDetails();
    initForms();
    initGallery();
    initCountdown();
    initEligibilityCalculator();
  });
})();
