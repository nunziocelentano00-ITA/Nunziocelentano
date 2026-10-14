/* =========================================================
   IMPOSTAZIONI — modifica qui
   ========================================================= */

// Il tuo username Instagram, senza @ (es. "nunzio.edits").
// Tutti i pulsanti "Scrivimi su Instagram" apriranno la chat con te.
const INSTAGRAM_USERNAME = "nunziocelentano";

/* =========================================================
   TESTI IT / EN
   ========================================================= */
const I18N = {
  it: {
    "meta.title.home": "Nunzio Celentano — Video editor & graphic designer",
    "meta.desc.home": "Montaggio di Reels, TikTok e Shorts e grafiche per i social. Guarda i lavori di Nunzio Celentano.",
    "meta.title.services": "Servizi & contatti — Nunzio Celentano",
    "meta.desc.services": "Montaggio video per i social e grafiche: scopri i servizi e scrivimi su Instagram per un preventivo.",

    "nav.video": "Video",
    "nav.graphics": "Grafiche",
    "nav.about": "Chi sono",
    "nav.contact": "Servizi & contatti",
    "lang.aria": "Cambia lingua: passa all'inglese",

    "hero.kicker": "Video editor & graphic designer",
    "hero.title": "Video e grafiche che <em>fermano</em> lo scroll.",
    "hero.sub": "Monto Reels, TikTok e Shorts e creo grafiche per i social di brand, eventi e squadre sportive. Contenuti con ritmo, fatti per essere guardati fino alla fine.",
    "hero.cta": "Guarda i lavori",
    "hero.chip2": "Grafiche social",
    "cta.ig": "Scrivimi su Instagram",

    "marquee": ["Reels", "TikTok", "Shorts", "Storie", "Grafiche social", "Caroselli", "Teaser eventi", "Newsletter"],

    "video.eyebrow": "Lavori video",
    "video.title": "Shorts, Reels & storie",
    "video.sub": "Clicca su un video per guardarlo a schermo intero, con l'audio.",
    "f1926.hint": "Formato orizzontale",
    "f1926.len": "Estratto · 40 sec",
    "f1926.desc": "Un racconto verticale sulla storia del Napoli: dalle immagini d'archivio alla festa per lo scudetto 2023. Montato per essere guardato con il telefono girato in orizzontale.",
    "f1926.cta": "Guarda l'estratto",
    "f1926.cap": "Fan film · estratto di 40 secondi",
    "tag.event": "Evento",
    "tag.story": "Storia IG",
    "v.presepe.title": "Reel del presepe vivente",
    "v.mfe.title": "Teaser evento · 21 settembre",
    "v.goal.title": "Storia goal · Amarante",
    "v.mamma.title": "Video per le ricette",

    "gfx.eyebrow": "Grafiche",
    "gfx.title": "Post, caroselli & newsletter",
    "gfx.sub": "Grafiche pensate per il feed: riconoscibili, leggibili e coerenti con il brand.",
    "g.car.meta": "Carosello · 4 slide",
    "g.car.aria": "Carosello di grafiche, scorri per vedere le slide",
    "g.car.cap": "Serie di post per l'evento, con titolo coordinato e foto d'atmosfera.",
    "g.news.meta": "Grafica newsletter",
    "g.news.cap": "Grafica per invitare a iscriversi alla newsletter, con i prodotti in movimento.",
    "g.more.kicker": "Anche per te",
    "g.more.title": "Ti servono grafiche per i tuoi social?",
    "g.more.text": "Post singoli, caroselli, storie, copertine e newsletter.",
    "g.more.cta": "Vedi i servizi",
    "car.prev": "Slide precedente",
    "car.next": "Slide successiva",

    "about.eyebrow": "Chi sono",
    "about.statement": "Ciao, sono <span class=\"hl\">Nunzio</span>. Trasformo il tuo materiale in contenuti che la gente <em>guarda fino alla fine</em>.",
    "about.p1": "Monto video brevi e creo grafiche per i social. Lavoro con brand, eventi e squadre sportive: partiamo dalle tue riprese o dalle tue foto e le trasformiamo in Reels, storie e post pronti da pubblicare.",
    "about.skills": "Di cosa mi occupo",
    "skill.1": "Montaggio a ritmo",
    "skill.2": "Testi e sottotitoli",
    "skill.3": "Effetti e transizioni",
    "skill.4": "Grafiche per il feed",
    "skill.5": "Formati 9:16, 4:5, 1:1",
    "about.clients": "Ho lavorato per",

    "cta.title": "Hai un progetto?<br><span class=\"outline\">Parliamone.</span>",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.top": "Torna su",

    "lb.aria": "Visualizzatore",
    "lb.close": "Chiudi",
    "lb.prev": "Precedente",
    "lb.next": "Successivo",
    "lb.play": "Riproduci",
    "lb.pause": "Pausa",
    "lb.mute": "Disattiva audio",
    "lb.unmute": "Attiva audio",
    "lb.progress": "Avanzamento del video",

    "srv.navcta": "Contattami",
    "srv.title": "Dimmi cosa ti serve, <em>al resto penso io.</em>",
    "srv.sub": "Due servizi, un solo obiettivo: contenuti che funzionano sui social. Prezzi su richiesta, con un preventivo su misura e senza impegno.",
    "srv.cta": "Chiedi un preventivo",
    "s1.text": "Montaggio di video verticali pensati per il feed: un inizio che aggancia, un ritmo che tiene incollati e un finale che fa venire voglia di rivederli.",
    "s1.l1": "Hook nei primi secondi",
    "s1.l2": "Tagli a ritmo di musica",
    "s1.l3": "Testi e sottotitoli animati",
    "s1.l4": "Effetti, transizioni e sound design",
    "s1.l5": "File 9:16 pronti da pubblicare",
    "s1.for": "Ideale per: brand, attività locali, eventi, squadre sportive, creator.",
    "s2.title": "Grafiche social",
    "s2.text": "Post, caroselli e storie con uno stile riconoscibile e coerente con il tuo brand, per un feed che si fa notare.",
    "s2.l1": "Post singoli e caroselli",
    "s2.l2": "Storie e copertine per i Reels",
    "s2.l3": "Grafiche per eventi e annunci",
    "s2.l4": "Newsletter e promozioni",
    "s2.l5": "Formati 1:1, 4:5 e 9:16",
    "s2.for": "Ideale per: chi vuole un feed ordinato e riconoscibile, eventi, e-commerce.",
    "proc.eyebrow": "Come funziona",
    "proc.title": "Dal primo messaggio alla consegna, in 4 passi.",
    "p1.t": "Scrivimi su Instagram",
    "p1.d": "Raccontami in poche righe cosa ti serve.",
    "p2.d": "Definiamo insieme obiettivi, materiale da usare e scadenze.",
    "p3.t": "Preventivo",
    "p3.d": "Ricevi un preventivo su misura, senza impegno.",
    "p4.t": "Consegna",
    "p4.d": "Ricevi i file pronti da pubblicare, con le revisioni concordate.",
    "price.badge": "€ su richiesta",
    "price.title": "Prezzi su richiesta",
    "price.text": "Ogni progetto è diverso: durata dei video, quantità di contenuti, tempi di consegna. Scrivimi e ti preparo un preventivo su misura.",
    "contact.eyebrow": "Contatti",
    "contact.title": "Il modo più veloce?<br>Un <span class=\"ig-text\">DM su Instagram</span>.",
    "contact.text": "Ricevo le richieste direttamente su Instagram. Per partire subito, scrivimi:",
    "contact.l1": "che tipo di contenuto ti serve (video, grafiche o entrambi)",
    "contact.l2": "quanti contenuti e per quale social",
    "contact.l3": "entro quando ti servono",
    "contact.l4": "il link al tuo profilo o al tuo brand"
  },

  en: {
    "meta.title.home": "Nunzio Celentano — Video editor & graphic designer",
    "meta.desc.home": "Reels, TikTok and Shorts editing and social media graphics. See Nunzio Celentano's work.",
    "meta.title.services": "Services & contact — Nunzio Celentano",
    "meta.desc.services": "Social video editing and graphics: see the services and message me on Instagram for a quote.",

    "nav.video": "Videos",
    "nav.graphics": "Graphics",
    "nav.about": "About",
    "nav.contact": "Services & contact",
    "lang.aria": "Change language: switch to Italian",

    "hero.kicker": "Video editor & graphic designer",
    "hero.title": "Videos and graphics that <em>stop</em> the scroll.",
    "hero.sub": "I edit Reels, TikToks and Shorts and design social graphics for brands, events and sports teams. Content with rhythm, made to be watched to the very end.",
    "hero.cta": "See my work",
    "hero.chip2": "Social graphics",
    "cta.ig": "DM me on Instagram",

    "marquee": ["Reels", "TikTok", "Shorts", "Stories", "Social graphics", "Carousels", "Event teasers", "Newsletters"],

    "video.eyebrow": "Video work",
    "video.title": "Shorts, Reels & stories",
    "video.sub": "Click any video to watch it full screen, with sound.",
    "f1926.hint": "Landscape format",
    "f1926.len": "Excerpt · 40 sec",
    "f1926.desc": "A vertical story about Napoli's history: from archive footage to the 2023 title celebrations. Edited to be watched with the phone turned sideways.",
    "f1926.cta": "Watch the excerpt",
    "f1926.cap": "Fan film · 40-second excerpt",
    "tag.event": "Event",
    "tag.story": "IG story",
    "v.presepe.title": "Living nativity reel",
    "v.mfe.title": "Event teaser · 21 September",
    "v.goal.title": "Goal story · Amarante",
    "v.mamma.title": "Recipe video",

    "gfx.eyebrow": "Graphics",
    "gfx.title": "Posts, carousels & newsletters",
    "gfx.sub": "Graphics made for the feed: recognisable, readable and on-brand.",
    "g.car.meta": "Carousel · 4 slides",
    "g.car.aria": "Graphics carousel, scroll to see the slides",
    "g.car.cap": "A post series for the event, with a consistent title and atmospheric photos.",
    "g.news.meta": "Newsletter graphic",
    "g.news.cap": "A graphic inviting people to sign up for the newsletter, with products in motion.",
    "g.more.kicker": "For you too",
    "g.more.title": "Need graphics for your socials?",
    "g.more.text": "Single posts, carousels, stories, covers and newsletters.",
    "g.more.cta": "See services",
    "car.prev": "Previous slide",
    "car.next": "Next slide",

    "about.eyebrow": "About me",
    "about.statement": "Hi, I'm <span class=\"hl\">Nunzio</span>. I turn your footage into content people <em>watch to the very end</em>.",
    "about.p1": "I edit short videos and design graphics for social media. I work with brands, events and sports teams: we start from your footage or photos and turn them into Reels, stories and posts ready to publish.",
    "about.skills": "What I do",
    "skill.1": "Rhythmic editing",
    "skill.2": "Text & subtitles",
    "skill.3": "Effects & transitions",
    "skill.4": "Feed graphics",
    "skill.5": "9:16, 4:5, 1:1 formats",
    "about.clients": "I've worked with",

    "cta.title": "Got a project?<br><span class=\"outline\">Let's talk.</span>",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top",

    "lb.aria": "Viewer",
    "lb.close": "Close",
    "lb.prev": "Previous",
    "lb.next": "Next",
    "lb.play": "Play",
    "lb.pause": "Pause",
    "lb.mute": "Mute",
    "lb.unmute": "Unmute",
    "lb.progress": "Video progress",

    "srv.navcta": "Contact me",
    "srv.title": "Tell me what you need, <em>I'll handle the rest.</em>",
    "srv.sub": "Two services, one goal: content that works on social media. Prices on request, with a tailored, no-obligation quote.",
    "srv.cta": "Ask for a quote",
    "s1.text": "Vertical video editing made for the feed: an opening that hooks, a pace that keeps people watching and an ending that makes them want to watch again.",
    "s1.l1": "A hook in the first seconds",
    "s1.l2": "Cuts timed to the music",
    "s1.l3": "Animated text and subtitles",
    "s1.l4": "Effects, transitions and sound design",
    "s1.l5": "9:16 files ready to post",
    "s1.for": "Great for: brands, local businesses, events, sports teams, creators.",
    "s2.title": "Social graphics",
    "s2.text": "Posts, carousels and stories with a recognisable style that fits your brand, for a feed that stands out.",
    "s2.l1": "Single posts and carousels",
    "s2.l2": "Stories and Reel covers",
    "s2.l3": "Event and announcement graphics",
    "s2.l4": "Newsletters and promotions",
    "s2.l5": "1:1, 4:5 and 9:16 formats",
    "s2.for": "Great for: anyone who wants a clean, recognisable feed, events, e-commerce.",
    "proc.eyebrow": "How it works",
    "proc.title": "From first message to delivery, in 4 steps.",
    "p1.t": "DM me on Instagram",
    "p1.d": "Tell me in a few lines what you need.",
    "p2.d": "Together we define goals, the material to use and deadlines.",
    "p3.t": "Quote",
    "p3.d": "You get a tailored, no-obligation quote.",
    "p4.t": "Delivery",
    "p4.d": "You get files ready to post, with the agreed revisions.",
    "price.badge": "€ on request",
    "price.title": "Prices on request",
    "price.text": "Every project is different: video length, amount of content, turnaround time. Message me and I'll put together a tailored quote.",
    "contact.eyebrow": "Contact",
    "contact.title": "Fastest way?<br>A <span class=\"ig-text\">DM on Instagram</span>.",
    "contact.text": "I take requests directly on Instagram. To get started right away, tell me:",
    "contact.l1": "what kind of content you need (videos, graphics or both)",
    "contact.l2": "how many pieces and for which platform",
    "contact.l3": "when you need them by",
    "contact.l4": "a link to your profile or brand"
  }
};

