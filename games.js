const CDN = 'https://cdn.cloudflare.steamstatic.com/steam/apps';

const GAMES = [
  { id:1,  appid:730,     title:"Counter-Strike 2",             price:0,     originalPrice:null,  discount:0,  genres:["Acción","Shooter"],         tags:["FPS","Competitivo","Multijugador"],  shortDesc:"El shooter táctico más popular del mundo, ahora con motor Source 2.",            fullDesc:"Counter-Strike 2 es la mayor actualización técnica en la historia de CS. Construido sobre el motor Source 2, con humo volumétrico, audio rediseñado y servidores mejorados.", rating:94, releaseDate:"27 Sep, 2023", developer:"Valve",            publisher:"Valve",            free:true,  os:["Windows","Linux"],             image:`${CDN}/730/header.jpg` },
  { id:2,  appid:570,     title:"Dota 2",                       price:0,     originalPrice:null,  discount:0,  genres:["Estrategia","MOBA"],         tags:["MOBA","Multijugador","Gratis"],      shortDesc:"El MOBA más profundo y competitivo del mundo.",                                  fullDesc:"Cada partida de Dota es única. Con más de 120 héroes y un metajuego en constante evolución, Dota 2 es el estándar oro de los MOBAs.",                                             rating:91, releaseDate:"9 Jul, 2013",  developer:"Valve",            publisher:"Valve",            free:true,  os:["Windows","macOS","Linux"],      image:`${CDN}/570/header.jpg` },
  { id:3,  appid:440,     title:"Team Fortress 2",              price:0,     originalPrice:null,  discount:0,  genres:["Acción","Shooter"],         tags:["FPS","Multijugador","Humor"],        shortDesc:"Shooter de equipo gratuito con clases únicas y humor absurdo.",                  fullDesc:"Una de las experiencias multijugador más queridas de todos los tiempos. Con 9 clases distintas y una comunidad activa desde 2007.",                                                rating:88, releaseDate:"10 Oct, 2007", developer:"Valve",            publisher:"Valve",            free:true,  os:["Windows","macOS","Linux"],      image:`${CDN}/440/header.jpg` },
  { id:4,  appid:1091500, title:"Cyberpunk 2077",               price:47.99, originalPrice:59.99, discount:20, genres:["RPG","Acción"],             tags:["Mundo Abierto","RPG","Futurista"],   shortDesc:"RPG de acción en un mundo abierto cyberpunk del futuro.",                       fullDesc:"Cyberpunk 2077 es un RPG de acción en mundo abierto ambientado en Night City. Jugás como V, un mercenario en busca de la inmortalidad.",                                         rating:87, releaseDate:"10 Dic, 2020", developer:"CD PROJEKT RED",   publisher:"CD PROJEKT RED",   free:false, os:["Windows"],                      image:`${CDN}/1091500/header.jpg` },
  { id:5,  appid:292030,  title:"The Witcher 3: Wild Hunt",     price:9.99,  originalPrice:39.99, discount:75, genres:["RPG","Aventura"],           tags:["Mundo Abierto","RPG","Fantasía"],    shortDesc:"El RPG premiado con un vasto mundo abierto lleno de decisiones morales.",       fullDesc:"Jugá como Geralt de Rivia en una historia épica. Tomá decisiones que afectan el mundo, explorá ciudades medievales y enfrentate a criaturas míticas.",                          rating:97, releaseDate:"18 May, 2015", developer:"CD PROJEKT RED",   publisher:"CD PROJEKT RED",   free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/292030/header.jpg` },
  { id:6,  appid:1245620, title:"Elden Ring",                   price:59.99, originalPrice:null,  discount:0,  genres:["RPG","Acción"],             tags:["Souls-like","RPG","Mundo Abierto"], shortDesc:"El RPG de acción más elogiado de FromSoftware y George R.R. Martin.",         fullDesc:"Adentrate en las Tierras Intermedias. Un vasto mundo oscuro fruto de la colaboración entre FromSoftware y George R.R. Martin.",                                                  rating:96, releaseDate:"25 Feb, 2022", developer:"FromSoftware",     publisher:"Bandai Namco",     free:false, os:["Windows"],                      image:`${CDN}/1245620/header.jpg` },
  { id:7,  appid:1086940, title:"Baldur's Gate 3",              price:59.99, originalPrice:null,  discount:0,  genres:["RPG","Estrategia"],         tags:["RPG","Turno a Turno","D&D"],         shortDesc:"El RPG por turnos más completo jamás creado. GOTY 2023.",                       fullDesc:"Reuní a tus compañeros y adentrate en las Tierras de Baldur. Con libertad sin precedentes y basado en D&D 5e, BG3 ofrece millones de combinaciones narrativas.",                 rating:98, releaseDate:"3 Ago, 2023",  developer:"Larian Studios",   publisher:"Larian Studios",   free:false, os:["Windows","macOS"],              image:`${CDN}/1086940/header.jpg` },
  { id:8,  appid:1174180, title:"Red Dead Redemption 2",        price:38.99, originalPrice:59.99, discount:35, genres:["Acción","Aventura"],        tags:["Mundo Abierto","Western","Historia"],shortDesc:"Epopeya épica en el ocaso del salvaje oeste americano.",                        fullDesc:"América, 1899. Arthur Morgan y su banda deben robar, luchar y viajar por un vasto territorio. Una de las mejores historias en la historia de los videojuegos.",                  rating:96, releaseDate:"5 Dic, 2019",  developer:"Rockstar Games",   publisher:"Rockstar Games",   free:false, os:["Windows"],                      image:`${CDN}/1174180/header.jpg` },
  { id:9,  appid:546560,  title:"Half-Life: Alyx",              price:59.99, originalPrice:null,  discount:0,  genres:["Acción","Aventura"],        tags:["VR","Historia","Terror"],            shortDesc:"El regreso de Half-Life como experiencia de realidad virtual definitiva.",     fullDesc:"Half-Life: Alyx es el gran regreso de Valve al universo Half-Life. Una experiencia VR que redefine el género con narrativa magistral.",                                          rating:98, releaseDate:"23 Mar, 2020", developer:"Valve",            publisher:"Valve",            free:false, os:["Windows"],                      image:`${CDN}/546560/header.jpg` },
  { id:10, appid:620,     title:"Portal 2",                     price:9.99,  originalPrice:null,  discount:0,  genres:["Puzzle","Aventura"],        tags:["Puzzle","Co-op","Humor"],            shortDesc:"El aclamado juego de puzzles con portales y humor negro. Un clásico.",         fullDesc:"Portal 2 continúa con nuevas mecánicas, co-op para dos jugadores y una historia brillante protagonizada por GLaDOS.",                                                             rating:97, releaseDate:"19 Abr, 2011", developer:"Valve",            publisher:"Valve",            free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/620/header.jpg` },
  { id:11, appid:550,     title:"Left 4 Dead 2",                price:4.99,  originalPrice:9.99,  discount:50, genres:["Acción","Shooter"],         tags:["Zombies","Co-op","Terror"],          shortDesc:"Shooter cooperativo de zombies para 4 jugadores.",                              fullDesc:"L4D2 ofrece una campaña de terror cooperativa para 4 jugadores en el apocalipsis zombie. Con armas, 5 campañas y modos expandidos.",                                             rating:88, releaseDate:"17 Nov, 2009", developer:"Valve",            publisher:"Valve",            free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/550/header.jpg` },
  { id:12, appid:814380,  title:"Sekiro: Shadows Die Twice",    price:29.99, originalPrice:59.99, discount:50, genres:["Acción","Aventura"],        tags:["Samurai","Difícil","Souls-like"],    shortDesc:"Acción samurai frenética en el Japón feudal de FromSoftware.",                  fullDesc:"Sekiro te convierte en un shinobi de élite en el Japón Sengoku. Combate único basado en katana, postura y deflexión.",                                                           rating:92, releaseDate:"22 Mar, 2019", developer:"FromSoftware",     publisher:"Activision",       free:false, os:["Windows"],                      image:`${CDN}/814380/header.jpg` },
  { id:13, appid:374320,  title:"Dark Souls III",               price:19.79, originalPrice:59.99, discount:67, genres:["RPG","Acción"],             tags:["Souls-like","Difícil","RPG"],        shortDesc:"El clímax de la trilogía Souls. Oscuro, desafiante y épico.",                   fullDesc:"Dark Souls III expande la fórmula con combate más veloz, jefes memorables y el mejor diseño de niveles de la trilogía.",                                                         rating:90, releaseDate:"12 Abr, 2016", developer:"FromSoftware",     publisher:"Bandai Namco",     free:false, os:["Windows"],                      image:`${CDN}/374320/header.jpg` },
  { id:14, appid:1145360, title:"Hades",                        price:12.49, originalPrice:24.99, discount:50, genres:["Acción","Indie"],           tags:["Roguelite","Mitología","Historia"],  shortDesc:"Roguelite de acción basado en la mitología griega. Contendiente GOTY.",         fullDesc:"Peleá contra el dios de los muertos intentando escapar del Inframundo. Cada intento es diferente, con upgrades y narrativa que avanza con cada muerte.",                        rating:96, releaseDate:"17 Sep, 2020", developer:"Supergiant Games", publisher:"Supergiant Games", free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/1145360/header.jpg` },
  { id:15, appid:367520,  title:"Hollow Knight",                price:14.99, originalPrice:null,  discount:0,  genres:["Acción","Indie"],           tags:["Metroidvania","Indie","Difícil"],    shortDesc:"Metroidvania artesanal en un reino de insectos abandonado.",                    fullDesc:"Explorá un vasto reino subterráneo de insectos y héroes. Hallownest es un reino antiguo arruinado por un extraño contagio, lleno de secretos.",                                 rating:95, releaseDate:"24 Feb, 2017", developer:"Team Cherry",      publisher:"Team Cherry",      free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/367520/header.jpg` },
  { id:16, appid:413150,  title:"Stardew Valley",               price:14.99, originalPrice:null,  discount:0,  genres:["Simulación","RPG"],         tags:["Granja","Relajante","Co-op"],        shortDesc:"Construí la granja de tus sueños. Vida en el campo hecha juego.",               fullDesc:"Heredaste la vieja granja de tu abuelo. Cultivá, cría animales, explorá cuevas y construí relaciones con los vecinos del pueblo.",                                               rating:96, releaseDate:"26 Feb, 2016", developer:"ConcernedApe",     publisher:"ConcernedApe",     free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/413150/header.jpg` },
  { id:17, appid:105600,  title:"Terraria",                     price:9.99,  originalPrice:null,  discount:0,  genres:["Acción","Aventura"],        tags:["Sandbox","Construcción","2D"],       shortDesc:"El sandbox de aventura 2D más completo del mundo.",                             fullDesc:"En Terraria el mundo está a tu disposición. Cava, pelea, explorá, construí. Múltiples jefes, biomas únicos y años de contenido gratuito.",                                     rating:97, releaseDate:"16 May, 2011", developer:"Re-Logic",         publisher:"Re-Logic",         free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/105600/header.jpg` },
  { id:18, appid:252490,  title:"Rust",                         price:39.99, originalPrice:null,  discount:0,  genres:["Acción","Aventura"],        tags:["Supervivencia","Multijugador","PvP"],shortDesc:"Sobrevivir es el único objetivo en este mundo hostil compartido.",               fullDesc:"El único objetivo en Rust es sobrevivir. Construí tu base, recolectá recursos y dominá el servidor frente a otros jugadores.",                                                   rating:78, releaseDate:"8 Feb, 2018",  developer:"Facepunch Studios",publisher:"Facepunch Studios",free:false, os:["Windows","macOS"],              image:`${CDN}/252490/header.jpg` },
  { id:19, appid:289070,  title:"Civilization VI",              price:11.99, originalPrice:59.99, discount:80, genres:["Estrategia"],               tags:["4X","Turno a Turno","Historia"],     shortDesc:"Construí un imperio para resistir el paso del tiempo.",                         fullDesc:"Civilization VI es la experiencia de estrategia por turnos definitiva. Desde los albores de la historia hasta la era espacial.",                                                 rating:87, releaseDate:"21 Oct, 2016", developer:"Firaxis Games",    publisher:"2K",               free:false, os:["Windows","macOS","Linux"],      image:`${CDN}/289070/header.jpg` },
  { id:20, appid:945360,  title:"Among Us",                     price:5.99,  originalPrice:null,  discount:0,  genres:["Estrategia","Indie"],       tags:["Multijugador","Social","Deducción"], shortDesc:"¿Quién es el impostor? Juego de deducción social en el espacio.",              fullDesc:"Jugá online con 4-15 jugadores. Preparad la nave para el despegue, pero cuidado: hay impostores a bordo saboteando la misión.",                                                  rating:81, releaseDate:"18 Jun, 2018", developer:"Innersloth",       publisher:"Innersloth",       free:false, os:["Windows","macOS"],              image:`${CDN}/945360/header.jpg` },
];

// ── CART ─────────────────────────────────────────────────────────
const Cart = {
  _k: 'steam_cart',
  get()       { return JSON.parse(localStorage.getItem(this._k) || '[]'); },
  save(v)     { localStorage.setItem(this._k, JSON.stringify(v)); },
  has(id)     { return this.get().some(i => i.id === id); },
  count()     { return this.get().length; },
  add(id) {
    if (this.has(id)) return;
    const g = GAMES.find(g => g.id === id);
    if (!g || g.free) return;
    const items = this.get(); items.push({ id }); this.save(items); this._badge();
  },
  remove(id)  { this.save(this.get().filter(i => i.id !== id)); this._badge(); },
  total()     { return this.get().reduce((s,i) => { const g = GAMES.find(g=>g.id===i.id); return s+(g?g.price:0); },0); },
  clear()     { localStorage.removeItem(this._k); this._badge(); },
  _badge() {
    const b = document.getElementById('cart-badge');
    if (!b) return;
    const n = this.count();
    b.textContent = n;
    b.style.display = n > 0 ? 'flex' : 'none';
  }
};

// ── WISHLIST ──────────────────────────────────────────────────────
const Wishlist = {
  _k: 'steam_wishlist',
  get()     { return JSON.parse(localStorage.getItem(this._k) || '[]'); },
  save(v)   { localStorage.setItem(this._k, JSON.stringify(v)); },
  has(id)   { return this.get().includes(id); },
  count()   { return this.get().length; },
  toggle(id) {
    const list = this.get();
    const i = list.indexOf(id);
    i === -1 ? list.push(id) : list.splice(i, 1);
    this.save(list);
    this._badge();
    return i === -1;
  },
  _badge() {
    const b = document.getElementById('wishlist-count');
    if (!b) return;
    const n = this.count();
    b.textContent = n;
    b.style.display = n > 0 ? 'inline-flex' : 'none';
  }
};

// ── WALLET ────────────────────────────────────────────────────────
const Wallet = {
  _k: 'steam_wallet',
  get()        { return parseFloat(localStorage.getItem(this._k) || '0'); },
  add(amount)  { localStorage.setItem(this._k, (this.get() + parseFloat(amount)).toFixed(2)); this._display(); },
  deduct(amount) {
    const b = this.get();
    if (b < amount) return false;
    localStorage.setItem(this._k, (b - parseFloat(amount)).toFixed(2));
    this._display();
    return true;
  },
  canAfford(amount) { return this.get() >= amount; },
  _display() {
    const el = document.getElementById('wallet-balance');
    if (el) el.textContent = `💰 $${this.get().toFixed(2)}`;
  }
};

// ── SESSION ───────────────────────────────────────────────────────
const Session = {
  get()        { return JSON.parse(localStorage.getItem('steam_session') || 'null'); },
  isLoggedIn() { return !!this.get(); }
};

// ── PRICE HTML ────────────────────────────────────────────────────
function priceHTML(game) {
  if (game.free) return `<span class="p-free">Gratis</span>`;
  if (game.discount > 0) return `<span class="p-badge">-${game.discount}%</span><span class="p-original">$${game.originalPrice.toFixed(2)}</span><span class="p-final">$${game.price.toFixed(2)}</span>`;
  return `<span class="p-final">$${game.price.toFixed(2)}</span>`;
}

// ── HEADER INIT ───────────────────────────────────────────────────
function initHeader() {
  Cart._badge();
  Wishlist._badge();
  Wallet._display();
  const session = Session.get();
  const zone = document.getElementById('header-user-zone');
  if (zone) {
    zone.innerHTML = session
      ? `<a href="profile.html" class="header-username">${session.username}</a>
         <button class="btn-logout" onclick="logout()">Salir</button>`
      : `<a href="index.html" class="btn-header-login">INICIAR SESIÓN</a>`;
  }
}

function logout() {
  localStorage.removeItem('steam_session');
  window.location.href = 'index.html?logout=true';
}

function toast(msg, type = 'success') {
  let t = document.getElementById('_toast');
  if (!t) { t = document.createElement('div'); t.id = '_toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.className = `toast toast-${type} show`;
  t.textContent = msg;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function isOwned(id) {
  const purchased = JSON.parse(localStorage.getItem('steam_library') || '[]').map(i => i.id);
  const freeIds   = GAMES.filter(g => g.free).map(g => g.id);
  return [...new Set([...freeIds, ...purchased])].includes(id);
}

// callback(type, friend, msg) — type='me'|'friend'
function showBuyChoiceModal(game, callback) {
  document.getElementById('_buy-choice-overlay')?.remove();

  const ov = document.createElement('div');
  ov.id = '_buy-choice-overlay';
  ov.className = 'buy-choice-overlay';
  ov.innerHTML = `
    <div class="buy-choice-box">
      <div class="buy-choice-game-bar">
        <img src="${game.image}" class="buy-choice-thumb" onerror="this.style.display='none'">
        <div>
          <div style="font-size:15px;font-weight:700">${game.title}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-top:2px">${game.free ? 'Gratis' : '$' + game.price.toFixed(2)}</div>
        </div>
      </div>
      <h3 class="buy-choice-title">¿Esta compra es para vos o para un amigo?</h3>
      <div class="buy-choice-cards" id="_bcc-step1">
        <button class="buy-choice-card" onclick="_bcForMe()">
          <span style="font-size:36px">🎮</span>
          <div style="font-size:15px;font-weight:700;margin:10px 0 4px">Para mí</div>
          <div style="font-size:12px;color:var(--text-dim)">Agregar a mi biblioteca</div>
        </button>
        <button class="buy-choice-card" onclick="_bcForFriend()">
          <span style="font-size:36px">🎁</span>
          <div style="font-size:15px;font-weight:700;margin:10px 0 4px">Para un amigo</div>
          <div style="font-size:12px;color:var(--text-dim)">Enviar como regalo</div>
        </button>
      </div>
      <div id="_bcc-step2" style="display:none">
        <p style="font-size:13px;color:var(--text-dim);margin-bottom:16px">Ingresá los datos del destinatario. Recibirá el juego en su biblioteca Steam.</p>
        <div class="form-group" style="margin-bottom:12px">
          <label style="font-size:12px;color:var(--text-dim);display:block;margin-bottom:6px">Usuario o email Steam del amigo</label>
          <input type="text" id="_bc-friend" class="card-input" placeholder="ej: Matigamer99 o amigo@mail.com">
        </div>
        <div class="form-group" style="margin-bottom:18px">
          <label style="font-size:12px;color:var(--text-dim);display:block;margin-bottom:6px">Mensaje personal (opcional)</label>
          <textarea id="_bc-msg" class="card-input" rows="3" style="resize:none" placeholder="¡Espero que lo disfrutes!"></textarea>
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn-blue" style="flex:1;padding:11px;font-size:13px" onclick="_bcSendGift()">Ir al pago →</button>
          <button class="btn-logout" style="padding:11px 16px;font-size:13px" onclick="_bcBack()">← Volver</button>
        </div>
      </div>
      <button onclick="document.getElementById('_buy-choice-overlay').remove()" style="display:block;width:100%;margin-top:14px;background:none;border:none;color:var(--text-dim);font-size:12px;cursor:pointer;padding:6px">Cancelar</button>
    </div>`;

  document.body.appendChild(ov);
  ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });

  window._bcForMe = function() {
    ov.remove();
    callback('me', null, null);
  };
  window._bcForFriend = function() {
    document.getElementById('_bcc-step1').style.display = 'none';
    document.getElementById('_bcc-step2').style.display = 'block';
  };
  window._bcBack = function() {
    document.getElementById('_bcc-step1').style.display = '';
    document.getElementById('_bcc-step2').style.display = 'none';
  };
  window._bcSendGift = function() {
    const friend = document.getElementById('_bc-friend').value.trim();
    if (!friend) { toast('Ingresá el nombre o email de tu amigo', 'error'); return; }
    const msg = document.getElementById('_bc-msg').value.trim();
    ov.remove();
    callback('friend', friend, msg);
  };
}
