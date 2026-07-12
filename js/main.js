/* LatteNeve — i18n IT/EN, nav mobile, reveal */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_counter: 'Il banco',
      nav_ingredients: 'Gli ingredienti',
      nav_photos: 'La gelateria',
      nav_hours: 'Orari e dove',
      call_short: 'Chiama',
      call_cta: 'Chiama',
      see_flavours: 'Guarda i gusti',
      hero_eyebrow: 'Gelateria tradizionale · Via Vigevano 27 — Porta Genova, Milano',
      hero_lead: 'Il gelato come si faceva una volta, a due passi dalla Darsena: pistacchio di Bronte, granite siciliane e una parete che dichiara ogni ingrediente, uno per uno.',
      hero_proof: 'Segnalata dal Gambero Rosso — “Milano, le botteghe del gusto”',
      counter_title: 'Il banco',
      counter_pull: 'Vaschette basse, gusti che cambiano, e il pistacchio che arriva da Bronte — non “tipo Bronte”.',
      counter_p1: 'LatteNeve è una gelateria tradizionale di via Vigevano, la strada che porta dalla Darsena a Porta Genova. Niente montagne fluorescenti in vetrina: gelato mantecato come si deve, granite siciliane d’estate e brioches per chi fa colazione col gelato senza sensi di colpa.',
      counter_p2: 'Chi ha esigenze non resta a guardare: ci sono gusti vegani — nocciola, pistacchio, cioccolato, i sorbetti di frutta, il gelato di cocco — e opzioni senza glutine e senza lattosio. Basta chiedere al banco.',
      chips_title: 'Dal banco e dai cartelli',
      c1: 'Pistacchio di Bronte',
      c2: 'Nocciola',
      c3: 'Cioccolato fondente gran cru',
      c4: 'Granita al limone naturale',
      c5: 'Granita di mandorle (vegana)',
      c6: 'Gelato di cocco (vegano)',
      chips_note: 'I gusti ruotano con la stagione: quello che c’è, c’è al banco.',
      b1: 'Gusti vegani',
      b2: 'Senza glutine',
      b3: 'Senza lattosio',
      ingr_title: 'Gli ingredienti, dichiarati al muro',
      ingr_lead: 'In gelateria c’è una parete intera che elenca cosa finisce nelle vaschette. Non è arredamento: è una dichiarazione. Questi sono alcuni, copiati da lì:',
      i1: 'Cioccolati fondenti gran cru',
      i2: 'Bacche di vaniglia bio dal Madagascar e da Tahiti',
      i3: 'Pistacchio di Bronte',
      i4: 'Mandorle di Sicilia',
      i5: 'Liquirizia della Calabria',
      i6: 'Frutta fresca di stagione',
      i7: 'Latte e panna fresca',
      i8: 'Miele bio e castagne',
      ingr_award: 'Gambero Rosso l’ha messa tra “le botteghe del gusto” di Milano. La targa è al banco, di fianco alle brioches.',
      photos_title: 'La gelateria',
      alt1: 'Il banco con le vaschette: creme, cioccolati e gusti della casa',
      alt2: 'L’interno con la parete degli ingredienti e il soffitto in legno',
      alt3: 'Le brioches al banco, sotto la parete degli ingredienti',
      alt4: 'La targa Gambero Rosso — Milano, le botteghe del gusto',
      alt5: 'L’insegna LatteNeve accesa la sera, su via Vigevano',
      alt6: 'Il soffitto in legno a travi con la lampada ad anelli',
      g_note: 'Foto dalle recensioni pubbliche della gelateria.',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      everyday: 'Tutti i giorni',
      hours_note: 'Nei mesi freddi gli orari possono variare: per sicurezza, una telefonata.',
      metro: 'M2 Porta Genova, a due passi',
      maps: 'Apri in Google Maps',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Gelateria tradizionale',
      f_line: 'Gelato artigianale, granite e brioches sul Naviglio.',
      aria_top: 'LatteNeve — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_counter: 'The counter',
      nav_ingredients: 'The ingredients',
      nav_photos: 'The gelateria',
      nav_hours: 'Hours & location',
      call_short: 'Call',
      call_cta: 'Call',
      see_flavours: 'See the flavours',
      hero_eyebrow: 'Traditional gelateria · Via Vigevano 27 — Porta Genova, Milan',
      hero_lead: 'Gelato the way it used to be made, a short walk from the Darsena: Bronte pistachio, Sicilian granitas, and a wall that declares every ingredient, one by one.',
      hero_proof: 'Listed by Gambero Rosso — “Milano, le botteghe del gusto”',
      counter_title: 'The counter',
      counter_pull: 'Low tubs, flavours that rotate, and pistachio that comes from Bronte — not “Bronte-style”.',
      counter_p1: 'LatteNeve is a traditional gelateria on Via Vigevano, the street running from the Darsena to Porta Genova. No fluorescent mountains in the window: properly churned gelato, Sicilian granitas in summer, and brioches for those who have gelato for breakfast without apology.',
      counter_p2: 'Dietary needs don’t leave you watching from the side: there are vegan flavours — hazelnut, pistachio, chocolate, fruit sorbets, coconut gelato — plus gluten-free and lactose-free options. Just ask at the counter.',
      chips_title: 'From the counter and the signs',
      c1: 'Bronte pistachio',
      c2: 'Hazelnut',
      c3: 'Grand cru dark chocolate',
      c4: 'Natural lemon granita',
      c5: 'Almond granita (vegan)',
      c6: 'Coconut gelato (vegan)',
      chips_note: 'Flavours rotate with the seasons: what’s there is what’s at the counter.',
      b1: 'Vegan flavours',
      b2: 'Gluten-free',
      b3: 'Lactose-free',
      ingr_title: 'Ingredients, declared on the wall',
      ingr_lead: 'Inside the gelateria, an entire wall lists what goes into the tubs. It isn’t décor: it’s a statement. Here are a few, copied straight from it:',
      i1: 'Grand cru dark chocolates',
      i2: 'Organic vanilla beans from Madagascar and Tahiti',
      i3: 'Bronte pistachio',
      i4: 'Sicilian almonds',
      i5: 'Calabrian liquorice',
      i6: 'Fresh seasonal fruit',
      i7: 'Fresh milk and cream',
      i8: 'Organic honey and chestnuts',
      ingr_award: 'Gambero Rosso listed it among Milan’s “botteghe del gusto”. The plaque sits at the counter, next to the brioches.',
      photos_title: 'The gelateria',
      alt1: 'The counter with its tubs: creams, chocolates and house flavours',
      alt2: 'The interior with the ingredient wall and the wooden ceiling',
      alt3: 'Brioches at the counter, under the ingredient wall',
      alt4: 'The Gambero Rosso plaque — Milano, le botteghe del gusto',
      alt5: 'The LatteNeve sign lit up at night on Via Vigevano',
      alt6: 'The beamed wooden ceiling with the ring lamp',
      g_note: 'Photos from the gelateria’s public reviews.',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      everyday: 'Every day',
      hours_note: 'Hours may vary in the colder months: a quick call is the safest bet.',
      metro: 'M2 Porta Genova station, steps away',
      maps: 'Open in Google Maps',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'Traditional gelateria',
      f_line: 'Artisan gelato, granitas and brioches by the Naviglio.',
      aria_top: 'LatteNeve — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('latteneve-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('latteneve-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "la nevicata" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var fondeIntro = function () {
        intro.classList.add('intro--fonde');
        document.documentElement.classList.add('intro-done');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(fondeTimer);
        clearTimeout(endTimer);
        document.documentElement.classList.add('intro-done');
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var fondeTimer = setTimeout(fondeIntro, 2250);
      var endTimer = setTimeout(finishIntro, 3150);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-head, .split-main, .split-side, .ingr, .gallery, .hours, .where');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }
/* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */
  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