/* =========================================================
   Da qui in giù non serve modificare nulla
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

let lang = "it";
const t = (key) => {
  const v = I18N[lang][key];
  return v !== undefined ? v : (I18N.it[key] !== undefined ? I18N.it[key] : "");
};

function readStoredLang() {
  try { return localStorage.getItem("lang"); } catch (e) { return null; }
}
function storeLang(value) {
  try { localStorage.setItem("lang", value); } catch (e) { /* storage non disponibile */ }
}

/* ---------- Lingua ---------- */
function applyLang(next) {
  lang = I18N[next] ? next : "it";
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  $$("[data-i18n-html]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18nHtml];
    if (typeof v === "string") el.innerHTML = v;
  });
  $$("[data-i18n-aria]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18nAria];
    if (typeof v === "string") el.setAttribute("aria-label", v);
  });

  const page = document.body.dataset.page;
  const title = I18N[lang]["meta.title." + page];
  if (title) document.title = title;
  const desc = $('meta[name="description"]');
  if (desc && I18N[lang]["meta.desc." + page]) desc.setAttribute("content", I18N[lang]["meta.desc." + page]);

  $$(".lang-toggle").forEach((b) => { b.dataset.current = lang; });
  buildMarquee();
  if (lb.el && lb.el.open) renderCaption();
}

