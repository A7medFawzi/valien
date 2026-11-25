import React, { useEffect, useState, useRef } from 'react';
import rawHtml from '../content/home.html?raw';
import { initAnimations } from '../utils/animations';
import icons from '../utils/icons.json';

export default function HomePage({ navigate }) {
  const containerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const projectUserInteractedRef = useRef(false);

  // Auto-cycle Selected Projects every 4s unless user clicked a tab
  useEffect(() => {
    const interval = setInterval(() => {
      if (!projectUserInteractedRef.current) {
        setActiveProject((prev) => (prev + 1) % 3);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // FAQ open state: set of open index indices
  const [openFaqs, setOpenFaqs] = useState(new Set());

  // FAQ data (extracted directly from code)
  const faqData = [
    {
      q: "What is included in the Starter plan?",
      a: "The Starter plan includes unlimited analytics usage, premium support, customer care, and collaboration tools—everything you need to get started!"
    },
    {
      q: "Can I switch plans later?",
      a: "Absolutely! You can upgrade or downgrade your plan at any time without any hassle."
    },
    {
      q: "How secure is my data?",
      a: "Your data is protected with enterprise-grade security measures, including encryption and regular audits, ensuring maximum safety."
    },
    {
      q: "Can I integrate this platform with other tools?",
      a: "Absolutely! Our platform supports integrations with popular CRMs and business tools, allowing for seamless workflows."
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes! Our Pro plan includes a free trial so you can explore all the features before committing."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, and for Enterprise plans, we also support invoicing and wire transfers."
    },
    {
      q: "How does the 2% donation work?",
      a: "We allocate 2% of all memberships directly to pediatric well-being organizations, helping make a difference with every subscription."
    },
    {
      q: "What makes your platform different?",
      a: "Our focus is on user-friendly design, actionable insights, and top-notch customer support—giving you everything you need to grow."
    }
  ];

  // Project details
  const projectsData = [
    {
      company: "ElevenLabs",
      year: "2025",
      title: "Sales Workflow Optimization",
      desc: "We automated lead follow-ups and CRM tasks, reducing manual work by 70% and boosting qualified lead conversion rates.",
      img: "/images/Jjd3aeyaIOfbSK47G6sftueqw7g.png"
    },
    {
      company: "MedAssist AI",
      year: "2024",
      title: "Healthcare Intake Automation",
      desc: "Built an intake automation system that cut admin time by 55% and improved patient onboarding efficiency by 38% across all clinics.",
      img: "/images/y3qelaaqWj1N7BKGIHNKl6VL5fs.png"
    },
    {
      company: "AutoTag Pro",
      year: "2023",
      title: "E-commerce Product Tagging",
      desc: "Created an AI tool that auto-tagged 10K+ SKUs with 92% accuracy, cutting tagging time by 80% and boosting product by 30%.",
      img: "/images/QGUnUdBrjJ7dPQtbr7XqO3p0KRE.png"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;

    // 1. Hydrate appear/scroll animations, hero video, pulser, and interactive effects
    const cleanupAnimations = initAnimations(root);

    // 1b. Ensure exact named icons (Services, Careers, Final CTA, Footer) across all breakpoints
    const setIconByText = (text, svgHtml) => {
      if (!svgHtml) return;
      root.querySelectorAll('p, h3, h4, span').forEach(el => {
        if (el.textContent.trim() === text) {
          let cur = el.parentElement;
          for (let i = 0; i < 6 && cur; i++) {
            const existingSvg = cur.querySelector('svg');
            if (existingSvg && existingSvg.parentElement) {
              existingSvg.outerHTML = svgHtml;
              break;
            }
            cur = cur.parentElement;
          }
        }
      });
    };
    setIconByText('Data-driven', icons['Data-driven']);
    setIconByText('Efficient Growth', icons['Efficient Growth']);
    setIconByText('Product designer', icons['Product designer']);
    setIconByText('Back end developer', icons['Back end developer']);
    setIconByText('100% safe payment', icons['100% safe payment']);
    setIconByText('10k+ people trust us', icons['10k+ people trust us']);

    root.querySelectorAll('footer a').forEach(a => {
      const href = a.getAttribute('href') || '';
      const svg = a.querySelector('svg');
      if (!svg) return;
      if (href.includes('x.com') && icons.footer_x) svg.outerHTML = icons.footer_x;
      else if (href.includes('instagram.com') && icons.footer_ig) svg.outerHTML = icons.footer_ig;
      else if (href.includes('facebook.com') && icons.footer_fb) svg.outerHTML = icons.footer_fb;
      else if (href.includes('dribbble.com') && icons.footer_db) svg.outerHTML = icons.footer_db;
    });

    // 2. Hero logos strip stays static & centered; marquees are hydrated in initAnimations.

    // 3. Mobile Hamburger Button Hook
    const hamburgerBtns = root.querySelectorAll('[data-vln-name="Hamburger"]');
    hamburgerBtns.forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.onclick = (e) => {
        e.stopPropagation();
        setMobileMenuOpen(prev => !prev);
      };
    });

    // 4. Pricing Toggle Buttons Hook
    const monthlyBtns = root.querySelectorAll('[data-vln-name="monthly on-click"], [data-vln-name="monthly"]');
    const yearlyBtns = root.querySelectorAll('[data-vln-name="yearly"]');

    monthlyBtns.forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsYearly(false);
      };
    });

    yearlyBtns.forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsYearly(true);
      };
    });

    // 5. Project Selector Tabs Hook
    const projectCardsContainer = root.querySelector('[data-vln-name="project cards"]');
    if (projectCardsContainer) {
      const tabs = projectCardsContainer.querySelectorAll('.vln-DEeUU, [data-vln-name*="active"], [data-vln-name="non active"]');
      tabs.forEach((tab, idx) => {
        tab.style.cursor = 'pointer';
        tab.onclick = (e) => {
          e.preventDefault();
          projectUserInteractedRef.current = true;
          setActiveProject(idx);
        };
      });
    }

    // 6. FAQ Accordion Click Handlers Hook
    const faqQuestions = root.querySelectorAll('[data-vln-name="question"]');
    faqQuestions.forEach((qEl, idx) => {
      qEl.style.cursor = 'pointer';
      qEl.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenFaqs(prev => {
          const next = new Set(prev);
          if (next.has(idx % 8)) {
            next.delete(idx % 8);
          } else {
            next.add(idx % 8);
          }
          return next;
        });
      };
    });

    return () => {
      cleanupAnimations();
    };
  }, []);

  // Update Hamburger animation icon
  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;
    const hamburgerBtns = root.querySelectorAll('[data-vln-name="Hamburger"]');
    hamburgerBtns.forEach(btn => {
      const topBar = btn.querySelector('[data-vln-name="Top"]');
      const bottomBar = btn.querySelector('[data-vln-name="Bottom"]');
      if (topBar && bottomBar) {
        if (mobileMenuOpen) {
          topBar.style.transform = 'translateY(3.5px) rotate(45deg)';
          topBar.style.transition = 'transform 0.3s ease';
          bottomBar.style.transform = 'translateY(-3.5px) rotate(-45deg)';
          bottomBar.style.transition = 'transform 0.3s ease';
        } else {
          topBar.style.transform = 'none';
          topBar.style.transition = 'transform 0.3s ease';
          bottomBar.style.transform = 'none';
          bottomBar.style.transition = 'transform 0.3s ease';
        }
      }
    });
  }, [mobileMenuOpen]);

  // Update Pricing Display ($/mo vs yearly)
  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;
    const pricingSection = root.querySelector('[data-vln-name="pricing section"]');
    if (!pricingSection) return;

    const priceElements = pricingSection.querySelectorAll('h3.vln-styles-preset-8d211g');
    if (priceElements.length === 3) {
      if (isYearly) {
        priceElements[0].textContent = '$700';
        priceElements[1].textContent = '$1500';
        priceElements[2].textContent = '$3600';
      } else {
        priceElements[0].textContent = '$750';
        priceElements[1].textContent = '$1700';
        priceElements[2].textContent = '$4700';
      }
    }

    const monthlyBtn = pricingSection.querySelector('[data-vln-name="monthly on-click"]') || pricingSection.querySelector('[data-vln-name="monthly"]');
    const yearlyBtn = pricingSection.querySelector('[data-vln-name="yearly"]');
    const selectedPill = pricingSection.querySelector('[data-vln-name="monthly selected"]');

    if (monthlyBtn && yearlyBtn) {
      if (isYearly) {
        monthlyBtn.style.opacity = '0.6';
        yearlyBtn.style.opacity = '1';
        if (selectedPill) {
          selectedPill.style.transition = 'all 0.3s ease';
          selectedPill.style.transform = 'translateX(6px)';
        }
      } else {
        monthlyBtn.style.opacity = '1';
        yearlyBtn.style.opacity = '0.6';
        if (selectedPill) {
          selectedPill.style.transition = 'all 0.3s ease';
          selectedPill.style.transform = 'none';
        }
      }
    }
  }, [isYearly]);

  // Update Project Showcase (Tabs, Image, Title, Description)
  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;
    const projectsSection = root.querySelector('[data-vln-name="Projects"]');
    if (!projectsSection) return;

    const tabs = projectsSection.querySelectorAll('[data-vln-name="project cards"] .vln-DEeUU, [data-vln-name="project cards"] [data-vln-name*="active"], [data-vln-name="project cards"] [data-vln-name="non active"]');
    tabs.forEach((tab, idx) => {
      if (idx === activeProject) {
        tab.style.opacity = '1';
        tab.style.border = '1px solid rgba(0, 0, 0, 0.25)';
        tab.style.boxShadow = '0 4px 16px rgba(150, 255, 176, 0.35)';
      } else {
        tab.style.opacity = '0.6';
        tab.style.border = '1px solid transparent';
        tab.style.boxShadow = 'none';
      }
    });

    const rightDiv = projectsSection.querySelector('[data-vln-name="right div"]');
    const proj = projectsData[activeProject];
    if (rightDiv && proj) {
      const img = rightDiv.querySelector('img');
      if (img) {
        img.src = proj.img;
        img.style.transition = 'opacity 0.3s ease';
      }
      const titleEl = rightDiv.querySelector('h3');
      if (titleEl) {
        titleEl.textContent = proj.title;
      }
      const descEl = rightDiv.querySelector('p');
      if (descEl) {
        descEl.textContent = proj.desc;
      }
    }
  }, [activeProject]);

  // Update FAQ Accordion Rows
  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;
    const faqSection = root.querySelector('[data-vln-name="FAQ section"]');
    if (!faqSection) return;

    const questionContainers = faqSection.querySelectorAll('[data-vln-name="container"] .vln-za9i7y');
    questionContainers.forEach((qEl, idx) => {
      const parentContainer = qEl.closest('.vln-1kwon00') || qEl.parentElement;
      const icon = qEl.querySelector('[data-vln-name="Icon container"]');
      const faqIndex = idx % 8;
      const isOpen = openFaqs.has(faqIndex);

      if (icon) {
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
        icon.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
      }

      let answerBox = parentContainer.querySelector('.faq-dynamic-answer');
      if (!answerBox) {
        answerBox = document.createElement('div');
        answerBox.className = 'faq-dynamic-answer';
        answerBox.style.padding = '0 20px';
        answerBox.style.color = 'rgba(28, 22, 41, 0.7)';
        answerBox.style.fontSize = '15px';
        answerBox.style.lineHeight = '1.6';
        answerBox.style.overflow = 'hidden';
        answerBox.style.transition = 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, margin 0.3s ease';
        answerBox.textContent = faqData[faqIndex].a;
        parentContainer.appendChild(answerBox);
      }

      if (isOpen) {
        answerBox.style.maxHeight = '200px';
        answerBox.style.opacity = '1';
        answerBox.style.marginTop = '12px';
        answerBox.style.marginBottom = '16px';
        parentContainer.style.background = 'linear-gradient(180deg, rgba(239, 239, 239, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)';
      } else {
        answerBox.style.maxHeight = '0px';
        answerBox.style.opacity = '0';
        answerBox.style.marginTop = '0px';
        answerBox.style.marginBottom = '0px';
        parentContainer.style.background = 'linear-gradient(180deg, rgba(239, 239, 239, 0.55) 0%, rgba(255, 255, 255, 0.55) 100%)';
      }
    });
  }, [openFaqs]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a
            href="/contact"
            className="mobile-nav-drawer-cta"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              navigate('/contact');
            }}
          >
            Contact Us
          </a>
        </div>
      )}

      {/* Main Valien Home Page DOM */}
      <div
        id="main"
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: rawHtml }}
      />
    </div>
  );
}
