const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (!window.location.hash) window.scrollTo(0, 0);

const panelContent = {
  system: {
    eyebrow: "Система ARAKERA",
    title: "Від запиту до керованого руху.",
    copy: "ARAKERA потрібна там, де проєкт має багато учасників, ресурсів і невизначеності. Система спочатку очищує контекст, а вже потім підключає людей.",
    image: "assets/images/business-coordination.jpg",
    cards: [
      ["01", "Вхід", "Коротко описуємо ціль, стан, обмеження і критерій успіху."],
      ["02", "Діагностика", "Визначаємо, чого не вистачає: людей, технічної експертизи, партнерства чи капіталу."],
      ["03", "Маршрут", "Формуємо послідовність дій і точки прийняття рішень."],
      ["04", "Координація", "Тримаємо учасників в одному контексті до наступного результату."]
    ]
  },
  resources: {
    eyebrow: "Ресурсна модель",
    title: "Проєкти, люди, виконання і капітал мають працювати разом.",
    copy: "Якщо один ресурс випадає, проєкт починає буксувати. ARAKERA дивиться на систему цілісно і підбирає комбінацію під конкретний запит.",
    image: "assets/images/partnership-meeting.jpg",
    cards: [
      ["Projects", "Проєкти", "Ідея, задача, об'єкт або бізнес-можливість, яку потрібно довести до руху."],
      ["People", "Люди", "Власники, спеціалісти, виконавці, координатори, локальні партнери."],
      ["Implementation", "Виконання", "Технічні системи, реконструкція, логістика, операційні процеси."],
      ["Capital", "Капітал", "Стратегічні партнери, розвиток, підготовка до масштабування."]
    ]
  },
  projects: {
    eyebrow: "Проєкти",
    title: "Кожен кейс починається з правильно поставленого питання.",
    copy: "Demo-кейси показують типові сценарії, де інтеграційний центр корисний: технології, будівництво, автоматизація, логістика і партнерства.",
    image: "assets/images/corporate-tower.jpg",
    cards: [
      ["Access", "Контроль доступу", "Підключити постачальників, монтаж і власника об'єкта в одну карту дій."],
      ["Renovation", "Реконструкція", "Розділити ремонт/об'єкт на етапи, людей, ризики і контроль."],
      ["Smart", "Automation", "Перетворити технічну ідею в зрозумілий план інтеграції."],
      ["Operations", "Логістика", "Синхронізувати людей, задачі, доступність ресурсів і результат."]
    ]
  },
  partners: {
    eyebrow: "Партнерства",
    title: "Правильний партнер підключається тоді, коли проєкт уже сформульований.",
    copy: "ARAKERA допомагає не просто знайти контакт, а підготувати проєкт до розмови: ціль, роль партнера, очікування, ризики і next step.",
    image: "assets/images/partnership-meeting.jpg",
    cards: [
      ["01", "Власники", "Люди, які мають об'єкт, ідею або бізнес-задачу."],
      ["02", "Фахівці", "Технічні, операційні та менеджерські ролі для реалізації."],
      ["03", "Партнери", "Компанії, підрядники і локальні контакти для запуску."],
      ["04", "Капітал", "Стратегічний ресурс, який підключається після структури."]
    ]
  },
  geo: {
    eyebrow: "Географія",
    title: "Центральна Європа як зона координації.",
    copy: "Demo-мапа покриває Чехію, Словаччину, Австрію, Німеччину і Польщу. Для production можна додати реальні міста, офіси, партнерів і маршрути.",
    image: "assets/images/prague-architecture.jpg",
    cards: [
      ["Praha", "Чехія", "Операційний центр для demo-презентації."],
      ["Bratislava", "Словаччина", "Партнерські та логістичні сценарії."],
      ["Wien", "Австрія", "Капітал, розвиток, інфраструктурні можливості."],
      ["Berlin / Warsaw", "DE / PL", "Розширення контактів і регіональна взаємодія."]
    ]
  },
  contact: {
    eyebrow: "Зв'язок",
    title: "Почніть з короткого опису задачі.",
    copy: "Не потрібно готувати ідеальну презентацію. Достатньо описати, що є зараз, що потрібно змінити і який результат важливий.",
    image: "assets/images/logistics-operations.jpg",
    cards: [
      ["Email", "info@arakera-group.com", "Demo contact. Замінити на реальний перед запуском."],
      ["Messenger", "Facebook / Messenger", "Посилання додається після підтвердження сторінки."],
      ["Call", "Телефон", "Номер не вказаний у demo, щоб не публікувати чужі контакти."],
      ["Form", "Заявка", "Форма готова до Formspree / Web3Forms / endpoint."]
    ]
  }
};