function setupLang() {
  const stored = readStoredLang();
  const browser = (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en";
  applyLang(stored || browser);
  $$(".lang-toggle").forEach((b) => b.addEventListener("click", () => {
    const next = lang === "it" ? "en" : "it";
    storeLang(next);
    applyLang(next);
  }));
}

/* ---------- Scritta che scorre ---------- */
function buildMarquee() {
  $$(".marquee-track").forEach((track) => {
    const words = I18N[lang].marquee || [];
    const group = words.map((w) => `<span>${w}</span><i>✦</i>`).join("");
    track.innerHTML = `<div class="marquee-group">${group}</div><div class="marquee-group">${group}</div>`;
  });
}

/* ---------- Instagram ---------- */
function setupInstagram() {
  const user = INSTAGRAM_USERNAME.replace(/^@/, "").trim();
  const dm = user ? `https://ig.me/m/${encodeURIComponent(user)}` : "https://www.instagram.com/";
  const profile = user ? `https://www.instagram.com/${encodeURIComponent(user)}/` : "https://www.instagram.com/";
  $$("[data-ig]").forEach((a) => { a.href = dm; });
  $$("[data-ig-profile]").forEach((a) => { a.href = profile; });
  $$("[data-ig-handle]").forEach((el) => {
    el.textContent = user ? "@" + user : "";
    el.hidden = !user;
  });
}

/* ---------- Header ---------- */
function setupHeader() {
  const header = $(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Video: anteprime ---------- */
function playSafe(video) {
  const p = video.play();
  if (p && typeof p.catch === "function") p.catch(() => {});
}

function setupPreviews() {
  const cards = $$("[data-preview]");
  if (canHover) {
    cards.forEach((card) => {
      const v = $("video.preview", card);
      if (!v) return;
      card.addEventListener("mouseenter", () => playSafe(v));
      card.addEventListener("mouseleave", () => v.pause());
      card.addEventListener("focus", () => playSafe(v));
      card.addEventListener("blur", () => v.pause());
    });
  } else if (!reduceMotion && "IntersectionObserver" in window) {
    // Su telefono: l'anteprima parte quando il video è ben visibile.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = $("video.preview", e.target);
        if (!v) return;
        if (e.isIntersecting) playSafe(v); else v.pause();
      });
    }, { threshold: 0.65 });
    cards.forEach((c) => io.observe(c));
  }

  // Video sempre in loop (hero e pagina servizi): si fermano fuori schermo.
  const loops = $$("video[data-hero]");
  if (reduceMotion) {
    loops.forEach((v) => { v.removeAttribute("autoplay"); v.pause(); });
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) playSafe(e.target); else e.target.pause(); });
    }, { threshold: 0.1 });
    loops.forEach((v) => io.observe(v));
  }
}

