(function () {
  document.documentElement.classList.add('js-reveal');
  const items = [...document.querySelectorAll('[data-reveal]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduceMotion.matches || typeof IntersectionObserver === 'undefined') {
    items.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });

    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
      observer.observe(item);
    });
  }

  const navLinks = [...document.querySelectorAll('.legal-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (navLinks.length && sections.length) {
    const syncActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const viewportMidpoint = viewportHeight * 0.42;
      const scrollBottom = window.scrollY + viewportHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearPageEnd = documentHeight - scrollBottom <= 24;

      let activeId = sections[0]?.id;
      let containsViewportMidpoint = false;
      let closestSection = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionMidpoint = rect.top + rect.height / 2;
        const midpointDistance = Math.abs(sectionMidpoint - viewportMidpoint);

        if (midpointDistance < closestDistance) {
          closestDistance = midpointDistance;
          closestSection = section;
        }

        if (rect.top <= viewportMidpoint && rect.bottom > viewportMidpoint) {
          activeId = section.id;
          containsViewportMidpoint = true;
        }
      });

      if (!containsViewportMidpoint && closestSection) {
        activeId = closestSection.id;
      }

      if (isNearPageEnd) {
        activeId = sections[sections.length - 1]?.id || activeId;
      }

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('is-active', isActive);
        link.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
    };

    syncActiveSection();
    window.addEventListener('scroll', syncActiveSection, { passive: true });
    window.addEventListener('resize', syncActiveSection);
  }
})();
