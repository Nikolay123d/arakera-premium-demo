(function () {
  const translations = {
    cs: {
      navEntry: "Vstup",
      navCity: "System",
      navProcess: "Proces",
      navResources: "Zdroje",
      navMap: "Mapa",
      navCases: "Případy",
      entryTagline: "PROJECT COORDINATION &amp;<br>INTEGRATION HUB",
      brandSubtitle: "Project Coordination & Integration Hub",
      cityHeadline1: "SPOJUJEME SPRÁVNÉ PROJEKTY",
      cityHeadline2: "SE SPRÁVNÝMI LIDMI",
      cityText1: "Projekty vstupují do systému ARAKERA pro",
      cityText2: "strukturovanou koordinaci, rozvoj a realizaci",
      cityText3: "prostřednictvím technologií, lidí a kapitálu.",
      cityButton: "UVÍTÍ V SYSTÉMU",
      systemKickerNumber: "02",
      systemKickerLabel: "VSTUP DO SYSTÉMU",
      systemTitle: "VSTUP DO SYSTÉMU ARAKERA",
      systemLead1: "Každý projekt prochází strukturovaným procesem vstupu",
      systemLead2: "před koordinací, rozvojem a realizací.",
      systemCard1Title: "PODÁNÍ PROJEKTU",
      systemCard1Copy: "Předložte svůj nápad, potřebu nebo příležitost.",
      systemCard1Item1: "Obchodní nápad",
      systemCard1Item2: "Investiční příležitost",
      systemCard1Item3: "Stavební nebo technický projekt",
      systemCard1Item4: "Personální nebo provozní požadavek",
      systemCard2Title: "STRUKTURACE<br>A ANALÝZA",
      systemCard2Copy: "Projekt posoudíme a strukturujeme v rámci systému ARAKERA.",
      systemCard2Item1: "Stanovení rozsahu projektu",
      systemCard2Item2: "Analýza potřebných zdrojů",
      systemCard2Item3: "Posouzení potenciálu a proveditelnosti",
      systemCard2Item4: "Vytvoření koordinačního modelu",
      systemCard3Title: "INTEGRACE<br>A REALIZACE",
      systemCard3Copy: "Projekt přechází do fáze aktivní koordinace.",
      systemCard3Item1: "Integrace technologií",
      systemCard3Item2: "Zapojení personálu",
      systemCard3Item3: "Koordinace realizace",
      systemCard3Item4: "Zajištění kapitálu dle potřeby",
      systemNote1: "Projekty nejsou posuzovány jako samostatné úkoly.",
      systemNote2: "Integrují se do strukturovaného systému vytvořeného pro realizaci.",
      resourcesTitle: "ČTYŘI ZDROJE SYSTÉMU",
      resourcesLead: "Všechny projekty se rozvíjejí prostřednictvím čtyř operačních zdrojů.",
      resourcesTechTitle: "TECHNOLOGIE",
      resourcesTechItem1: "Bezpečnostní systémy",
      resourcesTechItem2: "Kontrola přístupu",
      resourcesTechItem3: "Chytré zámky",
      resourcesTechItem4: "Automatizace",
      resourcesTechItem5: "Smart Home",
      resourcesTechItem6: "Integrace technologií",
      resourcesTechItem7: "Kamerové systémy",
      resourcesTechItem8: "Monitoring a senzory",
      resourcesTechItem9: "Energetický management",
      resourcesBuildTitle: "STAVEBNICTVÍ",
      resourcesBuildItem1: "Stavební materiály",
      resourcesBuildItem2: "Prémiové rekonstrukce",
      resourcesBuildItem3: "Komerční projekty",
      resourcesBuildItem4: "Infrastruktura",
      resourcesBuildItem5: "Koordinace dodavatelů",
      resourcesBuildItem6: "Kontrola kvality a rozpočtu",
      resourcesPeopleTitle: "PERSONÁL",
      resourcesPeopleItem1: "Operační týmy",
      resourcesPeopleItem2: "Výroba",
      resourcesPeopleItem3: "Sklady",
      resourcesPeopleItem4: "Logistika",
      resourcesPeopleItem5: "Zajištění personálu",
      resourcesPeopleItem6: "Koordinace týmů",
      resourcesCapitalTitle: "KAPITÁL",
      resourcesCapitalItem1: "Investiční účast",
      resourcesCapitalItem2: "Rozvoj podnikání",
      resourcesCapitalItem3: "Finanční optimalizace",
      resourcesCapitalItem4: "Strategická partnerství",
      resourcesCapitalItem5: "Tvorba dlouhodobé hodnoty",
      resourcesFooter: "Společně tvoří operační systém <strong>ARAKERA.</strong>",
      mapTitle: "MAPA PROJEKTU",
      mapStepProject: "PROJEKT",
      mapStepAnalysis: "ANALÝZA",
      mapStepTechnology: "TECHNOLOGIE",
      mapStepConstruction: "STAVITELSTVÍ",
      mapStepPersonnel: "PERSONÁL",
      mapStepCapital: "KAPITÁL",
      mapStepDelivery: "REALIZACE",
      mapStepValue: "DLOUHODOBÁ HODNOTA",
      mapFooter: "Projekty jsou řízeny prostřednictvím systému <strong>ARAKERA</strong><br>podle potřeb, dostupných zdrojů<br>a potenciálu rozvoje.",
      navPartners: "Partneři",
      partnersTitle: "PARTNERSTVÍ",
      partnersTechTitle: "TECHNOLOGIČTÍ<br>PARTNEŘI",
      partnersTechCopy: "Výrobci a dodavatelé<br>technologií.",
      partnersRealizationTitle: "PARTNEŘI<br>Z REALIZACE",
      partnersRealizationCopy: "Stavební, montážní<br>a servisní společnosti.",
      partnersBusinessTitle: "BIZNIS PARTNEŘI",
      partnersBusinessCopy: "Investoři, developeři<br>a klíčoví partneři<br>projektů.",
      partnersFooter: "Silné projekty vznikají díky silným partnerstvím.",
      navGeo: "Geografie",
      geoTitle: "GEOGRAFIE PŮSOBNOSTI",
      geoCopy1: "Koordinace projektů<br>v centrální Evropě.",
      geoCopy2: "Rozšiřujeme působnost<br>po celé Evropě.",
      navApply: "Dotaz",
      navLoading: "Zpracování",
      navSuccess: "Hotovo",
      applyKicker: "PARTNERSKÝ DOTAZ",
      applyTitle: "VSTUPNÍ FORMULÁŘ ARAKERA",
      applyLead: "Popište projekt, příležitost nebo zdroj. Systém připraví první směr koordinace.",
      applyNameLabel: "Jméno",
      applyNamePlaceholder: "Vaše jméno",
      applyContactLabel: "Kontakt",
      applyContactPlaceholder: "Telefon / e-mail / Messenger",
      applyProjectLabel: "Projekt",
      applyProjectPlaceholder: "Projekt / možnost / partnerství",
      applyMessageLabel: "Zadání",
      applyMessagePlaceholder: "Co je potřeba strukturovat?",
      applySubmit: "ODESLAT DO SYSTÉMU",
      applyFacebook: "Rychlý kontakt přes Facebook",
      applyNoteSending: "Žádost vstupuje do systému ARAKERA...",
      loadingTitle: "ODESÍLÁNÍ ŽÁDOSTI DO SYSTÉMU",
      loadingText: "Strukturujeme data projektu...",
      loadingStepCheck: "Kontrolujeme kontaktní údaje...",
      loadingStepStructure: "Strukturujeme zadání projektu...",
      loadingStepRoute: "Připravujeme směr koordinace...",
      loadingStepFinal: "Žádost přijata. Otevíráme finální stránku...",
      successTitle: "ŽÁDOST<br>VSTOUPILA<br>DO SYSTÉMU",
      successCopy: "Systém ARAKERA zpracovává vaši žádost. Ozveme se na uvedený kontakt po zpracování.",
      successStatus: "Zpracování žádosti je aktivní",
      successFacebook: "Rychlý kontakt přes Facebook",
      successBack: "Zpět na web klienta"
    },
    en: {
      navEntry: "Entry",
      navCity: "System",
      navProcess: "Process",
      navResources: "Resources",
      navMap: "Map",
      navCases: "Cases",
      entryTagline: "PROJECT COORDINATION &amp;<br>INTEGRATION HUB",
      brandSubtitle: "Project Coordination & Integration Hub",
      cityHeadline1: "CONNECTING THE RIGHT PROJECTS",
      cityHeadline2: "WITH THE RIGHT PEOPLE",
      cityText1: "Projects enter the ARAKERA system for",
      cityText2: "structured coordination, growth and delivery",
      cityText3: "through technology, people and capital.",
      cityButton: "ENTER THE SYSTEM",
      systemKickerNumber: "02",
      systemKickerLabel: "SYSTEM ENTRY",
      systemTitle: "ARAKERA SYSTEM ENTRY",
      systemLead1: "Every project passes through a structured intake process",
      systemLead2: "before coordination, development and delivery.",
      systemCard1Title: "PROJECT<br>SUBMISSION",
      systemCard1Copy: "Submit your idea, need or opportunity.",
      systemCard1Item1: "Business idea",
      systemCard1Item2: "Investment opportunity",
      systemCard1Item3: "Construction or technical project",
      systemCard1Item4: "Staffing or operating request",
      systemCard2Title: "STRUCTURING<br>AND ANALYSIS",
      systemCard2Copy: "We assess and structure the project inside the ARAKERA system.",
      systemCard2Item1: "Project scope definition",
      systemCard2Item2: "Required resource analysis",
      systemCard2Item3: "Potential and feasibility review",
      systemCard2Item4: "Coordination model creation",
      systemCard3Title: "INTEGRATION<br>AND DELIVERY",
      systemCard3Copy: "The project moves into active coordination.",
      systemCard3Item1: "Technology integration",
      systemCard3Item2: "Personnel involvement",
      systemCard3Item3: "Delivery coordination",
      systemCard3Item4: "Capital support as needed",
      systemNote1: "Projects are not treated as separate tasks.",
      systemNote2: "They are integrated into a structured system built for delivery.",
      resourcesTitle: "FOUR SYSTEM RESOURCES",
      resourcesLead: "All projects develop through four operational resources.",
      resourcesTechTitle: "TECHNOLOGY",
      resourcesTechItem1: "Security systems",
      resourcesTechItem2: "Access control",
      resourcesTechItem3: "Smart locks",
      resourcesTechItem4: "Automation",
      resourcesTechItem5: "Smart Home",
      resourcesTechItem6: "Technology integration",
      resourcesTechItem7: "Camera systems",
      resourcesTechItem8: "Monitoring and sensors",
      resourcesTechItem9: "Energy management",
      resourcesBuildTitle: "CONSTRUCTION",
      resourcesBuildItem1: "Building materials",
      resourcesBuildItem2: "Premium renovations",
      resourcesBuildItem3: "Commercial projects",
      resourcesBuildItem4: "Infrastructure",
      resourcesBuildItem5: "Contractor coordination",
      resourcesBuildItem6: "Quality and budget control",
      resourcesPeopleTitle: "PERSONNEL",
      resourcesPeopleItem1: "Operating teams",
      resourcesPeopleItem2: "Production",
      resourcesPeopleItem3: "Warehouses",
      resourcesPeopleItem4: "Logistics",
      resourcesPeopleItem5: "Personnel provision",
      resourcesPeopleItem6: "Team coordination",
      resourcesCapitalTitle: "CAPITAL",
      resourcesCapitalItem1: "Investment participation",
      resourcesCapitalItem2: "Business development",
      resourcesCapitalItem3: "Financial optimization",
      resourcesCapitalItem4: "Strategic partnerships",
      resourcesCapitalItem5: "Long-term value creation",
      resourcesFooter: "Together they form the <strong>ARAKERA</strong> operating system.",
      mapTitle: "PROJECT MAP",
      mapStepProject: "PROJECT",
      mapStepAnalysis: "ANALYSIS",
      mapStepTechnology: "TECHNOLOGY",
      mapStepConstruction: "CONSTRUCTION",
      mapStepPersonnel: "PERSONNEL",
      mapStepCapital: "CAPITAL",
      mapStepDelivery: "DELIVERY",
      mapStepValue: "LONG-TERM VALUE",
      mapFooter: "Projects are managed through the <strong>ARAKERA</strong> system<br>according to needs, available resources<br>and development potential.",
      navPartners: "Partners",
      partnersTitle: "PARTNERSHIPS",
      partnersTechTitle: "TECHNOLOGY<br>PARTNERS",
      partnersTechCopy: "Technology producers<br>and suppliers.",
      partnersRealizationTitle: "DELIVERY<br>PARTNERS",
      partnersRealizationCopy: "Construction, installation<br>and service companies.",
      partnersBusinessTitle: "BUSINESS PARTNERS",
      partnersBusinessCopy: "Investors, developers<br>and key project partners.",
      partnersFooter: "Strong projects are built through strong partnerships.",
      navGeo: "Geography",
      geoTitle: "GEOGRAPHY OF OPERATIONS",
      geoCopy1: "Project coordination<br>in Central Europe.",
      geoCopy2: "We are expanding<br>across Europe.",
      navApply: "Request",
      navLoading: "Processing",
      navSuccess: "Done",
      applyKicker: "PARTNER REQUEST",
      applyTitle: "ARAKERA INTAKE FORM",
      applyLead: "Describe the project, opportunity or resource. The system prepares the first coordination direction.",
      applyNameLabel: "Name",
      applyNamePlaceholder: "Your name",
      applyContactLabel: "Contact",
      applyContactPlaceholder: "Phone / e-mail / Messenger",
      applyProjectLabel: "Project",
      applyProjectPlaceholder: "Project / opportunity / partnership",
      applyMessageLabel: "Brief",
      applyMessagePlaceholder: "What needs to be structured?",
      applySubmit: "SEND INTO SYSTEM",
      applyFacebook: "Quick contact via Facebook",
      applyNoteSending: "The request is entering the ARAKERA system...",
      loadingTitle: "SENDING REQUEST INTO SYSTEM",
      loadingText: "Structuring project data...",
      loadingStepCheck: "Checking contact details...",
      loadingStepStructure: "Structuring the project brief...",
      loadingStepRoute: "Preparing the coordination direction...",
      loadingStepFinal: "Request accepted. Opening the final page...",
      successTitle: "REQUEST<br>ENTERED<br>THE SYSTEM",
      successCopy: "The ARAKERA system is processing your request. We will contact you after processing.",
      successStatus: "Request processing is active",
      successFacebook: "Quick contact via Facebook",
      successBack: "Back to the client website"
    }
  };

  const screenConfigs = [
    {
      screen: ".entry-screen",
      image: ".entry-screen__background",
      readyClass: "entry-screen--image-ready",
      cue: ".entry-screen__scroll-cue"
    },
    {
      screen: ".city-screen",
      image: ".city-screen__background",
      readyClass: "city-screen--image-ready",
      cue: ".city-screen__scroll-cue",
      action: ".city-screen__button"
    },
    {
      screen: ".system-screen",
      image: ".system-screen__background",
      readyClass: "system-screen--image-ready"
    },
    {
      screen: ".resources-screen",
      image: ".resources-screen__background",
      readyClass: "resources-screen--image-ready"
    },
    {
      screen: ".map-screen",
      image: ".map-screen__background",
      readyClass: "map-screen--image-ready"
    },
    {
      screen: ".case-screen",
      image: ".case-screen__background",
      readyClass: "case-screen--image-ready"
    },
    {
      screen: ".partners-screen",
      image: ".partners-screen__background",
      readyClass: "partners-screen--image-ready"
    },
    {
      screen: ".geo-screen",
      image: ".geo-screen__map",
      readyClass: "geo-screen--image-ready"
    },
    {
      screen: ".apply-screen",
      image: ".apply-screen__background",
      readyClass: "apply-screen--image-ready"
    },
    {
      screen: ".loading-screen",
      image: ".loading-screen__background",
      readyClass: "loading-screen--image-ready"
    },
    {
      screen: ".success-screen",
      image: ".success-screen__background",
      readyClass: "success-screen--image-ready"
    }
  ];

  const nudgeElement = (node) => {
    if (!node || typeof node.animate !== "function") return;
    node.animate(
      [
        { transform: "translate3d(-50%, 0, 0)" },
        { transform: "translate3d(-50%, 16px, 0)" },
        { transform: "translate3d(-50%, 0, 0)" }
      ],
      { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" }
    );
  };

  const getScreens = () => screenConfigs
    .map((config) => document.querySelector(config.screen))
    .filter(Boolean);

  const goNext = (screen, cue) => {
    const nextScreen = screen.nextElementSibling;
    if (nextScreen) {
      goToScreen(nextScreen.id);
      return;
    }
    nudgeElement(cue);
  };

  const scrollToTarget = (target, behavior = "smooth") => {
    const releaseDelay = behavior === "auto" ? 380 : 1040;
    isProgrammaticScroll = true;
    const correct = () => {
      const delta = target.getBoundingClientRect().top;
      if (Math.abs(delta) > 1) {
        window.scrollTo({ top: target.offsetTop, left: 0, behavior: "auto" });
      }
    };

    window.scrollTo({ top: target.offsetTop, left: 0, behavior });
    window.setTimeout(correct, 40);
    window.setTimeout(correct, 140);
    window.setTimeout(correct, 300);
    if (behavior !== "auto") {
      window.setTimeout(correct, 520);
      window.setTimeout(correct, 900);
    }
    window.setTimeout(() => {
      isProgrammaticScroll = false;
      settleScroll();
    }, releaseDelay);
  };

  const alignHashTarget = () => {
    if (!window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    if (target.id === "entry-screen-01" && window.scrollY < 8) {
      setActiveScreen(target.id);
      return;
    }
    setActiveScreen(target.id);
    scrollToTarget(target, "auto");
  };

  const getStoredLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang && translations[queryLang]) return queryLang;

    try {
      const storedLang = window.localStorage.getItem("arakera-entry-lang");
      if (storedLang && translations[storedLang]) return storedLang;
    } catch {
      return "cs";
    }

    return "cs";
  };

  const setLanguage = (lang) => {
    const dictionary = translations[lang] || translations.cs;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dictionary[key]) node.textContent = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const key = node.getAttribute("data-i18n-html");
      if (dictionary[key]) node.innerHTML = dictionary[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) node.setAttribute("placeholder", dictionary[key]);
    });

    document.querySelectorAll("[data-entry-lang]").forEach((button) => {
      const isActive = button.getAttribute("data-entry-lang") === lang;
      button.classList.toggle("entry-nav__lang--active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      window.localStorage.setItem("arakera-entry-lang", lang);
    } catch {
      return;
    }
  };

  const goToScreen = (targetId, behavior = "smooth") => {
    const target = document.getElementById(targetId);
    if (!target) return;
    scrollToTarget(target, behavior);
    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${targetId}`);
    }
    setActiveScreen(targetId);
  };

  const nearestScreen = () => {
    const screens = getScreens();
    if (!screens.length) return null;

    return screens.reduce((nearest, screen) => {
      const distance = Math.abs(screen.offsetTop - window.scrollY);
      if (!nearest || distance < nearest.distance) return { screen, distance };
      return nearest;
    }, null).screen;
  };

  let settleTimer = 0;
  let isSettling = false;
  let isProgrammaticScroll = false;
  let gestureLockUntil = 0;
  let viewportSettleTimer = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchIgnored = false;
  let activeScreenId = window.location.hash ? window.location.hash.slice(1) : "entry-screen-01";

  const isEditableTarget = (target) => Boolean(
    target && typeof target.closest === "function" &&
      target.closest("input, textarea, select")
  );

  const isEditingField = () => isEditableTarget(document.activeElement);

  const setScreenHeight = () => {
    if (isEditingField()) return;
    const viewport = window.visualViewport;
    const height = Math.round(viewport && viewport.height ? viewport.height : window.innerHeight);
    if (height > 0) {
      document.documentElement.style.setProperty("--entry-screen-height", `${height}px`);
    }
  };

  const realignToActiveScreen = () => {
    if (isEditingField()) return;
    if (isProgrammaticScroll) return;
    const target = document.getElementById(activeScreenId) || nearestScreen();
    if (!target) return;
    window.scrollTo({ top: target.offsetTop, left: 0, behavior: "auto" });
    setActiveScreen(target.id);
  };

  const handleViewportChange = () => {
    if (isEditingField()) {
      window.clearTimeout(viewportSettleTimer);
      return;
    }
    setScreenHeight();
    window.clearTimeout(viewportSettleTimer);
    viewportSettleTimer = window.setTimeout(realignToActiveScreen, 90);
  };

  setScreenHeight();

  const shouldIgnoreGestureTarget = isEditableTarget;

  const stepToAdjacentScreen = (direction) => {
    const screens = getScreens();
    if (!screens.length) return false;

    const now = Date.now();
    if (now < gestureLockUntil || isProgrammaticScroll) return true;

    const current = nearestScreen() || screens[0];
    const currentIndex = Math.max(0, screens.indexOf(current));
    const nextIndex = Math.max(0, Math.min(screens.length - 1, currentIndex + direction));

    if (nextIndex === currentIndex) {
      const config = screenConfigs.find((item) => current.matches(item.screen));
      const cue = config && config.cue ? current.querySelector(config.cue) : null;
      nudgeElement(cue);
      return true;
    }

    gestureLockUntil = now + 620;
    goToScreen(screens[nextIndex].id, "auto");
    return true;
  };

  const handleWheelStep = (event) => {
    if (event.ctrlKey || shouldIgnoreGestureTarget(event.target)) return;
    if (Math.abs(event.deltaY) < 24 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
    event.preventDefault();
    stepToAdjacentScreen(event.deltaY > 0 ? 1 : -1);
  };

  const handleTouchStart = (event) => {
    if (!event.touches || event.touches.length !== 1) return;
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchIgnored = shouldIgnoreGestureTarget(event.target);
  };

  const handleTouchMove = (event) => {
    if (touchIgnored || !event.touches || event.touches.length !== 1) return;
    const touch = event.touches[0];
    const dx = Math.abs(touch.clientX - touchStartX);
    const dy = Math.abs(touch.clientY - touchStartY);
    if (dy > 8 && dy > dx && event.cancelable) {
      event.preventDefault();
    }
  };

  const handleTouchEnd = (event) => {
    if (touchIgnored || !event.changedTouches || event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStartX);
    const dy = touchStartY - touch.clientY;
    if (Math.abs(dy) < 42 || Math.abs(dy) < dx) {
      settleScroll();
      touchIgnored = false;
      return;
    }
    if (event.cancelable) event.preventDefault();
    stepToAdjacentScreen(dy > 0 ? 1 : -1);
    touchIgnored = false;
  };

  const settleScroll = () => {
    if (isEditingField()) return;
    if (isSettling || isProgrammaticScroll) return;
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => {
      if (isEditingField()) return;
      const target = nearestScreen();
      if (!target) return;

      const distance = Math.abs(target.offsetTop - window.scrollY);
      if (distance < 8) return;

      isSettling = true;
      scrollToTarget(target, "smooth");
      setActiveScreen(target.id);
      if (window.history && typeof window.history.replaceState === "function") {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${target.id}`);
      }
      window.setTimeout(() => {
        isSettling = false;
      }, 360);
    }, 120);
  };

  const setActiveScreen = (targetId) => {
    activeScreenId = targetId;
    const nav = document.querySelector(".entry-nav");
    if (nav) {
      nav.classList.toggle("entry-nav--city-active", targetId === "city-screen-02");
      nav.classList.toggle("entry-nav--paged-active", targetId !== "entry-screen-01");
      nav.classList.toggle("entry-nav--system-active", targetId === "system-screen-03");
      nav.classList.toggle("entry-nav--resources-active", targetId === "resources-screen-04");
      nav.classList.toggle("entry-nav--map-active", targetId === "map-screen-05");
      nav.classList.toggle("entry-nav--cases-active", targetId === "case-screen-06");
      nav.classList.toggle("entry-nav--partners-active", targetId === "partners-screen-07");
      nav.classList.toggle("entry-nav--geo-active", targetId === "geo-screen-08");
      nav.classList.toggle("entry-nav--apply-active", targetId === "apply-screen-09");
      nav.classList.toggle("entry-nav--loading-active", targetId === "loading-screen-10");
      nav.classList.toggle("entry-nav--success-active", targetId === "success-screen-11");
    }

    document.querySelectorAll("[data-entry-target]").forEach((button) => {
      const isActive = button.getAttribute("data-entry-target") === targetId;
      button.classList.toggle("entry-nav__dot--active", isActive && button.classList.contains("entry-nav__dot"));
      button.classList.toggle("entry-nav__link--active", isActive && button.classList.contains("entry-nav__link"));
    });
  };

  const setupNavigation = () => {
    const nav = document.querySelector(".entry-nav");
    const toggle = document.querySelector(".entry-nav__toggle");

    document.querySelectorAll("[data-entry-lang]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.getAttribute("data-entry-lang")));
    });

    document.querySelectorAll("[data-entry-target]").forEach((button) => {
      button.addEventListener("click", () => {
        goToScreen(button.getAttribute("data-entry-target"));
        if (nav) nav.setAttribute("aria-expanded", "false");
      });
    });

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const isOpen = nav.getAttribute("aria-expanded") === "true";
        nav.setAttribute("aria-expanded", String(!isOpen));
      });
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveScreen(entry.target.id);
        });
      }, { threshold: 0.58 });

      screenConfigs.forEach((config) => {
        const screen = document.querySelector(config.screen);
        if (screen) observer.observe(screen);
      });
    }

    setLanguage(getStoredLanguage());
  };

  const setupCaseCarousel = () => {
    const carousel = document.querySelector("[data-case-carousel]");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll("[data-case-slide]"));
    const dots = Array.from(document.querySelectorAll("[data-case-target]"));
    if (!slides.length || !dots.length) return;

    let scrollFrame = 0;

    const getActiveIndex = () => {
      const viewportCenter = carousel.scrollLeft + (carousel.clientWidth / 2);
      return slides.reduce((nearest, slide, index) => {
        const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
        const distance = Math.abs(slideCenter - viewportCenter);
        if (!nearest || distance < nearest.distance) return { index, distance };
        return nearest;
      }, null).index;
    };

    const setActiveCase = (index) => {
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("case-screen__dot--active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
      });
    };

    const updateActiveCase = () => {
      scrollFrame = 0;
      setActiveCase(getActiveIndex());
    };

    carousel.addEventListener("scroll", () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateActiveCase);
    }, { passive: true });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = Number(dot.getAttribute("data-case-target"));
        const slide = slides[index];
        if (!slide) return;
        carousel.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
        setActiveCase(index);
      });
    });

    carousel.scrollTo({ left: 0, behavior: "auto" });
    setActiveCase(0);
  };

  const setupApplicationFlow = () => {
    const form = document.getElementById("applyForm");
    const note = document.getElementById("applyNote");
    const progressBar = document.getElementById("applyProgressBar");
    const progressValue = document.getElementById("applyProgressValue");
    const progressText = document.getElementById("applyProgressText");
    let progressTimer = 0;

    const t = (key) => {
      const lang = document.documentElement.lang || getStoredLanguage();
      return (translations[lang] && translations[lang][key]) || translations.cs[key] || key;
    };

    const setProgress = (value, text) => {
      const progress = Math.max(0, Math.min(100, Math.round(value)));
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (progressValue) progressValue.textContent = `${progress}%`;
      if (progressText && text) progressText.textContent = text;
    };

    const saveLocalRequest = () => {
      if (!form) return;
      const payload = Object.fromEntries(new FormData(form).entries());
      payload.language = (document.documentElement.lang || "cs").toUpperCase();
      payload.page_url = window.location.href;
      payload.submitted_at = new Date().toISOString();
      try {
        window.localStorage.setItem("arakera-last-application", JSON.stringify(payload));
      } catch {
        return;
      }
    };

    const runLoader = () => {
      window.clearInterval(progressTimer);
      const steps = [
        { limit: 28, text: t("loadingStepCheck") },
        { limit: 58, text: t("loadingStepStructure") },
        { limit: 86, text: t("loadingStepRoute") },
        { limit: 100, text: t("loadingStepFinal") }
      ];
      let progress = 3;
      let stepIndex = 0;
      setProgress(progress, steps[stepIndex].text);
      goToScreen("loading-screen-10", "smooth");

      progressTimer = window.setInterval(() => {
        const target = steps[stepIndex].limit;
        progress = Math.min(target, progress + Math.max(2, Math.round((target - progress) * 0.2)));
        setProgress(progress, steps[stepIndex].text);
        if (progress >= target) {
          stepIndex += 1;
          if (stepIndex >= steps.length) {
            window.clearInterval(progressTimer);
            setProgress(100, t("loadingStepFinal"));
            window.setTimeout(() => goToScreen("success-screen-11", "smooth"), 620);
            return;
          }
          progress = Math.min(progress + 3, steps[stepIndex].limit - 1);
          setProgress(progress, steps[stepIndex].text);
        }
      }, 180);
    };

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        if (document.activeElement && typeof document.activeElement.blur === "function") {
          document.activeElement.blur();
        }
        saveLocalRequest();
        if (note) note.textContent = t("applyNoteSending");
        runLoader();
      });
    }

    setProgress(0, t("loadingText"));
  };

  screenConfigs.forEach((config) => {
    const screen = document.querySelector(config.screen);
    if (!screen) return;

    const image = screen.querySelector(config.image);
    const cue = screen.querySelector(config.cue);
    const action = config.action ? screen.querySelector(config.action) : null;

    const markReady = () => {
      screen.classList.add(config.readyClass);
    };

    if (image && image.complete) {
      markReady();
    } else if (image) {
      image.addEventListener("load", markReady, { once: true });
      image.addEventListener("error", markReady, { once: true });
    }

    if (cue) {
      cue.addEventListener("click", () => goNext(screen, cue));
    }

    if (action) {
      action.addEventListener("click", () => goNext(screen, cue));
    }
  });

  window.addEventListener("hashchange", () => {
    const targetId = window.location.hash.slice(1);
    if (targetId && document.getElementById(targetId)) setActiveScreen(targetId);
    window.requestAnimationFrame(alignHashTarget);
  });

  window.addEventListener("wheel", handleWheelStep, { passive: false });
  window.addEventListener("touchstart", handleTouchStart, { passive: true });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleTouchEnd, { passive: false });
  window.addEventListener("scroll", settleScroll, { passive: true });
  window.addEventListener("resize", handleViewportChange, { passive: true });
  window.addEventListener("orientationchange", handleViewportChange, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleViewportChange, { passive: true });
  }

  let hasInitialized = false;

  const initialize = () => {
    if (hasInitialized) return;
    hasInitialized = true;
    setupNavigation();
    setupCaseCarousel();
    setupApplicationFlow();
    setScreenHeight();
    alignHashTarget();
    window.setTimeout(alignHashTarget, 80);
    window.setTimeout(alignHashTarget, 260);
  };

  if (document.readyState === "loading") {
    window.addEventListener("load", initialize, { once: true });
  } else {
    initialize();
  }

  window.addEventListener("pageshow", () => {
    alignHashTarget();
    window.setTimeout(alignHashTarget, 80);
  });
})();