function pauseAllPreviews() {
  $$("video.preview, video[data-hero]").forEach((v) => v.pause());
}

/* ---------- Carosello ---------- */
function setupCarousels() {
  $$(".carousel").forEach((car) => {
    const track = $(".carousel-track", car);
    const slides = $$(".slide", track);
    const dots = $$(".car-dots span", car.parentElement);
    const count = $(".car-count", car);
    const prev = $(".car-prev", car);
    const next = $(".car-next", car);
    let index = 0;

    const update = () => {
      dots.forEach((d, i) => d.classList.toggle("on", i === index));
      if (count) count.textContent = `${index + 1}/${slides.length}`;
      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
    };
    const go = (i) => {
      const target = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: target * track.clientWidth, behavior: reduceMotion ? "auto" : "smooth" });
    };

    track.addEventListener("scroll", () => {
      const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      if (i !== index) { index = i; update(); }
    }, { passive: true });
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
    });
    if (prev) prev.addEventListener("click", () => go(index - 1));
    if (next) next.addEventListener("click", () => go(index + 1));
    update();
  });
}

/* ---------- Visualizzatore (lightbox) ---------- */
const ICONS = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  muted: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/><path d="M22 9l-6 6M16 9l6 6"/></svg>'
};

const lb = { el: null, stage: null, items: [], index: 0 };

