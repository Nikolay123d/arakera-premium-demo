(function () {
  const shell = document.getElementById("snapShell");
  const screens = Array.from(document.querySelectorAll(".screen"));
  const dots = Array.from(document.querySelectorAll(".section-dots button"));
  const progress = document.getElementById("screenProgress");
  const menuToggle = document.getElementById("menuToggle");
  const menuPanel = document.getElementById("menuPanel");
  const menuClose = document.getElementById("menuClose");
  const preloader = document.getElementById("preloader");
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
    caseRenovation: document.getElementById("caseRenovationModal")
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

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
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
    goTo(7);
    setTimeout(() => {
      const input = document.querySelector("#projectForm input");
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

    const firstScreenVideo = getScreenVideo(0);
    const secondScreenVideo = getScreenVideo(1);
    const criticalPosters = [
      "assets/images/arakera-screen-1-poster.jpg",
      "assets/images/arakera-screen-2-poster.jpg",
      "assets/images/arakera-screen-3-poster.jpg",
      "assets/images/arakera-screen-5-projects.png",
      "assets/images/arakera-screen-8-contact.png"
    ].map((src) => {
      const image = new Image();
      image.src = src;
      return new Promise((resolve) => {
        image.onload = image.onerror = resolve;
      });
    });

    [preloaderVideo, firstScreenVideo, secondScreenVideo].forEach((video) => {
      prepareVideo(video);
    });
    requestVideoPlay(preloaderVideo);
    requestVideoPlay(firstScreenVideo);
    warmNearbyScreens(0);

    const minVisibleTime = prefersReducedMotion ? 450 : 5600;
    const absoluteMaxTime = prefersReducedMotion ? 900 : 9800;
    const started = Date.now();
    let videoVisibleAt = started;
    let preloaderVideoReady = !preloaderVideo;
    let done = false;

    function markPreloaderVideoReady() {
      if (preloaderVideoReady) return;
      preloaderVideoReady = true;
      videoVisibleAt = Date.now();
      preloaderVideo.classList.add("is-ready");
      requestVideoPlay(preloaderVideo);
    }

    if (preloaderVideo) {
      if (preloaderVideo.readyState >= 3) {
        markPreloaderVideoReady();
      } else {
        preloaderVideo.addEventListener("canplay", markPreloaderVideoReady, { once: true });
        preloaderVideo.addEventListener("loadeddata", markPreloaderVideoReady, { once: true });
        preloaderVideo.addEventListener("error", () => {
          preloaderVideoReady = true;
          videoVisibleAt = Date.now();
        }, { once: true });
      }
    }

    function tryHide() {
      if (done) return;
      const now = Date.now();
      const totalElapsed = now - started;
      const visibleElapsed = now - videoVisibleAt;
      if (!preloaderVideoReady && totalElapsed < absoluteMaxTime) {
        setTimeout(tryHide, 180);
        return;
      }
      if (visibleElapsed < minVisibleTime && totalElapsed < absoluteMaxTime) {
        setTimeout(tryHide, Math.min(220, minVisibleTime - visibleElapsed));
        return;
      }
      done = true;
      activateScreenVideo(0, true);
      hidePreloader();
    }

    Promise.allSettled([
      ...criticalPosters,
      waitForVideo(firstScreenVideo, 3200),
      waitForVideo(secondScreenVideo, 3400)
    ]).then(tryHide);

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
    setSubmitProgress(6, "Структуруємо дані проєкту...");
  }

  function closeSubmitLoader() {
    if (!submitLoader) return;
    submitLoader.classList.remove("is-open");
    submitLoader.setAttribute("aria-hidden", "true");
  }

  function startSubmitProgress() {
    let progress = 6;
    const steps = [
      "Перевіряємо контактні дані...",
      "Передаємо запит у систему ARAKERA...",
      "Фіксуємо напрям проєкту...",
      "Очікуємо підтвердження від сервера..."
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
        formData.set("email", formData.get("email") || "lead@arakera.group");
        formData.set("redirect_target", "request-processing.html");
        let progressTimer = null;

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Відправляємо...";
        }

        if (note) {
          note.textContent = "Надсилання запиту в систему...";
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
          setSubmitProgress(100, "Запит прийнято. Переходимо до сторінки обробки...");
          if (note) {
            note.textContent = "Запит прийнято системою ARAKERA.";
            note.classList.add("is-success");
          }
          form.reset();
          window.setTimeout(() => {
            window.location.href = "request-processing.html?status=received";
          }, 850);
        } catch (_) {
          if (progressTimer) window.clearInterval(progressTimer);
          setSubmitProgress(0, "Запит не вдалося передати.");
          window.setTimeout(closeSubmitLoader, 450);
          if (note) {
            note.textContent = "Не вдалося відправити заявку. Перевірте контакт і спробуйте ще раз.";
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
