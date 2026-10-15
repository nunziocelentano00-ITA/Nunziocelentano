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
    "meta.title.home": "Nunzio Celentano — Social Media Manager",
    "meta.desc.home": "Social media manager con una laurea magistrale in Marketing e Comunicazione: strategia, contenuti, video e visual design per brand, eventi e squadre sportive.",
    "meta.title.services": "Servizi & contatti — Nunzio Celentano",
    "meta.desc.services": "Gestione social, video e grafiche per brand ed eventi: scopri i servizi e scrivimi su Instagram per un preventivo.",

    "nav.projects": "Progetti",
    "nav.about": "Chi sono",
    "nav.contact": "Servizi & contatti",
    "lang.aria": "Cambia lingua: passa all'inglese",

    "hero.kicker": "Social Media Manager · Video & Visual Design",
    "hero.title": "Strategia e contenuti che <em>fanno parlare</em> di un brand.",
    "hero.sub": "Social media manager con una laurea magistrale in Marketing e Comunicazione e un forte occhio per il video e il visual design. Seguo i progetti dall'idea alla pubblicazione per brand, eventi, realtà sportive e istituzioni.",
    "hero.cta": "Guarda i lavori",
    "hero.chip2": "Grafiche social",
    "cta.ig": "Scrivimi su Instagram",
    "cta.li": "Contattami su LinkedIn",

    "marquee": ["Social media management", "Strategia", "Contenuti", "Video editing", "Visual design", "Reels", "Eventi", "Brand"],

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
    "p26.cta": "Guarda con l'audio",
    "p26.m1": "Fan film · estratto",

    "about.eyebrow": "Chi sono",
    "about.statement": "Ogni brand ha qualcosa da dire. <span class=\"hl\">Io gli do una voce.</span>",
    "about.p1": "Sono Nunzio Celentano, social media manager con una laurea magistrale in Marketing e Comunicazione. Unisco strategia e creatività: definisco come un brand deve comunicare e realizzo in prima persona i contenuti che lo raccontano, dal video editing al visual design. Che si tratti di lanciare un prodotto, promuovere un evento o costruire la presenza social di una realtà, l'obiettivo è lo stesso: trasformare ciò che hai da dire in una comunicazione chiara, coerente e riconoscibile.",
    "about.p2": "In agenzia mi occupo anche di comunicazione politica e istituzionale: un ambito in cui precisione, tono e tempismo fanno la differenza, e in cui la riservatezza è parte del lavoro. Per questo quei contenuti non sono pubblicati qui.",
    "skill.6": "Comunicazione politica e istituzionale",
    "about.skills": "Cosa faccio",
    "skill.1": "Social media management",
    "skill.2": "Strategia di comunicazione",
    "skill.3": "Video editing",
    "skill.4": "Visual design",
    "skill.5": "Direzione creativa",
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
    "srv.title": "E se ti dicessi che riesco a <em>fermare lo scroll</em>?",
    "srv.sub": "Tre servizi, un solo obiettivo: una comunicazione che funziona sui social, dal piano completo al singolo contenuto.",
    "srv.cta": "Dimmi di più",
    "s0.title": "Gestione social",
    "s0.text": "Mi occupo della presenza social del tuo brand dall'inizio alla fine: definisco la strategia, pianifico i contenuti e li pubblico con costanza, mantenendo un'immagine coerente e riconoscibile.",
    "s0.l1": "Analisi del profilo e strategia di comunicazione",
    "s0.l2": "Piano editoriale e calendario dei contenuti",
    "s0.l3": "Creazione e pubblicazione dei post",
    "s0.l4": "Campagne per lanci ed eventi",
    "s0.l5": "Monitoraggio dei risultati e ottimizzazione",
    "s0.for": "Ideale per: brand, attività ed eventi che vogliono una presenza social curata e continuativa.",
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
    "p3.t": "Proposta",
    "p3.d": "Ricevi una proposta su misura, senza impegno.",
    "p4.t": "Consegna",
    "p4.d": "Ricevi i file pronti da pubblicare, con le revisioni concordate.",
    "talk.title": "Parliamo di ciò che vuoi",
    "talk.text": "Ogni progetto è diverso. Raccontami la tua idea e troviamo insieme la soluzione giusta: un piano completo per i tuoi social o anche un solo contenuto.",
    "quick.video": "Sono qui solo per un video",
    "quick.gfx": "Sono qui solo per una grafica",
    "quick.more": "Ho un progetto più grande",
    "quick.hint": "Ti preparo il messaggio già scritto: si apre la chat di Instagram, tu incolli e invii.",
    "quick.msg.video": "Ciao Nunzio! Ho visto il tuo sito: mi servirebbe solo un video. Ti racconto di cosa si tratta: ",
    "quick.msg.gfx": "Ciao Nunzio! Ho visto il tuo sito: mi servirebbe solo una grafica. Ti racconto di cosa si tratta: ",
    "quick.copied": "Messaggio copiato: incollalo nella chat di Instagram e invia.",
    "type.carousel": "Carosello",
    "contact.eyebrow": "Contatti",
    "contact.title": "Il modo più veloce?<br>Un <span class=\"ig-text\">DM su Instagram</span>.",
    "contact.text": "Ricevo le richieste direttamente su Instagram. Per partire subito, scrivimi:",
    "contact.l1": "che tipo di contenuto ti serve (video, grafiche o entrambi)",
    "contact.l2": "quanti contenuti e per quale social",
    "contact.l3": "entro quando ti servono",
    "contact.l4": "il link al tuo profilo o al tuo brand"
  },

  en: {
    "meta.title.home": "Nunzio Celentano — Social Media Manager",
    "meta.desc.home": "Social media manager with a master's degree in Marketing and Communication: strategy, content, video and visual design for brands, events and sports teams.",
    "meta.title.services": "Services & contact — Nunzio Celentano",
    "meta.desc.services": "Social media management, video and graphics for brands and events: see the services and message me on Instagram for a quote.",

    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Services & contact",
    "lang.aria": "Change language: switch to Italian",

    "hero.kicker": "Social Media Manager · Video & Visual Design",
    "hero.title": "Strategy and content that get a brand <em>talked about</em>.",
    "hero.sub": "Social media manager with a master's degree in Marketing and Communication and a strong eye for video and visual design. I follow projects from the idea to publication for brands, events, sports teams and institutions.",
    "hero.cta": "See my work",
    "hero.chip2": "Social graphics",
    "cta.ig": "DM me on Instagram",
    "cta.li": "Contact me on LinkedIn",

    "marquee": ["Social media management", "Strategy", "Content", "Video editing", "Visual design", "Reels", "Events", "Brands"],

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
    "p26.cta": "Watch with sound",
    "p26.m1": "Fan film · excerpt",

    "about.eyebrow": "About me",
    "about.statement": "Every brand has something to say. <span class=\"hl\">I give it a voice.</span>",
    "about.p1": "I'm Nunzio Celentano, a social media manager with a master's degree in Marketing and Communication. I combine strategy and creativity: I define how a brand should communicate and personally create the content that tells its story, from video editing to visual design. Whether it's launching a product, promoting an event or building a company's social presence, the goal is the same: turning what you have to say into clear, consistent and recognisable communication.",
    "about.p2": "At the agency I also work on political and institutional communication: a field where precision, tone and timing make all the difference, and where confidentiality is part of the job. That's why that work isn't shown here.",
    "skill.6": "Political & institutional communication",
    "about.skills": "What I do",
    "skill.1": "Social media management",
    "skill.2": "Communication strategy",
    "skill.3": "Video editing",
    "skill.4": "Visual design",
    "skill.5": "Creative direction",
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
    "srv.title": "What if I told you I can <em>stop the scroll</em>?",
    "srv.sub": "Three services, one goal: communication that works on social media, from a full plan to a single piece of content.",
    "srv.cta": "Tell me more",
    "s0.title": "Social media management",
    "s0.text": "I take care of your brand's social presence from start to finish: I define the strategy, plan the content and publish it consistently, keeping a coherent, recognisable image.",
    "s0.l1": "Profile analysis and communication strategy",
    "s0.l2": "Editorial plan and content calendar",
    "s0.l3": "Post creation and publishing",
    "s0.l4": "Campaigns for launches and events",
    "s0.l5": "Results monitoring and optimisation",
    "s0.for": "Great for: brands, businesses and events that want a curated, consistent social presence.",
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
    "p3.t": "Proposal",
    "p3.d": "You get a tailored, no-obligation proposal.",
    "p4.t": "Delivery",
    "p4.d": "You get files ready to post, with the agreed revisions.",
    "talk.title": "Let's talk about what you want",
    "talk.text": "Every project is different. Tell me your idea and together we'll find the right solution: a complete plan for your socials or even a single piece of content.",
    "quick.video": "I'm only here for a video",
    "quick.gfx": "I'm only here for a graphic",
    "quick.more": "I have a bigger project",
    "quick.hint": "I'll prepare the message for you: the Instagram chat opens, you paste and send.",
    "quick.msg.video": "Hi Nunzio! I saw your website: I only need a video. Here's what it's about: ",
    "quick.msg.gfx": "Hi Nunzio! I saw your website: I only need a graphic. Here's what it's about: ",
    "quick.copied": "Message copied: paste it in the Instagram chat and send.",
    "type.carousel": "Carousel",
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

/* ---------- Richieste veloci ("Sono qui solo per...") ---------- */
let toastTimer = null;
function showToast(text) {
  const toast = $(".toast");
  if (!toast) return;
  toast.textContent = text;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 6000);
}

function copyText(text) {
  // Copia sincrona (funziona durante il clic), con l'API moderna come rinforzo.
  let ok = false;
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    ok = document.execCommand("copy");
    area.remove();
  } catch (e) { ok = false; }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
    ok = true;
  }
  return ok;
}

function setupQuick() {
  $$("[data-quick]").forEach((link) => {
    link.addEventListener("click", () => {
      const msg = t("quick.msg." + link.dataset.quick);
      if (copyText(msg)) showToast(t("quick.copied"));
      // Il link apre la chat di Instagram (comportamento normale del clic).
    });
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
  const all = $$("[data-preview]");
  // I video in evidenza (data-inview) partono da soli quando sono visibili.
  const featured = all.filter((c) => c.hasAttribute("data-inview"));
  const cards = all.filter((c) => !c.hasAttribute("data-inview"));
  if (featured.length && !reduceMotion && "IntersectionObserver" in window) {
    const fio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = $("video.preview", e.target);
        if (!v) return;
        if (e.isIntersecting) playSafe(v); else v.pause();
      });
    }, { threshold: 0.4 });
    featured.forEach((c) => fio.observe(c));
  }
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
  setupQuick();
  setupHeader();
  setupPreviews();
  setupStrips();
});