function formatTime(s) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

function buildPlayer(src, rotated) {
  const wrap = document.createElement("div");
  wrap.className = "lb-video" + (rotated ? " is-rotated" : "");
  wrap.innerHTML = `
    <div class="lb-frame"><video playsinline preload="auto"></video></div>
    <div class="lb-controls">
      <button class="lb-ctrl lb-play" type="button"></button>
      <input class="lb-progress" type="range" min="0" max="1000" step="1" value="0">
      <span class="lb-time">0:00</span>
      <button class="lb-ctrl lb-mute" type="button"></button>
    </div>`;
  const v = $("video", wrap);
  const playBtn = $(".lb-play", wrap);
  const muteBtn = $(".lb-mute", wrap);
  const range = $(".lb-progress", wrap);
  const time = $(".lb-time", wrap);
  range.setAttribute("aria-label", t("lb.progress"));

  const syncPlay = () => {
    playBtn.innerHTML = v.paused ? ICONS.play : ICONS.pause;
    playBtn.setAttribute("aria-label", v.paused ? t("lb.play") : t("lb.pause"));
  };
  const syncMute = () => {
    muteBtn.innerHTML = v.muted ? ICONS.muted : ICONS.sound;
    muteBtn.setAttribute("aria-label", v.muted ? t("lb.unmute") : t("lb.mute"));
  };
  const toggle = () => { if (v.paused) playSafe(v); else v.pause(); };

  v.addEventListener("play", syncPlay);
  v.addEventListener("pause", syncPlay);
  v.addEventListener("volumechange", syncMute);
  v.addEventListener("click", toggle);
  v.addEventListener("timeupdate", () => {
    if (!v.duration) return;
    const p = v.currentTime / v.duration;
    range.value = Math.round(p * 1000);
    range.style.setProperty("--p", (p * 100).toFixed(2) + "%");
    time.textContent = `${formatTime(v.currentTime)} / ${formatTime(v.duration)}`;
  });
  v.addEventListener("ended", () => { v.currentTime = 0; syncPlay(); });
  range.addEventListener("input", () => {
    if (v.duration) v.currentTime = (range.value / 1000) * v.duration;
  });
  playBtn.addEventListener("click", toggle);
  muteBtn.addEventListener("click", () => { v.muted = !v.muted; });

  v.src = src;
  syncPlay();
  syncMute();
  return { wrap, video: v };
}

