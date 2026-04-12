(function () {
  const bookingUrl = document.body?.dataset.bookingUrl;
  const partnerUrl = document.body?.dataset.partnerUrl;
  const bookingLabel = document.body?.dataset.bookingLabel;
  const bookingLinks = [...document.querySelectorAll("[data-booking-link]")];
  const partnerLinks = [...document.querySelectorAll("[data-partner-link]")];
  const bookingLabels = [
    ...document.querySelectorAll("[data-booking-label-target]"),
  ];

  bookingLinks.forEach((link) => {
    if (!bookingUrl) return;
    link.setAttribute("href", bookingUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  partnerLinks.forEach((link) => {
    if (!partnerUrl) return;
    link.setAttribute("href", partnerUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  bookingLabels.forEach((element) => {
    if (!bookingLabel) return;
    element.textContent = bookingLabel;
  });

  const revealItems = [
    ...document.querySelectorAll(
      ".card, .visual, .solution-copy, .status-shell-header, .status-shell-note, .status-highlight, .status-note, .why-npx-copy, .contact-copy, .contact-panel, .contact-option, .section-title, .section-intro, .hero .section-kicker, .hero h1, .hero h2, .hero-lead, .hero-actions, .hero-system, .hero-system-block, .hero-process-strip",
    ),
  ];
  revealItems.forEach((item) => item.setAttribute("data-reveal", ""));

  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealGroups = new WeakSet();

  function getRevealGroup(item) {
    return item.closest(".hero, .section, .site-footer") ?? item;
  }

  function getGroupItems(group) {
    return revealItems.filter((item) => getRevealGroup(item) === group);
  }

  function revealGroup(group, observer) {
    if (revealGroups.has(group)) return;
    revealGroups.add(group);

    getGroupItems(group).forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 65, 180)}ms`;
      item.classList.add("is-visible");
      observer.unobserve(item);
    });
  }

  if (!mql.matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const group = getRevealGroup(entry.target);
          revealGroup(group, observer);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -5% 0px" },
    );
    revealItems.forEach((item) => {
      item.style.transitionDelay = "0ms";
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const tabs = [...document.querySelectorAll("[data-solution-tab]")];
  const kicker = document.querySelector("[data-solution-kicker]");
  const title = document.querySelector("[data-solution-title]");
  const subtitle = document.querySelector("[data-solution-subtitle]");
  const subtitleWrap = document.querySelector("[data-solution-subtitle-wrap]");
  const text = document.querySelector("[data-solution-text]");
  const points = document.querySelector("[data-solution-points]");
  const solutionCopy = document.querySelector("[data-solution-copy]");
  const solutionCopyShell = solutionCopy?.closest(".solution-copy") ?? null;
  const primarySolutionImage = document.querySelector("[data-solution-image]");
  const bufferedSolutionImage = document.querySelector(
    "[data-solution-image-buffer]",
  );
  const solutionImages = [primarySolutionImage, bufferedSolutionImage].filter(
    Boolean,
  );
  const solutionTabIndicator = document.querySelector(
    "[data-solution-tab-indicator]",
  );
  const panel = document.querySelector("#solution-panel");
  const solutionData = {
    watchtower: {
      kicker: "Produktlösung",
      title: "Automatisierte Compliance- und Risikosteuerung",
      subtitle: [
        `Fehlende Kontrollen und verteilte Daten sorgen dafür, dass Risiken oft erst im Audit sichtbar werden.`,
        `Der Compliance Watchtower verbindet Ihre Systeme zu einer durchgängigen Compliance-Sicht: Daten laufen automatisch zusammen, werden geprüft und lückenlos dokumentiert. Weniger manueller Aufwand, volle Transparenz und Compliance, die im Alltag funktioniert.`,
      ],
      points: [
        "Sanktions- & Embargoprüfung",
        "Adverse Media",
        "Business Partner Risk",
        "PEP",
        "AML",
        "VoP",
        "Payment & Transaction Risk",
        "Master Data Governance",
        "Tax Compliance",
        "VAT Compliance",
      ],
      image: "assets/images/watchtower-leistungsangebot.png",
    },
    development: {
      kicker: "Beratungs- und Projektleistung",
      title: "SAP Entwicklung ohne Kompromisse.",
      subtitle: [
        `Der SAP Standard stößt an Grenzen. Workarounds und Wildwuchs entstehen und irgendwann blockieren technische Schulden Upgrades und Skalierung.`,
        `Wir entwickeln SAP-Erweiterungen, die sauber in die bestehende Architektur passen. Clean-Core-kompatibel, upgrade-sicher und ohne unnötige Abhängigkeiten. Mit Entwicklern, die sowohl klassische SAP-Welten als auch moderne BTP-Architekturen kennen und beides gezielt einsetzen.`,
      ],
      points: [
        "S/4HANA",
        "SAP BTP",
        "Fiori",
        "Clean Core",
        "R3",
        "Side-by-Side Extensions",
        "SAP Add-on Entwicklung",
      ],
      image: "assets/images/Technologische Netzwerk-Integration mit SAP.png",
    },
    software: {
      kicker: "Beratungs- und Projektleistung",
      title: "Weil Standardlösungen nicht immer passen",
      subtitle: [
        "Standardlösungen stoßen schnell an Grenzen, wenn Prozesse individuell sind oder sauber integriert werden müssen.",
        "Wir entwickeln passgenaue Software, die sich in Ihre Systemlandschaft einfügt: von der Architektur bis zur Umsetzung, stabil, wartbar und ohne unnötige Komplexität. Lösungen, die wirklich passen, Prozesse spürbar entlasten und langfristig funktionieren.",
      ],
      points: [
        "Kundenspezifische Softwareentwicklung",
        "Software-Architektur",
        "Systemintegration",
        "Schnittstellenentwicklung",
        "Prozessautomatisierung",
        "Cloud-native Entwicklung",
        "Agentic AI",
      ],
      image: "assets/images/Futuristische Architektur und Datenflüsse.png",
    },
    consulting: {
      kicker: "Beratungs- und Projektleistung",
      title: "Verlässliche Prozesse statt manueller Dauerarbeit",
      subtitle: [
        `Excel, manuelle Abstimmungen und nachgelagerte Korrekturen bremsen Steuerabteilungen aus. Bei gleichzeitig wachsendem regulatorischem Druck.`,
        `Gemeinsam überführen wir diese Abläufe in strukturierte, digitalisierte und automatisierte Prozesse, die Risiken reduzieren, Reporting verlässlich machen und sich flexibel an neue Anforderungen anpassen.`,
      ],
      points: [
        "Digitalisierung der Steuerfunktion",
        "Tax CMS",
        "VAT Compliance",
        "E-Invoicing",
        "Real-Time Reporting",
        "SAP Tax Extensions",
        "S4/HANA Transformation",
        "Agentic Tax",
      ],
      image: "assets/images/tax-leistungsangebot-neu.png",
    },
    payments: {
      kicker: "Beratungs- und Projektleistung",
      title: "Einrichtung, Integration und Optimierung",
      subtitle: [
        "Fehlende Integration, manuelle Schritte und gewachsene Strukturen machen den Zahlungsverkehr fehleranfällig und schwer steuerbar.",
        "Wir strukturieren und modernisieren Ihre Prozesse von der Bankenanbindung bis zur Integration: durchgängig, sauber und stabil im Betrieb. Weniger manueller Aufwand, klare Freigaben und ein Zahlungsverkehr, der zuverlässig funktioniert.",
      ],
      points: [
        "ISO20022",
        "SWIFT",
        "H2H",
        "camt-Kontodaten",
        "EBICS",
        "PSD2",
        "Open Banking APIs",
        "SAP",
      ],
      image: "assets/images/payments-leistungsangebot-neu.png",
    },
  };
  const publicSolutionKeys = [
    "watchtower",
    "payments",
    "consulting",
    "development",
    "software",
  ];
  const availableSolutionData = Object.fromEntries(
    publicSolutionKeys
      .map((key) => [key, solutionData[key]])
      .filter(([, value]) => Boolean(value)),
  );
  const solutionImageReady = new Map();
  const solutionTabsTrack = document.querySelector(".solution-tabs");
  const solutionTabsShell = document.querySelector(".solution-tabs-shell");
  const mobileSolutionTabsMql = window.matchMedia(
    "(max-width: 900px) and (pointer: coarse)",
  );
  const heroDesktopCardsMql = window.matchMedia("(min-width: 981px)");
  const heroVisualRow = document.querySelector(".hero-visual-row");
  const heroLeftCard =
    heroVisualRow?.querySelector(".hero-placeholder-box:nth-child(1)") ?? null;
  const heroRightCard =
    heroVisualRow?.querySelector(".hero-placeholder-box:nth-child(3)") ?? null;
  let activeSolutionRequest = 0;
  let currentSolutionKey = null;
  let solutionTabIndicatorFrame = 0;
  let solutionTabIndicatorReady = false;
  let solutionCopyHeightResetTimer = 0;
  let solutionCopyHeightTransitionEnd = null;
  let solutionCopyHeightTransitionToken = 0;
  let solutionCopyReserveFrame = 0;
  let solutionCopyReserveObservedWidth = 0;
  let activeSolutionImage = primarySolutionImage ?? null;
  let solutionImageSwapTimer = 0;

  function ensureSolutionImageReady(src) {
    if (!src) return Promise.resolve();
    if (solutionImageReady.has(src)) return solutionImageReady.get(src);

    const preload = new Promise((resolve) => {
      const preloadImage = new Image();
      preloadImage.onload = () => {
        if (typeof preloadImage.decode === "function") {
          preloadImage
            .decode()
            .catch(() => {})
            .finally(resolve);
          return;
        }
        resolve();
      };
      preloadImage.onerror = () => resolve();
      preloadImage.src = src;
      if (preloadImage.complete) {
        if (typeof preloadImage.decode === "function") {
          preloadImage
            .decode()
            .catch(() => {})
            .finally(resolve);
          return;
        }
        resolve();
      }
    });

    solutionImageReady.set(src, preload);
    return preload;
  }

  function getActiveSolutionTab(key = currentSolutionKey) {
    return (
      tabs.find((tab) => tab.dataset.solutionTab === key) ??
      tabs.find((tab) => tab.getAttribute("aria-selected") === "true") ??
      tabs[0] ??
      null
    );
  }

  function syncSolutionTabIndicator(
    tab = getActiveSolutionTab(),
    options = {},
  ) {
    if (!solutionTabsTrack || !solutionTabIndicator || !tab) return;

    solutionTabsTrack.style.setProperty(
      "--solution-tab-indicator-x",
      `${Math.round(tab.offsetLeft)}px`,
    );
    solutionTabsTrack.style.setProperty(
      "--solution-tab-indicator-y",
      `${Math.round(tab.offsetTop)}px`,
    );
    solutionTabsTrack.style.setProperty(
      "--solution-tab-indicator-width",
      `${Math.max(tab.offsetWidth, 1)}px`,
    );
    solutionTabsTrack.style.setProperty(
      "--solution-tab-indicator-height",
      `${Math.max(tab.offsetHeight, 1)}px`,
    );
    solutionTabsTrack.classList.add("has-selection");

    if (options.immediate || mql.matches) return;
    if (solutionTabIndicatorReady) return;

    solutionTabIndicatorReady = true;
    requestAnimationFrame(() => {
      if (!solutionTabsTrack.classList.contains("has-selection") || mql.matches)
        return;
      solutionTabsTrack.classList.add("is-ready");
    });
  }

  function queueSolutionTabIndicatorSync(
    tab = getActiveSolutionTab(),
    options = {},
  ) {
    if (!solutionTabsTrack || !solutionTabIndicator || !tab) return;

    window.cancelAnimationFrame(solutionTabIndicatorFrame);
    solutionTabIndicatorFrame = window.requestAnimationFrame(() => {
      syncSolutionTabIndicator(tab, options);
    });
  }

  function clearSolutionCopyHeightTransition() {
    window.clearTimeout(solutionCopyHeightResetTimer);
    solutionCopyHeightResetTimer = 0;

    if (solutionCopy && solutionCopyHeightTransitionEnd) {
      solutionCopy.removeEventListener(
        "transitionend",
        solutionCopyHeightTransitionEnd,
      );
    }

    solutionCopyHeightTransitionEnd = null;
  }

  function finishSolutionCopyHeightTransition(
    token = solutionCopyHeightTransitionToken,
  ) {
    if (!solutionCopy || token !== solutionCopyHeightTransitionToken) return;

    clearSolutionCopyHeightTransition();
    requestAnimationFrame(() => {
      if (!solutionCopy || token !== solutionCopyHeightTransitionToken) return;
      solutionCopy.style.removeProperty("height");
      solutionCopy.classList.remove("is-resizing");
    });
  }

  function animateSolutionCopyHeight(
    startHeight = solutionCopy?.getBoundingClientRect().height ?? 0,
  ) {
    if (!solutionCopy) return;

    solutionCopyHeightTransitionToken += 1;
    const token = solutionCopyHeightTransitionToken;

    clearSolutionCopyHeightTransition();

    if (mql.matches) {
      finishSolutionCopyHeightTransition(token);
      return;
    }

    const safeStartHeight = Math.max(0, startHeight);
    solutionCopy.classList.add("is-resizing");
    const previousInlineHeight = solutionCopy.style.height;

    solutionCopy.style.height = "auto";
    const targetHeight = Math.max(
      solutionCopy.getBoundingClientRect().height,
      0,
    );

    solutionCopy.style.height = previousInlineHeight || `${safeStartHeight}px`;
    solutionCopy.style.height = `${safeStartHeight}px`;
    // Force the fixed start height before animating to the measured auto height.
    void solutionCopy.offsetHeight;

    if (Math.abs(targetHeight - safeStartHeight) < 1) {
      finishSolutionCopyHeightTransition(token);
      return;
    }

    solutionCopyHeightTransitionEnd = (event) => {
      if (event.target !== solutionCopy || event.propertyName !== "height")
        return;
      finishSolutionCopyHeightTransition(token);
    };

    solutionCopy.addEventListener(
      "transitionend",
      solutionCopyHeightTransitionEnd,
    );
    solutionCopyHeightResetTimer = window.setTimeout(() => {
      finishSolutionCopyHeightTransition(token);
    }, 860);

    requestAnimationFrame(() => {
      if (token !== solutionCopyHeightTransitionToken) return;
      solutionCopy.style.height = `${targetHeight}px`;
    });
  }

  function applySolutionContent(targets, data) {
    const {
      kicker: targetKicker,
      title: targetTitle,
      subtitle: targetSubtitle,
      subtitleWrap: targetSubtitleWrap,
      text: targetText,
      points: targetPoints,
    } = targets;
    if (!targetTitle || !targetSubtitle || !targetText || !targetPoints) return;

    if (targetKicker) {
      targetKicker.textContent = data.kicker ?? "";
      targetKicker.hidden = !data.kicker;
    }

    targetTitle.textContent = data.title;

    const subtitleParts = Array.isArray(data.subtitle)
      ? data.subtitle
      : [data.subtitle];
    targetSubtitle.replaceChildren(
      ...subtitleParts.filter(Boolean).map((part) => {
        const segment = document.createElement("span");
        segment.className = "solution-subtitle-part";
        segment.textContent = part;
        return segment;
      }),
    );

    if (targetSubtitleWrap) {
      targetSubtitleWrap.hidden = subtitleParts.filter(Boolean).length === 0;
    }

    if (Array.isArray(data.points) && data.points.length > 0) {
      targetPoints.replaceChildren(
        ...data.points.map((point) => {
          const item = document.createElement("li");
          item.className = "solution-bubble";
          item.textContent = point;
          return item;
        }),
      );
      targetPoints.hidden = false;
      targetText.hidden = true;
      targetText.textContent = "";
    } else {
      targetPoints.hidden = true;
      targetPoints.innerHTML = "";
      targetText.hidden = false;
      targetText.textContent = data.text ?? "";
    }
  }

  function measureMaxSolutionCopyHeight() {
    if (!solutionCopy || !solutionCopyShell) return 0;

    const liveWidth = solutionCopy.getBoundingClientRect().width;
    if (liveWidth < 1) return 0;

    const measurementCopy = solutionCopy.cloneNode(true);
    measurementCopy.classList.remove("is-resizing");
    measurementCopy.style.position = "absolute";
    measurementCopy.style.left = "0";
    measurementCopy.style.top = "0";
    measurementCopy.style.visibility = "hidden";
    measurementCopy.style.pointerEvents = "none";
    measurementCopy.style.transform = "none";
    measurementCopy.style.transition = "none";
    measurementCopy.style.height = "auto";
    measurementCopy.style.width = `${liveWidth}px`;
    measurementCopy.style.maxWidth = "none";
    measurementCopy.style.minHeight = "0";
    measurementCopy.style.overflow = "visible";

    document.body.appendChild(measurementCopy);

    const measurementTargets = {
      kicker: measurementCopy.querySelector("[data-solution-kicker]"),
      title: measurementCopy.querySelector("[data-solution-title]"),
      subtitle: measurementCopy.querySelector("[data-solution-subtitle]"),
      subtitleWrap: measurementCopy.querySelector(
        "[data-solution-subtitle-wrap]",
      ),
      text: measurementCopy.querySelector("[data-solution-text]"),
      points: measurementCopy.querySelector("[data-solution-points]"),
    };

    let maxHeight = 0;
    Object.values(availableSolutionData).forEach((solution) => {
      applySolutionContent(measurementTargets, solution);
      maxHeight = Math.max(
        maxHeight,
        Math.ceil(measurementCopy.getBoundingClientRect().height),
      );
    });

    measurementCopy.remove();
    return maxHeight;
  }

  function syncSolutionCopyReserveHeight(options = {}) {
    if (!solutionCopyShell || !solutionCopy) return;

    const width = Math.round(solutionCopy.getBoundingClientRect().width);
    if (
      !options.force &&
      width > 0 &&
      Math.abs(width - solutionCopyReserveObservedWidth) < 1
    )
      return;
    if (width < 1) return;

    solutionCopyReserveObservedWidth = width;
    const reservedHeight = measureMaxSolutionCopyHeight();
    if (reservedHeight < 1) return;

    solutionCopyShell.style.minHeight = `${reservedHeight}px`;
  }

  function queueSolutionCopyReserveHeightSync(options = {}) {
    if (!solutionCopyShell || !solutionCopy) return;

    window.cancelAnimationFrame(solutionCopyReserveFrame);
    solutionCopyReserveFrame = window.requestAnimationFrame(() => {
      syncSolutionCopyReserveHeight(options);
    });
  }

  function syncHeroSideCardHeight() {
    if (!heroVisualRow || !heroLeftCard || !heroRightCard) return;

    if (!heroDesktopCardsMql.matches) {
      heroVisualRow.style.removeProperty("--hero-side-card-height");
      return;
    }

    const leftHeight = Math.ceil(heroLeftCard.getBoundingClientRect().height);
    if (leftHeight < 1) return;
    heroVisualRow.style.setProperty(
      "--hero-side-card-height",
      `${leftHeight}px`,
    );
  }

  function clearSolutionImageTransition() {
    window.clearTimeout(solutionImageSwapTimer);
    solutionImageSwapTimer = 0;

    solutionImages.forEach((candidate) => {
      candidate.classList.remove("is-entering", "is-exiting");
    });

    panel?.classList.remove("is-transitioning");
  }

  function setSolutionImageState(targetImage, key, data, options = {}) {
    if (!targetImage) return;

    targetImage.src = data.image;
    targetImage.dataset.solutionKey = key;
    targetImage.alt = options.decorative ? "" : `Visual für ${data.title}`;

    if (options.decorative) {
      targetImage.setAttribute("aria-hidden", "true");
      return;
    }

    targetImage.removeAttribute("aria-hidden");
  }

  async function swapSolutionImage(key, data, requestId) {
    if (!activeSolutionImage) return;

    clearSolutionImageTransition();

    const imageAlreadyActive = activeSolutionImage.dataset.solutionKey === key;
    if (imageAlreadyActive) {
      setSolutionImageState(activeSolutionImage, key, data);
      activeSolutionImage.classList.add("is-active");
      return;
    }

    const nextImage =
      solutionImages.find((candidate) => candidate !== activeSolutionImage) ??
      activeSolutionImage;
    if (!nextImage || nextImage === activeSolutionImage) {
      setSolutionImageState(activeSolutionImage, key, data);
      return;
    }

    setSolutionImageState(nextImage, key, data, { decorative: true });
    await ensureSolutionImageReady(data.image);
    if (requestId !== activeSolutionRequest) return;

    setSolutionImageState(nextImage, key, data);
    nextImage.classList.remove("is-exiting");
    nextImage.classList.add("is-entering");

    requestAnimationFrame(() => {
      if (requestId !== activeSolutionRequest) return;

      nextImage.classList.add("is-active");
      panel?.classList.add("is-transitioning");
      activeSolutionImage.classList.add("is-exiting");
      activeSolutionImage.classList.remove("is-active");
    });

    solutionImageSwapTimer = window.setTimeout(() => {
      if (requestId !== activeSolutionRequest) return;

      activeSolutionImage.classList.remove("is-exiting");
      activeSolutionImage.setAttribute("aria-hidden", "true");
      activeSolutionImage.alt = "";
      nextImage.classList.remove("is-entering");
      panel?.classList.remove("is-transitioning");
      activeSolutionImage = nextImage;
    }, 240);
  }

  async function activateSolution(key) {
    const data = availableSolutionData[key];
    if (
      !data ||
      !title ||
      !subtitle ||
      !text ||
      !primarySolutionImage ||
      !points
    )
      return;
    if (currentSolutionKey === key) return;

    currentSolutionKey = key;
    const requestId = ++activeSolutionRequest;
    const solutionCopyStartHeight =
      solutionCopy?.getBoundingClientRect().height ?? 0;

    applySolutionContent(
      { kicker, title, subtitle, subtitleWrap, text, points },
      data,
    );

    tabs.forEach((tab) => {
      const isActive = tab.dataset.solutionTab === key;
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
      if (isActive) {
        panel?.setAttribute("aria-labelledby", tab.id);
      }
    });

    queueSolutionTabIndicatorSync(getActiveSolutionTab(key));
    animateSolutionCopyHeight(solutionCopyStartHeight);
    await swapSolutionImage(key, data, requestId);
  }

  function getSolutionTabsMaxScrollLeft() {
    if (!solutionTabsTrack) return 0;
    return Math.max(
      0,
      solutionTabsTrack.scrollWidth - solutionTabsTrack.clientWidth,
    );
  }

  function getSolutionTabCenterScrollLeft(tab) {
    if (!solutionTabsTrack || !tab) return 0;
    const rawTarget =
      tab.offsetLeft + tab.offsetWidth / 2 - solutionTabsTrack.clientWidth / 2;
    return Math.min(getSolutionTabsMaxScrollLeft(), Math.max(0, rawTarget));
  }

  function centerSolutionTab(tab, options = {}) {
    if (!solutionTabsTrack || !tab) return;

    const targetLeft = getSolutionTabCenterScrollLeft(tab);
    const delta = Math.abs(solutionTabsTrack.scrollLeft - targetLeft);
    if (delta < 2) return;

    const behavior = options.behavior ?? (mql.matches ? "auto" : "smooth");
    solutionTabsTrack.scrollTo({ left: targetLeft, behavior });
  }

  function alignSolutionTabForMobileClick(tab) {
    if (!solutionTabsTrack || !tab) return;

    const maxScrollLeft = getSolutionTabsMaxScrollLeft();
    const isFirstTab = tabs[0] === tab;
    const isLastTab = tabs[tabs.length - 1] === tab;
    const targetLeft = isFirstTab
      ? 0
      : isLastTab
        ? maxScrollLeft
        : getSolutionTabCenterScrollLeft(tab);
    const delta = Math.abs(solutionTabsTrack.scrollLeft - targetLeft);
    if (delta < 2) return;

    solutionTabsTrack.scrollTo({
      left: targetLeft,
      behavior: mql.matches ? "auto" : "smooth",
    });
  }

  function focusSolutionTabByOffset(currentTab, offset) {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + offset + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    if (!nextTab) return;
    nextTab.focus();
    activateSolution(nextTab.dataset.solutionTab);
    centerSolutionTab(nextTab);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      if (solutionTabsTrack?.dataset.dragClickSuppressed === "true") {
        event.preventDefault();
        event.stopPropagation();
        solutionTabsTrack.dataset.dragClickSuppressed = "false";
        return;
      }

      activateSolution(tab.dataset.solutionTab);
      if (mobileSolutionTabsMql.matches) {
        alignSolutionTabForMobileClick(tab);
        return;
      }

      centerSolutionTab(tab);
    });
    tab.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
        case "Right":
          event.preventDefault();
          focusSolutionTabByOffset(tab, 1);
          break;
        case "ArrowLeft":
        case "Left":
          event.preventDefault();
          focusSolutionTabByOffset(tab, -1);
          break;
        case "Home":
          event.preventDefault();
          tabs[0]?.focus();
          activateSolution(tabs[0]?.dataset.solutionTab);
          centerSolutionTab(tabs[0]);
          break;
        case "End":
          event.preventDefault();
          tabs.at(-1)?.focus();
          activateSolution(tabs.at(-1)?.dataset.solutionTab);
          centerSolutionTab(tabs.at(-1));
          break;
        default:
          break;
      }
    });
  });
  Object.values(availableSolutionData).forEach(({ image: src }) => {
    ensureSolutionImageReady(src);
  });
  activateSolution("watchtower");
  queueSolutionCopyReserveHeightSync({ force: true });
  window.addEventListener("resize", () => queueSolutionTabIndicatorSync());
  window.addEventListener("resize", () =>
    queueSolutionCopyReserveHeightSync({ force: true }),
  );
  document.fonts?.ready?.then(() => {
    queueSolutionTabIndicatorSync();
    queueSolutionCopyReserveHeightSync({ force: true });
    syncHeroSideCardHeight();
  });
  if (typeof ResizeObserver === "function" && solutionTabsTrack) {
    const solutionTabsObserver = new ResizeObserver(() => {
      queueSolutionTabIndicatorSync();
    });
    solutionTabsObserver.observe(solutionTabsTrack);
    tabs.forEach((tab) => solutionTabsObserver.observe(tab));
  }
  if (typeof ResizeObserver === "function" && solutionCopy) {
    const solutionCopyObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const nextWidth = Math.round(entry?.contentRect?.width ?? 0);
      if (nextWidth < 1 || nextWidth === solutionCopyReserveObservedWidth)
        return;
      queueSolutionCopyReserveHeightSync({ force: true });
    });
    solutionCopyObserver.observe(solutionCopy);
  }
  if (typeof ResizeObserver === "function" && heroLeftCard) {
    const heroSideCardsObserver = new ResizeObserver(() => {
      syncHeroSideCardHeight();
    });
    heroSideCardsObserver.observe(heroLeftCard);
  }
  window.addEventListener("resize", syncHeroSideCardHeight);
  if (typeof heroDesktopCardsMql.addEventListener === "function") {
    heroDesktopCardsMql.addEventListener("change", syncHeroSideCardHeight);
  }
  syncHeroSideCardHeight();
  if (typeof mql.addEventListener === "function") {
    mql.addEventListener("change", () => {
      if (mql.matches) {
        solutionTabsTrack?.classList.remove("is-ready");
        finishSolutionCopyHeightTransition();
      } else if (solutionTabsTrack?.classList.contains("has-selection")) {
        requestAnimationFrame(() => {
          solutionTabsTrack?.classList.add("is-ready");
        });
      }
      queueSolutionTabIndicatorSync();
      queueSolutionCopyReserveHeightSync({ force: true });
    });
  }
  if (solutionTabsTrack) {
    let showLeftFade = false;
    let showRightFade = false;
    let dragSuppressResetTimer = 0;
    let activePointerId = null;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let isDraggingTabs = false;

    const isMobileSolutionTabsMode = () => mobileSolutionTabsMql.matches;

    const scheduleResetDragClickSuppression = () => {
      window.clearTimeout(dragSuppressResetTimer);
      dragSuppressResetTimer = window.setTimeout(() => {
        solutionTabsTrack.dataset.dragClickSuppressed = "false";
      }, 280);
    };

    const syncSolutionTabsOverflow = () => {
      const maxScrollLeft =
        solutionTabsTrack.scrollWidth - solutionTabsTrack.clientWidth;
      const hasOverflow = maxScrollLeft > 6;
      const scrollLeft = solutionTabsTrack.scrollLeft;
      const nearStart = scrollLeft <= 4;
      const nearEnd = scrollLeft >= maxScrollLeft - 4;

      if (!hasOverflow) {
        showLeftFade = false;
        showRightFade = false;
      } else {
        showLeftFade = showLeftFade ? !nearStart : scrollLeft > 14;
        showRightFade = showRightFade
          ? !nearEnd
          : scrollLeft < maxScrollLeft - 14;
      }

      solutionTabsShell?.classList.toggle("has-overflow-right", showRightFade);
      solutionTabsShell?.classList.toggle("has-overflow-left", showLeftFade);
    };

    solutionTabsTrack.dataset.dragClickSuppressed = "false";
    syncSolutionTabsOverflow();
    solutionTabsTrack.addEventListener("pointerdown", (event) => {
      if (!isMobileSolutionTabsMode() || event.pointerType === "mouse") return;
      activePointerId = event.pointerId;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
      isDraggingTabs = false;
    });
    solutionTabsTrack.addEventListener("pointermove", (event) => {
      if (!isMobileSolutionTabsMode()) return;
      if (event.pointerId !== activePointerId) return;

      const deltaX = event.clientX - pointerStartX;
      const deltaY = event.clientY - pointerStartY;
      const horizontalDistance = Math.abs(deltaX);
      const verticalDistance = Math.abs(deltaY);

      if (
        !isDraggingTabs &&
        horizontalDistance > 8 &&
        horizontalDistance > verticalDistance + 2
      ) {
        isDraggingTabs = true;
        solutionTabsTrack.dataset.dragClickSuppressed = "true";
        window.clearTimeout(dragSuppressResetTimer);
      }
    });
    solutionTabsTrack.addEventListener("pointerup", (event) => {
      if (event.pointerId !== activePointerId) return;
      activePointerId = null;
      if (!isDraggingTabs) return;
      isDraggingTabs = false;
      scheduleResetDragClickSuppression();
    });
    solutionTabsTrack.addEventListener("pointercancel", (event) => {
      if (event.pointerId !== activePointerId) return;
      activePointerId = null;
      if (!isDraggingTabs) return;
      isDraggingTabs = false;
      scheduleResetDragClickSuppression();
    });
    solutionTabsTrack.addEventListener("scroll", syncSolutionTabsOverflow, {
      passive: true,
    });
    window.addEventListener("resize", () => {
      syncSolutionTabsOverflow();
    });
  }

  const root = document.documentElement;
  const siteHeader = document.querySelector(".site-header");
  const headerCta = siteHeader?.querySelector(".header-cta") ?? null;
  const hero = document.querySelector("#hero");
  const statusSection = document.querySelector("#status");
  const visualViewport = window.visualViewport ?? null;
  const partnerHeaderCtaSource =
    document.querySelector("#status [data-partner-cta]") ?? null;
  const compactHeaderContextMql = window.matchMedia(
    "(max-width: 900px) and (pointer: coarse), (orientation: landscape) and (pointer: coarse) and (hover: none) and (max-height: 520px)",
  );
  const appleMobileSafariUa = window.navigator.userAgent;
  const isAppleMobileDevice =
    /iPhone|iPad|iPod/.test(appleMobileSafariUa) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1);
  const isAppleMobileSafari =
    isAppleMobileDevice &&
    /WebKit/i.test(appleMobileSafariUa) &&
    !/CriOS|FxiOS|EdgiOS|OPiOS|YaBrowser|DuckDuckGo/i.test(appleMobileSafariUa);
  const scrollActions = [...document.querySelectorAll("[data-scroll-target]")];
  const defaultHeaderCtaState = headerCta
    ? {
        key: "default",
        mode: "default",
        label: headerCta.textContent.trim(),
        href: headerCta.getAttribute("href") ?? "",
        target: headerCta.getAttribute("target") ?? "",
        rel: headerCta.getAttribute("rel") ?? "",
      }
    : null;

  function easeOutCubic(value) {
    return 1 - Math.pow(1 - value, 3);
  }

  function getTargetOffset(target) {
    const headerOffset = siteHeader
      ? siteHeader.getBoundingClientRect().height + 18
      : 0;
    const scrollMarginTop =
      Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
    return Math.max(headerOffset, scrollMarginTop);
  }

  function getHeaderOffset() {
    return siteHeader ? siteHeader.getBoundingClientRect().height + 8 : 0;
  }

  function getScrollTargetTop(target, alignMode) {
    const targetOffset = getTargetOffset(target);
    const defaultTop =
      target.getBoundingClientRect().top + window.scrollY - targetOffset;
    if (alignMode !== "intro-top") return defaultTop;

    const introTarget =
      target.querySelector(".solutions-intro") ??
      target.firstElementChild ??
      target;
    const introRect = introTarget.getBoundingClientRect();
    const introTop = introRect.top + window.scrollY;
    const maxScrollTop = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const headerOffset = getHeaderOffset();

    return Math.min(maxScrollTop, Math.max(0, introTop - headerOffset));
  }

  function scrollToSection(targetId, options = {}) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetTop = getScrollTargetTop(target, options.alignMode);

    if (mql.matches) {
      window.scrollTo(0, targetTop);
      return;
    }

    const startTop = window.scrollY;
    const distance = targetTop - startTop;
    const duration = Math.min(980, Math.max(680, Math.abs(distance) * 0.6));
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      window.scrollTo(0, startTop + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
        return;
      }

      if (window.history?.replaceState) {
        window.history.replaceState(null, "", `#${targetId}`);
      }
    }

    window.requestAnimationFrame(step);
  }

  scrollActions.forEach((action) => {
    action.addEventListener("click", (event) => {
      const targetId = action.dataset.scrollTarget;
      if (!targetId) return;
      event.preventDefault();
      scrollToSection(targetId, { alignMode: action.dataset.scrollAlign });
    });
  });

  if (siteHeader && hero) {
    let activeHeaderCtaKey = defaultHeaderCtaState?.key ?? null;

    const syncHeaderContext = () => {
      root.dataset.headerContext = compactHeaderContextMql.matches
        ? "compact"
        : "default";

      if (isAppleMobileSafari && compactHeaderContextMql.matches) {
        root.dataset.headerCtaFx = "reduced";
        return;
      }

      root.removeAttribute("data-header-cta-fx");
    };

    const getPageScrollTop = () =>
      Math.max(
        0,
        window.scrollY ?? 0,
        window.pageYOffset ?? 0,
        document.documentElement.scrollTop ?? 0,
        document.body?.scrollTop ?? 0,
      );

    const partnerHeaderCtaState =
      headerCta && defaultHeaderCtaState
        ? {
            key: "partner",
            mode: "partner",
            label: "Partner werden",
            href:
              partnerUrl ||
              partnerHeaderCtaSource?.getAttribute("href") ||
              defaultHeaderCtaState.href,
            target:
              partnerHeaderCtaSource?.getAttribute("target") ||
              defaultHeaderCtaState.target ||
              "",
            rel:
              partnerHeaderCtaSource?.getAttribute("rel") ||
              defaultHeaderCtaState.rel ||
              "",
          }
        : null;

    const isPartnerCtaActive = () => {
      if (!headerCta || !statusSection) return false;
      const headerHeight = siteHeader.getBoundingClientRect().height;
      const sectionRect = statusSection.getBoundingClientRect();
      const triggerOffset = 12;

      return (
        sectionRect.top <= headerHeight + triggerOffset &&
        sectionRect.bottom > headerHeight
      );
    };

    const getHeaderCtaState = (isPartnerActive) => {
      if (!defaultHeaderCtaState) return null;
      if (isPartnerActive && partnerHeaderCtaState) return partnerHeaderCtaState;
      return defaultHeaderCtaState;
    };

    const applyHeaderCtaState = (state) => {
      if (!headerCta || !state) return;

      headerCta.textContent = state.label;
      headerCta.setAttribute("href", state.href);

      if (state.target) {
        headerCta.setAttribute("target", state.target);
      } else {
        headerCta.removeAttribute("target");
      }

      if (state.rel) {
        headerCta.setAttribute("rel", state.rel);
      } else {
        headerCta.removeAttribute("rel");
      }

      if (state.mode === "partner") {
        headerCta.dataset.headerCtaMode = "partner";
      } else {
        headerCta.removeAttribute("data-header-cta-mode");
      }

      headerCta.classList.remove("partner-program-cta");
      headerCta.classList.add("btn-primary");
    };

    const syncHeaderCtaContent = (isPartnerActive) => {
      if (!headerCta || !defaultHeaderCtaState) return;
      const nextState = getHeaderCtaState(isPartnerActive);

      if (!nextState || nextState.key === activeHeaderCtaKey) return;
      applyHeaderCtaState(nextState);
      headerCta.classList.remove("is-content-swapping");
      activeHeaderCtaKey = nextState.key;
    };

    const syncHeaderCta = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const viewportHeight = visualViewport?.height ?? window.innerHeight;
      const threshold = compactHeaderContextMql.matches
        ? Math.max(viewportHeight * 0.16, 88)
        : Math.max(viewportHeight * 0.13, 96);
      const partnerActive = isPartnerCtaActive();
      const isPinnedToTop = getPageScrollTop() <= 1 && !partnerActive;
      const shouldShowCta =
        !isPinnedToTop && (heroBottom < threshold || partnerActive);

      syncHeaderCtaContent(partnerActive);
      siteHeader.classList.toggle("is-cta-visible", shouldShowCta);
      headerCta.classList.toggle("is-hidden-hard", !shouldShowCta);
    };

    syncHeaderContext();
    syncHeaderCtaContent(false);
    syncHeaderCta();
    compactHeaderContextMql.addEventListener("change", () => {
      syncHeaderContext();
      syncHeaderCta();
    });
    window.addEventListener("scroll", syncHeaderCta, { passive: true });
    window.addEventListener("resize", () => {
      syncHeaderCta();
    });
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", () => {
        syncHeaderCta();
      });
    }

    if (visualViewport) {
      visualViewport.addEventListener("resize", () => {
        syncHeaderCta();
      });
      visualViewport.addEventListener("scroll", () => {
        syncHeaderCta();
      });
    }
  }
})();