const projectDetails = {
  access: ["Інтеграція системи контролю доступу", "ARAKERA збирає технічний контекст, погоджує ролі постачальника, монтажної команди і власника об'єкта, після чого формує план впровадження без розривів відповідальності."],
  renovation: ["Реконструкція житлового об'єкта", "Проєкт розкладається на етапи: стан об'єкта, обсяг робіт, підрядники, матеріали, контроль і здача. Це допомагає власнику бачити рух, а не лише загальні обіцянки."],
  smart: ["Smart building / automation project", "Бізнес-задача перекладається в технічну карту: які системи потрібні, хто інтегрує, що тестується і як власник приймає результат."],
  logistics: ["Personnel / logistics coordination", "Фокус на синхронізації людей, змін, задач і доступності ресурсів. ARAKERA допомагає зменшити хаос між операційними учасниками."]
};

const projectMedia = {
  access: "assets/images/corporate-tower.jpg",
  renovation: "assets/images/construction-renovation.jpg",
  smart: "assets/images/smart-technology.jpg",
  logistics: "assets/images/logistics-operations.jpg"
};

const preloader = qs("#preloader");
const header = qs("#siteHeader");
const menu = qs("#mobileMenu");
const menuButton = qs("#menuButton");
const floatingMenuButton = qs("#floatingMenuButton");
const mobileCornerMenu = qs("#mobileCornerMenu");
const menuClose = qs("#menuClose");
const modal = qs("#modal");
const modalContent = qs("#modalContent");
const screenPanel = qs("#screenPanel");
const screenContent = qs("#screenContent");
const sticky = qs("#stickyCta");
const processVideo = qs("#processVideo");
const videoToggle = qs("#videoToggle");
const hero = qs("#hero");
const heroVideo = qs("#heroVideo");
const preloaderBg = qs("#preloaderBg");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.body.classList.add("no-scroll");

function markPreloaderImageReady() {
  preloader?.classList.add("is-bg-ready");
}
if (preloaderBg?.complete) markPreloaderImageReady();
else preloaderBg?.addEventListener("load", markPreloaderImageReady, { once: true });

function prepareKineticText(el) {
  if (!el || el.dataset.kineticReady === "1") return;
  const text = el.textContent.trim();
  el.setAttribute("aria-label", text);
  const words = text.split(/\s+/).filter(Boolean);
  let chunks;

  if (el.tagName === "H1" && words.length > 3) {
    const midpoint = Math.ceil(words.length / 2);
    chunks = [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
  } else if (text.includes(".") || text.includes(":")) {
    chunks = text.split(/(?<=[.:])\s+/).filter(Boolean);
  } else if (words.length > 7) {
    chunks = [];
    for (let i = 0; i < words.length; i += 4) chunks.push(words.slice(i, i + 4).join(" "));
  } else {
    chunks = [text];
  }

  el.innerHTML = chunks.map((chunk, index) => {
    const dir = index % 2 === 0 ? -1 : 1;
    return `<span class="kinetic-line" aria-hidden="true" style="--i:${index};--dir:${dir}">${chunk}</span>`;
  }).join("");
  el.dataset.kineticReady = "1";
}

qsa("[data-kinetic-text]").forEach(prepareKineticText);

function primeHeroVideo() {
  if (!heroVideo || reducedMotion) return;
  heroVideo.muted = true;
  heroVideo.playsInline = true;
  heroVideo.play().catch(() => {});
}

let preloaderHideQueued = false;
function hidePreloader() {
  if (preloaderHideQueued) return;
  preloaderHideQueued = true;
  primeHeroVideo();
  window.setTimeout(() => {
    preloader?.classList.add("is-hidden");
    document.body.dataset.preloaderDone = "1";
    window.setTimeout(() => {
      if (!menu?.classList.contains("is-open") && !modal?.classList.contains("is-open") && !screenPanel?.classList.contains("is-open")) {
        document.body.classList.remove("no-scroll");
      }
    }, 180);
  }, 1100);
}

primeHeroVideo();
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) primeHeroVideo();
});
window.addEventListener("load", hidePreloader, { once: true });
window.setTimeout(hidePreloader, 1200);

function setHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", setHeader, { passive: true });
setHeader();

function openMenu() {
  menu?.classList.add("is-open");
  menu?.setAttribute("aria-hidden", "false");
  menuButton?.setAttribute("aria-expanded", "true");
  floatingMenuButton?.setAttribute("aria-expanded", "true");
  mobileCornerMenu?.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menu?.classList.remove("is-open");
  menu?.setAttribute("aria-hidden", "true");
  menuButton?.setAttribute("aria-expanded", "false");
  floatingMenuButton?.setAttribute("aria-expanded", "false");
  mobileCornerMenu?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
}

menuButton?.addEventListener("click", openMenu);
floatingMenuButton?.addEventListener("click", openMenu);
mobileCornerMenu?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);

qsa("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    closeMenu();
    qs(btn.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  });
});

function templateCards(cards) {
  return `<div class="panel-grid">${cards.map(([tag, title, copy]) => `
    <article class="panel-card">
      <span>${tag}</span>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>`).join("")}</div>`;
}

function panelMedia(data) {
  if (!data.image) return "";
  return `
    <div class="panel-hero-media">
      <img src="${data.image}" alt="" loading="lazy">
      <strong>${data.title}</strong>
    </div>`;
}

function openPanel(key) {
  const data = panelContent[key];
  if (!data) return;
  closeMenu();
  screenContent.innerHTML = `
    <p class="eyebrow">${data.eyebrow}</p>
    <h2>${data.title}</h2>
    <p>${data.copy}</p>
    ${panelMedia(data)}
    ${templateCards(data.cards)}
    <div class="mini-actions">
      <button type="button" data-open-modal="project">Подати проєкт</button>
      <button type="button" data-open-modal="contact">Швидкий зв'язок</button>
    </div>`;
  screenPanel.classList.add("is-open");
  screenPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closePanel() {
  screenPanel.classList.remove("is-open");
  screenPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function projectForm() {
  return `
    <p class="eyebrow">Подати проєкт</p>
    <h2>Опишіть задачу коротко. ARAKERA підкаже перший структурний крок.</h2>
    <form class="modal-form" data-demo-form>
      <input name="name" placeholder="Ім'я" required>
      <input name="company" placeholder="Компанія / роль">
      <input name="contact" placeholder="Телефон або Email" required>
      <select name="type" required>
        <option value="">Тип запиту</option>
        <option>Проєкт</option>
        <option>Партнерство</option>
        <option>Капітал / розвиток</option>
        <option>Технічна інтеграція</option>
      </select>
      <textarea name="message" rows="4" placeholder="Що є зараз і в чому потрібна допомога?" required></textarea>
      <button class="btn btn--gold" type="submit">Надіслати demo-запит</button>
      <p class="form-note">Demo mode: зовнішня відправка не виконується, поки не підключений endpoint.</p>
      <output class="form-status"></output>
    </form>`;
}

function contactContent() {
  return `
    <p class="eyebrow">Швидкий зв'язок</p>
    <h2>Оберіть зручний канал або залиште короткий запит.</h2>
    <p>Посилання на Facebook, Messenger або Telegram додаються після підтвердження офіційних каналів клієнта.</p>
    <div class="quick-grid">
      <a class="facebook" href="#" data-disabled-link>Facebook</a>
      <a class="telegram" href="#" data-disabled-link>Telegram</a>
      <a class="mail" href="mailto:info@arakera-group.com">Email</a>
      <button class="project" type="button" data-open-modal="project">Подати проєкт</button>
    </div>`;
}

function loginContent() {
  return `
    <p class="eyebrow">System access</p>
    <h2>Вхід у систему показаний як demo-сценарій.</h2>
    <p>У production тут може бути приватний кабінет, партнерська зона або CRM-доступ. У цьому static demo ми не створюємо фейкову авторизацію і не збираємо паролі.</p>
    <div class="panel-grid">
      <article class="panel-card"><span>01</span><h3>Запит доступу</h3><p>Клієнт залишає контакт і описує роль у проєкті.</p></article>
      <article class="panel-card"><span>02</span><h3>Підтвердження</h3><p>Команда ARAKERA визначає, який тип доступу потрібен.</p></article>
      <article class="panel-card"><span>03</span><h3>Наступний етап</h3><p>Після production-розробки підключається реальна технічна інтеграція або CRM.</p></article>
    </div>
    <button class="btn btn--gold" type="button" data-open-modal="project">Запросити доступ</button>`;
}

function backendContent() {
  return `
    <p class="eyebrow">План інтеграції</p>
    <h2>Що можна швидко підключити після затвердження demo.</h2>
    <div class="modal-media">
      <img src="assets/images/smart-technology.jpg" alt="" loading="lazy">
      <strong>Заявки, база, статуси і контроль витрат</strong>
    </div>
    <p>Для старту не потрібна дорога CRM. Можна підключити легку інтеграцію: форма відправляє заявку на email, зберігає копію в Firestore, а власник бачить статуси в простій таблиці або admin-view.</p>
    <div class="panel-grid">
      <article class="panel-card"><span>Email</span><h3>Заявки на пошту</h3><p>Після кліку “Подати проєкт” лист приходить відповідальній людині з темою, контактом і джерелом кнопки.</p></article>
      <article class="panel-card"><span>Firestore</span><h3>База звернень</h3><p>Заявки не губляться: їх можна фільтрувати за статусом, типом і датою.</p></article>
      <article class="panel-card"><span>Budget</span><h3>Контроль бюджету</h3><p>На Google Cloud ставляться budget alerts. Для невеликого обсягу можна почати з no-cost квот і pay-as-you-go.</p></article>
    </div>
    <p class="form-note">Орієнтир: технічне налаштування від 150 €. Щомісячні витрати залежать від трафіку і включених сервісів; для малого обсягу часто можна стартувати з 0 Kč або мінімальних оплат у межах безкоштовних квот.</p>
    <button class="btn btn--gold" type="button" data-open-modal="project">Обговорити запуск</button>`;
}

function openModal(kind) {
  closeMenu();
  if (kind === "project") modalContent.innerHTML = projectForm();
  if (kind === "contact") modalContent.innerHTML = contactContent();
  if (kind === "login") modalContent.innerHTML = loginContent();
  if (kind === "backend") modalContent.innerHTML = backendContent();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("click", event => {
  const panelBtn = event.target.closest("[data-open-panel]");
  const modalBtn = event.target.closest("[data-open-modal]");
  const projectBtn = event.target.closest("[data-project]");
  if (panelBtn) openPanel(panelBtn.dataset.openPanel);
  if (modalBtn) openModal(modalBtn.dataset.openModal);
  if (projectBtn) {
    const [title, copy] = projectDetails[projectBtn.dataset.project] || ["Demo case", "Опис кейсу буде додано після підтвердження матеріалів."];
    const image = projectMedia[projectBtn.dataset.project] || "assets/images/business-coordination.jpg";
    modalContent.innerHTML = `
      <p class="eyebrow">Demo case</p>
      <h2>${title}</h2>
      <div class="modal-media">
        <img src="${image}" alt="" loading="lazy">
        <strong>${title}</strong>
      </div>
      <p>${copy}</p>
      <div class="panel-grid">
        <article class="panel-card"><span>01</span><h3>Контекст</h3><p>Фіксуємо, хто бере участь, що вже є і де проєкт буксує.</p></article>
        <article class="panel-card"><span>02</span><h3>Маршрут</h3><p>Готуємо наступні кроки, відповідальних і точки рішення.</p></article>
        <article class="panel-card"><span>03</span><h3>Дія</h3><p>Переводимо запит у заявку, контакт або production-план.</p></article>
      </div>
      <button class="btn btn--gold" type="button" data-open-modal="project">Обговорити схожий проєкт</button>`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  if (event.target.closest("[data-close-modal]")) closeModal();
  if (event.target.closest("[data-close-panel]")) closePanel();
  if (event.target.closest("[data-disabled-link]")) {
    event.preventDefault();
    modalContent.innerHTML = `<p class="eyebrow">Demo link</p><h2>Посилання ще не підключене.</h2><p>Після підтвердження клієнтських каналів сюди додається реальний Facebook, Messenger або Telegram.</p>`;
  }
});

document.addEventListener("submit", event => {
  const form = event.target;
  if (!form.matches("#leadForm, [data-demo-form]")) return;
  event.preventDefault();
  const status = form.querySelector(".form-status") || qs("#formStatus");
  if (status) status.textContent = "Demo-заявку сформовано. Для реального запуску потрібно підключити endpoint форми.";
  form.reset();
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
qsa(".reveal").forEach((el, index) => {
  if (!el.dataset.reveal) {
    el.dataset.reveal = ["left", "right", "up", "scale"][index % 4];
  }
  revealObserver.observe(el);
});

function revealPriorityContent() {
  const message = qs("#message");
  if (!message || message.classList.contains("is-visible")) return;
  const rect = message.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
    message.classList.add("is-visible");
    revealObserver.unobserve(message);
  }
}

window.addEventListener("load", () => window.setTimeout(revealPriorityContent, 900));
window.addEventListener("scroll", revealPriorityContent, { passive: true });

const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!processVideo || reducedMotion) return;
    if (entry.isIntersecting) processVideo.play().catch(() => {});
    else processVideo.pause();
  });
}, { threshold: 0.35 });
if (processVideo) videoObserver.observe(processVideo);