function renderCaption() {
  const item = lb.items[lb.index];
  if (!item) return;
  $(".lb-title", lb.el).textContent = item.dataset.title || "";
  $(".lb-sub", lb.el).textContent = item.dataset.caption ? t(item.dataset.caption) : "";
}

function renderItem() {
  const item = lb.items[lb.index];
  lb.stage.innerHTML = "";
  if (item.dataset.video) {
    const { wrap, video } = buildPlayer(item.dataset.video, item.hasAttribute("data-rotate"));
    lb.stage.appendChild(wrap);
    playSafe(video);
  } else if (item.dataset.img) {
    const img = document.createElement("img");
    const thumb = $("img", item);
    img.src = item.dataset.img;
    img.alt = thumb ? thumb.alt : "";
    lb.stage.appendChild(img);
  }
  lb.el.classList.toggle("single", lb.items.length < 2);
  renderCaption();
}

function openLightbox(trigger) {
  const group = trigger.dataset.group;
  lb.items = group ? $$(`[data-group="${group}"]`).filter((el) => !lb.el.contains(el)) : [trigger];
  lb.index = Math.max(0, lb.items.indexOf(trigger));
  pauseAllPreviews();
  renderItem();
  if (!lb.el.open) {
    if (typeof lb.el.showModal === "function") lb.el.showModal(); else lb.el.setAttribute("open", "");
  }
  document.documentElement.style.overflow = "hidden";
}

function step(delta) {
  if (lb.items.length < 2) return;
  lb.index = (lb.index + delta + lb.items.length) % lb.items.length;
  renderItem();
}

function setupLightbox() {
  lb.el = $(".lightbox");
  if (!lb.el) return;
  lb.stage = $(".lb-stage", lb.el);

  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-open]");
    if (opener) {
      const target = $(opener.dataset.open);
      if (target) { e.preventDefault(); openLightbox(target); }
      return;
    }
    const trigger = e.target.closest("[data-video], [data-img]");
    if (trigger && !lb.el.contains(trigger)) {
      e.preventDefault();
      openLightbox(trigger);
    }
  });

  $(".lb-close", lb.el).addEventListener("click", () => lb.el.close());
  $(".lb-prev", lb.el).addEventListener("click", () => step(-1));
  $(".lb-next", lb.el).addEventListener("click", () => step(1));
  lb.el.addEventListener("click", (e) => {
    if (e.target === lb.el || e.target === lb.stage) lb.el.close();
  });
  lb.el.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  lb.el.addEventListener("close", () => {
    lb.stage.innerHTML = "";
    document.documentElement.style.overflow = "";
  });
}

/* ---------- Avvio ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  setupLightbox();
  setupLang();
  setupInstagram();
  setupHeader();
  setupPreviews();
  setupCarousels();
});
