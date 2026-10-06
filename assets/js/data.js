/**
 * GlobalPath Education - Master Data & LocalStorage Engine
 * Contains comprehensive, realistic data for Overseas Education Consultancy.
 * Zero "Lorem Ipsum". All items persist in browser LocalStorage.
 */

const INITIAL_DATA = {
  services: [
    {
      id: "university-selection",
      title: "University & Course Selection",
      icon: "bi-mortarboard-fill",
      category: "Admissions",
      shortDesc: "Data-driven profiling matching your academic background, budget, and career goals with top global institutions.",
      price: "$299",
      rating: 4.9,
      reviewsCount: 142,
      featured: true,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      overview: "Choosing the right university is the single most critical decision in your international education journey. Our experienced admissions counselors analyze over 800+ accredited universities across the UK, USA, Canada, Australia, and Europe to pinpoint institutions that align precisely with your academic scores, career trajectory, post-study work ambitions, and budget.",
      deliverables: [
        "Personalized University Shortlist (Dream, Target, and Safe institutions)",
        "Curriculum & syllabus deep-dive comparison",
        "Return-on-Investment (ROI) and graduate employment statistics",
        "Tuition fee breakdown and hidden cost estimations",
        "Admission requirement checklist and GPA conversion"
      ],
      process: [
        { step: 1, title: "Initial Profiling", desc: "Evaluate academic transcripts, English proficiency, and career aspirations." },
        { step: 2, title: "Algorithmic Matching", desc: "Shortlist 10-15 universities matching entry criteria and budget." },
        { step: 3, title: "Counselor Strategy Session", desc: "One-on-one video consultation to finalize top 5 priority institutions." },
        { step: 4, title: "Application Readiness", desc: "Finalize intake season, deadlines, and department requirements." }
      ],
      faqs: [
        { q: "How many universities can I shortlist?", a: "Our standard package allows shortlisting up to 8 universities across 2 countries." },
        { q: "Can I change my university choices later?", a: "Yes, you can swap universities before applications are officially lodged." }
      ]
    },
    {
      id: "visa-assistance",
      title: "Student Visa Guidance & Filing",
      icon: "bi-passport-fill",
      category: "Visa & Immigration",
      shortDesc: "End-to-end visa filing with 99.2% approval rate, financial documentation audit, and mock interview coaching.",
      price: "$449",
      rating: 5.0,
      reviewsCount: 238,
      featured: true,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      overview: "Student visa regulations are dynamic and stringent. Our regulated visa specialists provide complete assistance from genuine student intent documentation (SOP/GTE) to financial sponsorship proof, biometric appointment scheduling, and intensive 1-on-1 consular mock interviews.",
      deliverables: [
        "Country-specific Visa Checklist preparation",
        "Financial sponsorship & bank statement verification",
        "Genuine Temporary Entrant (GTE) / Cover Letter drafting",
        "Online portal filing & Biometric appointment booking",
        "2 rounds of 1-on-1 Visa Mock Interviews with ex-visa officers"
      ],
      process: [
        { step: 1, title: "Document Audit", desc: "Review all financial proofs, tax returns, and academic antecedents." },
        { step: 2, title: "Statement of Purpose Filing", desc: "Draft a compelling personal statement proving return-to-home intent." },
        { step: 3, title: "Embassy Lodgement", desc: "Accurate online submission through official embassy portals." },
        { step: 4, title: "Mock Visa Interview", desc: "Realistic question-and-answer simulation with real-time feedback." }
      ],
      faqs: [
        { q: "What is your visa success rate?", a: "We maintain a verified 99.2% approval rate across Tier-4 UK, US F-1, and Canadian Study Permits." },
        { q: "What happens if my visa has been rejected before?", a: "We have a dedicated Visa Re-application Cell that analyzes previous CAIPS notes or refusal letters to rebuild your file." }
      ]
    },
    {
      id: "scholarship-guidance",
      title: "Scholarship & Financial Aid Search",
      icon: "bi-award-fill",
      category: "Funding",
      shortDesc: "Maximize funding opportunities with merit, need-based, and governmental scholarship application support.",
      price: "$349",
      rating: 4.8,
      reviewsCount: 94,
      featured: true,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      overview: "Pursuing overseas education shouldn't be a financial burden. In the past academic cycle, GlobalPath helped students secure over $4.2M in grants, tuition waivers, and government-backed fellowships including Chevening, Fulbright, DAAD, and Australia Awards.",
      deliverables: [
        "Comprehensive Global Scholarship Database matching",
        "Assistance with institutional tuition fee discounts (up to 50%)",
        "Essay editing for scholarship motivation prompts",
        "Guidance on Graduate Teaching & Research Assistantships (TA/RA)",
        "Third-party private foundation grant applications"
      ],
      process: [
        { step: 1, title: "Eligibility Assessment", desc: "Evaluate academic distinctions, extracurriculars, and community leadership." },
        { step: 2, title: "Opportunity Mapping", desc: "Identify 5-8 live scholarship programs with approaching deadlines." },
        { step: 3, title: "Essay Polish", desc: "Refine scholarship motivation statements to highlight social impact." },
        { step: 4, title: "Submission & Follow-up", desc: "Submit application dossiers and track awards with university bursars." }
      ],
      faqs: [
        { q: "Is scholarship funding guaranteed?", a: "While awards depend on university review boards, 82% of our coached applicants receive partial or full tuition waivers." }
      ]
    },
    {
      id: "application-assistance",
      title: "Admission Application Processing",
      icon: "bi-file-earmark-check-fill",
      category: "Admissions",
      shortDesc: "Error-free portal submissions, portal tracking, transcript credential evaluation, and deadline management.",
      price: "$399",
      rating: 4.9,
      reviewsCount: 180,
      featured: false,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      overview: "Every university portal has nuanced requirements—from Common App and UCAS to direct institutional portals. Our dedicated documentation team manages the entire submission pipeline, ensuring every transcript, recommendation letter, and CV is flawlessly presented.",
      deliverables: [
        "UCAS, Common App, and Direct Portal management",
        "WES / ECE credential evaluation advisory",
        "Official document liaison with international admissions desks",
        "Application fee waiver facilitation (where partnered)",
        "Prompt interview booking with faculty admissions teams"
      ],
      process: [
        { step: 1, title: "Portal Account Setup", desc: "Create and configure student portal profiles with strict compliance." },
        { step: 2, title: "Document Uploads", desc: "Format, compress, and verify certificates according to department guidelines." },
        { step: 3, title: "Final Proofread", desc: "Pre-submission audit by a senior admissions counselor." },
        { step: 4, title: "Offer Letter Retrieval", desc: "Track conditional offers, CAS/I-20 issuance, and acceptance deposit guidance." }
      ],
      faqs: [
        { q: "Do you provide application fee waivers?", a: "Yes, through our official university partnerships, we offer waiver codes for select partner institutions." }
      ]
    },
    {
      id: "ielts-language-prep",
      title: "IELTS / TOEFL / PTE Coaching",
      icon: "bi-translate",
      category: "Test Prep",
      shortDesc: "Certified British Council trainers, mock diagnostic tests, and proven strategies to score Band 7.5+ or 100+.",
      price: "$199",
      rating: 4.9,
      reviewsCount: 310,
      featured: true,
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
      overview: "Language proficiency scores are mandatory gates for admissions and student visas. We offer hybrid coaching programs featuring Cambridge curriculum, AI-powered speech assessment, individual essay grading, and full-length timed computer-based mock tests.",
      deliverables: [
        "40 hours of live interactive coaching sessions",
        "Cambridge Official IELTS/PTE preparation bundle",
        "Unlimited speaking mock sessions with native evaluators",
        "Detailed band score prediction & grammar diagnostics",
        "Exam booking discount vouchers"
      ],
      process: [
        { step: 1, title: "Diagnostic Benchmark", desc: "Assess baseline CEFR level with a diagnostic mock test." },
        { step: 2, title: "Targeted Module Training", desc: "Master Reading, Writing Task 1 & 2, Listening, and Speaking fluency." },
        { step: 3, title: "Weekly Mock Exams", desc: "Simulate test day conditions with timed computer test suites." },
        { step: 4, title: "Official Exam Registration", desc: "Schedule exam dates timed strategically with university intake deadlines." }
      ],
      faqs: [
        { q: "What if I do not achieve my target band score?", a: "We offer a score guarantee policy: join our booster batches free of charge until you hit your target." }
      ]
    },
    {
      id: "sop-essay-writing",
      title: "SOP & Essay Editing Masterclass",
      icon: "bi-journal-richtext",
      category: "Writing",
      shortDesc: "Transform raw drafts into captivating narratives crafted by alumni of Oxford, Stanford, and LSE.",
      price: "$249",
      rating: 4.8,
      reviewsCount: 165,
      featured: false,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      overview: "Your Statement of Purpose (SOP) is your single voice in the admissions committee room. Our editorial team does not use generic templates or AI copy; we conduct deep storytelling sessions to extract your authentic life challenges, research passion, and professional ethos.",
      deliverables: [
        "Three rounds of iterative structural and stylistic editing",
        "Letters of Recommendation (LOR) customization for professors/managers",
        "Academic CV / Resume revamp following global formats (Europass / Ivy League)",
        "Zero-plagiarism and zero-AI integrity guarantee certification"
      ],
      process: [
        { step: 1, title: "Brainstorming Interview", desc: "Uncover personal milestones, academic projects, and career vision." },
        { step: 2, title: "Structure Formulation", desc: "Architect a persuasive paragraph-by-paragraph hook and thematic thread." },
        { step: 3, title: "Tone & Vocabulary Polish", desc: "Elevate academic diction, grammar syntax, and logical cohesion." },
        { step: 4, title: "Final Committee Approval", desc: "Sign-off with bespoke alignment to specific university course modules." }
      ],
      faqs: [
        { q: "Do you write the essay from scratch?", a: "No, ethical guidelines require student input. We provide framework questionnaires, ghost-coaching, and meticulous professional line-editing." }
      ]
    },
    {
      id: "pre-departure-briefing",
      title: "Pre-Departure & Forex Assistance",
      icon: "bi-airplane-engines-fill",
      category: "Relocation",
      shortDesc: "Smooth transition into foreign life: student banking, SIM cards, flight ticketing, and packing checklists.",
      price: "$149",
      rating: 4.9,
      reviewsCount: 88,
      featured: false,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      overview: "Traveling abroad for higher education is exhilarating yet daunting. Our pre-departure sessions prepare you for cultural adaptation, customs clearance, baggage allowances, student bank account setup, multi-currency forex cards, and health insurance registration.",
      deliverables: [
        "Live Pre-Departure orientation workshops with current senior students",
        "Student discount flight booking partnerships",
        "Forex card with zero foreign transaction markup fees",
        "Emergency hotline access and local city arrival guides"
      ],
      process: [
        { step: 1, title: "Travel Briefing", desc: "Review transit guidelines, medical checks, and immigration clearance." },
        { step: 2, title: "Forex & Banking", desc: "Dispatch zero-markup international cards and wire fee payments." },
        { step: 3, title: "Alumni Networking", desc: "Connect with students currently enrolled at your destination university." },
        { step: 4, title: "Touchdown Protocol", desc: "Guidance on airport pickup, transit cards, and biometric registration." }
      ],
      faqs: [
        { q: "Can parents attend the pre-departure briefing?", a: "Absolutely! We strongly encourage parents to join to understand safety, insurance, and financial transfer systems." }
      ]
    },
    {
      id: "student-accommodation",
      title: "Overseas Accommodation Finding",
      icon: "bi-house-heart-fill",
      category: "Relocation",
      shortDesc: "Safe, vetted on-campus and private student dorms within walking distance of your campus.",
      price: "$199",
      rating: 4.7,
      reviewsCount: 112,
      featured: false,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      overview: "Finding safe, affordable housing in high-demand cities like London, Sydney, Toronto, or Boston can be challenging. GlobalPath partners directly with trusted student accommodation providers (Amber, Casita, Student.com) to guarantee safe living spaces with all bills included.",
      deliverables: [
        "Verified property tours & virtual 3D walkthroughs",
        "Flexible tenancy agreements matching semester dates",
        "All-inclusive utility packages (Water, Heating, High-speed Wi-Fi)",
        "Guarantor service assistance for international renters"
      ],
      process: [
        { step: 1, title: "Location Mapping", desc: "Identify safe neighborhoods within 15-30 minutes of faculty buildings." },
        { step: 2, title: "Room Selection", desc: "Choose between private studios, en-suite rooms, or shared apartments." },
        { step: 3, title: "Tenancy Review", desc: "Verify contract clauses, deposit protection schemes, and cancellation policies." },
        { step: 4, title: "Keys on Arrival", desc: "Confirm check-in vouchers and welcome pack before boarding your flight." }
      ],
      faqs: [
        { q: "Are utility bills included in rent?", a: "Over 90% of our partnered properties include electricity, heating, water, and Wi-Fi within the stated weekly rate." }
      ]
    },
    {
      id: "career-counseling",
      title: "Global Career & Post-Study Planning",
      icon: "bi-briefcase-fill",
      category: "Career",
      shortDesc: "Strategic career roadmaps aligned with Post-Study Work Visa (PSW) regulations and high-demand industries.",
      price: "$279",
      rating: 4.8,
      reviewsCount: 75,
      featured: false,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      overview: "An overseas degree is an investment in your career. We provide forward-looking strategic advising that factors in each nation's Critical Skills Shortage lists, STEM extension policies, graduate trainee programs, and long-term residency pathways.",
      deliverables: [
        "Target Country Skills Shortage & Employment Demand Matrix",
        "LinkedIn profile internationalization and networking masterclass",
        "Resume tailored to regional applicant tracking systems (ATS)",
        "Internship and co-op placement search playbook"
      ],
      process: [
        { step: 1, title: "Skills Audit", desc: "Review industry background, transferrable skills, and tech capabilities." },
        { step: 2, title: "Market Feasibility", desc: "Cross-reference chosen programs against target country work permit eligibility." },
        { step: 3, title: "ATS Resume Polish", desc: "Optimize CV for multinational recruiting algorithms." },
        { step: 4, title: "Networking Playbook", desc: "Strategies to connect with hiring managers and university alumni on LinkedIn." }
      ],
      faqs: [
        { q: "Does this include job placement guarantees?", a: "We provide career enablement tools, resume optimization, and corporate networking strategies; final offers depend on student interview performance." }
      ]
    }
  ],

  blog: [
    {
      id: "top-countries-study-abroad-2026",
      title: "Top 7 Countries to Study Abroad in 2026: Cost, Post-Study Work & Quality",
      category: "Study Abroad",
      author: "Dr. Evelyn Vance",
      authorRole: "Director of International Admissions",
      authorImg: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
      date: "February 24, 2026",
      readTime: "7 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
      summary: "An in-depth comparative analysis of tuition fees, cost of living, visa ease, and post-study work rights across the UK, USA, Canada, Australia, Germany, Ireland, and New Zealand.",
      content: `
        <p class="lead">Planning your study abroad journey for 2026 requires understanding the shifting landscapes of global immigration policies, tuition affordability, and tech-driven career opportunities. Here is the definitive evaluation of the top destination nations.</p>
        
        <h3 class="mt-4 mb-3">1. United Kingdom: The Academic Powerhouse</h3>
        <p>With universities like Oxford, Cambridge, Imperial College London, and Manchester consistently topping QS World Rankings, the UK remains a crown jewel. The 2-year Graduate Route Visa continues to provide international graduates ample opportunity to step into the global workforce.</p>
        <ul>
          <li><strong>Average Tuition:</strong> £14,000 - £26,000 per year</li>
          <li><strong>Living Costs:</strong> £1,000 - £1,400 per month (Outside London)</li>
          <li><strong>Top Programs:</strong> Data Science, Finance, Healthcare, Aerospace Engineering</li>
        </ul>

        <blockquote class="p-4 my-4 rounded-3 border-start border-4 border-primary bg-light">
          "The UK's 1-year master's degrees offer unmatched return on investment by cutting living expenses in half compared to 2-year North American degrees."
        </blockquote>

        <h3 class="mt-4 mb-3">2. Canada: Sustainable Immigration & Innovation</h3>
        <p>Canada remains renowned for its multicultural safety and structured Post-Graduation Work Permit (PGWP). While recent reforms have prioritized high-demand sectors like healthcare, STEM, and skilled trades, top institutions like University of Toronto and McGill continue to attract global talent.</p>

        <h3 class="mt-4 mb-3">3. Germany: Tuition-Free Excellence in STEM</h3>
        <p>For engineering, automotive, and renewable energy, German public universities charge zero or negligible tuition (under €400 per semester in administration fees). With the new Opportunity Card (Chancenkarte), entering the German workforce is more accessible than ever.</p>

        <h3 class="mt-4 mb-3">Summary Checklist for Applicants</h3>
        <p>Choose your country not just by university prestige, but by checking: whether your subject falls into the national priority skills register, whether work hours during term (typically 20-24 hrs/week) cover living costs, and how soon applications close for the September/October intake.</p>
      `,
      tags: ["Study Abroad", "Top Destinations", "University Rankings", "Visa Guide"]
    },
    {
      id: "how-to-choose-right-university",
      title: "How to Choose the Right University: The Dream-Target-Safe Formula",
      category: "Universities",
      author: "Marcus Thorne",
      authorRole: "Senior Academic Counselor",
      authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      date: "February 18, 2026",
      readTime: "5 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1000&q=80",
      summary: "Stop relying solely on global rankings. Learn the proven 3-tier university selection strategy that guarantees admit letters while keeping your dream ambitious.",
      content: `
        <p class="lead">Most students apply to either overly competitive Ivy League or Russell Group schools, or undervalue their profile by applying only to tier-3 colleges. The key to stress-free admissions is the balanced Dream-Target-Safe framework.</p>

        <h3 class="mt-4 mb-3">Deconstructing the 3-Tier Strategy</h3>
        <p>When applying to universities overseas, allocate your 8 to 10 application slots as follows:</p>
        <div class="row g-3 my-3">
          <div class="col-md-4">
            <div class="p-3 border rounded-3 bg-light">
              <h5 class="text-primary">2-3 Dream Schools</h5>
              <p class="small mb-0">Institutions where your GPA or test scores fall in the bottom 25th percentile of admitted students. High risk, immense reward.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 border rounded-3 bg-light">
              <h5 class="text-primary">3-4 Target Schools</h5>
              <p class="small mb-0">Institutions where your academic profile closely matches average historical acceptance stats. 50-70% admission probability.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 border rounded-3 bg-light">
              <h5 class="text-primary">2-3 Safe Schools</h5>
              <p class="small mb-0">Institutions where your profile exceeds standard criteria, giving you an almost guaranteed admit and strong scholarship chance.</p>
            </div>
          </div>
        </div>

        <h3 class="mt-4 mb-3">Conclusion</h3>
        <p>Consult with our academic mentors to run your profile against our predictive database of 15,000+ past successful admits.</p>
      `,
      tags: ["University Selection", "Admissions Strategy", "Rankings", "GPA"]
    },
    {
      id: "complete-student-visa-guide",
      title: "The Complete Student Visa Guide: Financial Proofs, GTE & Mock Interviews",
      category: "Visa & Immigration",
      author: "Sarah Jenkins",
      authorRole: "Head of Visa & Immigration",
      authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      date: "February 10, 2026",
      readTime: "9 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
      summary: "Avoid costly refusal stamps with properly seasoned funds, genuine student intent proofs, and foolproof consular mock preparation drills.",
      content: `
        <p class="lead">A university admission offer is only half the battle. Your student visa is the ultimate permit that unlocks foreign campus grounds. Consulates deny thousands of visas each intake due to minor financial discrepancy or poorly articulated career goals.</p>

        <h3 class="mt-4 mb-3">1. Financial Seasoning: The 28-Day Rule</h3>
        <p>For UK Tier-4 student visas, required living costs and remaining first-year tuition must remain in your account untouched for a minimum consecutive 28-day window before filing date. For US F-1 visas, liquid funds plus demonstrable ties to funding sponsors are strictly evaluated.</p>

        <h3 class="mt-4 mb-3">2. Demonstrating Genuine Student Intent</h3>
        <p>Visa officers want clear answers to three essential questions:</p>
        <ol>
          <li>Why this specific course and why not in your home country?</li>
          <li>How does this degree connect to your next 5-year employment roadmap?</li>
          <li>What socioeconomic ties guarantee you will return home after post-study work?</li>
        </ol>
      `,
      tags: ["Visa", "Immigration", "Mock Interview", "Financial Proof"]
    },
    {
      id: "scholarships-every-international-student-should-know",
      title: "10 Prestigious Scholarships Every International Student Should Know",
      category: "Scholarships",
      author: "Dr. Evelyn Vance",
      authorRole: "Director of International Admissions",
      authorImg: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
      date: "January 28, 2026",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?auto=format&fit=crop&w=1000&q=80",
      summary: "From full rides covering flights and stipends to 50% tuition discounts, uncover high-value global scholarship funds and how to win them.",
      content: `
        <p class="lead">Higher education overseas is an investment, but millions of dollars in global scholarships go unclaimed every year simply because candidates fail to meet early deadlines or write generic essays.</p>

        <h3 class="mt-4 mb-3">Top Global Programs</h3>
        <ol>
          <li><strong>Chevening Scholarship (UK):</strong> Fully funded master's degree for future leaders, including flights, accommodation, and living stipend.</li>
          <li><strong>Fulbright Foreign Student Program (USA):</strong> Prestigious US government grant covering full tuition, health insurance, and research expenses.</li>
          <li><strong>DAAD Scholarships (Germany):</strong> Generous monthly allowances for postgraduate students studying development-related fields.</li>
          <li><strong>Australia Awards:</strong> Full-ride scholarship focused on students from developing Indo-Pacific economies.</li>
        </ol>
      `,
      tags: ["Scholarships", "Funding", "Tuition Waiver", "Chevening"]
    },
    {
      id: "ielts-preparation-tips",
      title: "Crack IELTS 8.0: Proven Strategies for Writing & Speaking in 30 Days",
      category: "IELTS",
      author: "Liam O'Connor",
      authorRole: "Lead IELTS Master Trainer",
      authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      date: "January 19, 2026",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80",
      summary: "Stuck at Band 6.5 in Writing? Learn how lexical resource, cohesive devices, and grammatical range can lift your score to Band 8.0.",
      content: `
        <p class="lead">Most test-takers score 7.5+ in Listening and Reading, but drop points in Writing Task 2 and Speaking Part 3. Here is our 30-day tactical study plan to achieve Band 8.0.</p>
        
        <h3 class="mt-4 mb-3">The Writing Task 2 Formula</h3>
        <p>Avoid memorized generic templates which examiners immediately penalize. Focus on clear paragraph anatomy: Topic Sentence, Explanation, Concrete Example, and Summary Implication.</p>
      `,
      tags: ["IELTS", "Test Prep", "English Proficiency", "Band 8"]
    },
    {
      id: "cost-of-studying-in-the-uk",
      title: "Cost of Studying in the UK: A Realistic 2026 Budget Breakdown",
      category: "Study Abroad",
      author: "Marcus Thorne",
      authorRole: "Senior Academic Counselor",
      authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      date: "January 10, 2026",
      readTime: "5 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1000&q=80",
      summary: "Understand real UK expenses from tuition fees and NHS immigration health surcharges to groceries, transport, and part-time earnings.",
      content: `
        <p class="lead">Understanding currency conversion and daily expenditures prevents financial surprises after landing at Heathrow or Manchester Airport.</p>
        <h3 class="mt-4 mb-3">Expected Annual Breakdown</h3>
        <p>Tuition ranges from £13,000 for humanities to £28,000 for clinical sciences. Mandatory Immigration Health Surcharge (IHS) is £776 per year granting full NHS healthcare access.</p>
      `,
      tags: ["UK Education", "Budgeting", "Living Cost", "London"]
    },
    {
      id: "study-in-canada",
      title: "Study in Canada: Complete Guide to PGWP & Designated Learning Institutions",
      category: "Study Abroad",
      author: "Sarah Jenkins",
      authorRole: "Head of Visa & Immigration",
      authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      date: "January 04, 2026",
      readTime: "8 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?auto=format&fit=crop&w=1000&q=80",
      summary: "Navigate Canada's latest provincial attestation letters (PAL), DLI regulations, and how to preserve your 3-year post-graduation work permit rights.",
      content: `
        <p class="lead">Canada remains one of the world's most welcoming study destinations, but new provincial caps require strategic planning when choosing your institution.</p>
        <h3 class="mt-4 mb-3">Provincial Attestation Letter (PAL)</h3>
        <p>Under IRCC's modernized framework, all undergraduate applicants must receive a provincial allocation letter alongside their university acceptance before submitting their study permit file.</p>
      `,
      tags: ["Canada", "PGWP", "Study Permit", "Toronto"]
    },
    {
      id: "study-in-australia",
      title: "Study in Australia: Requirements, Genuine Student Test & Top Cities",
      category: "Study Abroad",
      author: "Dr. Evelyn Vance",
      authorRole: "Director of International Admissions",
      authorImg: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
      date: "December 22, 2025",
      readTime: "7 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1000&q=80",
      summary: "Everything you need to know about Australia's new Genuine Student (GS) assessment, regional visa extensions, and life in Melbourne and Sydney.",
      content: `
        <p class="lead">Home to the Group of Eight (Go8) world-leading research universities, Australia offers sun, exceptional safety, high minimum student wage, and pathway opportunities.</p>
        <h3 class="mt-4 mb-3">The Genuine Student (GS) Criterion</h3>
        <p>Australia replaced the older GTE system with the Genuine Student requirement, emphasizing course relevance to prior education and financial transparency.</p>
      `,
      tags: ["Australia", "Group of Eight", "Student Visa", "Sydney"]
    },
    {
      id: "mastering-the-statement-of-purpose",
      title: "Mastering the Statement of Purpose: What Ivy League Admissions Look For",
      category: "Writing",
      author: "Marcus Thorne",
      authorRole: "Senior Academic Counselor",
      authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      date: "December 14, 2025",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=1000&q=80",
      summary: "Transform an ordinary resume into a high-impact narrative that compels Ivy League and Russell Group admissions committees to say Yes.",
      content: `
        <p class="lead">An SOP is not a chronological repetition of your marksheet. It is your intellectual manifesto: what questions drive you, what professor's lab you want to work in, and what problem you aim to solve.</p>
      `,
      tags: ["SOP", "Admissions Essay", "Ivy League", "Writing Tips"]
    },
    {
      id: "part-time-jobs-abroad",
      title: "Balancing Part-Time Work and Studies: Legal Limits & High-Paying Roles",
      category: "Career",
      author: "Liam O'Connor",
      authorRole: "Lead IELTS Master Trainer",
      authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      date: "November 29, 2025",
      readTime: "5 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      summary: "How to legally work 20-24 hours per week during semester, find on-campus student ambassador jobs, and maintain a high GPA.",
      content: `
        <p class="lead">Working part-time teaches self-reliance and builds local professional communication. However, exceeding your visa's legal working limits can jeopardize your status.</p>
      `,
      tags: ["Student Life", "Part-time Jobs", "Career", "Work Rights"]
    },
    {
      id: "stem-courses-high-demand",
      title: "Top STEM Courses in High Demand Globally for 2026-2030",
      category: "Universities",
      author: "Dr. Evelyn Vance",
      authorRole: "Director of International Admissions",
      authorImg: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
      date: "November 15, 2025",
      readTime: "7 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      summary: "Artificial Intelligence, Renewable Energy, Biotechnology, and Quantum Computing: discover programs offering 3-year OPT extensions and highest starting salaries.",
      content: `
        <p class="lead">STEM degrees remain the golden gateway for international students aiming for post-study work permits like the US 3-year OPT or German Chancenkarte.</p>
      `,
      tags: ["STEM", "Future Careers", "Artificial Intelligence", "Salaries"]
    },
    {
      id: "how-to-prepare-for-f1-visa-interview",
      title: "How to Ace the US F-1 Visa Interview: 15 Most Common Questions Answered",
      category: "Visa",
      author: "Sarah Jenkins",
      authorRole: "Head of Visa & Immigration",
      authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      date: "November 02, 2025",
      readTime: "8 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=1000&q=80",
      summary: "The US visa officer has only 90 seconds to evaluate your file. Learn how to project confidence, present funding proofs, and articulate non-immigrant intent.",
      content: `
        <p class="lead">Under Section 214(b) of the US Immigration and Nationality Act, every applicant is presumed an intending immigrant until proven otherwise. Here is how to pass with flying colors.</p>
      `,
      tags: ["US Visa", "F-1", "Embassy Interview", "Immigration"]
    }
  ],

  universities: [
    {
      id: "oxford",
      name: "University of Oxford",
      country: "United Kingdom",
      countryCode: "GB",
      ranking: "#1 QS World Ranking",
      acceptanceRate: "14%",
      avgTuition: "£28,000 / yr",
      popularCourses: ["Medicine", "Philosophy & Politics", "Computer Science", "Law"],
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
      status: "Partner Institution",
      scholarshipsAvailable: true
    },
    {
      id: "harvard",
      name: "Harvard University",
      country: "United States",
      countryCode: "US",
      ranking: "#4 QS World Ranking",
      acceptanceRate: "4%",
      avgTuition: "$54,000 / yr",
      popularCourses: ["Business MBA", "Biotechnology", "Law", "Data Science"],
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600&q=80",
      status: "Featured",
      scholarshipsAvailable: true
    },
    {
      id: "toronto",
      name: "University of Toronto",
      country: "Canada",
      countryCode: "CA",
      ranking: "#21 QS World Ranking",
      acceptanceRate: "43%",
      avgTuition: "CAD $38,000 / yr",
      popularCourses: ["Artificial Intelligence", "Civil Engineering", "Finance", "Nursing"],
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&q=80",
      status: "Partner Institution",
      scholarshipsAvailable: true
    },
    {
      id: "melbourne",
      name: "University of Melbourne",
      country: "Australia",
      countryCode: "AU",
      ranking: "#13 QS World Ranking",
      acceptanceRate: "70%",
      avgTuition: "AUD $42,000 / yr",
      popularCourses: ["Architecture", "Biomedicine", "Commerce", "Information Systems"],
      image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=600&q=80",
      status: "Partner Institution",
      scholarshipsAvailable: true
    },
    {
      id: "tum",
      name: "Technical University of Munich",
      country: "Germany",
      countryCode: "DE",
      ranking: "#28 QS World Ranking",
      acceptanceRate: "35%",
      avgTuition: "€3,000 / semester",
      popularCourses: ["Robotics & AI", "Mechanical Engineering", "Informatics", "Physics"],
      image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=600&q=80",
      status: "Top STEM Destination",
      scholarshipsAvailable: true
    },
    {
      id: "trinity",
      name: "Trinity College Dublin",
      country: "Ireland",
      countryCode: "IE",
      ranking: "#81 QS World Ranking",
      acceptanceRate: "33%",
      avgTuition: "€20,000 / yr",
      popularCourses: ["Pharmaceutical Sciences", "Computer Science", "Literature", "Finance"],
      image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=80",
      status: "EU Tech Hub",
      scholarshipsAvailable: true
    },
    {
      id: "auckland",
      name: "University of Auckland",
      country: "New Zealand",
      countryCode: "NZ",
      ranking: "#68 QS World Ranking",
      acceptanceRate: "45%",
      avgTuition: "NZD $34,000 / yr",
      popularCourses: ["Environmental Science", "Software Engineering", "Global Business"],
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80",
      status: "Partner Institution",
      scholarshipsAvailable: true
    },
    {
      id: "nus",
      name: "National University of Singapore",
      country: "Singapore",
      countryCode: "SG",
      ranking: "#8 QS World Ranking",
      acceptanceRate: "12%",
      avgTuition: "SGD $32,000 / yr",
      popularCourses: ["Computer Science", "Supply Chain", "Finance", "Chemical Engineering"],
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80",
      status: "Asia Premier",
      scholarshipsAvailable: true
    }
  ],

  countries: [
    {
      id: "uk",
      name: "United Kingdom",
      code: "GB",
      flag: "🇬🇧",
      heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "130+ Universities",
      avgCost: "£14k - £28k / yr",
      workRights: "2-Year Graduate Visa (PSW)",
      visaProcessing: "3-4 Weeks",
      popularCourses: "Business Analytics, Data Science, Law, Luxury Management"
    },
    {
      id: "usa",
      name: "United States",
      code: "US",
      flag: "🇺🇸",
      heroImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "400+ Universities",
      avgCost: "$25k - $55k / yr",
      workRights: "3-Year STEM OPT",
      visaProcessing: "4-6 Weeks",
      popularCourses: "Computer Science, AI, Finance, Biomedical Engineering"
    },
    {
      id: "canada",
      name: "Canada",
      code: "CA",
      flag: "🇨🇦",
      heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "95+ Universities",
      avgCost: "CAD $20k - $40k / yr",
      workRights: "Up to 3-Year PGWP",
      visaProcessing: "6-8 Weeks",
      popularCourses: "Cloud Computing, Project Management, Healthcare, Business"
    },
    {
      id: "australia",
      name: "Australia",
      code: "AU",
      flag: "🇦🇺",
      heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "43 Universities",
      avgCost: "AUD $28k - $45k / yr",
      workRights: "2 to 4-Year Post Study Work",
      visaProcessing: "4-6 Weeks",
      popularCourses: "Cybersecurity, Accounting, Nursing, Civil Engineering"
    },
    {
      id: "germany",
      name: "Germany",
      code: "DE",
      flag: "🇩🇪",
      heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "80+ Universities",
      avgCost: "Zero to €3,000 / yr",
      workRights: "18-Month Job Seeking Visa",
      visaProcessing: "6-12 Weeks",
      popularCourses: "Automotive, Robotics, Green Energy, Mechanical"
    },
    {
      id: "ireland",
      name: "Ireland",
      code: "IE",
      flag: "🇮🇪",
      heroImage: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "25+ Universities",
      avgCost: "€14k - €25k / yr",
      workRights: "2-Year Third Level Graduate Scheme",
      visaProcessing: "4-6 Weeks",
      popularCourses: "Pharma, FinTech, Software Development, Cloud Architecture"
    },
    {
      id: "new-zealand",
      name: "New Zealand",
      code: "NZ",
      flag: "🇳🇿",
      heroImage: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "8 Universities",
      avgCost: "NZD $26k - $38k / yr",
      workRights: "3-Year Open Work Visa",
      visaProcessing: "4-5 Weeks",
      popularCourses: "Agriculture Science, Tourism, Construction, IT"
    },
    {
      id: "singapore",
      name: "Singapore",
      code: "SG",
      flag: "🇸🇬",
      heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
      universitiesCount: "6 Universities",
      avgCost: "SGD $28k - $42k / yr",
      workRights: "Long-Term Visit Pass (LTVP)",
      visaProcessing: "2-3 Weeks",
      popularCourses: "Artificial Intelligence, International Finance, Logistics"
    }
  ],

  students: [
    {
      id: "STU-1001",
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
      targetCountry: "United Kingdom",
      studyLevel: "Master's (MSc)",
      course: "MSc Data Science",
      university: "University of Manchester",
      applicationStatus: "Visa Processing",
      progress: 80,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2025-11-15"
    },
    {
      id: "STU-1002",
      name: "Fatima Al-Mansoor",
      email: "fatima.mansoor@example.com",
      phone: "+971 50 123 4567",
      targetCountry: "United States",
      studyLevel: "Bachelor's (BSc)",
      course: "BSc Biomedical Engineering",
      university: "Boston University",
      applicationStatus: "Offer Received",
      progress: 65,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2025-12-01"
    },
    {
      id: "STU-1003",
      name: "Liam Chen",
      email: "liam.chen@example.com",
      phone: "+65 9123 4567",
      targetCountry: "Australia",
      studyLevel: "Master's (MBA)",
      course: "Master of Business Administration",
      university: "University of Melbourne",
      applicationStatus: "Visa Approved",
      progress: 100,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2025-10-10"
    },
    {
      id: "STU-1004",
      name: "Elena Rostova",
      email: "elena.rostova@example.com",
      phone: "+49 170 1234567",
      targetCountry: "Canada",
      studyLevel: "Post-Graduate Diploma",
      course: "AI & Machine Learning",
      university: "University of Toronto",
      applicationStatus: "University Applied",
      progress: 50,
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2026-01-05"
    },
    {
      id: "STU-1005",
      name: "Kofi Mensah",
      email: "kofi.mensah@example.com",
      phone: "+233 24 123 4567",
      targetCountry: "Germany",
      studyLevel: "Master's (MSc)",
      course: "Renewable Energy Systems",
      university: "Technical University of Munich",
      applicationStatus: "Documents Submitted",
      progress: 35,
      avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2026-01-14"
    },
    {
      id: "STU-1006",
      name: "Priya Patel",
      email: "priya.patel@example.com",
      phone: "+91 98220 11223",
      targetCountry: "Ireland",
      studyLevel: "Master's (MSc)",
      course: "Pharmaceutical Sciences",
      university: "Trinity College Dublin",
      applicationStatus: "Offer Received",
      progress: 65,
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2025-11-20"
    },
    {
      id: "STU-1007",
      name: "Mateo Hernandez",
      email: "mateo.h@example.com",
      phone: "+52 55 1234 5678",
      targetCountry: "United Kingdom",
      studyLevel: "Master's (LLM)",
      course: "International Commercial Law",
      university: "University of Edinburgh",
      applicationStatus: "Visa Approved",
      progress: 100,
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2025-09-15"
    },
    {
      id: "STU-1008",
      name: "Zainab Begum",
      email: "zainab.b@example.com",
      phone: "+880 1711 223344",
      targetCountry: "Australia",
      studyLevel: "Bachelor's (BSc)",
      course: "Bachelor of Nursing",
      university: "Monash University",
      applicationStatus: "Visa Processing",
      progress: 80,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2025-12-10"
    },
    {
      id: "STU-1009",
      name: "Lucas Silva",
      email: "lucas.silva@example.com",
      phone: "+55 11 98765-4321",
      targetCountry: "United States",
      studyLevel: "Master's (MSc)",
      course: "Cybersecurity Engineering",
      university: "Purdue University",
      applicationStatus: "University Applied",
      progress: 50,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2026-01-22"
    },
    {
      id: "STU-1010",
      name: "Hana Takahashi",
      email: "hana.takahashi@example.com",
      phone: "+81 90 1234 5678",
      targetCountry: "New Zealand",
      studyLevel: "Master's (MA)",
      course: "Environmental Planning",
      university: "University of Auckland",
      applicationStatus: "Profile Created",
      progress: 20,
      avatar: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?auto=format&fit=crop&w=150&q=80",
      enrolledDate: "2026-02-01"
    }
  ],

  applications: [
    {
      id: "APP-901",
      studentName: "Aarav Sharma",
      studentId: "STU-1001",
      university: "University of Manchester",
      country: "UK",
      course: "MSc Data Science",
      intake: "September 2026",
      counselor: "Marcus Thorne",
      status: "Visa Processing",
      lastUpdate: "2026-02-22"
    },
    {
      id: "APP-902",
      studentName: "Fatima Al-Mansoor",
      studentId: "STU-1002",
      university: "Boston University",
      country: "USA",
      course: "BSc Biomedical Engineering",
      intake: "Fall 2026",
      counselor: "Dr. Evelyn Vance",
      status: "Offer Received",
      lastUpdate: "2026-02-20"
    },
    {
      id: "APP-903",
      studentName: "Liam Chen",
      studentId: "STU-1003",
      university: "University of Melbourne",
      country: "Australia",
      course: "MBA Global Leadership",
      intake: "July 2026",
      counselor: "Sarah Jenkins",
      status: "Visa Approved",
      lastUpdate: "2026-02-18"
    },
    {
      id: "APP-904",
      studentName: "Elena Rostova",
      studentId: "STU-1004",
      university: "University of Toronto",
      country: "Canada",
      course: "Applied AI Specialist",
      intake: "September 2026",
      counselor: "Marcus Thorne",
      status: "University Applied",
      lastUpdate: "2026-02-15"
    },
    {
      id: "APP-905",
      studentName: "Kofi Mensah",
      studentId: "STU-1005",
      university: "TU Munich",
      country: "Germany",
      course: "MSc Renewable Energy",
      intake: "Winter 2026",
      counselor: "Dr. Evelyn Vance",
      status: "Documents Submitted",
      lastUpdate: "2026-02-10"
    },
    {
      id: "APP-906",
      studentName: "Priya Patel",
      studentId: "STU-1006",
      university: "Trinity College Dublin",
      country: "Ireland",
      course: "MSc Pharma Analytics",
      intake: "September 2026",
      counselor: "Sarah Jenkins",
      status: "Offer Received",
      lastUpdate: "2026-02-08"
    },
    {
      id: "APP-907",
      studentName: "Mateo Hernandez",
      studentId: "STU-1007",
      university: "University of Edinburgh",
      country: "UK",
      course: "LLM International Law",
      intake: "September 2026",
      counselor: "Marcus Thorne",
      status: "Visa Approved",
      lastUpdate: "2026-02-04"
    },
    {
      id: "APP-908",
      studentName: "Zainab Begum",
      studentId: "STU-1008",
      university: "Monash University",
      country: "Australia",
      course: "Bachelor of Nursing",
      intake: "July 2026",
      counselor: "Sarah Jenkins",
      status: "Visa Processing",
      lastUpdate: "2026-02-01"
    },
    {
      id: "APP-909",
      studentName: "Lucas Silva",
      studentId: "STU-1009",
      university: "Purdue University",
      country: "USA",
      course: "MSc Cybersecurity",
      intake: "Fall 2026",
      counselor: "Dr. Evelyn Vance",
      status: "University Applied",
      lastUpdate: "2026-01-28"
    },
    {
      id: "APP-910",
      studentName: "Hana Takahashi",
      studentId: "STU-1010",
      university: "University of Auckland",
      country: "New Zealand",
      course: "MA Urban Resilience",
      intake: "July 2026",
      counselor: "Marcus Thorne",
      status: "Profile Created",
      lastUpdate: "2026-01-25"
    }
  ],

  testimonials: [
    {
      id: "TEST-1",
      name: "Rohan Varma",
      university: "Imperial College London, UK",
      course: "MSc Advanced Computing",
      rating: 5,
      text: "GlobalPath transformed my application from standard to exceptional. With their guidance, I secured admission at Imperial and an £8,000 departmental scholarship. The visa mock interview was identical to what the officer asked!",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
      intake: "2025 Graduate"
    },
    {
      id: "TEST-2",
      name: "Mei-Ling Wang",
      university: "University of Sydney, Australia",
      course: "Master of Commerce",
      rating: 5,
      text: "The best education counselors in the industry. They handled my genuine student test (GST) statement and student visa within 18 days. I have already recommended them to three of my colleagues.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      intake: "Class of 2025"
    },
    {
      id: "TEST-3",
      name: "Omar Al-Sayed",
      university: "McGill University, Canada",
      course: "BSc Mechanical Engineering",
      rating: 5,
      text: "Getting a Canadian study permit under the new provincial quota felt impossible until GlobalPath audited my file. They kept me calm, guided my father through banking affidavits, and got our approval stamped.",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
      intake: "Fall 2025"
    },
    {
      id: "TEST-4",
      name: "Ananya Deshmukh",
      university: "Columbia University, USA",
      course: "Master of Public Administration",
      rating: 5,
      text: "The SOP editing service was brilliant. They helped weave my grassroots NGO projects into an Ivy-caliber narrative. I got into Columbia and Georgetown with substantial fellowship assistance.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
      intake: "Class of 2026"
    },
    {
      id: "TEST-5",
      name: "David Kimani",
      university: "TU Munich, Germany",
      course: "MSc Environmental Engineering",
      rating: 5,
      text: "Studying in Germany virtually tuition-free seemed like a dream. GlobalPath navigated the APS verification and German block account setup without any stress. Living my dream in Munich today!",
      avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&q=80",
      intake: "Winter 2025"
    },
    {
      id: "TEST-6",
      name: "Sophia Martinez",
      university: "Trinity College Dublin, Ireland",
      course: "MSc Data Analytics",
      rating: 5,
      text: "Ireland's 2-year post-study work scheme attracted me, and GlobalPath connected me with alumni working in Dublin's Silicon Docks. The personalized support was world-class.",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
      intake: "Class of 2025"
    },
    {
      id: "TEST-7",
      name: "Tariq Mansoor",
      university: "University of Auckland, New Zealand",
      course: "Master of Information Technology",
      rating: 5,
      text: "Smooth, professional, and transparent. Every milestone was updated inside my student dashboard in real-time. I never had to wonder what stage my application was in.",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80",
      intake: "July 2025"
    },
    {
      id: "TEST-8",
      name: "Chloe Dupont",
      university: "University of Edinburgh, UK",
      course: "MSc International Development",
      rating: 5,
      text: "From my first free diagnostic consultation to collecting my BRP card in Scotland, GlobalPath was with me every step. Truly an overseas consultancy you can trust with your future.",
      avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80",
      intake: "Class of 2026"
    }
  ],

  gallery: [
    {
      id: "GAL-1",
      title: "Oxford Radcliffe Camera Study Tour",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      caption: "International students exploring Oxford University during our annual summer academic tour."
    },
    {
      id: "GAL-2",
      title: "Global Education Conclave 2026",
      category: "Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      caption: "Over 60 global university delegates meeting aspiring scholars at our Annual Education Conclave."
    },
    {
      id: "GAL-3",
      title: "1-on-1 Counseling Session",
      category: "Counselling",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
      caption: "Senior mentor conducting university shortlist profiling with an aspiring postgraduate candidate."
    },
    {
      id: "GAL-4",
      title: "Graduation Celebration in London",
      category: "Students",
      image: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=800&q=80",
      caption: "Celebrating the convocation of our cohort at Queen Mary University of London."
    },
    {
      id: "GAL-5",
      title: "University of Toronto Faculty Delegation",
      category: "University Visits",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
      caption: "Admissions deans from U of T conducting spot assessments at the GlobalPath main auditorium."
    },
    {
      id: "GAL-6",
      title: "Visa Success & BRP Handover Ceremony",
      category: "Visa Assistance",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      caption: "Smiling students receiving their approved Tier-4 and F-1 student visas ahead of the Fall intake."
    },
    {
      id: "GAL-7",
      title: "Harvard Yard Spring Walk",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
      caption: "Students walking through the historic Harvard Yard between graduate lecture halls."
    },
    {
      id: "GAL-8",
      title: "Pre-Departure Briefing & Airport Send-Off",
      category: "Events",
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80",
      caption: "Parents and students attending our packed Pre-Departure interactive session."
    },
    {
      id: "GAL-9",
      title: "IELTS Intensive Masterclass Group",
      category: "Counselling",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      caption: "Our master trainers guiding candidates through real-time audio and writing mock assessments."
    },
    {
      id: "GAL-10",
      title: "Melbourne Campus Life",
      category: "Students",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      caption: "GlobalPath alumni enjoying lunch outside the University of Melbourne Student Pavilion."
    },
    {
      id: "GAL-11",
      title: "STEM Innovation Lab Workshop",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
      caption: "International scholars collaborating on robotics research at Technical University of Munich."
    },
    {
      id: "GAL-12",
      title: "Global Scholars Peer Mentorship",
      category: "Students",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      caption: "Senior student mentors facilitating orientation and study groups for incoming first-year scholars."
    }
  ],

  messages: [
    {
      id: "MSG-401",
      name: "Tanya Kapoor",
      email: "tanya.kapoor@gmail.com",
      phone: "+91 99887 66554",
      subject: "Scholarship query for MSc Biotechnology (Germany)",
      message: "Hello team, I graduated with an 8.6 CGPA in Biochemistry and would like to know if public universities in Germany have English-taught master programs with DAAD funding for Winter 2026.",
      date: "2026-02-24 10:15 AM",
      status: "Unread"
    },
    {
      id: "MSG-402",
      name: "David Miller",
      email: "d.miller@outlook.com",
      phone: "+1 415 555 2671",
      subject: "F-1 visa interview appointment delays",
      message: "I received my I-20 from NYU for Computer Engineering but consular interview slots in my region show August dates. Can your team assist in securing an emergency expedited appointment?",
      date: "2026-02-23 04:40 PM",
      status: "Replied"
    },
    {
      id: "MSG-403",
      name: "Amina Al-Nuaimi",
      email: "amina.nuaimi@yahoo.com",
      phone: "+971 55 987 6543",
      subject: "Undergraduate Business Application in UK",
      message: "I am completing my IB Diploma with 36 points. I want to apply for King's College London and Warwick for BSc Economics. How many UCAS choices do you assist with?",
      date: "2026-02-23 01:20 PM",
      status: "Read"
    },
    {
      id: "MSG-404",
      name: "Carlos Sanchez",
      email: "carlos.sanchez@hotmail.com",
      phone: "+34 612 345 678",
      subject: "Post-Study Work rights in Australia",
      message: "I am interested in Master of Cybersecurity at Melbourne or Monash. Could you explain the latest 2026 PR pathways for regional vs metropolitan campuses?",
      date: "2026-02-22 11:05 AM",
      status: "Read"
    },
    {
      id: "MSG-405",
      name: "Meera Krishnan",
      email: "meera.krishnan@gmail.com",
      phone: "+91 97410 88990",
      subject: "SOP Editing turnaround time",
      message: "I have drafted my personal statement for Imperial and Oxford. How fast can your Ivy League editorial team return a thoroughly revised second draft?",
      date: "2026-02-21 06:10 PM",
      status: "Replied"
    },
    {
      id: "MSG-406",
      name: "Benjamin Scott",
      email: "b.scott@gmail.com",
      phone: "+61 400 123 456",
      subject: "Dual Degree MBA options in Europe",
      message: "Looking for 1-year MBA programs in INSEAD or London Business School. Does your agency provide GMAT waiver profile evaluations?",
      date: "2026-02-20 02:30 PM",
      status: "Read"
    },
    {
      id: "MSG-407",
      name: "Rania Haddad",
      email: "rania.haddad@live.com",
      phone: "+961 70 123 456",
      subject: "Canadian Study Permit - Proof of Funds",
      message: "Can educational loans sanctioned by international lenders like Prodigy Finance be used as proof of funds for IRCC study permits?",
      date: "2026-02-19 09:45 AM",
      status: "Unread"
    },
    {
      id: "MSG-408",
      name: "Kenji Sato",
      email: "kenji.sato@jp.com",
      phone: "+81 80 5555 4321",
      subject: "IELTS Band 7.5 booster course",
      message: "I am currently at Band 6.5 and need Band 7.5 for Oxford Law admission. Can I book 1-on-1 private speaking sessions starting next Monday?",
      date: "2026-02-18 03:15 PM",
      status: "Replied"
    },
    {
      id: "MSG-409",
      name: "Zoe Campbell",
      email: "zoe.campbell@outlook.co.uk",
      phone: "+44 7700 900123",
      subject: "Study in New Zealand - Environmental Science",
      message: "Interested in master programs starting February 2027 in Christchurch or Auckland. Would love to speak with an educational counselor.",
      date: "2026-02-17 12:00 PM",
      status: "Read"
    },
    {
      id: "MSG-410",
      name: "Ibrahim Al-Fassi",
      email: "ibrahim.fassi@menamail.com",
      phone: "+212 661 234567",
      subject: "Medical residency pathways in Ireland",
      message: "Do you advise foreign medical graduates aiming to undertake clinical rotations or MSc surgical sciences in Dublin?",
      date: "2026-02-16 05:50 PM",
      status: "Unread"
    }
  ],

  orders: [
    {
      id: "ORD-8801",
      studentName: "Aarav Sharma",
      service: "Premium All-Inclusive Package",
      amount: "$899",
      paymentMethod: "Credit Card (Stripe)",
      status: "Completed",
      date: "2026-02-23"
    },
    {
      id: "ORD-8802",
      studentName: "Fatima Al-Mansoor",
      service: "Student Visa Guidance & Mock Prep",
      amount: "$449",
      paymentMethod: "PayPal",
      status: "Completed",
      date: "2026-02-21"
    },
    {
      id: "ORD-8803",
      studentName: "Liam Chen",
      service: "Standard Application Support",
      amount: "$599",
      paymentMethod: "Bank Transfer",
      status: "Completed",
      date: "2026-02-19"
    },
    {
      id: "ORD-8804",
      studentName: "Elena Rostova",
      service: "SOP & Essay Editing Masterclass",
      amount: "$249",
      paymentMethod: "Apple Pay",
      status: "Completed",
      date: "2026-02-18"
    },
    {
      id: "ORD-8805",
      studentName: "Kofi Mensah",
      service: "University & Course Selection",
      amount: "$299",
      paymentMethod: "Credit Card",
      status: "Pending",
      date: "2026-02-16"
    },
    {
      id: "ORD-8806",
      studentName: "Priya Patel",
      service: "IELTS Intensive Coaching Bundle",
      amount: "$199",
      paymentMethod: "UPI / NetBanking",
      status: "Completed",
      date: "2026-02-14"
    },
    {
      id: "ORD-8807",
      studentName: "Mateo Hernandez",
      service: "Premium All-Inclusive Package",
      amount: "$899",
      paymentMethod: "Credit Card",
      status: "Completed",
      date: "2026-02-12"
    },
    {
      id: "ORD-8808",
      studentName: "Zainab Begum",
      service: "Student Visa Guidance",
      amount: "$449",
      paymentMethod: "PayPal",
      status: "Completed",
      date: "2026-02-10"
    },
    {
      id: "ORD-8809",
      studentName: "Lucas Silva",
      service: "Standard Application Support",
      amount: "$599",
      paymentMethod: "Credit Card",
      status: "Refunded",
      date: "2026-02-05"
    },
    {
      id: "ORD-8810",
      studentName: "Hana Takahashi",
      service: "Initial Consultation Diagnostic",
      amount: "$99",
      paymentMethod: "Google Pay",
      status: "Completed",
      date: "2026-02-01"
    }
  ],

  pricing: [
    {
      id: "plan-basic",
      name: "Basic Guidance",
      price: "$299",
      period: "One-Time",
      description: "Ideal for self-directed students who only need expert university shortlisting and profiling check.",
      featured: false,
      badge: "Starter",
      features: [
        "1-on-1 Profile Assessment (60 mins)",
        "Shortlist of 5 Universities (Dream/Target/Safe)",
        "Standard Eligibility & Entry Criteria Check",
        "Curriculum & Cost Comparison Sheet",
        "Email Support for 30 Days"
      ],
      notIncluded: [
        "Visa Interview Coaching",
        "SOP & LOR Line Editing",
        "Dedicated Case Officer"
      ]
    },
    {
      id: "plan-standard",
      name: "Standard Application",
      price: "$599",
      period: "One-Time",
      description: "Complete hands-on application support from university portal lodging to unconditional offer letter.",
      featured: false,
      badge: "Popular",
      features: [
        "Shortlist up to 8 Global Universities",
        "Full Application Lodgement in 3 Countries",
        "2 Rounds of SOP & CV Professional Editing",
        "Letter of Recommendation (LOR) Templates",
        "Scholarship Opportunity Screening",
        "Assigned Dedicated Senior Counselor"
      ],
      notIncluded: [
        "Consular Mock Visa Interviews",
        "Post-Arrival Accommodation Booking"
      ]
    },
    {
      id: "plan-premium",
      name: "Premium Comprehensive",
      price: "$899",
      period: "One-Time",
      description: "Our flagship end-to-end concierge package with 99.2% visa guarantee from day one until campus arrival.",
      featured: true,
      badge: "Best Value",
      features: [
        "Unlimited University Applications (Top 10 Lodged)",
        "Unlimited SOP, LOR, and Essay Polish",
        "Direct University Application Fee Waivers",
        "Full Visa Documentation & Financial Audit",
        "2 One-on-One Visa Mock Interviews",
        "Guaranteed Student Housing Placement",
        "Pre-Departure Briefing & Free Forex Card",
        "24/7 Priority WhatsApp Hotline with Counselor"
      ],
      notIncluded: []
    }
  ],

  settings: {
    agencyName: "GlobalPath Education",
    tagline: "Your Journey. Your Future. Our Guidance.",
    contactEmail: "admissions@globalpathedu.com",
    supportPhone: "+1 (800) 592-7489",
    whatsappNumber: "+44 7700 900123",
    headquarters: "452 Fifth Avenue, 14th Floor, New York, NY 10018, USA",
    ukBranch: "100 Bishopsgate, London EC2N 4AG, United Kingdom",
    australiaBranch: "Level 28, 385 Bourke Street, Melbourne VIC 3000, Australia",
    defaultCurrency: "USD ($)",
    defaultLanguage: "en",
    autoApproveReviews: true,
    enableEmailAlerts: true,
    maintenanceMode: false
  }
};