videoToggle?.addEventListener("click", () => {
  if (processVideo.paused) processVideo.play().catch(() => {});
  else processVideo.pause();
});

function setSticky() {
  if (!sticky) return;
  if (sessionStorage.getItem("arakeraStickyDismissed") === "1") {
    sticky.classList.remove("is-visible");
    sticky.setAttribute("aria-hidden", "true");
    return;
  }
  const scrolled = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
  const passedIntro = window.scrollY > window.innerHeight * 1.35;
  const shouldShow = document.body.dataset.preloaderDone === "1" && scrolled > 0.56 && passedIntro;
  sticky.classList.toggle("is-visible", shouldShow);
  sticky.setAttribute("aria-hidden", shouldShow ? "false" : "true");
}
window.addEventListener("scroll", setSticky, { passive: true });
setSticky();
qs("#stickyClose")?.addEventListener("click", () => {
  sticky.classList.remove("is-visible");
  sessionStorage.setItem("arakeraStickyDismissed", "1");
});

const sections = qsa("main > section[id]");
const navButtons = qsa(".desktop-nav [data-open-panel]");
const activeObserver = new IntersectionObserver(entries => {
  const current = entries.find(entry => entry.isIntersecting);
  if (!current) return;
  navButtons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.openPanel === current.target.id));
}, { threshold: 0.42 });
sections.forEach(section => activeObserver.observe(section));

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
    closePanel();
    closeMenu();
  }
});
