/* =========================================================
   IMPOSTAZIONI — modifica qui
   ========================================================= */

// Il tuo username Instagram, senza @ (es. "nunzio.edits").
// Tutti i pulsanti "Scrivimi su Instagram" apriranno la chat con te.
const INSTAGRAM_USERNAME = "nunziocelentano";

// Il link del tuo profilo LinkedIn (es. "https://www.linkedin.com/in/nome-cognome/").
// Finché è vuoto, i pulsanti LinkedIn restano nascosti.
const LINKEDIN_URL = "https://www.linkedin.com/in/nunzio-celentano-014106278/";

/* =========================================================
   TESTI IT / EN
   ========================================================= */
const I18N = {
  it: {
    "meta.title.home": "Nunzio Celentano — Video editor & graphic designer",
    "meta.desc.home": "Montaggio di Reels, TikTok e Shorts e grafiche per i social. Guarda i lavori di Nunzio Celentano.",
    "meta.title.services": "Servizi & contatti — Nunzio Celentano",
    "meta.desc.services": "Montaggio video per i social e grafiche: scopri i servizi e scrivimi su Instagram per un preventivo.",

    "nav.projects": "Progetti",
    "nav.about": "Chi sono",
    "nav.contact": "Servizi & contatti",
    "lang.aria": "Cambia lingua: passa all'inglese",

    "hero.kicker": "Video editor & graphic designer",
    "hero.title": "Video e grafiche che <em>fermano</em> lo scroll.",
    "hero.sub": "Trasformo foto, riprese e idee in Reels, TikTok, Shorts e grafiche che si muovono: contenuti dinamici per brand, eventi e squadre sportive, fatti per essere guardati fino alla fine.",
    "hero.cta": "Guarda i lavori",
    "hero.chip2": "Grafiche social",
    "cta.ig": "Scrivimi su Instagram",
    "cta.li": "Contattami su LinkedIn",

    "marquee": ["Reels", "TikTok", "Shorts", "Storie", "Grafiche social", "Caroselli", "Teaser eventi", "Newsletter"],

    "proj.eyebrow": "Progetti",
    "proj.title": "Lavori selezionati",
    "proj.sub": "Per ogni progetto: il contesto, il mio ruolo e cosa ho realizzato. Clicca su video e grafiche per vederli a schermo intero.",
    "f.role": "Ruolo",
    "f.did": "Cosa ho fatto",
    "f.format": "Formato",
    "type.gfx": "Grafica",
    "type.story": "Storia IG",
    "type.land": "Orizzontale",
    "ig.view": "Guarda su Instagram",
    "strip.aria": "Galleria del progetto: scorri per vedere tutto",
    "strip.prev": "Indietro",
    "strip.next": "Avanti",

    "mfe.meta": "Roma · Settembre 2026",
    "mfe.text": "La seconda edizione di un evento di moda all'aperto nel quartiere di Monteverde, a Roma: sfilata, market con 30 designer e artisti indipendenti, musica dal vivo e after-party al Casale dei Cedrati, dentro Villa Doria Pamphili. Ho curato la comunicazione social prima e dopo l'evento, dal countdown all'annuncio dei talenti fino al reel di presentazione.",
    "mfe.role": "Montaggio · Grafiche e titoli · Gestione social",
    "mfe.d1": "Teaser e reel di presentazione",
    "mfe.d2": "Countdown a due mesi e a un mese",
    "mfe.d3": "Grafica di annuncio dei 30 talenti",
    "mfe.d4": "Gestione del profilo Instagram dell'evento",
    "mfe.profile": "Profilo Instagram dell'evento",
    "mfe.m1": "Reel di presentazione",
    "mfe.m2": "Teaser · 21 settembre",
    "mfe.m3": "Countdown · 2 mesi",
    "mfe.m4": "Countdown · 1 mese",
    "mfe.m5": "Meet the talent",

    "pre.meta": "Sarno · Dicembre 2025",
    "pre.sub": "Il presepe nei portoni del borgo",
    "pre.text": "Per circa vent'anni il presepe del borgo era rimasto in silenzio. Il 27 e 28 dicembre 2025 è tornato a vivere nei portoni del borgo di Sarno, e ho curato il suo ritorno con una chiave moderna: mani che intrecciano il vimini, impastano il pane e cuciono come una volta, raccontate con la luce e il ritmo di oggi.",
    "pre.role": "Cura del progetto · Montaggio · Grafiche",
    "pre.d1": "Rilancio del presepe dopo circa vent'anni",
    "pre.d2": "Reel dell'evento",
    "pre.d3": "Serie di 4 post con titolo coordinato",
    "pre.m1": "Reel dell'evento",
    "pre.m2": "Il vimini",
    "pre.m3": "Le carte",
    "pre.m4": "Il pane",
    "pre.m5": "Il filo",

    "int.meta": "Calcio · Stagione 2024/2025",
    "int.sub": "Contenuti social per la squadra",
    "int.text": "Durante la stagione 2024/2025 ho realizzato i contenuti per i social della squadra, a partire dalle storie dedicate ai gol: un format animato nei colori del club, pensato per celebrare ogni rete e il giocatore che l'ha segnata.",
    "int.role": "Montaggio · Grafiche e titoli",
    "int.d1": "Format animato per le storie dei gol",
    "int.d2": "Contenuti per tutta la stagione",
    "int.m1": "Storia goal · Amarante",

    "mam.meta": "Concept di rebranding",
    "mam.sub": "Una nuova voce per i social del brand",
    "mam.text": "Una proposta di rebranding per i social di Mammapack: una linea grafica più fresca e riconoscibile e le prime prove di contenuto, dalle animazioni dei prodotti per le ricette alla grafica per la newsletter.",
    "mam.role": "Concept · Motion · Grafiche",
    "mam.d1": "Proposta di nuova linea grafica",
    "mam.d2": "Video animato per le ricette",
    "mam.d3": "Grafica per la newsletter",
    "mam.m1": "Video per le ricette",
    "mam.m2": "Newsletter",

    "p26.meta": "Progetto personale · Fan film",
    "p26.sub": "Un tributo alla squadra del cuore",
    "p26.text": "Un tributo emozionale alla mia squadra del cuore: dalle immagini d'archivio alla festa per lo scudetto 2023. Un corto montato in verticale, da guardare con il telefono girato.",
    "p26.role": "Idea · Montaggio",
    "p26.format": "I primi 40 secondi",
    "p26.m1": "Fan film · estratto",

    "about.eyebrow": "Chi sono",
    "about.statement": "Ciao, sono <span class=\"hl\">Nunzio</span>. Do voce e movimento a ciò che è <em>fermo</em>.",
    "about.p1": "Un evento, un prodotto, una tradizione, una squadra: ogni storia ha un ritmo, anche quando è chiusa in una foto o in un girato grezzo. Il mio lavoro è trovarlo. Unisco montaggio, motion design e grafica per trasformare ciò che è statico in contenuti dinamici, coerenti con l'identità del brand e pensati per catturare l'attenzione dal primo secondo.",
    "about.skills": "Cosa faccio",
    "skill.1": "Video editing",
    "skill.2": "Motion design",
    "skill.3": "Grafica per i social",
    "skill.4": "Direzione creativa",
    "skill.5": "Gestione social",
    "about.clients": "Progetti e collaborazioni",

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

    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Services & contact",
    "lang.aria": "Change language: switch to Italian",

    "hero.kicker": "Video editor & graphic designer",
    "hero.title": "Videos and graphics that <em>stop</em> the scroll.",
    "hero.sub": "I turn photos, footage and ideas into Reels, TikToks, Shorts and graphics that move: dynamic content for brands, events and sports teams, made to be watched to the very end.",
    "hero.cta": "See my work",
    "hero.chip2": "Social graphics",
    "cta.ig": "DM me on Instagram",
    "cta.li": "Contact me on LinkedIn",

    "marquee": ["Reels", "TikTok", "Shorts", "Stories", "Social graphics", "Carousels", "Event teasers", "Newsletters"],

    "proj.eyebrow": "Projects",
    "proj.title": "Selected work",
    "proj.sub": "For each project: the context, my role and what I made. Click any video or graphic to see it full screen.",
    "f.role": "Role",
    "f.did": "What I did",
    "f.format": "Format",
    "type.gfx": "Graphic",
    "type.story": "IG story",
    "type.land": "Landscape",
    "ig.view": "View on Instagram",
    "strip.aria": "Project gallery: scroll to see everything",
    "strip.prev": "Back",
    "strip.next": "Next",

    "mfe.meta": "Rome · September 2026",
    "mfe.text": "The second edition of an open-air fashion event in Rome's Monteverde district: a runway show, a market with 30 independent designers and artists, live music and an after-party at Casale dei Cedrati, inside Villa Doria Pamphili. I handled the social media communication before and after the event, from the countdown and the talent announcement to the presentation reel.",
    "mfe.role": "Editing · Graphics & titles · Social media management",
    "mfe.d1": "Teaser and presentation reel",
    "mfe.d2": "Two-month and one-month countdown",
    "mfe.d3": "Announcement graphic for the 30 talents",
    "mfe.d4": "Management of the event's Instagram profile",
    "mfe.profile": "Event's Instagram profile",
    "mfe.m1": "Presentation reel",
    "mfe.m2": "Teaser · 21 September",
    "mfe.m3": "Countdown · 2 months",
    "mfe.m4": "Countdown · 1 month",
    "mfe.m5": "Meet the talent",

    "pre.meta": "Sarno · December 2025",
    "pre.sub": "The nativity in the village doorways",
    "pre.text": "For about twenty years, the village nativity had fallen silent. On 27 and 28 December 2025 it came back to life in the old doorways of the borgo in Sarno, and I curated its return with a modern touch: hands weaving wicker, kneading bread and sewing as they once did, told with today's light and rhythm.",
    "pre.role": "Project curation · Editing · Graphics",
    "pre.d1": "Revival of the nativity after about twenty years",
    "pre.d2": "Event reel",
    "pre.d3": "Series of 4 posts with a coordinated title",
    "pre.m1": "Event reel",
    "pre.m2": "The wicker",
    "pre.m3": "The cards",
    "pre.m4": "The bread",
    "pre.m5": "The thread",

    "int.meta": "Football · 2024/2025 season",
    "int.sub": "Social content for the team",
    "int.text": "During the 2024/2025 season I created the team's social media content, starting with goal stories: an animated format in the club's colours, designed to celebrate every goal and the player who scored it.",
    "int.role": "Editing · Graphics & titles",
    "int.d1": "Animated format for goal stories",
    "int.d2": "Content for the whole season",
    "int.m1": "Goal story · Amarante",

    "mam.meta": "Rebranding concept",
    "mam.sub": "A new voice for the brand's socials",
    "mam.text": "A rebranding proposal for Mammapack's social channels: a fresher, more recognisable visual line and the first content tests, from product animations for recipes to a newsletter graphic.",
    "mam.role": "Concept · Motion · Graphics",
    "mam.d1": "Proposal for a new visual line",
    "mam.d2": "Animated recipe video",
    "mam.d3": "Newsletter graphic",
    "mam.m1": "Recipe video",
    "mam.m2": "Newsletter",

    "p26.meta": "Personal project · Fan film",
    "p26.sub": "A tribute to the team I love",
    "p26.text": "An emotional tribute to the team I love: from archive footage to the 2023 title celebrations. A short film edited vertically, to be watched with the phone turned sideways.",
    "p26.role": "Idea · Editing",
    "p26.format": "The first 40 seconds",
    "p26.m1": "Fan film · excerpt",

    "about.eyebrow": "About me",
    "about.statement": "Hi, I'm <span class=\"hl\">Nunzio</span>. I give voice and motion to what <em>stands still</em>.",
    "about.p1": "An event, a product, a tradition, a team: every story has a rhythm, even when it's locked inside a photo or raw footage. My job is to find it. I combine editing, motion design and graphics to turn what is static into dynamic content, true to the brand's identity and designed to grab attention from the very first second.",
    "about.skills": "What I do",
    "skill.1": "Video editing",
    "skill.2": "Motion design",
    "skill.3": "Social media graphics",
    "skill.4": "Creative direction",
    "skill.5": "Social media management",
    "about.clients": "Projects & collaborations",

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

/* ---------- LinkedIn ---------- */
function setupLinkedIn() {
  const url = LINKEDIN_URL.trim();
  // Mostra i pulsanti solo con un link a un profilo vero (non al feed).
  const ok = /^https:\/\/([a-z]+\.)?linkedin\.com\/(in|company)\/[^/]+/i.test(url);
  $$("[data-linkedin]").forEach((a) => {
    a.hidden = !ok;
    if (ok) a.href = url;
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

/* ---------- Gallerie dei progetti ---------- */
function setupStrips() {
  $$(".strip-wrap").forEach((wrap) => {
    const strip = $(".strip", wrap);
    const prev = $(".strip-prev", wrap);
    const next = $(".strip-next", wrap);
    if (!strip || !prev || !next) return;

    const update = () => {
      const max = strip.scrollWidth - strip.clientWidth;
      prev.hidden = strip.scrollLeft <= 4;
      next.hidden = strip.scrollLeft >= max - 4;
    };
    const go = (dir) => {
      strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: reduceMotion ? "auto" : "smooth" });
    };

    strip.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
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
  const frame = $(".lb-frame", wrap);
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
  v.addEventListener("loadedmetadata", () => {
    // Adatta la cornice al formato del video (9:16, 4:5...).
    if (!rotated && v.videoWidth && v.videoHeight) {
      frame.style.setProperty("--arn", (v.videoWidth / v.videoHeight).toFixed(4));
    }
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
  const ig = $(".lb-ig", lb.el);
  if (ig) {
    ig.hidden = !item.dataset.igUrl;
    if (item.dataset.igUrl) ig.href = item.dataset.igUrl;
  }
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
  setupLinkedIn();
  setupHeader();
  setupPreviews();
  setupStrips();
});
