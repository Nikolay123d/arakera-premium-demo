(function () {
  const shell = document.getElementById("snapShell");
  const screens = Array.from(document.querySelectorAll(".screen"));
  const dots = Array.from(document.querySelectorAll(".section-dots button"));
  const progress = document.getElementById("screenProgress");
  const menuToggle = document.getElementById("menuToggle");
  const menuPanel = document.getElementById("menuPanel");
  const menuClose = document.getElementById("menuClose");
  const preloader = document.getElementById("preloader");
  const preloaderImage = document.getElementById("preloaderImage");
  const preloaderVideo = document.getElementById("preloaderVideo");
  const globalWallpaperVideo = document.getElementById("globalWallpaperVideo");
  const mapScreenVideo = document.querySelector(".screen-video--map");
  const submitLoader = document.getElementById("submitLoader");
  const submitProgressBar = document.getElementById("submitProgressBar");
  const submitProgressValue = document.getElementById("submitProgressValue");
  const submitProgressText = document.getElementById("submitProgressText");
  const modals = {
    system: document.getElementById("systemModal"),
    project: document.getElementById("projectModal"),
    contact: document.getElementById("contactModal"),
    caseAccess: document.getElementById("caseAccessModal"),
    caseRenovation: document.getElementById("caseRenovationModal"),
    caseStaff: document.getElementById("caseStaffModal")
  };

  let activeIndex = 0;
  let isSnapping = false;
  let wheelBalance = 0;
  let touchStartY = 0;
  let touchLatestY = 0;
  let lastSnapAt = 0;
  let lastWallpaperSeek = 0;
  let scrollRaf = 0;
  let resizeTimer = 0;
  let lastViewportWidth = window.innerWidth;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wallpaperTimeline = [0.2, 2.2, 4.4, 6.6, 8.8, 11, 13.2, 15.4];
  const translations = {
    cs: {
      navEntry: "Vstup",
      navSystem: "Systém",
      navResources: "Zdroje",
      navMap: "Mapa",
      navProjectMap: "Mapa projektu",
      navProjects: "Projekty",
      navPartners: "Partneři",
      navGeo: "Geografie",
      navContact: "Kontakt",
      enterSystem: "Vstoupit do systému",
      entryPoint: "Vstupní bod",
      cityHeroTitle: "SPOJUJEME SPRÁVNĚ PROJEKTY SE SPRÁVNÝMI LIDMI",
      cityHeroText: "Projekty vstupují do systému ARAKERA pro strukturovanou koordinaci, rozvoj a realizaci prostřednictvím technologií, lidí a kapitálu.",
      partnerRequest: "Partnerský dotaz",
      remainingQuestions: "Zůstaly otázky?",
      systemResources: "Zdroje systému",
      systemEntryEyebrow: "Vstup projektu do systému",
      systemEntryTitle: "VSTUP DO SYSTÉMU ARAKERA",
      systemEntrySubtitle: "Každý projekt prochází strukturovaným procesem vstupu před koordinací, rozvojem a realizací.",
      systemStepSubmitTitle: "Podání projektu",
      systemStepSubmitText: "Představíte svou ideu, potřebu nebo možnost.",
      systemStepSubmit1: "Byznys idea",
      systemStepSubmit2: "Investiční možnost",
      systemStepSubmit3: "Stavební nebo technický projekt",
      systemStepSubmit4: "Kádrový nebo operační požadavek",
      systemStepAnalysisTitle: "Strukturování a analýza",
      systemStepAnalysisText: "Projekt se vyhodnotí a zařadí do struktury ARAKERA.",
      systemStepAnalysis1: "Určení rozsahu projektu",
      systemStepAnalysis2: "Analýza potřebných zdrojů",
      systemStepAnalysis3: "Odhad potenciálu a účelnosti",
      systemStepAnalysis4: "Model koordinace",
      systemStepRealizationTitle: "Integrace a realizace",
      systemStepRealizationText: "Projekt přechází do fáze aktivní koordinace.",
      systemStepRealization1: "Integrace technologií",
      systemStepRealization2: "Zapojení personálu",
      systemStepRealization3: "Koordinace realizace",
      systemStepRealization4: "Kapitálová účast podle potřeby",
      resourceTechTitle: "Technologie",
      resourceTech1: "Klimatizace a komfort",
      resourceTech2: "Automatizace",
      resourceTech3: "Bezpečnostní systémy",
      resourceTech4: "Kontrola přístupu",
      resourceTech5: "Chytré zámky",
      resourceTech6: "Smart Home",
      resourceTech7: "Integrace technologií",
      resourceBuildTitle: "Stavebnictví",
      resourceBuild1: "Stavební materiály",
      resourceBuild2: "Prémiové rekonstrukce",
      resourceBuild3: "Komerční projekty",
      resourceBuild4: "Infrastruktura",
      resourceBuild5: "Koordinace dodavatelu",
      resourceBuild6: "Kontrola kvality a rozpočtu",
      resourcePeopleTitle: "Personál",
      resourcePeople1: "Operační týmy",
      resourcePeople2: "Výroba",
      resourcePeople3: "Sklady",
      resourcePeople4: "Logistika",
      resourcePeople5: "Zajištění personálu",
      resourcePeople6: "Koordinace týmů",
      resourceCapitalTitle: "Kapitál",
      resourceCapital1: "Investiční účast",
      resourceCapital2: "Rozvoj podnikání",
      resourceCapital3: "Finanční optimalizace",
      resourceCapital4: "Strategická partnerství",
      resourceCapital5: "Tvorba dlouhodobé hodnoty",
      resourceFormula: "Technologie + Stavebnictví + Personál + Kapitál",
      resourcePrinciple: "Společně tvoří operační systém ARAKERA.",
      mapTitle: "Mapa projektu",
      mapStepProject: "Projekt",
      mapStepAnalysis: "Analýza",
      mapStepTech: "Technologie",
      mapStepBuild: "Stavebnictví",
      mapStepPeople: "Personál",
      mapStepCapital: "Kapitál",
      mapStepRealization: "Realizace",
      mapStepValue: "Dlouhodobá hodnota",
      mapNote: "Projekty jsou řízeny prostřednictvím systému ARAKERA v souladu s vašimi potřebami, dostupnými zdroji a potenciálem růstu.",
      partnersTitle: "Partnerství",
      partnersTechTitle: "Technologičtí partneři",
      partnersTechText: "Výrobci a dodavatelé technologií.",
      partnersBuildTitle: "Partneři z realizace",
      partnersBuildText: "Stavební, montážní a servisní společnosti.",
      partnersBusinessTitle: "Obchodní partneři",
      partnersBusinessText: "Investoři, developeři a vlastníci projektů.",
      partnersNote: "Silné projekty vznikají díky silným partnerstvím.",
      projectsEyebrow: "Projekty",
      projectsTitle: "Tři příklady vstupu do systému",
      projectsSubtitle: "Každý projekt má oblast, roli ARAKERA a měřitelný výsledek.",
      caseAccessArea: "Bezpečnost",
      caseAccessTitle: "Integrace systému kontroly přístupu",
      caseAccessText: "ARAKERA koordinuje technickou integraci, odpovědné partnery a realizaci systému kontroly přístupu pro objekt.",
      caseRenovationArea: "Výstavba",
      caseRenovationTitle: "Rekonstrukce rezidenčního objektu",
      caseRenovationText: "Projekt prochází koordinací dodavatelů, kontrolou kvality, rozpočtovou disciplínou a strukturovaným pohybem k výsledku.",
      caseStaffArea: "Obnovitelná energetika",
      caseStaffTitle: "Výběr technického personálu",
      caseStaffText: "ARAKERA zajistila vyhledání, výběr a koordinaci montážníků a elektrotechnických specialistů pro realizaci energetických projektů. Výsledek: více než 200 kvalifikovaných specialistů během jednoho roku.",
      caseOpen: "Detail projektu",
      contactEyebrow: "Kontakt",
      contactTitle: "Connect with ARAKERA",
      pointProjects: "✓ Projekty",
      pointPartnerships: "✓ Partnerstvi",
      pointInvestments: "✓ Investice",
      pointBusiness: "✓ Obchodni prilezitosti",
      namePlaceholder: "Vase jmeno",
      companyPlaceholder: "Firma / tym",
      projectPlaceholder: "Projekt / moznost",
      messagePlaceholder: "Co je potreba strukturovat?",
      submitButton: "Vstoupit do systemu",
      systemModalEyebrow: "Vstup do systemu",
      systemModalTitle: "Jednotny scenar vstupu projektu",
      systemModalText: "Projekt vstupuje do systemu ARAKERA, prochazi podanim, analyzou, zdroji, partnerstvimi a pohybem k realizaci.",
      systemModalIntegration: "Projekty se neposuzuji jako samostatne ukoly. Integruji se do strukturovaneho systemu vytvoreneho pro realizaci.",
      systemNoteLine1: "Projekty se neposuzuji jako samostatne ukoly.",
      systemNoteLine2: "Integruji se do strukturovaneho systemu,",
      systemNoteLine3: "vytvoreneho pro realizaci.",
      projectModalEyebrow: "Partnersky dotaz",
      projectModalTitle: "Kratka struktura pro start",
      projectModalStep1: "1. Cil projektu",
      projectModalStep2: "2. Mesto / zeme",
      projectModalStep3: "3. Lide a partneri",
      projectModalStep4: "4. Zdroje a rozpocet",
      goForm: "Prejit k formulari",
      submitSimilar: "Podat podobny projekt",
      quickContact: "Rychly kontakt",
      quickFacebook: "Rychly kontakt pres Facebook",
      contactModalTitle: "Potrebujete rychle vysvetlit projekt?",
      contactModalText: "Nechte kratkou informaci o zadani. System ukaze smer, moznost a dalsi krok pro rozhovor.",
      sendingTitle: "Odesilani zadosti do systemu",
      sendingText: "Strukturujeme data projektu...",
      submitSending: "Odesilame...",
      noteSending: "Odesilani zadosti do systemu...",
      noteSuccess: "Zadost byla prijata systemem ARAKERA.",
      noteError: "Zadost se nepodarilo odeslat. Zkontrolujte kontakt a zkuste to znovu.",
      progressCheck: "Kontrolujeme kontaktni udaje...",
      progressSend: "Predavame zadost do systemu ARAKERA...",
      progressFix: "Fixujeme smer projektu...",
      progressWait: "Cekame na potvrzeni serveru...",
      progressAccepted: "Zadost prijata. Prechazime na stranku zpracovani...",
      progressFailed: "Zadost se nepodarilo predat."
    },
    en: {
      navEntry: "Entry",
      navSystem: "System",
      navResources: "Resources",
      navMap: "Map",
      navProjectMap: "Project map",
      navProjects: "Projects",
      navPartners: "Partners",
      navGeo: "Geography",
      navContact: "Contact",
      enterSystem: "Enter system",
      entryPoint: "Entry point",
      cityHeroTitle: "WE CONNECT THE RIGHT PROJECTS WITH THE RIGHT PEOPLE",
      cityHeroText: "Projects enter the ARAKERA system for structured coordination, development and implementation through technology, people and capital.",
      partnerRequest: "Partner request",
      remainingQuestions: "Any questions?",
      systemResources: "System resources",
      systemEntryEyebrow: "Project entry into the system",
      systemEntryTitle: "ENTER THE ARAKERA SYSTEM",
      systemEntrySubtitle: "Every project passes through a structured entry process before coordination, development and implementation.",
      systemStepSubmitTitle: "Project submission",
      systemStepSubmitText: "You present your idea, need or opportunity.",
      systemStepSubmit1: "Business idea",
      systemStepSubmit2: "Investment opportunity",
      systemStepSubmit3: "Construction or technical project",
      systemStepSubmit4: "Staffing or operational request",
      systemStepAnalysisTitle: "Structuring and analysis",
      systemStepAnalysisText: "The project is assessed and placed into the ARAKERA structure.",
      systemStepAnalysis1: "Project scope definition",
      systemStepAnalysis2: "Required resource analysis",
      systemStepAnalysis3: "Potential and feasibility review",
      systemStepAnalysis4: "Coordination model",
      systemStepRealizationTitle: "Integration and implementation",
      systemStepRealizationText: "The project moves into active coordination.",
      systemStepRealization1: "Technology integration",
      systemStepRealization2: "Staff involvement",
      systemStepRealization3: "Implementation coordination",
      systemStepRealization4: "Capital participation if needed",
      resourceTechTitle: "Technology",
      resourceTech1: "Climate control and comfort",
      resourceTech2: "Automation",
      resourceTech3: "Security systems",
      resourceTech4: "Access control",
      resourceTech5: "Smart locks",
      resourceTech6: "Smart Home",
      resourceTech7: "Technology integration",
      resourceBuildTitle: "Construction",
      resourceBuild1: "Building materials",
      resourceBuild2: "Premium reconstructions",
      resourceBuild3: "Commercial projects",
      resourceBuild4: "Infrastructure",
      resourceBuild5: "Contractor coordination",
      resourceBuild6: "Quality and budget control",
      resourcePeopleTitle: "Personnel",
      resourcePeople1: "Operational teams",
      resourcePeople2: "Production",
      resourcePeople3: "Warehouses",
      resourcePeople4: "Logistics",
      resourcePeople5: "Staffing",
      resourcePeople6: "Team coordination",
      resourceCapitalTitle: "Capital",
      resourceCapital1: "Investment participation",
      resourceCapital2: "Business development",
      resourceCapital3: "Financial optimization",
      resourceCapital4: "Strategic partnerships",
      resourceCapital5: "Long-term value creation",
      resourceFormula: "Technology + Construction + Personnel + Capital",
      resourcePrinciple: "Together they form the ARAKERA operating system.",
      mapTitle: "Project map",
      mapStepProject: "Project",
      mapStepAnalysis: "Analysis",
      mapStepTech: "Technology",
      mapStepBuild: "Construction",
      mapStepPeople: "Personnel",
      mapStepCapital: "Capital",
      mapStepRealization: "Implementation",
      mapStepValue: "Long-term value",
      mapNote: "Projects are managed through the ARAKERA system according to their needs, available resources and growth potential.",
      partnersTitle: "Partnerships",
      partnersTechTitle: "Technology partners",
      partnersTechText: "Technology manufacturers and suppliers.",
      partnersBuildTitle: "Implementation partners",
      partnersBuildText: "Construction, installation and service companies.",
      partnersBusinessTitle: "Business partners",
      partnersBusinessText: "Investors, developers and project owners.",
      partnersNote: "Strong projects are created through strong partnerships.",
      projectsEyebrow: "Projects",
      projectsTitle: "Three examples of system entry",
      projectsSubtitle: "Each project has a field, ARAKERA role and measurable result.",
      caseAccessArea: "Security",
      caseAccessTitle: "Access control system integration",
      caseAccessText: "ARAKERA coordinates technical integration, responsible partners and access control implementation for the property.",
      caseRenovationArea: "Construction",
      caseRenovationTitle: "Residential property reconstruction",
      caseRenovationText: "The project moves through contractor coordination, quality control, budget discipline and a structured path to completion.",
      caseStaffArea: "Renewable energy",
      caseStaffTitle: "Technical staff selection",
      caseStaffText: "ARAKERA handled search, selection and coordination of installers and electrical specialists for energy projects. Result: more than 200 qualified specialists within one year.",
      caseOpen: "Project detail",
      contactEyebrow: "Contact",
      contactTitle: "Connect with ARAKERA",
      pointProjects: "✓ Projects",
      pointPartnerships: "✓ Partnerships",
      pointInvestments: "✓ Investments",
      pointBusiness: "✓ Business opportunities",
      namePlaceholder: "Your name",
      companyPlaceholder: "Company / team",
      projectPlaceholder: "Project / opportunity",
      messagePlaceholder: "What needs to be structured?",
      submitButton: "Enter system",
      systemModalEyebrow: "System entry",
      systemModalTitle: "One entry scenario for a project",
      systemModalText: "The project enters the ARAKERA system and moves through submission, analysis, resources, partnerships and implementation.",
      systemModalIntegration: "Projects are not treated as separate tasks. They are integrated into a structured system built for implementation.",
      systemNoteLine1: "Projects are not treated as separate tasks.",
      systemNoteLine2: "They are integrated into a structured system,",
      systemNoteLine3: "built for implementation.",
      projectModalEyebrow: "Partner request",
      projectModalTitle: "Short structure for the start",
      projectModalStep1: "1. Project goal",
      projectModalStep2: "2. City / country",
      projectModalStep3: "3. People and partners",
      projectModalStep4: "4. Resources and budget",
      goForm: "Go to form",
      submitSimilar: "Submit similar project",
      quickContact: "Quick contact",
      quickFacebook: "Quick contact via Facebook",
      contactModalTitle: "Need to explain the project quickly?",
      contactModalText: "Leave a short note about the task. The system will show direction, opportunity and the next conversation step.",
      sendingTitle: "Sending request into the system",
      sendingText: "Structuring project data...",
      submitSending: "Sending...",
      noteSending: "Sending request into the system...",
      noteSuccess: "The request was accepted by the ARAKERA system.",
      noteError: "The request could not be sent. Check the contact and try again.",
      progressCheck: "Checking contact details...",
      progressSend: "Passing request into the ARAKERA system...",
      progressFix: "Fixing the project direction...",
      progressWait: "Waiting for server confirmation...",
      progressAccepted: "Request accepted. Opening processing page...",
      progressFailed: "The request could not be delivered."
    }
  };
  let currentLang = "cs";

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function t(key) {
    return translations[currentLang]?.[key] || translations.cs[key] || key;
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "cs";
    document.documentElement.lang = currentLang;
    document.documentElement.dataset.lang = currentLang;
    try {
      localStorage.setItem("arakera_lang", currentLang);
    } catch (_) {
      // Local storage may be unavailable in strict in-app browsers.
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll(".lang-image").forEach((image) => {
      const nextSrc = image.dataset[currentLang] || image.dataset.cs || image.getAttribute("src");
      if (nextSrc && image.getAttribute("src") !== nextSrc) {
        image.setAttribute("src", nextSrc);
      }
      if (nextSrc && image.closest(".screen--photo")) {
        image.closest(".screen--photo").style.setProperty("--slide-bg", `url("${nextSrc}")`);
      }
    });

    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.setLang === currentLang);
    });
  }

  function initLanguage() {
    let saved = "cs";
    try {
      saved = localStorage.getItem("arakera_lang") || "cs";
    } catch (_) {
      saved = "cs";
    }
    setLanguage(saved);
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.setLang));
    });
  }

  function preloadImage(src) {
    return new Promise((resolve) => {
      if (!src) {
        resolve();
        return;
      }
      const image = new Image();
      image.decoding = "sync";
      image.loading = "eager";
      image.fetchPriority = "high";
      image.onload = () => {
        if (image.decode) {
          image.decode().then(resolve).catch(resolve);
          return;
        }
        resolve();
      };
      image.onerror = resolve;
      image.src = src;
    });
  }

  function revealPreloaderImageWhenReady() {
    if (!preloaderImage) return;
    const reveal = () => preloaderImage.classList.add("is-ready");
    if (preloaderImage.complete && preloaderImage.naturalWidth > 0) {
      if (preloaderImage.decode) {
        preloaderImage.decode().then(reveal).catch(reveal);
        return;
      }
      reveal();
      return;
    }
    preloaderImage.addEventListener("load", () => {
      if (preloaderImage.decode) {
        preloaderImage.decode().then(reveal).catch(reveal);
        return;
      }
      reveal();
    }, { once: true });
    preloaderImage.addEventListener("error", reveal, { once: true });
  }

  function getScreenVideo(index) {
    return screens[index]?.querySelector(".screen-video--slide") || null;
  }

  function prepareVideo(video) {
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    try {
      if (video.readyState < 2) video.load();
    } catch (_) {
      // Browsers can reject load() while changing pages; the poster keeps the screen stable.
    }
  }

  function requestVideoPlay(video) {
    if (!video) return;
    prepareVideo(video);
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        video.classList.add("is-fallback");
      });
    }
  }

  function waitForVideo(video, timeout = 2600) {
    return new Promise((resolve) => {
      if (!video || video.readyState >= 3) {
        resolve();
        return;
      }
      const timer = window.setTimeout(resolve, timeout);
      const done = () => {
        window.clearTimeout(timer);
        resolve();
      };
      video.addEventListener("canplay", done, { once: true });
      video.addEventListener("loadeddata", done, { once: true });
      video.addEventListener("error", done, { once: true });
    });
  }

  function warmNearbyScreens(index) {
    [index + 1, index + 2].forEach((next) => {
      const video = getScreenVideo(next);
      if (video) prepareVideo(video);
    });
  }

  function activateScreenVideo(index, restart = false) {
    const video = getScreenVideo(index);
    if (!video) return;
    prepareVideo(video);
    if (restart && video.readyState >= 1) {
      try {
        video.currentTime = 0;
      } catch (_) {
        // Some mobile browsers do not allow seeking before enough metadata is ready.
      }
    }
    requestVideoPlay(video);
  }

  function pauseInactiveScreenVideos(index) {
    screens.forEach((screen, screenIndex) => {
      if (screenIndex === index) return;
      const video = screen.querySelector(".screen-video--slide");
      if (video && !video.paused) {
        video.pause();
      }
    });
  }

  function setActive(index) {
    activeIndex = clamp(index, 0, screens.length - 1);
    document.body.dataset.activeScreen = String(activeIndex);

    screens.forEach((screen, i) => {
      screen.classList.toggle("is-active", i === activeIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === activeIndex);
    });

    if (progress) {
      progress.style.width = `${((activeIndex + 1) / screens.length) * 100}%`;
    }

    syncWallpaperToScreen(activeIndex);
    pauseInactiveScreenVideos(activeIndex);
    activateScreenVideo(activeIndex, true);
    warmNearbyScreens(activeIndex);
  }

  function syncWallpaperToScreen(index) {
    if (!globalWallpaperVideo || prefersReducedMotion) return;
    const targetTime = wallpaperTimeline[index] || 0;
    const now = Date.now();
    if (now - lastWallpaperSeek < 520) return;
    if (Math.abs(globalWallpaperVideo.currentTime - targetTime) < 1.4) return;
    lastWallpaperSeek = now;
    try {
      globalWallpaperVideo.currentTime = targetTime;
      const playPromise = globalWallpaperVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } catch (_) {
      // Some mobile browsers reject seeking before metadata; the next active screen update will retry.
    }
  }

  function screenTop(screen) {
    return screen.getBoundingClientRect().top - shell.getBoundingClientRect().top + shell.scrollTop;
  }

  function goTo(index, behavior = "smooth") {
    const next = clamp(index, 0, screens.length - 1);
    const screen = screens[next];
    if (!screen) {
      return;
    }

    const targetTop = screenTop(screen);
    if (next === activeIndex && Math.abs(shell.scrollTop - targetTop) < 2) {
      return;
    }

    isSnapping = true;
    setActive(next);
    shell.scrollTo({ top: targetTop, behavior: prefersReducedMotion ? "auto" : behavior });
    clearTimeout(goTo.timer);
    goTo.timer = setTimeout(() => {
      isSnapping = false;
    }, prefersReducedMotion ? 40 : 760);
  }

  function nearestIndex() {
    const top = shell.scrollTop;
    let best = 0;
    let distance = Infinity;
    screens.forEach((screen, index) => {
      const current = Math.abs(screenTop(screen) - top);
      if (current < distance) {
        distance = current;
        best = index;
      }
    });
    return best;
  }

  function closeMenu() {
    menuPanel.classList.remove("is-open");
    menuPanel.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    closeModals();
    menuPanel.classList.add("is-open");
    menuPanel.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeModals() {
    Object.values(modals).forEach((modal) => {
      if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

  function openModal(name) {
    closeMenu();
    closeModals();
    const modal = modals[name];
    if (modal) {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    }
  }

  function goForm() {
    closeMenu();
    closeModals();
    goTo(screens.length - 1);
    setTimeout(() => {
      const input = document.querySelector('#projectForm input:not([type="hidden"]), #projectForm textarea');
      if (input) input.focus({ preventScroll: true });
    }, 850);
  }

  function shouldIgnoreSnap(eventTarget) {
    return Boolean(
      eventTarget.closest(".menu-panel") ||
      eventTarget.closest(".modal") ||
      eventTarget.closest("input, textarea, select, button, a")
    );
  }

  function scrollableAncestor(eventTarget) {
    const element = eventTarget.closest(".screen__inner, .resource-grid, .case-track, .partner-grid, .modal__card, .menu-panel__inner");
    if (!element || element === shell) return null;
    return element.scrollHeight > element.clientHeight + 3 ? element : null;
  }

  function canScrollInside(element, deltaY) {
    if (!element) return false;
    if (deltaY > 0) return element.scrollTop + element.clientHeight < element.scrollHeight - 2;
    if (deltaY < 0) return element.scrollTop > 2;
    return false;
  }

  function handleWheel(event) {
    if (shouldIgnoreSnap(event.target)) return;
    const now = Date.now();
    if (isSnapping || now - lastSnapAt < 660) {
      event.preventDefault();
      return;
    }

    wheelBalance += event.deltaY;
    if (Math.abs(wheelBalance) < 48) return;

    event.preventDefault();
    const direction = wheelBalance > 0 ? 1 : -1;
    wheelBalance = 0;
    lastSnapAt = now;
    goTo(activeIndex + direction);
  }

  function handleKeydown(event) {
    const keyMap = {
      ArrowDown: 1,
      PageDown: 1,
      " ": 1,
      ArrowUp: -1,
      PageUp: -1
    };

    if (event.key === "Escape") {
      closeMenu();
      closeModals();
      return;
    }

    if (!(event.key in keyMap) || shouldIgnoreSnap(event.target)) return;

    event.preventDefault();
    goTo(activeIndex + keyMap[event.key]);
  }

  function initVideo() {
    document.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.playsInline = true;
      video.preload = video.id === "globalWallpaperVideo" || video.id === "preloaderVideo" || video.classList.contains("screen-video--slide") ? "auto" : (video.preload || "metadata");
      video.addEventListener("loadedmetadata", () => {
        if (video.id === "globalWallpaperVideo") {
          syncWallpaperToScreen(activeIndex);
        }
      }, { once: true });
      video.addEventListener("canplay", () => video.classList.add("is-ready"), { once: true });
      prepareVideo(video);
      if (video.id === "globalWallpaperVideo" || video.id === "preloaderVideo" || video.closest(".screen.is-active")) {
        requestVideoPlay(video);
      }
    });
  }

  function hidePreloader() {
    if (!preloader) return;
    activateScreenVideo(0, true);
    preloader.classList.add("is-hidden");
    setTimeout(() => {
      preloader.remove();
    }, 700);
  }

  function initPreloader() {
    if (!preloader) return;
    revealPreloaderImageWhenReady();

    const immediateImages = [
      preloaderImage?.getAttribute("src"),
      "assets/images/slides/screen-1-cs-fit-fast.jpg",
      "assets/images/slides/screen-1-en-fit-fast.jpg",
      "assets/images/slides/screen-2-cs-fit-fast.jpg"
    ];

    const warmImages = [
      "assets/images/slides/screen-3-cs-fit-fast.jpg",
      "assets/images/slides/screen-4-cs-fit-fast.jpg",
      "assets/images/slides/screen-5-project-3-fast.jpg",
      "assets/images/slides/screen-6-cs-fit-fast.jpg",
      "assets/images/slides/screen-7-cs-fit-fast.jpg",
      "assets/images/slides/screen-8-bg-fast.jpg"
    ];

    const criticalImages = immediateImages.map(preloadImage);
    warmImages.forEach((src) => preloadImage(src));

    const minVisibleTime = prefersReducedMotion ? 650 : 2600;
    const absoluteMaxTime = prefersReducedMotion ? 1100 : 4300;
    const started = Date.now();
    let done = false;

    function tryHide() {
      if (done) return;
      const now = Date.now();
      const totalElapsed = now - started;
      if (totalElapsed < minVisibleTime && totalElapsed < absoluteMaxTime) {
        setTimeout(tryHide, Math.min(220, minVisibleTime - totalElapsed));
        return;
      }
      done = true;
      hidePreloader();
    }

    Promise.allSettled(criticalImages).then(tryHide);

    setTimeout(tryHide, absoluteMaxTime);
  }

  function setSubmitProgress(value, text) {
    const progress = clamp(Math.round(value), 0, 100);
    if (submitProgressBar) submitProgressBar.style.width = `${progress}%`;
    if (submitProgressValue) submitProgressValue.textContent = `${progress}%`;
    if (submitProgressText && text) submitProgressText.textContent = text;
  }

  function openSubmitLoader() {
    if (!submitLoader) return;
    submitLoader.classList.add("is-open");
    submitLoader.setAttribute("aria-hidden", "false");
    setSubmitProgress(6, t("sendingText"));
  }

  function closeSubmitLoader() {
    if (!submitLoader) return;
    submitLoader.classList.remove("is-open");
    submitLoader.setAttribute("aria-hidden", "true");
  }

  function startSubmitProgress() {
    let progress = 6;
    const steps = [
      t("progressCheck"),
      t("progressSend"),
      t("progressFix"),
      t("progressWait")
    ];
    let stepIndex = 0;
    setSubmitProgress(progress, steps[stepIndex]);
    return window.setInterval(() => {
      progress = Math.min(88, progress + Math.max(2, Math.round((90 - progress) * 0.14)));
      if (progress > 26 && stepIndex < 1) stepIndex = 1;
      if (progress > 52 && stepIndex < 2) stepIndex = 2;
      if (progress > 74 && stepIndex < 3) stepIndex = 3;
      setSubmitProgress(progress, steps[stepIndex]);
    }, 260);
  }

  function initEvents() {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => goTo(Number(dot.dataset.go || 0)));
    });

    document.querySelectorAll('a[href^="#screen-"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        const index = screens.indexOf(target);
        if (index >= 0) goTo(index);
        closeMenu();
      });
    });

    menuToggle.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    menuPanel.addEventListener("click", (event) => {
      if (event.target === menuPanel) closeMenu();
    });

    document.querySelectorAll("[data-open-modal]").forEach((button) => {
      button.addEventListener("click", () => openModal(button.dataset.openModal));
    });

    document.querySelectorAll("[data-close-modal]").forEach((button) => {
      button.addEventListener("click", closeModals);
    });

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModals();
      });
    });

    document.querySelectorAll("[data-go-form]").forEach((button) => {
      button.addEventListener("click", goForm);
    });

    shell.addEventListener("scroll", () => {
      if (isSnapping || scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = 0;
        const index = nearestIndex();
        if (index !== activeIndex) setActive(index);
      });
    }, { passive: true });

    shell.addEventListener("wheel", handleWheel, { passive: false });

    shell.addEventListener("touchstart", (event) => {
      touchStartY = event.touches[0].clientY;
      touchLatestY = touchStartY;
    }, { passive: true });

    shell.addEventListener("touchmove", (event) => {
      if (shouldIgnoreSnap(event.target) || isSnapping) return;
      touchLatestY = event.touches[0].clientY;
      const deltaY = touchStartY - touchLatestY;
      if (Math.abs(deltaY) < 8) return;
      if (canScrollInside(scrollableAncestor(event.target), deltaY)) return;
      event.preventDefault();
    }, { passive: false });

    shell.addEventListener("touchend", (event) => {
      if (shouldIgnoreSnap(event.target) || isSnapping) return;
      const endY = event.changedTouches[0].clientY;
      const diff = touchStartY - endY;
      if (Math.abs(diff) > 54) {
        goTo(activeIndex + (diff > 0 ? 1 : -1));
      }
    }, { passive: true });

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", () => {
      const widthDelta = Math.abs(window.innerWidth - lastViewportWidth);
      lastViewportWidth = window.innerWidth;
      if (widthDelta < 24) return;
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        goTo(activeIndex, "auto");
      }, 140);
    });

    const form = document.getElementById("projectForm");
    const note = document.getElementById("formNote");
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton ? submitButton.textContent : "";
        const formData = new FormData(form);
        formData.set("page_url", window.location.href);
        formData.set("active_screen", String(activeIndex + 1));
        formData.set("submitted_at", new Date().toISOString());
        formData.set("language", currentLang.toUpperCase());
        formData.set("email", formData.get("email") || "lead@arakera.group");
        formData.set("redirect_target", "request-processing.html");
        let progressTimer = null;

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = t("submitSending");
        }

        if (note) {
          note.textContent = t("noteSending");
          note.classList.remove("is-success", "is-error");
        }
        openSubmitLoader();
        progressTimer = startSubmitProgress();

        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
          const result = await response.json().catch(() => ({}));

          if (!response.ok || result.success === false) {
            throw new Error(result.message || "Web3Forms rejected the request");
          }

          if (progressTimer) window.clearInterval(progressTimer);
          setSubmitProgress(100, t("progressAccepted"));
          if (note) {
            note.textContent = t("noteSuccess");
            note.classList.add("is-success");
          }
          form.reset();
          window.setTimeout(() => {
            window.location.href = "request-processing.html?status=received";
          }, 850);
        } catch (_) {
          if (progressTimer) window.clearInterval(progressTimer);
          setSubmitProgress(0, t("progressFailed"));
          window.setTimeout(closeSubmitLoader, 450);
          if (note) {
            note.textContent = t("noteError");
            note.classList.add("is-error");
          }
        } finally {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }
        }
      });
    }
  }

  function init() {
    document.documentElement.classList.add("is-ready");
    initLanguage();
    setActive(0);
    initVideo();
    initEvents();
    initPreloader();
    const queryScreen = Number(new URLSearchParams(window.location.search).get("screen"));
    if (Number.isFinite(queryScreen) && queryScreen >= 1 && queryScreen <= screens.length) {
      const index = queryScreen - 1;
      shell.scrollTop = screenTop(screens[index]);
      setActive(index);
      setTimeout(() => goTo(index, "auto"), 120);
      return;
    }

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      const index = screens.indexOf(target);
      if (index >= 0) {
        shell.scrollTop = screenTop(screens[index]);
        setActive(index);
        setTimeout(() => goTo(index, "auto"), 120);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
