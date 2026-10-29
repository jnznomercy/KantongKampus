(function () {
  'use strict';

  /* =====================================================================
     Konstanta & ikon (path gaya Lucide, nama sama dengan layer di Figma)
     ===================================================================== */
  const KEY = 'kk:v2';
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const MONL = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const ICONS = {
    'house': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    'wallet': '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'chart-no-axes-column-increasing': '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
    'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'user-round': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    'bell': '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    'eye-off': '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
    'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    'piggy-bank': '<path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"/><path d="M16 10h.01"/><path d="M2 8v1a2 2 0 0 0 2 2h1"/>',
    'utensils': '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    'bus': '<path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>',
    'shopping-bag': '<path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>',
    'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    'coffee': '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    'ellipsis': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    'calendar-days': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'search': '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
    'list-filter': '<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>',
    'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    'clipboard': '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    'settings': '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
    'palette': '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
    'smartphone': '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    'menu': '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    'pencil': '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    'camera': '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/>',
    'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    'languages': '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    'cloud': '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    'cloud-download': '<path d="M12 13v8l-4-4"/><path d="m12 21 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>',
    'cloud-upload': '<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',
    'trash-2': '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    'circle-check': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'monitor': '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    'type': '<path d="M12 4v16"/><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"/><path d="M9 20h6"/>',
    'circle-arrow-down': '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/>',
    'circle-arrow-up': '<circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
  };
  const icon = (name, size = 20, extra = '') =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${ICONS[name] || ''}</svg>`;

  /* Kategori */
  const CATS = {
    makan: { label: 'Makan', icon: 'utensils', bg: '#ffe7aa', fg: '#e89a10', group: 'makan', type: 'out' },
    transport: { label: 'Transportasi', icon: 'bus', bg: '#c8deff', fg: '#3878ed', group: 'transport', type: 'out' },
    shopping: { label: 'Shopping', icon: 'shopping-bag', bg: '#e3cff9', fg: '#9252de', group: 'shopping', type: 'out' },
    pendidikan: { label: 'Pendidikan', icon: 'graduation-cap', bg: '#efedfa', fg: '#8580ad', group: 'pendidikan', type: 'out' },
    nongkrong: { label: 'Nongkrong', icon: 'coffee', bg: '#ffe1e5', fg: '#ef6571', group: 'nongkrong', type: 'out' },
    lainnya: { label: 'Lainnya', icon: 'ellipsis', bg: '#e8f0f0', fg: '#8a9ca6', group: 'lainnya', type: 'out' },
    beasiswa: { label: 'Beasiswa', icon: 'banknote', bg: '#e9f7f2', fg: '#008455', group: 'in', type: 'in' },
    kiriman: { label: 'Kiriman Orang Tua', icon: 'wallet', bg: '#e9f7f2', fg: '#008455', group: 'in', type: 'in' },
    pemasukan: { label: 'Pemasukan Lain', icon: 'banknote', bg: '#e9f7f2', fg: '#008455', group: 'in', type: 'in' }
  };
  const GROUPS = [
    { id: 'makan', label: 'Makan', cat: 'makan', bar: '#ffba3e', donut: '#ffba3e' },
    { id: 'transport', label: 'Transportasi', cat: 'transport', bar: '#3878ed', donut: '#3878ed' },
    { id: 'shopping', label: 'Shopping', cat: 'shopping', bar: '#9252de', donut: '#9252de' },
    { id: 'pendidikan', label: 'Pendidikan', cat: 'pendidikan', bar: '#8580ad', donut: '#af70dc' },
    { id: 'nongkrong', label: 'Nongkrong', cat: 'nongkrong', bar: '#ef6571', donut: '#ef6571' },
    { id: 'lainnya', label: 'Lainnya', cat: 'lainnya', bar: '#a2b1bd', donut: '#a2b1bd' }
  ];
  const ACCENTS = ['#008455', '#6fcfb5', '#3878ed', '#9252de', '#ffba3e', '#f44788'];
  const FONTS = { kecil: 0.92, normal: 1, besar: 1.12 };
  const FONT_ORDER = ['normal', 'besar', 'kecil'];
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  /* =====================================================================
     Util
     ===================================================================== */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const monthKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
  const monthLabel = (mk) => { const [y, m] = mk.split('-').map(Number); return `${MONL[m - 1]} ${y}`; };
  const monthShort = (mk) => MON[Number(mk.split('-')[1]) - 1];
  const shiftMonth = (mk, n) => { const [y, m] = mk.split('-').map(Number); return monthKey(new Date(y, m - 1 + n, 1)); };
  const fmtDate = (s) => { const d = parse(s); return `${pad(d.getDate())} ${MON[d.getMonth()]} ${d.getFullYear()}`; };
  const fmtDateLong = (s) => { const d = parse(s); return `${pad(d.getDate())} ${MONL[d.getMonth()]} ${d.getFullYear()}`; };
  const rp = (n) => 'Rp ' + Math.round(n).toLocaleString('id-ID');
  const short = (v) => {
    if (v === 0) return '0';
    if (v >= 1e6) return String(v / 1e6).replace('.', ',') + ' jt';
    return v / 1e3 + ' rb';
  };

  /* =====================================================================
     State & penyimpanan
     ===================================================================== */
  const defaults = () => ({
    name: '',
    named: false,
    tx: [],
    settings: {
      theme: 'light',
      followSystem: false,
      accent: '#008455',
      fontSize: 'normal',
      hideBalance: false,
      lang: 'id',
      monthlyBudget: 0,
      dailyBudget: 0,
      notif: { master: true, in: true, out: true, budget: true, daily: false }
    },
    lastDaily: '',
    notifSeen: [],
    avatar: { type: 'preset', id: 'a1' }
  });

  function seed() {
    const T = new Date();
    const y = T.getFullYear(), m = T.getMonth(), td = T.getDate();
    const cur = (n) => ymd(new Date(y, m, Math.min(n, td)));
    const prev = (k, n) => ymd(new Date(y, m - k, n));
    const tx = [];
    let id = 1;
    const add = (type, amount, cat, date, note = '') => tx.push({ id: id++, type, amount, cat, date, note });

    // Bulan sebelumnya (net -150.000 supaya saldo total = Rp 1.250.000)
    add('in', 1800000, 'kiriman', prev(2, 1), 'Kiriman bulanan');
    add('out', 1200000, 'lainnya', prev(2, 3), 'Bayar kos');
    add('out', 600000, 'makan', prev(2, 12), 'Makan sebulan');
    add('in', 1800000, 'kiriman', prev(1, 1), 'Kiriman bulanan');
    add('out', 1200000, 'lainnya', prev(1, 3), 'Bayar kos');
    add('out', 450000, 'makan', prev(1, 10), 'Makan sebulan');
    add('out', 150000, 'transport', prev(1, 14));
    add('out', 150000, 'shopping', prev(1, 20));

    // Bulan ini
    add('in', 1500000, 'kiriman', cur(1), 'Kiriman bulanan');
    add('in', 500000, 'beasiswa', cur(1));
    add('out', 20000, 'nongkrong', cur(1));
    add('out', 40000, 'makan', cur(2), 'Makan malam');
    add('out', 30000, 'transport', cur(2), 'Ojek');
    add('out', 35000, 'makan', cur(3));
    add('out', 10000, 'shopping', cur(3), 'Buku');
    add('out', 45000, 'makan', cur(4), 'Warung');
    add('out', 35000, 'pendidikan', cur(4), 'Fotokopi');
    add('out', 25000, 'transport', cur(5), 'Bensin');
    add('out', 50000, 'makan', cur(6));
    add('out', 60000, 'shopping', cur(6), 'Alat tulis');
    add('out', 35000, 'transport', cur(7), 'Bensin');
    add('out', 45000, 'makan', cur(8));
    add('out', 50000, 'transport', cur(9), 'Isi e-money');
    add('out', 25000, 'pendidikan', cur(9), 'Print tugas');
    add('out', 50000, 'shopping', cur(10), 'Kaos');
    add('out', 25000, 'makan', ymd(T), 'Makan siang');
    add('out', 10000, 'transport', ymd(T), 'Ojek');
    add('out', 10000, 'nongkrong', ymd(T));
    return tx;
  }

  let state;
  let lang = 'id';
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const s = JSON.parse(raw);
        const d = defaults();
        state = Object.assign(d, s, {
          settings: Object.assign(d.settings, s.settings || {}, { notif: Object.assign(d.settings.notif, (s.settings || {}).notif || {}) })
        });
        if (s.named === undefined) state.named = true;
        return;
      }
    } catch (e) { /* abaikan */ }
    state = defaults();
    state.tx = [];
    save();
  }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* penyimpanan penuh / diblokir */ }
  }
  function save() {
    state.updatedAt = Date.now();
    persist();
    scheduleSync();
  }

  /* =====================================================================
     Perhitungan
     ===================================================================== */
  const today = () => ymd(new Date());
  const curMonth = () => monthKey(new Date());
  const sorted = (list, asc = false) => list.slice().sort((a, b) => {
    const c = a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id;
    return asc ? c : -c;
  });
  const sumType = (type, mk) => state.tx.filter((t) => t.type === type && t.date.startsWith(mk)).reduce((a, t) => a + t.amount, 0);
  const balance = () => state.tx.reduce((a, t) => a + (t.type === 'in' ? t.amount : -t.amount), 0);
  const byGroup = (mk) => {
    const r = {};
    GROUPS.forEach((g) => (r[g.id] = 0));
    state.tx.filter((t) => t.type === 'out' && t.date.startsWith(mk)).forEach((t) => {
      const g = (CATS[t.cat] || CATS.lainnya).group;
      r[g in r ? g : 'lainnya'] += t.amount;
    });
    return r;
  };
  const spentToday = () => state.tx.filter((t) => t.type === 'out' && t.date === today()).reduce((a, t) => a + t.amount, 0);

  /* =====================================================================
     UI state
     ===================================================================== */
  const ui = {
    keuTab: 'transaksi',
    q: '',
    flt: 'all',
    asc: false,
    open: null,
    statMonth: curMonth(),
    form: null
  };
  let deferredInstall = null;
  let installDismissed = false;
  try { installDismissed = localStorage.getItem('kk:install-dismissed') === '1'; } catch (e) { /* abaikan */ }
  const isStandalone = () => (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const installBanner = () => (isStandalone() || installDismissed || !(deferredInstall || isIOS())) ? '' : `
      <div class="install">
        <span class="ic"><img src="icons/icon-192.png" alt=""></span>
        <span class="t"><b>Pasang KantongKampus</b><small>Buka dari layar utama dan tetap bisa dipakai tanpa internet.</small></span>
        <button class="go" data-action="install">Pasang</button>
        <button class="x" data-action="dismiss-install" aria-label="Tutup">${icon('x', 16)}</button>
      </div>`;

  /* =====================================================================
     Tema
     ===================================================================== */
  const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function lum(hex) {
    const n = parseInt(hex.slice(1), 16);
    const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f((n >> 16) & 255) + 0.7152 * f((n >> 8) & 255) + 0.0722 * f(n & 255);
  }
  function applyTheme() {
    const s = state.settings;
    const dark = s.followSystem ? !!(mq && mq.matches) : s.theme === 'dark';
    const r = document.documentElement;
    r.dataset.theme = dark ? 'dark' : 'light';
    r.style.setProperty('--accent', s.accent);
    r.style.setProperty('--on-accent', lum(s.accent) > 0.4 ? '#243c47' : '#ffffff');
    r.style.setProperty('--fs', FONTS[s.fontSize] || 1);
    const meta = $('#meta-theme');
    if (meta) meta.setAttribute('content', dark ? '#182b35' : '#e9f0ef');
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', () => { if (state.settings.followSystem) { applyTheme(); render(true); } });

  /* =====================================================================
     Komponen
     ===================================================================== */
  const catIcon = (key, size = 38, inner = 21) => {
    const c = CATS[key] || CATS.lainnya;
    return `<span class="ci" style="width:${size}px;height:${size}px;background:${c.bg};color:${c.type === 'in' ? 'var(--accent)' : c.fg}">${icon(c.icon, inner)}</span>`;
  };
  const toggle = (on, k, label) => `<button class="tg ${on ? 'on' : ''}" role="switch" aria-checked="${on}" aria-label="${esc(label)}" data-action="toggle" data-k="${k}"></button>`;

  function txRow(t, interactive = true, extra = '') {
    const c = CATS[t.cat] || CATS.lainnya;
    const sub = `<span class="dt">${fmtDate(t.date)}</span>` + (t.note ? `<span class="nt">${esc(t.note)}</span>` : '');
    const amt = t.type === 'in' ? `+ ${rp(t.amount)}` : `− ${rp(t.amount)}`;
    const inner = `${catIcon(t.cat)}<span class="d"><b>${esc(c.label)}</b><small>${sub}</small></span><span class="tdate">${fmtDate(t.date)}</span><span class="amt ${t.type}">${amt}</span>`;
    return interactive ? `<button class="tx ${extra}" data-action="tx" data-id="${t.id}">${inner}</button>` : `<div class="tx ${extra}">${inner}</div>`;
  }

  // 4 baris pertama (a1-a4) cowok, 4 berikutnya (a5-a8) cewek
  const AVATARS = [
    { id: 'a1', bg: '#c6e6da', skin: '#f4b883', hair: '#3b2a24', shirt: '#008455', style: 'short' },
    { id: 'a2', bg: '#cfe0ff', skin: '#e8a56f', hair: '#2b1d18', shirt: '#3b78e8', style: 'short', cap: '#e89a10' },
    { id: 'a3', bg: '#ffe7aa', skin: '#f7c9a0', hair: '#3b2a24', shirt: '#e89a10', style: 'buzz', glasses: true },
    { id: 'a4', bg: '#e6e6f5', skin: '#8d5a3a', hair: '#15110f', shirt: '#5b5fc7', style: 'buzz', hoodie: '#454aa8' },
    { id: 'a5', bg: '#ffe1e5', skin: '#f7c9a0', hair: '#8a4b2a', shirt: '#ef6571', style: 'long' },
    { id: 'a6', bg: '#e3cff9', skin: '#f4b883', hair: '#7b4bc4', shirt: '#9252de', style: 'hijab', glasses: true },
    { id: 'a7', bg: '#d7f0e6', skin: '#e8a56f', hair: '#2b1d18', shirt: '#36b67a', style: 'bun' },
    { id: 'a8', bg: '#ffd9c2', skin: '#8d5a3a', hair: '#15110f', shirt: '#f08a5d', style: 'curly', band: '#ef6571' }
  ];
  let avUid = 0;
  function avatarSVG(p) {
    const id = 'avc' + (++avUid);
    const hijab = p.style === 'hijab';
    let back = '', drape = '', front = '';
    const fringe = `<ellipse cx="41" cy="21" rx="16" ry="10" fill="${p.hair}"/>`;
    if (p.style === 'short') {
      back = `<ellipse cx="41.5" cy="28.5" rx="17.8" ry="19.5" fill="${p.hair}"/>`;
      front = `<ellipse cx="41.5" cy="22" rx="15.5" ry="8.5" fill="${p.hair}"/>`;
    } else if (p.style === 'buzz') {
      back = `<ellipse cx="41.5" cy="28" rx="17.5" ry="18" fill="${p.hair}"/>`;
    } else if (p.style === 'long') {
      back = `<ellipse cx="41.5" cy="46" rx="22" ry="31" fill="${p.hair}"/>`;
      front = fringe;
    } else if (p.style === 'bun') {
      back = `<circle cx="41.5" cy="10" r="8.5" fill="${p.hair}"/><ellipse cx="41.5" cy="31" rx="19.5" ry="22" fill="${p.hair}"/>`;
      front = fringe;
    } else if (hijab) {
      back = `<ellipse cx="41.5" cy="37" rx="22.5" ry="26" fill="${p.hair}"/>`;
      drape = `<path d="M14 82 Q16 55 41.5 53 Q67 55 69 82Z" fill="${p.hair}"/>`;
    } else {
      back = [[27, 26], [34, 17], [45, 15], [55, 20], [60, 30], [23, 36], [59, 41]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9.5" fill="${p.hair}"/>`).join('') + `<ellipse cx="41.5" cy="30" rx="18" ry="16" fill="${p.hair}"/>`;
    }
    const fr = hijab ? 13.5 : 14.5, fh = hijab ? 15.5 : 16.5;
    const beard = p.beard ? `<path d="M27 40 Q27 59 41.5 59 Q56 59 56 40 Q56 50 41.5 51 Q27 50 27 40Z" fill="${p.hair}"/>` : '';
    const glasses = p.glasses ? `<g fill="rgba(255,255,255,.28)" stroke="#2b2b2b" stroke-width="1.5"><circle cx="35.5" cy="37.5" r="5.2"/><circle cx="47.5" cy="37.5" r="5.2"/><path d="M40.7 37.5h1.6" fill="none"/></g>` : '';
    const cap = p.cap ? `<path d="M22.5 29 Q22 7 41.5 7 Q61 7 60.5 29Z" fill="${p.cap}"/><rect x="19" y="27" width="45" height="5.5" rx="2.7" fill="${p.cap}" stroke="rgba(0,0,0,.18)" stroke-width="1"/>` : '';
    const hood = p.hoodie ? `<path d="M22 82 Q23 54 41.5 52 Q60 54 61 82Z" fill="${p.hoodie}"/>` : '';
    const strings = p.hoodie ? `<g stroke="#fff" stroke-width="1.7" stroke-linecap="round" fill="none"><path d="M37.5 62 L36.5 73"/><path d="M45.5 62 L46.5 73"/></g><circle cx="36.5" cy="74" r="1.3" fill="#fff"/><circle cx="46.5" cy="74" r="1.3" fill="#fff"/>` : '';
    const band = p.band ? `<path d="M23.5 26 Q41.5 6 59.5 26" fill="none" stroke="${p.band}" stroke-width="4.5" stroke-linecap="round"/>` : '';
    return `<svg viewBox="0 0 80 80" aria-hidden="true">
      <defs><clipPath id="${id}"><circle cx="40" cy="40" r="40"/></clipPath></defs>
      <circle cx="40" cy="40" r="40" fill="${p.bg}"/>
      <g clip-path="url(#${id})">
        <ellipse cx="41.5" cy="78.5" rx="24.5" ry="23.5" fill="${p.shirt}"/>
        ${hood}${drape}${back}
        ${hijab ? '' : `<rect x="35" y="47" width="12" height="17" rx="5" fill="${p.skin}"/>`}
        <ellipse cx="41.5" cy="39.5" rx="${fr}" ry="${fh}" fill="${p.skin}"/>
        ${beard}${front}
        <circle cx="35.5" cy="37.5" r="1.7" fill="#3b2a24"/>
        <circle cx="47.5" cy="37.5" r="1.7" fill="#3b2a24"/>
        <path d="M37.5 45.5q4 3.2 8 0" fill="none" stroke="${p.beard ? '#f2d6c0' : '#c0643c'}" stroke-width="1.6" stroke-linecap="round"/>
        ${strings}${band}${glasses}${cap}
      </g>
    </svg>`;
  }
  const avatarInner = () => {
    const a = state.avatar || {};
    if (a.type === 'photo' && a.data) return `<img src="${a.data}" alt="Foto profil">`;
    return avatarSVG(AVATARS.find((x) => x.id === a.id) || AVATARS[0]);
  };
  const avatar = () => `<div class="av-wrap"><div class="av">${avatarInner()}</div><button class="av-edit" data-action="avatar" aria-label="Ubah foto profil">${icon('pencil', 14)}</button></div>`;

  /* =====================================================================
     Views
     ===================================================================== */
  const views = {};

  views.home = () => {
    const s = state.settings;
    const mk = curMonth();
    const inc = sumType('in', mk), out = sumType('out', mk);
    const bal = balance();
    const spent = spentToday();
    const daily = s.dailyBudget || 0;
    const left = Math.max(0, daily - spent);
    const pctSpent = daily ? Math.min(100, (spent / daily) * 100) : 0;
    const pctLeft = daily ? Math.min(100, (left / daily) * 100) : 0;
    const recent = sorted(state.tx).slice(0, 5);
    const hide = s.hideBalance;
    return `
    <div class="stack">
      <div class="greet">
        <h1>${state.name ? `Halo, ${esc(state.name)}!` : 'Halo!'}</h1>
        <p>Yuk, kelola keuanganmu dengan bijak!</p>
        <button class="bell" data-action="nav" data-to="notifikasi" aria-label="Notifikasi">${icon('bell', 20)}${hasUnread() ? '<i></i>' : ''}</button>
      </div>
      ${installBanner()}
      <div class="cols wide-left">
      <section class="balance" aria-label="Saldo">
        <div class="top"><span>Saldo Saat Ini</span><button data-action="hide" aria-label="${hide ? 'Tampilkan' : 'Sembunyikan'} saldo">${icon(hide ? 'eye-off' : 'eye', 18)}</button></div>
        <div class="big">${hide ? 'Rp ••••••' : rp(bal)}</div>
        <hr>
        <div class="bsum">
          <div><div class="v"><span class="o in">${icon('arrow-up', 20)}</span>${hide ? 'Rp ••••' : rp(inc)}</div><small>Pemasukan bulan ini</small></div>
          <div><div class="v"><span class="o out">${icon('arrow-down', 20)}</span>${hide ? 'Rp ••••' : rp(out)}</div><small>Pengeluaran bulan ini</small></div>
        </div>
      </section>
      <div class="daily">
        <div class="card">
          <div class="lb"><span style="color:var(--red);display:grid">${icon('wallet', 20)}</span>Pengeluaran hari ini</div>
          <div class="num">${rp(spent)}</div>
          <div class="bar red"><i style="width:${pctSpent}%"></i></div>
        </div>
        <div class="card">
          <div class="lb"><span style="color:var(--accent);display:grid">${icon('piggy-bank', 20)}</span>Sisa budget hari ini</div>
          <div class="num">${rp(left)}</div>
          <div class="bar"><i style="width:${pctLeft}%"></i></div>
        </div>
      </div>
      </div>
      <section class="panel recent">
        <div class="sec-h"><h2 class="sec-t">Transaksi Terbaru</h2><button class="link" data-action="nav" data-to="keuangan">Lihat Semua ›</button></div>
        ${recent.length ? recent.map((t, i) => txRow(t, true, i >= 3 ? 'more' : '')).join('') : '<div class="empty">Belum ada transaksi.<br>Tekan tombol + untuk mulai mencatat.</div>'}
      </section>
    </div>`;
  };

  /* --- Keuangan --- */
  function filteredTx() {
    const q = ui.q.trim().toLowerCase();
    return state.tx.filter((t) => {
      if (ui.flt !== 'all' && t.type !== ui.flt) return false;
      if (!q) return true;
      const c = CATS[t.cat] || CATS.lainnya;
      return (c.label + ' ' + (t.note || '') + ' ' + t.amount + ' ' + fmtDate(t.date)).toLowerCase().includes(q);
    });
  }
  function txListHTML() {
    const list = sorted(filteredTx(), ui.asc);
    if (!list.length) return '<div class="empty">Tidak ada transaksi yang cocok.</div>';
    const months = [];
    list.forEach((t) => { const mk = t.date.slice(0, 7); if (!months.includes(mk)) months.push(mk); });
    if (!ui.open) ui.open = new Set([months[0]]);
    return '<div class="thead"><span>Kategori</span><span>Tanggal</span><span>Jumlah</span></div>' + months.map((mk) => {
      const open = ui.open.has(mk);
      const rows = list.filter((t) => t.date.startsWith(mk));
      return `<div class="mgroup">
        <button class="mh" data-action="month" data-m="${mk}" aria-expanded="${open}"><span>${monthLabel(mk)}</span><span class="chev ${open ? 'open' : ''}">${icon('chevron-right', 14)}</span></button>
        ${open ? rows.map((t) => txRow(t)).join('') : ''}
      </div>`;
    }).join('');
  }

  function budgetHTML() {
    const s = state.settings;
    const mk = curMonth();
    const spent = sumType('out', mk);
    const budget = s.monthlyBudget || 0;
    const pct = budget ? Math.round((spent / budget) * 100) : 0;
    const left = Math.max(0, budget - spent);
    const g = byGroup(mk);
    const total = Object.values(g).reduce((a, b) => a + b, 0);
    const rows = GROUPS.map((x) => ({ x, v: g[x.id] })).filter((r) => r.v > 0).sort((a, b) => b.v - a.v);
    const R = 40, C = 2 * Math.PI * R;
    const card = (title, editAct, editLabel, dateLabel, bgt, used) => {
      const pc = bgt ? Math.round((used / bgt) * 100) : 0;
      const lf = Math.max(0, bgt - used);
      const pr = Math.min(1, bgt ? used / bgt : 0);
      const ov = bgt && used > bgt;
      return `
    <div class="card">
      <div class="bud-top"><b>${title}</b><button data-action="${editAct}" aria-label="${editLabel}">${icon('ellipsis', 20)}</button></div>
      <div class="bud-ov">
        <div>
          <div class="bud-m">${icon('calendar-days', 17)}<span>${dateLabel}</span></div>
          <div class="bud-amt">${rp(bgt)}</div>
        </div>
        <div class="ring-wrap">
          <svg viewBox="0 0 88 88" aria-hidden="true">
            <circle cx="44" cy="44" r="${R}" fill="none" stroke="var(--track)" stroke-width="8"/>
            <circle cx="44" cy="44" r="${R}" fill="none" stroke="${ov ? 'var(--red)' : 'var(--accent)'}" stroke-width="8" stroke-linecap="round" stroke-dasharray="${C * pr} ${C}" transform="rotate(-90 44 44)"/>
          </svg>
          <b style="${ov ? 'color:var(--red)' : ''}">${pc}%</b>
        </div>
      </div>
      <div class="bud-tot"><div><small>Terpakai</small><b>${rp(used)}</b></div><div><small>${ov ? 'Lebih' : 'Sisa'}</small><b>${rp(ov ? used - bgt : lf)}</b></div></div>
    </div>`;
    };
    const td = today();
    const spentToday = state.tx.filter((t) => t.type === 'out' && t.date === td).reduce((x, t) => x + t.amount, 0);
    return `
    <div class="cols wide-left">
    <div class="stack">
    ${card('Budget Bulanan', 'edit-monthly', 'Ubah budget bulanan', monthLabel(mk), budget, spent)}
    ${card('Budget Harian', 'edit-daily', 'Ubah budget harian', fmtDate(td), s.dailyBudget || 0, spentToday)}
    </div>
    <section class="panel">
      <h2 class="sec-t" style="margin-bottom:8px">Pengeluaran per Kategori</h2>
      ${rows.length ? rows.map(({ x, v }) => {
        const p = total ? Math.round((v / total) * 100) : 0;
        return `<div class="cb">${catIcon(x.cat)}<div class="bd"><div class="l"><span>${x.label}</span><small>${p}%</small></div><div class="pr"><i style="width:${p}%;background:${x.bar}"></i></div></div><span class="a">${rp(v)}</span></div>`;
      }).join('') : '<div class="empty">Belum ada pengeluaran bulan ini.</div>'}
    </section>
    </div>`;
  }

  views.keuangan = () => {
    const tabs = `<div class="tabs" role="tablist">
      <button class="tab ${ui.keuTab === 'transaksi' ? 'on' : ''}" role="tab" data-action="keutab" data-v="transaksi">Transaksi</button>
      <button class="tab ${ui.keuTab === 'budget' ? 'on' : ''}" role="tab" data-action="keutab" data-v="budget">Budget</button></div>`;
    let body;
    if (ui.keuTab === 'budget') body = budgetHTML();
    else {
      const f = (v, l) => `<button class="tab ${ui.flt === v ? 'on' : ''}" data-action="flt" data-v="${v}">${l}</button>`;
      const mk = curMonth();
      const nMonth = state.tx.filter((t) => t.date.startsWith(mk)).length;
      body = `
      <div class="keu-bar">
        <div class="search">${icon('search', 18)}<input id="q" type="search" inputmode="search" placeholder="Cari transaksi..." value="${esc(ui.q)}" aria-label="Cari transaksi"><button data-action="sort" aria-label="Urutkan: ${ui.asc ? 'terlama' : 'terbaru'} dulu" title="${ui.asc ? 'Terlama dulu' : 'Terbaru dulu'}">${icon('list-filter', 18)}</button></div>
        <div class="tabs">${f('all', 'Semua')}${f('in', 'Pemasukan')}${f('out', 'Pengeluaran')}</div>
      </div>
      <div class="keu-cols">
        <div id="txlist" class="stack panel" style="gap:12px">${txListHTML()}</div>
        <aside class="keu-side panel">
          <h2 class="sec-t">Ringkasan ${monthLabel(mk)}</h2>
          <div class="ks-row"><span>Saldo saat ini</span><b>${rp(balance())}</b></div>
          <div class="ks-row"><span>Pemasukan</span><b class="in">${rp(sumType('in', mk))}</b></div>
          <div class="ks-row"><span>Pengeluaran</span><b class="out">${rp(sumType('out', mk))}</b></div>
          <div class="ks-row"><span>Jumlah transaksi</span><b>${nMonth}</b></div>
        </aside>
      </div>`;
    }
    return `<div class="stack ${ui.keuTab === 'transaksi' ? 'keu-transaksi' : ''}"><div class="keu-head"><div class="hdr"><h1>Keuangan</h1></div>${tabs}</div>${body}</div>`;
  };

  /* --- Statistik --- */
  views.statistik = () => {
    const mk = ui.statMonth;
    const g = byGroup(mk);
    const total = Object.values(g).reduce((a, b) => a + b, 0);
    const R = 69, C = 2 * Math.PI * R;
    let offset = 0;
    const segs = total ? GROUPS.filter((x) => g[x.id] > 0).map((x) => {
      const len = (g[x.id] / total) * C;
      const el = `<circle cx="82.5" cy="82.5" r="${R}" fill="none" stroke="${x.donut}" stroke-width="27" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-offset}"/>`;
      offset += len;
      return el;
    }).join('') : '';
    const legend = GROUPS.map((x) => `<div><i style="background:${x.donut}"></i><span>${x.label}</span><span>${total ? Math.round((g[x.id] / total) * 100) : 0}%</span></div>`).join('');

    const months = [shiftMonth(mk, -2), shiftMonth(mk, -1), mk];
    const data = months.map((m) => ({ m, i: sumType('in', m), o: sumType('out', m) }));
    const maxV = Math.max(...data.map((d) => Math.max(d.i, d.o)), 0);
    const nice = [5e5, 1e6, 2e6, 3e6, 4e6, 5e6, 1e7, 2e7, 5e7, 1e8, 5e8, 1e9];
    const ymax = nice.find((n) => n >= maxV) || Math.ceil(maxV / 1e9) * 1e9;
    const ticks = [1, 0.75, 0.5, 0.25, 0].map((f) => short(ymax * f));
    const h = (v) => Math.max(v > 0 ? 3 : 0, Math.round((v / ymax) * 112));

    const hasNext = mk < curMonth();
    return `
    <div class="stack">
      <div class="hdr"><h1>Statistik</h1></div>
      <div class="cols">
      <section class="card">
        <h2 class="sec-t">Pengeluaran per Kategori</h2>
        <div class="donut-row">
          <div class="donut">
            <svg viewBox="0 0 165 165" role="img" aria-label="Diagram pengeluaran per kategori"><circle cx="82.5" cy="82.5" r="${R}" fill="none" stroke="var(--track)" stroke-width="27"/><g transform="rotate(-90 82.5 82.5)">${segs}</g></svg>
            <div><small>Total</small><b>${rp(total)}</b></div>
          </div>
          <div class="legend">${legend}</div>
        </div>
      </section>
      <section class="card">
        <h2 class="sec-t">Pemasukan dan Pengeluaran</h2>
        <div class="cl"><div><i style="background:#36b67a"></i>Pemasukan</div><div><i style="background:#ffba3e"></i>Pengeluaran</div></div>
        <div class="chart" role="img" aria-label="Grafik pemasukan dan pengeluaran tiga bulan">
          <div class="axis">${ticks.map((t) => `<span>${t}</span>`).join('')}</div>
          ${data.map((d) => `<div class="mbars"><div class="bars"><i style="height:${h(d.i)}px;background:#36b67a"></i><i style="height:${h(d.o)}px;background:#ffba3e"></i></div><span>${monthShort(d.m)}</span></div>`).join('')}
        </div>
      </section>
      <section class="card stat-sum">
        <h2 class="sec-t">Ringkasan Bulanan</h2>
        <div class="msel"><span style="display:grid">${icon('calendar-days', 17)}</span><span>${monthLabel(mk)}</span>
          <button data-action="statprev" aria-label="Bulan sebelumnya">${icon('chevron-left', 14)}</button>
          <button data-action="statnext" aria-label="Bulan berikutnya" ${hasNext ? '' : 'disabled'}>${icon('chevron-right', 14)}</button></div>
        <div class="mtot"><span>Total Pemasukan</span><b>${rp(sumType('in', mk))}</b></div>
        <div class="mtot"><span>Total Pengeluaran</span><b>${rp(sumType('out', mk))}</b></div>
      </section>
      </div>
    </div>`;
  };

  /* --- Profil --- */
  const setRow = (ic, label, right, action, extra = '', cls = '', desc = '') =>
    `<button class="set ${cls}" data-action="${action}" ${extra}><span style="display:grid">${icon(ic, 20)}</span><span class="d"><b>${label}</b>${desc ? `<small class="sd">${desc}</small>` : ''}</span>${right ? `<span class="r">${right}</span>` : ''}<span class="chev">${icon('chevron-right', 15)}</span></button>`;

  views.profil = () => {
    const bal = balance(), mk = curMonth();
    return `
    <div class="stack">
      <div class="hdr"><h1>Profil</h1></div>
      <div class="cols pf-cols">
        <div class="stack pf-left">
          <div class="card pf-id">
            <div class="ident">${avatar()}<div><div class="nm">${esc(state.name)}</div><small>Mahasiswa</small></div></div>
            <button class="pf-edit" data-action="edit-name">${icon('user-round', 18)}Ubah Nama</button>
          </div>
        </div>
        <div class="stack pf-right">
          <div class="sumrow pf-sum">
            <div class="card"><small>Saldo Saat Ini</small><b><span style="color:var(--accent);display:grid">${icon('wallet', 18)}</span>${rp(bal)}</b></div>
            <div class="card"><small>Total Transaksi</small><b>${state.tx.length} Transaksi</b></div>
            <div class="card pf-x"><small>Pemasukan Bulan Ini</small><b>${rp(sumType('in', mk))}</b></div>
            <div class="card pf-x"><small>Pengeluaran Bulan Ini</small><b>${rp(sumType('out', mk))}</b></div>
          </div>
        </div>
      </div>
      <div class="pg-grid">
        <section class="pg-acc"><h2 class="grp-t">Akun</h2><div class="card pad12 grp">${setRow('user-round', 'Ubah Nama', '', 'edit-name')}</div></section>
        <section><h2 class="grp-t">Keuangan</h2><div class="card pad12 grp">${setRow('banknote', 'Mata Uang', 'Rupiah (Rp)', 'currency', '', '', 'Mata uang yang dipakai di seluruh aplikasi')}${setRow('bell', 'Pengaturan Notifikasi', '', 'nav', 'data-to="notifpref"', '', 'Pilih jenis notifikasi yang ingin kamu terima')}</div></section>
        <section><h2 class="grp-t">Aplikasi</h2><div class="card pad12 grp">${setRow('palette', 'Tema', themeName(), 'nav', 'data-to="tema"', '', 'Terang, gelap, atau ikuti sistem')}${setRow('languages', 'Bahasa', langName(), 'language', '', '', 'Bahasa tampilan aplikasi')}</div></section>
        <section><h2 class="grp-t">Data</h2><div class="card pad12 grp">${setRow('cloud', 'Akun & Sinkronisasi', session ? 'Terhubung' : 'Belum masuk', 'account', '', '', session ? esc(session.user.email) : 'Masuk agar data bisa dipakai di perangkat lain')}${setRow('cloud-upload', 'Backup Data', '', 'backup', '', '', 'Simpan salinan datamu ke perangkat')}${setRow('cloud-download', 'Pulihkan Data', '', 'restore', '', '', 'Pulihkan dari file backup (.json)')}${setRow('trash-2', 'Hapus Semua Data', '', 'wipe', '', 'danger', 'Hapus semua transaksi dan kembalikan pengaturan awal')}</div></section>
        <section><h2 class="grp-t">Tentang</h2><div class="card pad12 grp">${setRow('info', 'Tentang Aplikasi', 'Versi 1.0.0', 'about', '', '', 'Informasi tentang KantongKampus')}${isStandalone() ? '' : setRow('smartphone', 'Pasang Aplikasi', '', 'install', '', '', 'Tambahkan ke layar utama perangkatmu')}</div></section>
      </div>
    </div>`;
  };
  const themeName = () => (state.settings.followSystem ? 'Sistem' : state.settings.theme === 'dark' ? 'Gelap' : 'Terang');

  views.pengaturan = () => views.profil();

  /* --- Notifikasi (daftar) --- */
  views.notifikasi = () => {
    const feed = notifFeed();
    const seen = state.notifSeen;
    const unread = feed.filter((i) => !seen.includes(i.id)).length;
    const td = today(), yd = ymd(new Date(Date.now() - 864e5));
    const groups = [];
    feed.forEach((i) => {
      const label = i.date === td ? 'Hari ini' : i.date === yd ? 'Kemarin' : 'Sebelumnya';
      let g = groups.find((x) => x.label === label);
      if (!g) groups.push((g = { label, items: [] }));
      g.items.push(i);
    });
    const row = (i) => `
      <div class="np nf ${seen.includes(i.id) ? '' : 'unread'}"><span class="ci" style="background:${i.bg};color:${i.fg}">${icon(i.ic, 21)}</span><span class="d"><b>${i.title}</b><small>${i.sub}</small></span></div>`;
    const list = groups.map((g) => `<section class="nfg"><h2 class="nfg-t">${g.label}</h2><div class="nfg-list">${g.items.map(row).join('')}</div></section>`).join('');
    state.notifSeen = Array.from(new Set(seen.concat(feed.map((i) => i.id)))).slice(-200);
    save();
    const dl = state.settings.dailyBudget;
    const spentToday = state.tx.filter((t) => t.type === 'out' && t.date === td).reduce((a, t) => a + t.amount, 0);
    const side = `
      <aside class="nfside panel">
        <h2 class="grp-t">Ringkasan</h2>
        <div class="nfstat"><span>Belum dibaca</span><b>${unread}</b></div>
        <div class="nfstat"><span>Total notifikasi</span><b>${feed.length}</b></div>
        ${dl ? `<div class="nfstat"><span>Sisa budget harian</span><b>${rp(Math.max(0, dl - spentToday))}</b></div>` : ''}
      </aside>`;
    const empty = state.settings.notif.master ? 'Belum ada notifikasi.' : 'Notifikasi dimatikan. Aktifkan lewat Pengaturan → Notifikasi.';
    return `
    <div class="stack narrow nfwide">
      <div class="hdr back nfhdr"><button class="ib nfback" data-action="back" aria-label="Kembali">${icon('chevron-left', 20)}</button><h1>Notifikasi</h1></div>
      ${feed.length ? `<div class="nfcols"><div class="nflist">${list}</div>${side}</div>` : `<p class="muted" style="text-align:center;margin:40px 0">${empty}</p>`}
    </div>`;
  };

  /* --- Pengaturan Notifikasi --- */
  views.notifpref = () => {
    const n = state.settings.notif;
    const item = (k, ic, bg, fg, title, sub) =>
      `<div class="np"><span class="ci" style="background:${bg};color:${fg}">${icon(ic, 21)}</span><span class="d"><b>${title}</b><small>${sub}</small></span>${toggle(n[k] && n.master, k, title)}</div>`;
    return `
    <div class="stack narrow">
      ${backHdr('Pengaturan Notifikasi')}
      <div class="card"><div class="master"><b>Semua Notifikasi</b>${toggle(n.master, 'master', 'Semua Notifikasi')}</div></div>
      <div style="display:flex;flex-direction:column;gap:11px">
        ${item('in', 'circle-arrow-down', 'var(--soft)', 'var(--accent)', 'Transaksi Masuk', 'Notifikasi saat ada pemasukan')}
        ${item('out', 'circle-arrow-up', '#ffe7aa', '#e89a10', 'Transaksi Keluar', 'Notifikasi saat ada pengeluaran')}
        ${item('budget', 'wallet', '#ffe1e5', '#ef6571', 'Pengingat Budget', 'Saat budget hampir habis')}
        ${item('daily', 'bell', '#e3cff9', '#9252de', 'Pengingat Harian', 'Ingatkan untuk catat transaksi')}
      </div>
      ${'Notification' in window && Notification.permission === 'denied' ? '<p class="muted" style="font-size:12px;margin:0">Izin notifikasi diblokir di browser. Aktifkan lewat pengaturan situs agar pengingat bisa tampil.</p>' : ''}
    </div>`;
  };

  /* --- Tema --- */
  views.tema = () => {
    const s = state.settings;
    const dark = s.theme === 'dark';
    const prev = (cls, label, selected, check) => `
      <button class="tp ${cls} ${selected ? 'sel' : ''}" data-action="theme" data-v="${cls}" aria-pressed="${selected}">
        <span class="si"><span class="sh">${icon('wallet', 20)}${check ? icon('circle-check', 22) : ''}</span><span class="t1"></span><span class="t2"></span><span class="sc"><i></i><i></i></span></span>
        <b>${label}</b>
      </button>`;
    return `
    <div class="stack narrow">
      ${backHdr('Tema')}
      <div class="themes">${prev('light', 'Terang', !dark, !dark)}${prev('dark', 'Gelap', dark, dark)}</div>
      <section class="stack" style="gap:16px"><h2 class="lbl-t">Warna Aksen</h2>
        <div class="acc">${ACCENTS.map((c) => `<button style="background:${c}" data-action="accent" data-v="${c}" aria-label="Warna ${c}" aria-pressed="${s.accent === c}">${s.accent === c ? icon('check', 19) : ''}</button>`).join('')}</div>
      </section>
      <section class="stack" style="gap:12px"><h2 class="lbl-t">Tampilan</h2>
        <div class="card pad12 grp">
          <div class="set"><span style="display:grid">${icon('monitor', 20)}</span><span class="d"><b>Ikuti Tema Sistem</b><small>Sesuaikan dengan tema perangkat</small></span>${toggle(s.followSystem, 'follow', 'Ikuti Tema Sistem')}</div>
          <button class="set" data-action="font"><span style="display:grid">${icon('type', 20)}</span><span class="d"><b>Ukuran Font</b><small>${cap(s.fontSize)}</small></span><span class="chev">${icon('chevron-right', 15)}</span></button>
        </div>
      </section>
    </div>`;
  };

  /* --- Tambah transaksi --- */
  views.tambah = (arg) => {
    if (!ui.form || ui.form.type !== (arg === 'in' ? 'in' : 'out')) {
      ui.form = { type: arg === 'in' ? 'in' : 'out', amount: '', cat: null, date: today(), note: '' };
    }
    const f = ui.form;
    const c = f.cat ? CATS[f.cat] : null;
    return `
    <div class="stack narrow">
      <div class="hdr back"><button class="ib" data-action="back" aria-label="Kembali">${icon('chevron-left', 20)}</button><h1>Tambah Transaksi</h1>
        <button class="pill ${f.type}" data-action="switchtype" aria-label="Ganti jenis transaksi">${f.type === 'in' ? 'Pemasukan' : 'Pengeluaran'}</button></div>
      <div class="form">
        <div class="field"><b>Nominal</b><label class="input">${icon('banknote', 20)}<input id="f-amount" type="text" inputmode="numeric" autocomplete="off" placeholder="Masukkan nominal" value="${f.amount ? Number(f.amount).toLocaleString('id-ID') : ''}"></label></div>
        <div class="field"><b>Kategori</b><button class="input" data-action="pickcat" type="button">${c ? catIcon(f.cat) : icon('wallet', 20)}<span class="v ${c ? 'has' : ''}">${c ? esc(c.label) : 'Pilih kategori'}</span>${icon('chevron-right', 15)}</button></div>
        <div class="field"><b>Tanggal</b><label class="input">${icon('calendar-days', 20)}<span class="v has" id="f-datetxt">${fmtDateLong(f.date)}</span>${icon('chevron-right', 15)}<input id="f-date" type="date" value="${f.date}" max="${today()}" aria-label="Tanggal"></label></div>
        <div class="field"><b>Catatan (opsional)</b><label class="input">${icon('clipboard', 20)}<input id="f-note" type="text" maxlength="80" placeholder="Catat transaksi kamu" value="${esc(f.note)}"></label></div>
      </div>
      <div style="padding-top:10px"><button class="primary" data-action="save">Simpan Transaksi</button></div>
    </div>`;
  };

  /* --- Daftar notifikasi (diturunkan dari transaksi & budget) --- */
  function notifFeed() {
    const n = state.settings.notif;
    if (!n.master) return [];
    const list = [];
    sorted(state.tx).slice(0, 12).forEach((t) => {
      if (!n[t.type]) return;
      const c = CATS[t.cat] || CATS.lainnya;
      list.push({
        id: 'tx' + t.id, date: t.date, order: t.id, ic: t.type === 'in' ? 'circle-arrow-down' : 'circle-arrow-up',
        bg: t.type === 'in' ? 'var(--soft)' : '#ffe7aa', fg: t.type === 'in' ? 'var(--accent)' : '#e89a10',
        title: (t.type === 'in' ? 'Pemasukan ' : 'Pengeluaran ') + rp(t.amount),
        sub: esc(c.label) + (t.note ? ' · ' + esc(t.note) : '') + ' · ' + fmtDate(t.date)
      });
    });
    if (n.budget) {
      const s = state.settings, mk = curMonth(), td = today();
      const lvl = (spent, limit) => (!limit || !spent ? 0 : spent >= limit ? 2 : spent >= limit * 0.8 ? 1 : 0);
      const lm = lvl(sumType('out', mk), s.monthlyBudget);
      if (lm) list.push({ id: 'bm' + mk + lm, date: td, order: 1e9, ic: 'wallet', bg: '#ffe1e5', fg: '#ef6571',
        title: lm === 2 ? 'Budget bulan ini habis' : 'Budget bulan ini hampir habis',
        sub: 'Terpakai ' + rp(sumType('out', mk)) + ' dari ' + rp(s.monthlyBudget) });
      const ds = state.tx.filter((t) => t.type === 'out' && t.date === td).reduce((a, t) => a + t.amount, 0);
      const ld = lvl(ds, s.dailyBudget);
      if (ld) list.push({ id: 'bd' + td + ld, date: td, order: 1e9 + 1, ic: 'wallet', bg: '#ffe1e5', fg: '#ef6571',
        title: ld === 2 ? 'Budget harian habis' : 'Budget harian hampir habis',
        sub: 'Hari ini ' + rp(ds) + ' dari ' + rp(s.dailyBudget) });
    }
    return list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.order - a.order));
  }
  const hasUnread = () => notifFeed().some((i) => !state.notifSeen.includes(i.id));

  function backHdr(title) {
    return `<div class="hdr back"><button class="ib" data-action="back" aria-label="Kembali">${icon('chevron-left', 20)}</button><h1>${title}</h1></div>`;
  }

  /* =====================================================================
     Render & router
     ===================================================================== */
  const view = $('#view');
  const NAVLESS = ['notifikasi', 'notifpref', 'tema'];
  const NAVMAP = { home: 'home', keuangan: 'keuangan', tambah: 'keuangan', statistik: 'statistik', profil: 'profil', pengaturan: 'profil', notifikasi: 'notifikasi', notifpref: 'profil', tema: 'profil' };

  function route() {
    const [, name = 'home', arg] = location.hash.replace('#', '').split('/');
    return { name: views[name] ? name : 'home', arg };
  }
  const NAV_ORDER = ['home', 'keuangan', 'statistik', 'profil'];
  let lastNav = -1;
  const reduceMotion = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  // angka saldo "berhitung" naik saat membuka Home
  function countUp() {
    const el = $('.balance .big');
    if (!el || reduceMotion()) return;
    const txt = el.textContent;
    if (txt.indexOf('•') >= 0) return;
    const sign = /-/.test(txt) ? -1 : 1, n = Number(txt.replace(/\D/g, ''));
    if (!n) return;
    const t0 = performance.now(), D = 700;
    const step = (t) => {
      if (!el.isConnected) return;
      const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3);
      el.textContent = rp(sign * Math.round(n * (k >= 1 ? 1 : e)));
      if (k < 1) requestAnimationFrame(step);
    };
    el.textContent = rp(0);
    requestAnimationFrame(step);
  }
  function render(keep) {
    const { name, arg } = route();
    const top = view.scrollTop;
    view.classList.remove('enter');
    if (!keep) {
      // arah geser mengikuti urutan menu: ke kanan kalau menu berikutnya, ke kiri kalau sebelumnya
      const idx = NAV_ORDER.indexOf(NAVMAP[name] || name);
      const dir = lastNav >= 0 && idx >= 0 && idx !== lastNav ? (idx > lastNav ? 1 : -1) : 0;
      if (idx >= 0) lastNav = idx;
      view.style.setProperty('--dx', dir * 24 + 'px');
    }
    view.innerHTML = views[name](arg);
    if (!keep) { void view.offsetWidth; view.classList.add('enter'); }
    view.classList.toggle('no-nav', NAVLESS.includes(name));
    $('#nav').classList.toggle('hidden', NAVLESS.includes(name));
    $$('[data-nav]').forEach((b) => b.classList.toggle('on', NAVMAP[name] === b.dataset.nav));
    $$('[data-nav="notifikasi"]').forEach((b) => b.classList.toggle('has-dot', hasUnread()));
    view.scrollTop = keep ? top : 0;
    bind(name);
    if (!keep && name === 'home') countUp();
    document.title = 'KantongKampus';
  }
  function bind(name) {
    if (name === 'tambah') {
      const amt = $('#f-amount'), note = $('#f-note'), date = $('#f-date');
      amt.addEventListener('input', () => {
        const d = amt.value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 12);
        ui.form.amount = d;
        amt.value = d ? Number(d).toLocaleString('id-ID') : '';
      });
      note.addEventListener('input', () => { ui.form.note = note.value; });
      date.addEventListener('change', () => {
        if (date.value) { ui.form.date = date.value; $('#f-datetxt').textContent = fmtDateLong(date.value); }
      });
    }
    if (name === 'keuangan' && ui.keuTab === 'transaksi') {
      const q = $('#q');
      q.addEventListener('input', () => { ui.q = q.value; $('#txlist').innerHTML = txListHTML(); });
    }
    $$('[data-ic]').forEach((el) => { if (!el.firstChild) el.innerHTML = icon(el.dataset.ic, Number(el.dataset.size) || 20); });
  }
  window.addEventListener('hashchange', () => {
    const a = takeAuthHash();
    if (a) { handleAuthHash(a); return; }
    closeModal(); render();
  });

  const go = (to) => { location.hash = '#/' + to; };

  /* =====================================================================
     Modal & toast
     ===================================================================== */
  const modalRoot = $('#modal-root');
  function openModal(html, withClose) {
    modalRoot.innerHTML = `<div class="scrim" data-action="close"></div><div class="mwrap" role="dialog" aria-modal="true">${html}${withClose ? `<button class="xfab" data-action="close" aria-label="Tutup">${icon('x', 22)}</button>` : ''}</div>`;
    const f = $('input', modalRoot);
    if (f) setTimeout(() => f.focus(), 50);
  }
  function closeModal() { if (modalCtx && (modalCtx.welcome || modalCtx.lock)) return; stopCam(); modalRoot.innerHTML = ''; modalCtx = null; }
  function welcomeModal() {
    modalCtx = { welcome: true };
    modalRoot.innerHTML = `<div class="scrim"></div><div class="mwrap" role="dialog" aria-modal="true"><form class="mcard" id="wf"><h2>Selamat datang!</h2><p>Siapa namamu? Nama ini akan tampil di halaman utama.</p>
      <label class="input"><input id="wv" type="text" maxlength="24" autocomplete="off" placeholder="Masukkan namamu"></label>
      <button type="submit" class="primary">Mulai</button><button type="button" class="ghost" data-action="welcome-login">Sudah punya akun? Masuk</button></form></div>`;
    setTimeout(() => { const f = $('#wv'); if (f) f.focus(); }, 50);
    $('#wf').addEventListener('submit', (e) => {
      e.preventDefault();
      const v = $('#wv').value.trim();
      if (!v) { toast('Isi dulu ya'); return; }
      state.name = v.slice(0, 24); state.named = true; save();
      modalCtx = null; modalRoot.innerHTML = ''; render(true);
    });
  }
  const askName = () => { if (!state.named && !modalRoot.firstChild) welcomeModal(); };
  /* --- Foto profil --- */
  let camStream = null;
  function stopCam() { if (camStream) { camStream.getTracks().forEach((t) => t.stop()); camStream = null; } }
  function squareData(src, w, h, mirror) {
    const S = 256, c = document.createElement('canvas');
    c.width = c.height = S;
    const x = c.getContext('2d'), m = Math.min(w, h);
    if (mirror) { x.translate(S, 0); x.scale(-1, 1); }
    x.drawImage(src, (w - m) / 2, (h - m) / 2, m, m, 0, 0, S, S);
    return c.toDataURL('image/jpeg', 0.85);
  }
  async function fileToAvatar(file) {
    let src;
    try { src = await createImageBitmap(file, { imageOrientation: 'from-image' }); }
    catch (e) { src = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(file); }); }
    return squareData(src, src.width || src.naturalWidth, src.height || src.naturalHeight, false);
  }
  function setAvatar(a, msg) {
    state.avatar = a; save(); closeModal(); render(true); toast(msg);
  }
  async function useFile(file) {
    if (!file || !/^image\//.test(file.type)) { toast('Pilih file gambar ya'); return; }
    try { setAvatar({ type: 'photo', data: await fileToAvatar(file) }, 'Foto profil diperbarui'); }
    catch (e) { toast('Gambar tidak bisa dibuka'); }
  }
  function avatarModal() {
    const a = state.avatar || {};
    openModal(`<div class="mcard avmodal"><h2>Ubah Foto Profil</h2>
      <div><div class="av-t">Pilih Avatar</div><div class="av-grid">${AVATARS.map((p) => `<button class="av-opt ${a.type !== 'photo' && (a.id || 'a1') === p.id ? 'sel' : ''}" data-action="avpick" data-id="${p.id}" aria-label="Avatar ${p.id.slice(1)}">${avatarSVG(p)}</button>`).join('')}</div></div>
      <div class="av-acts"><button class="av-act" data-action="avcam">${icon('camera', 20)}Ambil Foto</button><button class="av-act" data-action="avfile">${icon('image', 20)}Pilih dari Album</button></div>
      <input id="av-file" type="file" accept="image/*" hidden>
      ${a.type === 'photo' ? '<button class="ghost" data-action="avreset">Hapus Foto</button>' : ''}
      <button class="ghost" data-action="close">Tutup</button></div>`);
  }
  async function cameraModal() {
    const fallback = () => { const i = document.createElement('input'); i.type = 'file'; i.accept = 'image/*'; i.setAttribute('capture', 'user'); i.onchange = () => useFile(i.files[0]); i.click(); };
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { fallback(); return; }
    try { camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 720 } }, audio: false }); }
    catch (e) { toast('Kamera tidak bisa diakses'); fallback(); return; }
    openModal(`<div class="mcard avmodal"><h2>Ambil Foto</h2><video id="cam" class="camv" autoplay playsinline muted></video>
      <div class="btn-row"><button class="ghost" data-action="avback">Batal</button><button class="primary" data-action="avshot">Ambil</button></div></div>`);
    $('#cam').srcObject = camStream;
  }
  modalRoot.addEventListener('change', (e) => { if (e.target.id === 'av-file') useFile(e.target.files[0]); });

  let modalCtx = null;
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
  }

  function promptModal({ title, value = '', type = 'text', placeholder = '', hint = '', onSave }) {
    modalCtx = { onSave, type };
    openModal(`<form class="mcard" id="pf"><h2>${title}</h2>${hint ? `<p>${hint}</p>` : ''}
      <label class="input"><input id="pv" type="text" ${type === 'number' ? 'inputmode="numeric"' : ''} autocomplete="off" placeholder="${esc(placeholder)}" value="${esc(value)}"></label>
      <div class="btn-row"><button type="button" class="ghost" data-action="close">Batal</button><button type="submit" class="primary">Simpan</button></div></form>`);
    $('#pf').addEventListener('submit', (e) => {
      e.preventDefault();
      let v = $('#pv').value.trim();
      if (type === 'number') v = v.replace(/\D/g, '');
      if (!v) { toast('Isi dulu ya'); return; }
      const cb = modalCtx.onSave;
      closeModal();
      cb(type === 'number' ? Number(v) : v);
    });
  }
  function confirmModal({ title, text, label, danger, onYes }) {
    modalCtx = { onYes };
    openModal(`<div class="mcard"><h2>${title}</h2><p>${text}</p>
      <div class="btn-row"><button class="ghost" data-action="close">Batal</button><button class="${danger ? 'danger-btn' : 'primary'}" data-action="yes">${label}</button></div></div>`);
  }

  /* =====================================================================
     Notifikasi lokal
     ===================================================================== */
  function notify(title, body) {
    title = tr(title); body = tr(body);
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (!('serviceWorker' in navigator)) { try { new Notification(title, { body, icon: 'icons/icon-192.png' }); } catch (e) { /* abaikan */ } return; }
    navigator.serviceWorker.ready.then((r) => r.showNotification(title, { body, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'kk' })).catch(() => {});
  }
  function askPermission() {
    if ('Notification' in window && Notification.permission === 'default') Notification.requestPermission().then(() => render(true));
  }
  function dailyReminder() {
    const n = state.settings.notif;
    if (!n.master || !n.daily) return;
    const now = new Date();
    if (now.getHours() < 19 || state.lastDaily === today()) return;
    if (state.tx.some((t) => t.date === today())) return;
    state.lastDaily = today();
    save();
    toast('Jangan lupa catat transaksi hari ini ya!');
    notify('KantongKampus', 'Jangan lupa catat transaksi hari ini ya!');
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) dailyReminder(); });

  /* =====================================================================
     Bahasa (Indonesia / English)
     ===================================================================== */
  const EN = {
    'Home': 'Home', 'Keuangan': 'Finance', 'Statistik': 'Statistics', 'Notifikasi': 'Notifications', 'Profil': 'Profile',
    'Tambah Transaksi': 'Add Transaction', 'Tambah': 'Add',
    'Yuk, kelola keuanganmu dengan bijak!': 'Let’s manage your money wisely!',
    'Saldo Saat Ini': 'Current Balance', 'Saldo saat ini': 'Current balance',
    'Pemasukan': 'Income', 'Pengeluaran': 'Expenses', 'Pemasukan bulan ini': 'Income this month', 'Pengeluaran bulan ini': 'Expenses this month',
    'Pemasukan Bulan Ini': 'Income This Month', 'Pengeluaran Bulan Ini': 'Expenses This Month',
    'Pengeluaran hari ini': 'Spent today', 'Pengeluaran Hari Ini': 'Spent Today', 'Sisa budget hari ini': 'Budget left today', 'Sisa Budget Hari Ini': 'Budget Left Today',
    'Transaksi Terbaru': 'Recent Transactions', 'Lihat Semua': 'See All', 'Lihat Semua ›': 'See All ›', 'Lihat Semua ›': 'See All ›',
    'Belum ada transaksi': 'No transactions yet', 'Belum ada transaksi.': 'No transactions yet.',
    'Transaksi': 'Transactions', 'Budget': 'Budget', 'Cari transaksi...': 'Search transactions...', 'Cari transaksi': 'Search transactions',
    'Semua': 'All', 'Kategori': 'Category', 'Tanggal': 'Date', 'Jumlah': 'Amount', 'Nominal': 'Amount', 'Jenis': 'Type', 'Catatan': 'Note',
    'Jumlah transaksi': 'Number of transactions', 'Tidak ada transaksi yang cocok.': 'No matching transactions.',
    'Budget Bulanan': 'Monthly Budget', 'Budget Harian': 'Daily Budget', 'Terpakai': 'Used', 'Sisa': 'Left', 'Lebih': 'Over', 'Ubah': 'Edit', 'Ubah Budget': 'Edit Budget',
    'Pengeluaran per Kategori': 'Spending by Category', 'Belum ada pengeluaran bulan ini.': 'No expenses this month.',
    'Total': 'Total', 'Pemasukan dan Pengeluaran': 'Income and Expenses', 'Ringkasan Bulanan': 'Monthly Summary',
    'Total Pemasukan': 'Total Income', 'Total Pengeluaran': 'Total Expenses', 'Total Transaksi': 'Total Transactions',
    'Mahasiswa': 'Student', 'Ubah Nama': 'Edit Name', 'Nama kamu': 'Your name', 'Nama diperbarui': 'Name updated',
    'Akun': 'Account', 'Mata Uang': 'Currency', 'Pengaturan Notifikasi': 'Notification Settings', 'Pengaturan': 'Settings',
    'Aplikasi': 'App', 'Tema': 'Theme', 'Bahasa': 'Language', 'Data': 'Data', 'Backup Data': 'Back Up Data', 'Hapus Semua Data': 'Delete All Data',
    'Tentang': 'About', 'Tentang Aplikasi': 'About the App', 'Versi 1.0.0': 'Version 1.0.0',
    'Pasang Aplikasi': 'Install App', 'Cara Memasang': 'How to Install', 'Sistem': 'System', 'Gelap': 'Dark', 'Terang': 'Light', 'Rupiah (Rp)': 'Rupiah (Rp)',
    'Hari ini': 'Today', 'Kemarin': 'Yesterday', 'Sebelumnya': 'Earlier', 'Ringkasan': 'Summary', 'Belum dibaca': 'Unread',
    'Total notifikasi': 'Total notifications', 'Sisa budget harian': 'Daily budget left', 'Belum ada notifikasi.': 'No notifications yet.',
    'Budget bulan ini habis': 'Monthly budget used up', 'Budget bulan ini hampir habis': 'Monthly budget almost used up',
    'Budget harian habis': 'Daily budget used up', 'Budget harian hampir habis': 'Daily budget almost used up', 'Budget hampir habis': 'Budget almost used up',
    'Semua Notifikasi': 'All Notifications', 'Transaksi Masuk': 'Incoming Transactions', 'Transaksi Keluar': 'Outgoing Transactions',
    'Pengingat Budget': 'Budget Alerts', 'Pengingat Harian': 'Daily Reminder',
    'Warna Aksen': 'Accent Color', 'Tampilan': 'Appearance', 'Ikuti Tema Sistem': 'Follow System Theme', 'Sesuaikan dengan tema perangkat': 'Match your device theme',
    'Ukuran Font': 'Font Size', 'Kecil': 'Small', 'Normal': 'Normal', 'Besar': 'Large',
    'Masukkan nominal': 'Enter amount', 'Pilih kategori': 'Choose category', 'Pilih Kategori': 'Choose Category', 'Catatan (opsional)': 'Note (optional)',
    'Catat transaksi kamu': 'Record your transaction', 'Simpan Transaksi': 'Save Transaction', 'Kembali': 'Back',
    'Pasang KantongKampus': 'Install KantongKampus', 'Buka dari layar utama dan tetap bisa dipakai tanpa internet.': 'Open from your home screen and use it without internet.',
    'Selamat datang!': 'Welcome!', 'Siapa namamu? Nama ini akan tampil di halaman utama.': 'What\u2019s your name? It will be shown on the home screen.', 'Masukkan namamu': 'Enter your name', 'Mulai': 'Start',
    'Halo!': 'Hello!',
    'Akun & Sinkronisasi': 'Account & Sync', 'Belum masuk': 'Not signed in', 'Terhubung': 'Connected', 'Masuk': 'Sign In', 'Daftar': 'Sign Up', 'Buat Akun': 'Create Account', 'Keluar': 'Sign Out',
    'Sinkronkan Sekarang': 'Sync Now', 'Email': 'Email', 'Kata sandi': 'Password', 'Memproses...': 'Processing...',
    'Daftar agar datamu tersimpan di akun dan bisa dipakai di perangkat lain.': 'Sign up to keep your data in your account and use it on other devices.',
    'Masuk untuk menyinkronkan datamu.': 'Sign in to sync your data.', 'Masuk agar data bisa dipakai di perangkat lain': 'Sign in to use your data on other devices',
    'Datamu tersimpan di akun ini dan otomatis tersinkron ke perangkat lain yang masuk dengan akun yang sama.': 'Your data is saved to this account and syncs automatically to other devices signed in with the same account.',
    'Menyinkronkan...': 'Syncing...', 'Tersinkron': 'Synced', 'Menunggu koneksi': 'Waiting for connection', 'Gagal menyinkronkan': 'Sync failed', 'Menunggu sinkronisasi': 'Waiting to sync',
    'Format email belum benar': 'Invalid email format', 'Kata sandi minimal 6 karakter': 'Password must be at least 6 characters', 'Email atau kata sandi salah': 'Incorrect email or password',
    'Email sudah terdaftar, silakan masuk': 'Email already registered, please sign in', 'Kata sandi terlalu lemah': 'Password is too weak', 'Email belum diverifikasi. Cek kotak masukmu.': 'Email not verified. Check your inbox.',
    'Terlalu banyak percobaan, coba lagi nanti': 'Too many attempts, try again later', 'Tidak ada koneksi internet': 'No internet connection', 'Terjadi kesalahan, coba lagi': 'Something went wrong, try again',
    'Cek email kamu untuk verifikasi, lalu masuk.': 'Check your email to verify, then sign in.',
    'Berhasil masuk': 'Signed in', 'Berhasil keluar': 'Signed out', 'Data akun dimuat': 'Account data loaded', 'Data tersimpan di akun': 'Data saved to your account',
    'Sesi berakhir, silakan masuk lagi': 'Session expired, please sign in again', 'Sinkronisasi selesai': 'Sync complete',
    'Data sudah ada di akun': 'Data already in account', 'Akun ini sudah punya data. Pilih data yang mau dipakai.': 'This account already has data. Choose which data to use.',
    'Data yang tidak dipilih akan diganti.': 'The data you don\u2019t choose will be replaced.', 'Pakai data akun': 'Use account data', 'Pakai data perangkat ini': 'Use this device\u2019s data',
    'Sudah punya akun? Masuk': 'Already have an account? Sign in',
    'Semua transaksi dan pengaturan akan dihapus permanen dari perangkat ini dan dari akunmu.': 'All transactions and settings will be permanently deleted from this device and from your account.',
    'Lupa kata sandi?': 'Forgot password?', 'Lupa Kata Sandi': 'Forgot Password', 'Kirim Link Reset': 'Send Reset Link',
    'Masukkan emailmu. Kami akan mengirim link untuk membuat kata sandi baru.': 'Enter your email. We\u2019ll send a link to create a new password.',
    'Link reset sudah dikirim. Cek kotak masuk dan folder spam.': 'Reset link sent. Check your inbox and spam folder.',
    'Buat Kata Sandi Baru': 'Create New Password', 'Masukkan kata sandi baru untuk akunmu.': 'Enter a new password for your account.',
    'Kata sandi baru': 'New password', 'Ulangi kata sandi baru': 'Repeat new password', 'Simpan Kata Sandi': 'Save Password',
    'Kata sandi tidak sama': 'Passwords do not match', 'Kata sandi diperbarui': 'Password updated', 'Link sudah kedaluwarsa, silakan minta lagi': 'Link expired, please request a new one',
    'Kata sandi baru harus berbeda dari yang lama': 'New password must be different from the old one',
    'Pulihkan Data': 'Restore Data', 'Pulihkan dari file backup (.json)': 'Restore from a backup file (.json)', 'Pulihkan Data?': 'Restore Data?', 'Pulihkan': 'Restore',
    'Data berhasil dipulihkan': 'Data restored', 'File backup tidak valid': 'Invalid backup file',
    'Pasang': 'Install', 'Tutup': 'Close', 'Mengerti': 'Got it', 'Batal': 'Cancel', 'Simpan': 'Save', 'Hapus': 'Delete', 'Ambil': 'Capture',
    'Ubah Foto Profil': 'Change Profile Photo', 'Pilih Avatar': 'Choose Avatar', 'Ambil Foto': 'Take Photo', 'Pilih dari Album': 'Choose from Album', 'Hapus Foto': 'Remove Photo',
    'Avatar diperbarui': 'Avatar updated', 'Foto profil diperbarui': 'Profile photo updated', 'Foto dihapus': 'Photo removed',
    'Kamera tidak bisa diakses': 'Cannot access camera', 'Kamera belum siap': 'Camera not ready', 'Pilih file gambar ya': 'Please choose an image file', 'Gambar tidak bisa dibuka': 'Cannot open image',
    'Semua data dihapus': 'All data deleted', 'Isi dulu ya': 'Please fill this in', 'Masukkan nominal dulu ya': 'Enter an amount first', 'Pilih kategori dulu ya': 'Choose a category first',
    'Transaksi disimpan': 'Transaction saved', 'Transaksi dihapus': 'Transaction deleted', 'Backup diunduh': 'Backup downloaded', 'Gagal membuat backup': 'Failed to create backup',
    'Budget bulanan diperbarui': 'Monthly budget updated', 'Budget harian diperbarui': 'Daily budget updated',
    'Urutan: terlama dulu': 'Order: oldest first', 'Urutan: terbaru dulu': 'Order: newest first', 'Terlama dulu': 'Oldest first', 'Terbaru dulu': 'Newest first',
    'Saat ini hanya mendukung Rupiah (Rp)': 'Only Rupiah (Rp) is supported for now',
    'Jangan lupa catat transaksi hari ini ya!': 'Don’t forget to record today’s transactions!',
    'KantongKampus terpasang': 'KantongKampus installed',
    'Pemasukan dicatat': 'Income recorded', 'Pengeluaran dicatat': 'Expense recorded',
    'Catat uang yang kamu terima': 'Record money you received', 'Catat uang yang kamu keluarkan': 'Record money you spent',
    'Hapus Semua Data?': 'Delete All Data?', 'Semua transaksi dan pengaturan akan dihapus permanen dari perangkat ini.': 'All transactions and settings will be permanently deleted from this device.',
    'Catat dan kelola keuangan mahasiswa. Data tersimpan di perangkat ini dan bisa dipakai tanpa internet.': 'Record and manage student finances. Data is stored on this device and works offline.',
    'Batas pengeluaran per bulan (Rp).': 'Monthly spending limit (Rp).', 'Batas pengeluaran per hari (Rp).': 'Daily spending limit (Rp).',
    'Contoh: 1500000': 'Example: 1500000', 'Contoh: 50000': 'Example: 50000',
    'Bahasa tampilan aplikasi': 'App display language', 'Pilih bahasa tampilan aplikasi.': 'Choose the app display language.',
    'Terang, gelap, atau ikuti sistem': 'Light, dark, or follow system',
    'Buka halaman ini di Safari.': 'Open this page in Safari.', 'Ketuk tombol Bagikan (kotak dengan panah ke atas).': 'Tap the Share button (box with an up arrow).',
    'Pilih "Tambahkan ke Layar Utama", lalu ketuk Tambah.': 'Choose "Add to Home Screen", then tap Add.',
    'Buka menu browser (titik tiga di pojok kanan atas).': 'Open the browser menu (three dots at the top right).',
    'Pilih "Instal aplikasi" atau "Tambahkan ke layar utama".': 'Choose "Install app" or "Add to home screen".',
    'Konfirmasi, lalu buka KantongKampus dari layar utama.': 'Confirm, then open KantongKampus from your home screen.',
    'Buka sidebar': 'Open sidebar', 'Tutup sidebar': 'Close sidebar', 'Menu samping': 'Side menu', 'Navigasi utama': 'Main navigation',
    'Bulan berikutnya': 'Next month', 'Bulan sebelumnya': 'Previous month', 'Saldo': 'Balance', 'Sembunyikan saldo': 'Hide balance', 'Tambah transaksi': 'Add transaction',
    'Ubah foto profil': 'Change profile photo', 'Urutkan: terbaru dulu': 'Sort: newest first', 'Urutkan: terlama dulu': 'Sort: oldest first', 'Ganti jenis transaksi': 'Switch transaction type',
    'Diagram pengeluaran per kategori': 'Spending by category chart', 'Grafik pemasukan dan pengeluaran tiga bulan': 'Three-month income and expenses chart',
    'Hapus semua transaksi dan kembalikan pengaturan awal': 'Delete all transactions and reset settings', 'Informasi tentang KantongKampus': 'Information about KantongKampus',
    'Ingatkan untuk catat transaksi': 'Remind you to record transactions', 'Izin notifikasi diblokir di browser. Aktifkan lewat pengaturan situs agar pengingat bisa tampil.': 'Notification permission is blocked in the browser. Enable it in site settings so reminders can appear.',
    'Mata uang yang dipakai di seluruh aplikasi': 'Currency used throughout the app', 'Notifikasi saat ada pemasukan': 'Notify when income is recorded', 'Notifikasi saat ada pengeluaran': 'Notify when an expense is recorded',
    'Pilih jenis notifikasi yang ingin kamu terima': 'Choose which notifications you want to receive', 'Saat budget hampir habis': 'When your budget is almost used up',
    'Simpan salinan datamu ke perangkat': 'Save a copy of your data to your device', 'Tambahkan ke layar utama perangkatmu': 'Add to your device home screen',
    'Makan': 'Food', 'Transportasi': 'Transport', 'Pendidikan': 'Education', 'Nongkrong': 'Hangout', 'Lainnya': 'Other',
    'Beasiswa': 'Scholarship', 'Kiriman Orang Tua': 'Parental Allowance', 'Pemasukan Lain': 'Other Income'
  };
  const MONEN = { Januari: 'January', Februari: 'February', Maret: 'March', Mei: 'May', Juni: 'June', Juli: 'July', Agustus: 'August', Oktober: 'October', Desember: 'December', Agu: 'Aug', Okt: 'Oct', Des: 'Dec' };
  const RULES = [
    [/^Halo, ([\s\S]+)!$/, 'Hello, $1!'],
    [/^File backup berisi (\d+) transaksi\. Data saat ini akan diganti\.( Data di akunmu ikut diperbarui\.)?$/, (m) => `The backup file contains ${m[1]} transactions. Current data will be replaced.${m[2] ? ' Your account data will be updated too.' : ''}`],
    [/^(\d+) Transaksi$/, (m) => `${m[1]} ${m[1] === '1' ? 'Transaction' : 'Transactions'}`],
    [/^Ringkasan ([\s\S]+)$/, 'Summary $1'],
    [/^Pemasukan (Rp [\d.,]+)$/, 'Income $1'],
    [/^Pengeluaran (Rp [\d.,]+)$/, 'Expense $1'],
    [/^Terpakai (Rp [\d.,]+) dari (Rp [\d.,]+)$/, 'Used $1 of $2'],
    [/^Hari ini (Rp [\d.,]+) dari (Rp [\d.,]+)$/, 'Today $1 of $2'],
    [/^Terpakai (\d+)% dari budget bulan ini\.$/, 'Used $1% of this month’s budget.'],
    [/^(Rp [\d.,]+) dari (Rp [\d.,]+)$/, '$1 of $2'],
    [/^Warna (#\w+)$/, 'Color $1'],
    [/^Notifikasi dimatikan/, 'Notifications are turned off. Turn on “All Notifications” to receive them.']
  ];
  const MONRE = new RegExp('\\b(' + Object.keys(MONEN).join('|') + ')\\b', 'g');
  const tr = (s) => {
    if (lang !== 'en' || !s) return s;
    const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s);
    const core = m[2];
    if (!core) return s;
    let out = Object.prototype.hasOwnProperty.call(EN, core) ? EN[core] : null;
    if (out == null) {
      for (const [re, rep] of RULES) {
        if (re.test(core)) { out = typeof rep === 'function' ? core.replace(re, (...a) => rep(a)) : core.replace(re, rep); break; }
      }
    }
    if (out == null && core.indexOf(' \u00B7 ') > 0) out = core.split(' \u00B7 ').map((x) => (Object.prototype.hasOwnProperty.call(EN, x) ? EN[x] : x)).join(' \u00B7 ');
    if (out == null) out = core;
    out = out.replace(MONRE, (w) => MONEN[w])
      .replace(/\b\d{1,3}(?:\.\d{3})+\b/g, (n) => n.replace(/\./g, ','))
      .replace(/(\d+),(\d)\s?jt\b/g, '$1.$2M').replace(/(\d+)\s?jt\b/g, '$1M').replace(/(\d+)\s?rb\b/g, '$1K');
    return m[1] + out + m[3];
  };
  const LANGS = [['id', 'Bahasa Indonesia', 'Indonesia'], ['en', 'English', 'English']];
  const langName = () => (LANGS.find((l) => l[0] === lang) || LANGS[0])[2];
  const TR_ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  const textRec = new WeakMap(), attrRec = new WeakMap();
  const skipNode = (el) => !el || (el.closest && el.closest('[data-nt],.nt,script,style'));
  function trText(n) {
    if (skipNode(n.parentNode)) return;
    let r = textRec.get(n);
    if (r && n.data !== r.t) r = null;
    const orig = r ? r.o : n.data, target = tr(orig);
    if (target !== n.data) n.data = target;
    if (target !== orig) textRec.set(n, { o: orig, t: target }); else textRec.delete(n);
  }
  function trAttrs(el) {
    if (skipNode(el)) return;
    let rec = attrRec.get(el);
    if (!rec) { rec = {}; attrRec.set(el, rec); }
    TR_ATTRS.forEach((a) => {
      if (!el.hasAttribute(a)) return;
      const cur = el.getAttribute(a), r = rec[a];
      const orig = r && cur === r.t ? r.o : cur, target = tr(orig);
      if (target !== cur) el.setAttribute(a, target);
      if (target !== orig) rec[a] = { o: orig, t: target }; else delete rec[a];
    });
  }
  function trTree(root) {
    if (root.nodeType === 3) { trText(root); return; }
    if (root.nodeType !== 1) return;
    trAttrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) trText(n); else trAttrs(n); }
  }
  let trObs = null;
  function applyLang() {
    document.documentElement.lang = lang;
    trTree(document.body);
    if (document.title) document.title = lang === 'en' ? 'KantongKampus' : document.title;
    if (!trObs && window.MutationObserver) {
      trObs = new MutationObserver((list) => {
        for (const m of list) {
          if (m.type === 'childList') m.addedNodes.forEach(trTree);
          else if (m.type === 'characterData') trText(m.target);
          else if (m.type === 'attributes') trAttrs(m.target);
        }
      });
      trObs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: TR_ATTRS });
    }
  }
  function setLang(l) {
    lang = l;
    state.settings.lang = l;
    save();
    applyLang();
    render(true);
  }
  function languageModal() {
    openModal(`<div class="mcard"><h2>Bahasa</h2><p>Pilih bahasa tampilan aplikasi.</p>
      <div class="langlist">${LANGS.map((l) => `<button data-action="setlang" data-v="${l[0]}" class="${lang === l[0] ? 'sel' : ''}" data-nt><b>${l[1]}</b><span class="lchk">${lang === l[0] ? icon('check', 18) : ''}</span></button>`).join('')}</div>
      <button class="ghost" data-action="close">Tutup</button></div>`);
  }

  /* =====================================================================
     Akun & sinkronisasi (Supabase) — data tetap disimpan lokal dulu
     ===================================================================== */
  const SB_URL = 'https://olzchxfmbmgfpgrzvqdd.supabase.co';
  const SB_KEY = 'sb_publishable_jR4sBFjO5n8_4h5NbBxsWg_Ku3LzmW-';
  const AUTH_KEY = 'kk:auth';
  let session = null, syncState = 'idle', syncBusy = false, syncTimer = null, lastPull = 0, authMode = 'login', authEmail = '';
  try { session = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null'); } catch (e) { session = null; }
  const saveSession = () => { try { if (session) localStorage.setItem(AUTH_KEY, JSON.stringify(session)); else localStorage.removeItem(AUTH_KEY); } catch (e) { /* abaikan */ } };
  const isDirty = () => (state.updatedAt || 0) > (state.syncedAt || 0);
  const snapshot = () => { const s = JSON.parse(JSON.stringify(state)); delete s.syncedAt; return s; };
  const mergeState = (s) => {
    const d = defaults();
    const st = Object.assign(d, s, { settings: Object.assign(d.settings, s.settings || {}, { notif: Object.assign(d.settings.notif, (s.settings || {}).notif || {}) }) });
    if (s.named === undefined || st.name) st.named = true;
    return st;
  };
  async function sb(path, opt = {}) {
    const headers = Object.assign({ apikey: SB_KEY, 'Content-Type': 'application/json' }, opt.token ? { Authorization: 'Bearer ' + opt.token } : {}, opt.headers || {});
    const res = await fetch(SB_URL + path, { method: opt.method || 'GET', headers, body: opt.body ? JSON.stringify(opt.body) : undefined });
    let json = null;
    try { json = await res.json(); } catch (e) { /* kosong */ }
    if (!res.ok) {
      const err = new Error((json && (json.msg || json.message || json.error_description || json.error)) || ('HTTP ' + res.status));
      err.status = res.status; err.code = json && (json.error_code || json.code);
      throw err;
    }
    return json;
  }
  function setSession(r) {
    session = { access_token: r.access_token, refresh_token: r.refresh_token, expires_at: r.expires_at || (Math.floor(Date.now() / 1000) + (r.expires_in || 3600)), user: { id: r.user.id, email: r.user.email } };
    saveSession();
  }
  async function ensureToken() {
    if (!session) throw Object.assign(new Error('no session'), { authFail: true });
    if (session.expires_at - Math.floor(Date.now() / 1000) > 60) return session.access_token;
    try {
      const r = await sb('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: session.refresh_token } });
      setSession(r);
      return session.access_token;
    } catch (e) {
      if (e.status >= 400 && e.status < 500) e.authFail = true;
      throw e;
    }
  }
  async function pull() {
    const t = await ensureToken();
    const r = await sb(`/rest/v1/user_data?select=data,updated_at&user_id=eq.${session.user.id}`, { token: t });
    return (r && r[0]) || null;
  }
  async function push(snap) {
    const t = await ensureToken();
    await sb('/rest/v1/user_data?on_conflict=user_id', { method: 'POST', token: t, headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, body: { user_id: session.user.id, data: snap, updated_at: new Date().toISOString() } });
  }
  const syncText = () => {
    if (!session) return 'Belum masuk';
    if (syncState === 'syncing') return 'Menyinkronkan...';
    if (syncState === 'offline') return 'Menunggu koneksi';
    if (syncState === 'error') return 'Gagal menyinkronkan';
    return isDirty() ? 'Menunggu sinkronisasi' : 'Tersinkron';
  };
  function setSync(s) { syncState = s; $$('[data-sync]').forEach((el) => { el.textContent = syncText(); }); }
  function onSyncError(e) {
    if (e && e.authFail) { session = null; saveSession(); setSync('idle'); toast('Sesi berakhir, silakan masuk lagi'); render(true); return; }
    setSync(e instanceof TypeError || !navigator.onLine ? 'offline' : 'error');
  }
  function applyRemote(data) {
    state = mergeState(data);
    state.syncedAt = state.updatedAt || 0;
    persist();
    lang = state.settings.lang === 'en' ? 'en' : 'id';
    ui.open = null; ui.q = ''; ui.flt = 'all'; ui.form = null; ui.statMonth = curMonth();
    applyTheme(); applyLang(); render();
  }
  function scheduleSync() {
    if (!session) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(flush, 1500);
    setSync(syncState === 'syncing' ? 'syncing' : 'idle');
  }
  async function flush() {
    if (!session || syncBusy || !isDirty()) return;
    if (!navigator.onLine) { setSync('offline'); return; }
    syncBusy = true; setSync('syncing');
    const snap = snapshot(), stamp = state.updatedAt;
    try { await push(snap); state.syncedAt = stamp; persist(); setSync('ok'); }
    catch (e) { onSyncError(e); }
    finally { syncBusy = false; if (session && isDirty() && syncState === 'ok') scheduleSync(); }
  }
  // sinkron dua arah: yang terakhir diubah menang
  async function syncNow(manual) {
    if (!session || syncBusy) return;
    if (!navigator.onLine) { setSync('offline'); if (manual) toast('Tidak ada koneksi internet'); return; }
    syncBusy = true; setSync('syncing'); lastPull = Date.now();
    try {
      const remote = await pull();
      const ru = remote ? Number((remote.data || {}).updatedAt || 0) : 0, lu = state.updatedAt || 0;
      if (!remote || lu > ru) { const snap = snapshot(), stamp = state.updatedAt; await push(snap); state.syncedAt = stamp; persist(); }
      else if (ru > lu) applyRemote(remote.data);
      else { state.syncedAt = lu; persist(); }
      setSync('ok');
      if (manual) toast('Sinkronisasi selesai');
    } catch (e) { onSyncError(e); if (manual && session) toast('Gagal menyinkronkan'); }
    finally { syncBusy = false; }
  }
  function lockModal(html) {
    modalCtx = { lock: true };
    modalRoot.innerHTML = `<div class="scrim"></div><div class="mwrap" role="dialog" aria-modal="true">${html}</div>`;
  }
  function unlockModal() { modalCtx = null; modalRoot.innerHTML = ''; }
  async function afterLogin() {
    syncBusy = true; setSync('syncing');
    try {
      const remote = await pull();
      const localHas = state.tx.length > 0 || state.named;
      const rd = (remote && remote.data) || {};
      const remoteHas = !!(remote && ((rd.tx && rd.tx.length) || rd.named));
      if (!remote || (!remoteHas && localHas)) { const snap = snapshot(), stamp = state.updatedAt; await push(snap); state.syncedAt = stamp; persist(); toast('Data tersimpan di akun'); }
      else if (!localHas) { applyRemote(rd); toast('Data akun dimuat'); }
      else {
        lockModal(`<div class="mcard"><h2>Data sudah ada di akun</h2><p>Akun ini sudah punya data. Pilih data yang mau dipakai.</p><p>Data yang tidak dipilih akan diganti.</p>
          <button class="primary" data-action="use-remote">Pakai data akun</button><button class="ghost" data-action="use-local">Pakai data perangkat ini</button></div>`);
        modalCtx.remote = rd;
        setSync('ok'); syncBusy = false; render(true);
        return;
      }
      setSync('ok');
    } catch (e) { onSyncError(e); }
    syncBusy = false;
    render(true);
    askName();
  }
  const authMsg = (e) => {
    const c = e.code || '', m = (e.message || '').toLowerCase();
    if (e instanceof TypeError) return 'Tidak ada koneksi internet';
    if (c === 'invalid_credentials' || m.includes('invalid login')) return 'Email atau kata sandi salah';
    if (c === 'user_already_exists' || m.includes('already registered')) return 'Email sudah terdaftar, silakan masuk';
    if (c === 'weak_password') return 'Kata sandi terlalu lemah';
    if (c === 'same_password') return 'Kata sandi baru harus berbeda dari yang lama';
    if (c === 'email_not_confirmed') return 'Email belum diverifikasi. Cek kotak masukmu.';
    if (e.status === 429 || c.includes('rate_limit')) return 'Terlalu banyak percobaan, coba lagi nanti';
    return 'Terjadi kesalahan, coba lagi';
  };
  // pulihkan data dari file backup (.json) yang dibuat tombol Backup Data
  function validBackup(j) {
    const d = j && j.app === 'KantongKampus' ? j.data : null;
    if (!d || typeof d !== 'object' || !Array.isArray(d.tx)) return null;
    const ok = d.tx.every((t) => t && (t.type === 'in' || t.type === 'out') && Number.isFinite(Number(t.amount)) && typeof t.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(t.date));
    return ok ? d : null;
  }
  function pickBackup() {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.json,application/json';
    inp.onchange = async () => {
      const f = inp.files && inp.files[0];
      if (!f) return;
      if (f.size > 10 * 1024 * 1024) { toast('File backup tidak valid'); return; }
      let d = null;
      try { d = validBackup(JSON.parse(await f.text())); } catch (e) { d = null; }
      if (!d) { toast('File backup tidak valid'); return; }
      confirmModal({
        title: 'Pulihkan Data?', label: 'Pulihkan', danger: true,
        text: `File backup berisi ${d.tx.length} transaksi. Data saat ini akan diganti.${session ? ' Data di akunmu ikut diperbarui.' : ''}`,
        onYes: () => {
          applyRemote(d);
          delete state.syncedAt;
          save();
          toast('Data berhasil dipulihkan');
          askName();
        }
      });
    };
    inp.click();
  }
  function forgotModal() {
    openModal(`<form class="mcard" id="forgotf" novalidate><h2>Lupa Kata Sandi</h2>
      <p>Masukkan emailmu. Kami akan mengirim link untuk membuat kata sandi baru.</p>
      <label class="input">${icon('mail', 20)}<input id="a-email" type="email" inputmode="email" autocomplete="email" autocapitalize="off" placeholder="Email" value="${esc(authEmail)}"></label>
      <div class="autherr" id="a-err" role="alert"></div>
      <button type="submit" class="primary" id="a-go">Kirim Link Reset</button>
      <button type="button" class="ghost" data-action="authmode" data-v="login">Kembali</button></form>`);
    $('#forgotf').addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const email = $('#a-email').value.trim().toLowerCase(), err = $('#a-err'), btn = $('#a-go');
      authEmail = email; err.className = 'autherr'; err.textContent = '';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = 'Format email belum benar'; return; }
      btn.disabled = true; btn.textContent = 'Memproses...';
      try {
        await sb('/auth/v1/recover?redirect_to=' + encodeURIComponent(location.origin + location.pathname), { method: 'POST', body: { email } });
        err.className = 'autherr ok'; err.textContent = 'Link reset sudah dikirim. Cek kotak masuk dan folder spam.';
      } catch (ex) { err.textContent = authMsg(ex); }
      btn.disabled = false; btn.textContent = 'Kirim Link Reset';
    });
  }
  function recoveryModal(sess) {
    openModal(`<form class="mcard" id="recf" novalidate><h2>Buat Kata Sandi Baru</h2>
      <p>Masukkan kata sandi baru untuk akunmu.</p>
      <label class="input">${icon('lock', 20)}<input id="a-pass" type="password" autocomplete="new-password" placeholder="Kata sandi baru"></label>
      <label class="input">${icon('lock', 20)}<input id="a-pass2" type="password" autocomplete="new-password" placeholder="Ulangi kata sandi baru"></label>
      <div class="autherr" id="a-err" role="alert"></div>
      <button type="submit" class="primary" id="a-go">Simpan Kata Sandi</button>
      <button type="button" class="ghost" data-action="close">Batal</button></form>`);
    $('#recf').addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const p1 = $('#a-pass').value, p2 = $('#a-pass2').value, err = $('#a-err'), btn = $('#a-go');
      err.className = 'autherr'; err.textContent = '';
      if (p1.length < 6) { err.textContent = 'Kata sandi minimal 6 karakter'; return; }
      if (p1 !== p2) { err.textContent = 'Kata sandi tidak sama'; return; }
      btn.disabled = true; btn.textContent = 'Memproses...';
      try { await sb('/auth/v1/user', { method: 'PUT', token: sess.access_token, body: { password: p1 } }); }
      catch (ex) { err.textContent = authMsg(ex); btn.disabled = false; btn.textContent = 'Simpan Kata Sandi'; return; }
      session = sess; saveSession();
      closeModal();
      toast('Kata sandi diperbarui');
      await afterLogin();
    });
  }
  // link dari email (reset kata sandi / verifikasi) kembali ke aplikasi membawa token di bagian # alamat
  function takeAuthHash() {
    const h = location.hash;
    if (!/^#(access_token|error)=/.test(h)) return null;
    const p = new URLSearchParams(h.slice(1));
    history.replaceState(null, '', location.pathname + location.search + '#/home');
    return { token: p.get('access_token'), refresh: p.get('refresh_token') || '', exp: Number(p.get('expires_at') || 0), expIn: Number(p.get('expires_in') || 3600), type: p.get('type'), error: p.get('error_code') || p.get('error') };
  }
  async function handleAuthHash(a) {
    if (a.error || !a.token) { toast('Link sudah kedaluwarsa, silakan minta lagi'); accountModal('login'); return; }
    try {
      const u = await sb('/auth/v1/user', { token: a.token });
      const sess = { access_token: a.token, refresh_token: a.refresh, expires_at: a.exp || Math.floor(Date.now() / 1000) + a.expIn, user: { id: u.id, email: u.email } };
      if (a.type === 'recovery') { recoveryModal(sess); return; }
      session = sess; saveSession(); toast('Berhasil masuk'); await afterLogin();
    } catch (e) { toast('Link sudah kedaluwarsa, silakan minta lagi'); accountModal('login'); }
  }
  function accountModal(mode) {
    if (session) {
      openModal(`<div class="mcard"><h2>Akun</h2>
        <div class="acc-id"><span class="ci" style="width:44px;height:44px;background:var(--soft);color:var(--accent)">${icon('user-round', 22)}</span><div><b data-nt>${esc(session.user.email)}</b><small data-sync>${syncText()}</small></div></div>
        <p>Datamu tersimpan di akun ini dan otomatis tersinkron ke perangkat lain yang masuk dengan akun yang sama.</p>
        <button class="primary" data-action="syncnow">Sinkronkan Sekarang</button>
        <button class="ghost" data-action="logout">Keluar</button>
        <button class="ghost" data-action="close">Tutup</button></div>`);
      return;
    }
    if (mode) authMode = mode;
    const reg = authMode === 'register';
    openModal(`<form class="mcard" id="authf" novalidate><h2>${reg ? 'Buat Akun' : 'Masuk'}</h2>
      <p>${reg ? 'Daftar agar datamu tersimpan di akun dan bisa dipakai di perangkat lain.' : 'Masuk untuk menyinkronkan datamu.'}</p>
      <div class="tabs"><button type="button" class="tab ${reg ? '' : 'on'}" data-action="authmode" data-v="login">Masuk</button><button type="button" class="tab ${reg ? 'on' : ''}" data-action="authmode" data-v="register">Daftar</button></div>
      <label class="input">${icon('mail', 20)}<input id="a-email" type="email" inputmode="email" autocomplete="email" autocapitalize="off" placeholder="Email" value="${esc(authEmail)}"></label>
      <label class="input">${icon('lock', 20)}<input id="a-pass" type="password" autocomplete="${reg ? 'new-password' : 'current-password'}" placeholder="Kata sandi"></label>
      ${reg ? '' : '<button type="button" class="linkbtn" data-action="forgot">Lupa kata sandi?</button>'}
      <div class="autherr" id="a-err" role="alert"></div>
      <button type="submit" class="primary" id="a-go">${reg ? 'Daftar' : 'Masuk'}</button>
      <button type="button" class="ghost" data-action="close">Batal</button></form>`);
    $('#authf').addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const email = $('#a-email').value.trim().toLowerCase(), pass = $('#a-pass').value, err = $('#a-err'), btn = $('#a-go');
      authEmail = email; err.className = 'autherr'; err.textContent = '';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { err.textContent = 'Format email belum benar'; return; }
      if (pass.length < 6) { err.textContent = 'Kata sandi minimal 6 karakter'; return; }
      btn.disabled = true; btn.textContent = 'Memproses...';
      try {
        if (reg) {
          const r = await sb('/auth/v1/signup', { method: 'POST', body: { email, password: pass } });
          if (!r || !r.access_token) { err.className = 'autherr ok'; err.textContent = 'Cek email kamu untuk verifikasi, lalu masuk.'; btn.disabled = false; btn.textContent = 'Daftar'; return; }
          setSession(r);
        } else {
          setSession(await sb('/auth/v1/token?grant_type=password', { method: 'POST', body: { email, password: pass } }));
        }
      } catch (ex) { err.textContent = authMsg(ex); btn.disabled = false; btn.textContent = reg ? 'Daftar' : 'Masuk'; return; }
      authEmail = '';
      closeModal();
      toast('Berhasil masuk');
      await afterLogin();
    });
  }
  window.addEventListener('online', () => syncNow());
  document.addEventListener('visibilitychange', () => { if (!document.hidden && session && Date.now() - lastPull > 20000) syncNow(); });

  /* =====================================================================
     Aksi
     ===================================================================== */
  function installHelp() {
    const steps = isIOS()
      ? ['Buka halaman ini di Safari.', 'Ketuk tombol Bagikan (kotak dengan panah ke atas).', 'Pilih "Tambahkan ke Layar Utama", lalu ketuk Tambah.']
      : ['Buka menu browser (titik tiga di pojok kanan atas).', 'Pilih "Instal aplikasi" atau "Tambahkan ke layar utama".', 'Konfirmasi, lalu buka KantongKampus dari layar utama.'];
    openModal(`<div class="mcard"><h2>Pasang KantongKampus</h2><ol class="steps">${steps.map((s) => `<li>${s}</li>`).join('')}</ol><button class="ghost" data-action="close">Mengerti</button></div>`);
  }

  const actions = {
    nav: (el) => go(el.dataset.to),
    'side-toggle': () => {
      const c = $('#app').classList.toggle('side-collapsed');
      try { localStorage.setItem('kk:side', c ? '1' : '0'); } catch (e) { /* abaikan */ }
      $$('.side-toggle, .side-open').forEach((b) => b.setAttribute('aria-expanded', String(!c)));
    },
    back: () => { const r = route().name; if (r === 'tambah') go('keuangan'); else if (r === 'tema' || r === 'notifpref' || r === 'pengaturan') go('profil'); else if (history.length > 1) history.back(); else go('home'); },
    fab: () => openModal(`<div class="mcard"><h2>Tambah Transaksi</h2>
      <button class="tt in" data-action="addtype" data-v="in"><span class="ci" style="background:var(--soft);color:var(--accent)">${icon('circle-arrow-down', 21)}</span><span class="d"><b>Pemasukan</b><small>Catat uang yang kamu terima</small></span><span class="chev" style="display:grid">${icon('chevron-right', 15)}</span></button>
      <button class="tt out" data-action="addtype" data-v="out"><span class="ci" style="background:var(--red-soft);color:var(--red)">${icon('circle-arrow-up', 21)}</span><span class="d"><b>Pengeluaran</b><small>Catat uang yang kamu keluarkan</small></span><span class="chev" style="display:grid">${icon('chevron-right', 15)}</span></button></div>`, true),
    addtype: (el) => { ui.form = null; closeModal(); go('tambah/' + el.dataset.v); },
    close: () => closeModal(),
    avatar: () => avatarModal(),
    avpick: (el) => setAvatar({ type: 'preset', id: el.dataset.id }, 'Avatar diperbarui'),
    avreset: () => setAvatar({ type: 'preset', id: 'a1' }, 'Foto dihapus'),
    avfile: () => { const f = $('#av-file'); if (f) f.click(); },
    avcam: () => cameraModal(),
    avback: () => { stopCam(); avatarModal(); },
    avshot: () => {
      const v = $('#cam');
      if (!v || !v.videoWidth) { toast('Kamera belum siap'); return; }
      const data = squareData(v, v.videoWidth, v.videoHeight, true);
      stopCam();
      setAvatar({ type: 'photo', data }, 'Foto profil diperbarui');
    },
    yes: () => { const cb = modalCtx && modalCtx.onYes; closeModal(); if (cb) cb(); },
    hide: () => { state.settings.hideBalance = !state.settings.hideBalance; save(); render(true); },
    keutab: (el) => { ui.keuTab = el.dataset.v; render(); },
    flt: (el) => { ui.flt = el.dataset.v; render(true); },
    sort: () => { ui.asc = !ui.asc; toast(ui.asc ? 'Urutan: terlama dulu' : 'Urutan: terbaru dulu'); $('#txlist').innerHTML = txListHTML(); const b = $('.search button'); if (b) b.title = ui.asc ? 'Terlama dulu' : 'Terbaru dulu'; },
    month: (el) => { const m = el.dataset.m; if (ui.open.has(m)) ui.open.delete(m); else ui.open.add(m); $('#txlist').innerHTML = txListHTML(); },
    tx: (el) => {
      const t = state.tx.find((x) => x.id === Number(el.dataset.id));
      if (!t) return;
      const c = CATS[t.cat] || CATS.lainnya;
      modalCtx = { onYes: () => { state.tx = state.tx.filter((x) => x.id !== t.id); save(); render(true); toast('Transaksi dihapus'); } };
      openModal(`<div class="mcard"><h2>${esc(c.label)}</h2>
        <div class="kv"><span>Jenis</span><b>${t.type === 'in' ? 'Pemasukan' : 'Pengeluaran'}</b></div>
        <div class="kv"><span>Nominal</span><b>${rp(t.amount)}</b></div>
        <div class="kv"><span>Tanggal</span><b>${fmtDateLong(t.date)}</b></div>
        ${t.note ? `<div class="kv"><span>Catatan</span><b data-nt>${esc(t.note)}</b></div>` : ''}
        <div class="btn-row"><button class="ghost" data-action="close">Tutup</button><button class="danger-btn" data-action="yes">Hapus</button></div></div>`);
    },
    'edit-monthly': () => promptModal({ title: 'Budget Bulanan', type: 'number', value: String(state.settings.monthlyBudget), placeholder: 'Contoh: 1500000', hint: 'Batas pengeluaran per bulan (Rp).', onSave: (v) => { state.settings.monthlyBudget = v; save(); render(true); toast('Budget bulanan diperbarui'); } }),
    'edit-daily': () => promptModal({ title: 'Budget Harian', type: 'number', value: String(state.settings.dailyBudget), placeholder: 'Contoh: 50000', hint: 'Batas pengeluaran per hari (Rp).', onSave: (v) => { state.settings.dailyBudget = v; save(); render(true); toast('Budget harian diperbarui'); } }),
    statprev: () => { ui.statMonth = shiftMonth(ui.statMonth, -1); render(true); },
    statnext: () => { if (ui.statMonth < curMonth()) { ui.statMonth = shiftMonth(ui.statMonth, 1); render(true); } },
    about: () => {
      openModal(`<div class="mcard"><h2>KantongKampus</h2><p>Versi 1.0.0<br>Catat dan kelola keuangan mahasiswa. Data tersimpan di perangkat ini dan bisa dipakai tanpa internet.</p>
        ${!isStandalone() && deferredInstall ? '<button class="primary" data-action="install">Pasang Aplikasi</button>' : ''}
        <button class="ghost" data-action="close">Tutup</button></div>`);
    },
    install: async () => {
      closeModal();
      if (deferredInstall) { const p = deferredInstall; deferredInstall = null; p.prompt(); await p.userChoice.catch(() => {}); render(true); return; }
      installHelp();
    },
    'dismiss-install': () => { installDismissed = true; try { localStorage.setItem('kk:install-dismissed', '1'); } catch (e) { /* abaikan */ } render(true); },
    'edit-name': () => promptModal({ title: 'Ubah Nama', value: state.name, placeholder: 'Nama kamu', onSave: (v) => { state.name = v.slice(0, 24); save(); toast('Nama diperbarui'); } }),
    currency: () => toast('Saat ini hanya mendukung Rupiah (Rp)'),
    language: () => languageModal(),
    account: () => accountModal(),
    restore: () => pickBackup(),
    forgot: () => { authEmail = ($('#a-email') || {}).value || authEmail; forgotModal(); },
    authmode: (el) => { authEmail = ($('#a-email') || {}).value || authEmail; accountModal(el.dataset.v); },
    syncnow: () => syncNow(true),
    'use-remote': () => { const d = modalCtx && modalCtx.remote; unlockModal(); if (d) { applyRemote(d); toast('Data akun dimuat'); } askName(); },
    'use-local': async () => {
      unlockModal(); syncBusy = true; setSync('syncing');
      try { const snap = snapshot(), stamp = state.updatedAt; await push(snap); state.syncedAt = stamp; persist(); setSync('ok'); toast('Data tersimpan di akun'); }
      catch (e) { onSyncError(e); }
      syncBusy = false; render(true); askName();
    },
    'welcome-login': () => { unlockModal(); accountModal('login'); },
    logout: () => {
      const t = session && session.access_token;
      if (t) sb('/auth/v1/logout', { method: 'POST', token: t }).catch(() => {});
      session = null; saveSession(); setSync('idle'); closeModal(); render(true); toast('Berhasil keluar');
    },
    setlang: (el) => { closeModal(); setLang(el.dataset.v); },
    backup: () => {
      try {
        const blob = new Blob([JSON.stringify({ app: 'KantongKampus', exportedAt: new Date().toISOString(), data: state }, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `kantongkampus-backup-${today()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        toast('Backup diunduh');
      } catch (e) { toast('Gagal membuat backup'); }
    },
    wipe: () => confirmModal({
      title: 'Hapus Semua Data?', text: session ? 'Semua transaksi dan pengaturan akan dihapus permanen dari perangkat ini dan dari akunmu.' : 'Semua transaksi dan pengaturan akan dihapus permanen dari perangkat ini.', label: 'Hapus', danger: true,
      onYes: () => { const keepName = ''; state = defaults(); state.name = keepName; save(); ui.open = null; ui.statMonth = curMonth(); applyTheme(); render(); toast('Semua data dihapus'); askName(); }
    }),
    toggle: (el) => {
      const n = state.settings.notif, s = state.settings, k = el.dataset.k;
      if (k === 'follow') s.followSystem = !s.followSystem;
      else if (k === 'master') { n.master = !n.master; if (n.master) askPermission(); }
      else { if (!n.master) { n.master = true; } n[k] = !n[k]; if (n[k]) askPermission(); }
      save(); applyTheme(); render(true);
    },
    theme: (el) => { state.settings.theme = el.dataset.v; state.settings.followSystem = false; save(); applyTheme(); render(true); },
    accent: (el) => { state.settings.accent = el.dataset.v; save(); applyTheme(); render(true); },
    font: () => { const i = FONT_ORDER.indexOf(state.settings.fontSize); state.settings.fontSize = FONT_ORDER[(i + 1) % FONT_ORDER.length]; save(); applyTheme(); render(true); },
    switchtype: () => { const t = ui.form.type === 'in' ? 'out' : 'in'; const keep = ui.form; ui.form = Object.assign({}, keep, { type: t, cat: null }); history.replaceState(null, '', '#/tambah/' + t); render(true); },
    pickcat: () => {
      const list = Object.entries(CATS).filter(([, c]) => c.type === ui.form.type);
      openModal(`<div class="mcard"><h2>Pilih Kategori</h2><div class="catlist">${list.map(([k, c]) => `<button data-action="setcat" data-v="${k}">${catIcon(k)}<b>${esc(c.label)}</b></button>`).join('')}</div></div>`, true);
    },
    setcat: (el) => { ui.form.cat = el.dataset.v; closeModal(); render(true); },
    save: () => {
      const f = ui.form;
      const amount = Number(f.amount);
      if (!amount) { toast('Masukkan nominal dulu ya'); const a = $('#f-amount'); if (a) a.focus(); return; }
      if (!f.cat) { toast('Pilih kategori dulu ya'); return; }
      const id = Date.now();
      state.tx.push({ id, type: f.type, amount, cat: f.cat, date: f.date || today(), note: (f.note || '').trim() });
      save();
      const n = state.settings.notif;
      if (n.master) {
        const c = CATS[f.cat];
        if (f.type === 'in' && n.in) notify('Pemasukan dicatat', `${c.label}: ${rp(amount)}`);
        if (f.type === 'out' && n.out) notify('Pengeluaran dicatat', `${c.label}: ${rp(amount)}`);
        if (f.type === 'out' && n.budget) {
          const b = state.settings.monthlyBudget, sp = sumType('out', curMonth());
          if (b && sp >= b * 0.8) notify('Budget hampir habis', `Terpakai ${Math.round((sp / b) * 100)}% dari budget bulan ini.`);
        }
      }
      ui.form = null;
      ui.open = null;
      ui.flt = 'all';
      ui.q = '';
      ui.keuTab = 'transaksi';
      go('keuangan');
      toast('Transaksi disimpan');
    }
  };

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (!el || el.disabled) return;
    const fn = actions[el.dataset.action];
    if (fn) { if (el.tagName === 'A') e.preventDefault(); fn(el); }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalRoot.firstChild) closeModal(); });

  /* =====================================================================
     Instal & service worker
     ===================================================================== */
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredInstall = e; if (route().name === 'home') render(true); });
  window.addEventListener('appinstalled', () => { deferredInstall = null; toast('KantongKampus terpasang'); render(true); });
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }

  /* =====================================================================
     Mulai
     ===================================================================== */
  load();
  lang = state.settings.lang === 'en' ? 'en' : 'id';
  applyTheme();
  const authHash = takeAuthHash();
  if (!location.hash) history.replaceState(null, '', '#/home');
  render();
  $$('[data-ic]').forEach((el) => { if (!el.firstChild) el.innerHTML = icon(el.dataset.ic, Number(el.dataset.size) || 20); });
  try { if (localStorage.getItem('kk:side') === '1') { $('#app').classList.add('side-collapsed'); $$('.side-toggle, .side-open').forEach((b) => b.setAttribute('aria-expanded', 'false')); } } catch (e) { /* abaikan */ }
  $$('.side-item, .side-add').forEach((el) => el.setAttribute('title', el.textContent.trim()));

  applyLang();
  if (authHash) handleAuthHash(authHash); else if (session) syncNow();
  const splash = $('#splash');
  let seen = false;
  try { seen = sessionStorage.getItem('kk:splash') === '1'; sessionStorage.setItem('kk:splash', '1'); } catch (e) { /* abaikan */ }
  if (seen) splash.classList.add('hide');
  else setTimeout(() => { splash.classList.add('hide'); askName(); dailyReminder(); }, 1400);
  setTimeout(() => { if (splash.classList.contains('hide')) splash.style.display = 'none'; }, 2000);
  if (seen) { askName(); dailyReminder(); }
})();
