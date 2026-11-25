/*
  Contenu du site lu dans content/*.js : la veille, les liens LinkedIn et GitHub,
  l'adresse du service de formulaire. Rien à modifier ici pour ajouter du contenu.
*/
(function () {
  var MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  function dateFr(iso) {
    var p = String(iso || '').split('-');
    if (p.length !== 3) return iso || '';
    return Number(p[2]) + ' ' + MOIS[Number(p[1]) - 1] + ' ' + p[0];
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function safeUrl(u) { return /^(https?:)?\/\//i.test(u || '') || /^[\w./-]+$/.test(u || '') ? u : ''; }

  // la veille : triée par date, filtrée par thème, affichée 5 par 5
  var list = document.querySelector('[data-veille]');
  var all = (window.VEILLE || []).slice().sort(function (x, y) { return String(y.date).localeCompare(String(x.date)); });
  var PAR_PAGE = 5;
  var NOUVEAU_JOURS = 10; // un article de moins de 10 jours porte l'étiquette « Nouveau »
  if (list && all.length) {
    var state = { theme: '', page: 0 };
    var box = document.querySelector('[data-themes]');
    var pager = document.querySelector('[data-pager]');
    var info = document.querySelector('[data-pager-info]');
    var prev = document.querySelector('[data-pager-prev]');
    var next = document.querySelector('[data-pager-next]');
    var btns = [];
    var item = function (a) {
      var li = el('li', 'veille__item');
      var meta = el('p', 'veille__meta');
      meta.textContent = [dateFr(a.date), a.theme, a.angle, a.source].filter(Boolean).join(' · ');
      var age = (Date.now() - new Date(a.date + 'T12:00:00').getTime()) / 864e5;
      if (age >= -1 && age < NOUVEAU_JOURS) { var tag = el('span', 'veille__new', 'Nouveau'); meta.prepend(tag); li.classList.add('is-new'); }
      var body = el('div', 'veille__body');
      var h = el('h3', 'veille__title');
      var link = el('a', null, a.titre);
      var url = safeUrl(a.url);
      if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener'; }
      h.append(link);
      body.append(h, el('p', 'veille__sum', a.resume));
      li.append(meta, body);
      if (a.image && safeUrl(a.image)) {
        var img = el('img', 'veille__img');
        img.src = a.image; img.alt = ''; img.loading = 'lazy'; img.width = 64; img.height = 64;
        li.prepend(img); li.classList.add('has-img');
      }
      return li;
    };
    var render = function () {
      var rows = all.filter(function (a) { return !state.theme || a.theme === state.theme; });
      var pages = Math.max(1, Math.ceil(rows.length / PAR_PAGE));
      state.page = Math.min(state.page, pages - 1);
      var from = state.page * PAR_PAGE;
      list.replaceChildren.apply(list, rows.slice(from, from + PAR_PAGE).map(item));
      btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.theme === state.theme)); });
      if (pager) {
        pager.hidden = rows.length <= PAR_PAGE;
        info.textContent = 'Articles ' + (from + 1) + ' à ' + Math.min(from + PAR_PAGE, rows.length) + ' sur ' + rows.length;
        prev.disabled = state.page === 0;
        next.disabled = state.page >= pages - 1;
      }
    };
    if (box) {
      var THEMES = ['Cybersécurité', 'IA et cybersécurité', 'Sécurité des réseaux', 'Cloud computing', 'Vulnérabilités', 'Actualités informatiques'];
      [''].concat(THEMES).forEach(function (t) {
        var n = t ? all.filter(function (a) { return a.theme === t; }).length : all.length;
        if (!n) return;
        var b = el('button', 'themes__btn');
        b.type = 'button'; b.dataset.theme = t;
        b.append(el('span', null, t || 'Tous les thèmes'), el('span', 'themes__n', String(n)));
        b.addEventListener('click', function () { state.theme = (state.theme === t ? '' : t); state.page = 0; render(); });
        box.append(b); btns.push(b);
      });
    }
    if (prev) prev.addEventListener('click', function () { state.page--; render(); });
    if (next) next.addEventListener('click', function () { state.page++; render(); });
    render();
    var src = document.querySelector('[data-sources]');
    if (src) {
      all.map(function (a) { return a.source; }).filter(function (v, i, arr) { return arr.indexOf(v) === i; })
        .forEach(function (name) { src.append(el('li', null, name)); });
    }
  } else if (list) {
    list.closest('section').hidden = true;
  }

  // LinkedIn et GitHub, seulement quand l'adresse est renseignée
  var site = window.SITE || {};
  var socials = document.querySelector('[data-socials]');
  [['linkedin', 'LinkedIn', 'Voir mon profil LinkedIn'], ['github', 'GitHub', 'Voir mes dépôts GitHub']].forEach(function (k) {
    var url = safeUrl(site[k[0]]);
    if (!socials || !url) return;
    var li = el('li');
    var name = el('span', 'rows__name');
    var chip = el('span', 'ic-chip');
    var ic = el('img', 'ic ic-20'); ic.src = 'assets/icons/' + k[0] + '.svg'; ic.alt = ''; ic.width = 20; ic.height = 20; ic.loading = 'lazy';
    chip.append(ic); name.append(chip, document.createTextNode(k[1]));
    var a = el('a', 'rows__value link', k[2]); a.href = url; a.target = '_blank'; a.rel = 'noopener';
    li.append(name, a); socials.append(li);
  });

  // un service de formulaire, s'il est renseigné (sinon le formulaire écrit un email)
  var form = document.querySelector('form[data-endpoint]');
  if (form && safeUrl(site.formulaire)) form.setAttribute('data-endpoint', site.formulaire);

  // les travaux pratiques : une ligne par TP, qui mène à sa page de détail
  var ARROW = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  (window.TRAVAUX || []).forEach(function (t) {
    var ul = document.querySelector('[data-travaux="' + t.cadre + '"]');
    if (!ul) return;
    var a = el('a', 'tp-row');
    a.href = 'projet.html?id=' + encodeURIComponent(t.id);
    var ic = el('span', 'tp-row__ic');
    if (/^[\w-]+$/.test(t.icone || '')) {
      var img = el('img'); img.src = 'assets/icons/' + t.icone + '.svg'; img.alt = ''; img.width = 22; img.height = 22; img.loading = 'lazy';
      ic.append(img);
    }
    var txt = el('span', 'tp-row__txt');
    txt.append(el('span', 'tp-row__title', t.titre), el('span', 'tp-row__theme', t.theme || ''));
    var go = el('span', 'tp-row__go'); go.innerHTML = ARROW;
    a.append(ic, txt, go);
    var item = el('li'); item.append(a); ul.append(item);
  });
})();