/**
 * Universal Data Layer - LocalStorage Synchronizer
 */
const GlobalData = {
  storageKeyPrefix: "gp_edu_v4_",

  init() {
    Object.keys(INITIAL_DATA).forEach(key => {
      const storageKey = this.storageKeyPrefix + key;
      if (!localStorage.getItem(storageKey)) {
        localStorage.setItem(storageKey, JSON.stringify(INITIAL_DATA[key]));
      }
    });
  },

  get(key) {
    const storageKey = this.storageKeyPrefix + key;
    const stored = localStorage.getItem(storageKey);
    if (!stored) {
      if (INITIAL_DATA[key]) {
        localStorage.setItem(storageKey, JSON.stringify(INITIAL_DATA[key]));
        return INITIAL_DATA[key];
      }
      return [];
    }
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing local storage for key:", key, e);
      return INITIAL_DATA[key] || [];
    }
  },

  set(key, value) {
    const storageKey = this.storageKeyPrefix + key;
    localStorage.setItem(storageKey, JSON.stringify(value));
  },

  add(key, item) {
    const list = this.get(key);
    if (!item.id) {
      item.id = "ID-" + Date.now();
    }
    list.unshift(item);
    this.set(key, list);
    return item;
  },

  update(key, id, updatedData) {
    const list = this.get(key);
    const index = list.findIndex(item => String(item.id) === String(id));
    if (index !== -1) {
      list[index] = { ...list[index], ...updatedData };
      this.set(key, list);
      return list[index];
    }
    return null;
  },

  delete(key, id) {
    const list = this.get(key);
    const filtered = list.filter(item => String(item.id) !== String(id));
    this.set(key, filtered);
    return true;
  },

  getById(key, id) {
    const list = this.get(key);
    return list.find(item => String(item.id) === String(id)) || null;
  },

  reset() {
    Object.keys(INITIAL_DATA).forEach(key => {
      const storageKey = this.storageKeyPrefix + key;
      localStorage.setItem(storageKey, JSON.stringify(INITIAL_DATA[key]));
    });
  }
};

// Initialize immediately on script load
GlobalData.init();
