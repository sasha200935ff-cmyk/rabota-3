/* ===== PROJECT DATA ===== */
const PROJECTS = {
  haniex: {
    id: 'haniex',
    year: '2024',
    cat: 'Product · Tech',
    title: { ru: 'Haniex', en: 'Haniex' },
    lead: {
      ru: 'Фотореалистичная визуализация премиальных наушников.',
      en: 'Photorealistic visualization of premium headphones.'
    },
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Полный цикл продуктовой визуализации для технологического бренда. Задача — показать премиальность материала и эргономику формы так, чтобы изображение работало и в e-commerce, и в рекламе.',
      en: 'Full product visualization pipeline for a tech brand. The goal was to show material premium quality and ergonomic form so the image works both in e-commerce and advertising.'
    },
    brief: {
      ru: 'Клиенту нужны были 12 финальных кадров + turntable для каталога и соцсетей. Стиль — чистый studio look с акцентом на металл и мягкие тени.',
      en: 'Client needed 12 final frames + turntable for catalog and socials. Style — clean studio look with focus on metal and soft shadows.'
    },
    solution: {
      ru: 'Модель собрана в Blender, UV и текстуры в Substance. Освещение — Octane (HDR + area lights). Композитинг и цветокоррекция в After Effects. Результат: серия, которая подняла конверсию карточки товара.',
      en: 'Model built in Blender, UV and textures in Substance. Lighting — Octane (HDR + area lights). Compositing and grading in After Effects. Result: a series that improved product page conversion.'
    },
    tools: ['Blender', 'Octane', 'Substance', 'After Effects', 'Photoshop'],
    time: { ru: '2,5 недели', en: '2.5 weeks' },
    result: { ru: '12 кадров 4K + 8-сек turntable + исходники', en: '12 × 4K frames + 8s turntable + source files' }
  },
  aurora: {
    id: 'aurora',
    year: '2025',
    cat: 'Architecture · Exterior',
    title: { ru: 'Aurora Residence', en: 'Aurora Residence' },
    lead: {
      ru: 'Архитектурная визуализация современной виллы на побережье.',
      en: 'Architectural visualization of a modern coastal villa.'
    },
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Экстерьерная визуализация частной виллы. Акцент на естественный свет, материалы камня, стекла и дерева, связь архитектуры с ландшафтом.',
      en: 'Exterior visualization of a private villa. Focus on natural light, stone, glass and wood materials, connection of architecture with landscape.'
    },
    brief: {
      ru: 'Нужны дневные и сумеречные ракурсы для презентации инвесторам и продажи. 8 ключевых видов + атмосферные детали.',
      en: 'Day and dusk angles needed for investor presentation and sales. 8 key views + atmospheric details.'
    },
    solution: {
      ru: 'Моделирование и сценография в Blender + Cinema 4D. Рендер Redshift. Постобработка с акцентом на мягкий свет и отражения в воде.',
      en: 'Modeling and set dressing in Blender + Cinema 4D. Rendered in Redshift. Post with soft light and water reflections.'
    },
    tools: ['Blender', 'Cinema 4D', 'Redshift', 'Photoshop'],
    time: { ru: '3 недели', en: '3 weeks' },
    result: { ru: '8 ракурсов 6K + сумеречная серия', en: '8 × 6K angles + dusk series' }
  },
  lumina: {
    id: 'lumina',
    year: '2024',
    cat: 'Packaging · Luxury',
    title: { ru: 'Lumina Bottle', en: 'Lumina Bottle' },
    lead: {
      ru: '3D-визуализация флакона люксовых духов.',
      en: '3D visualization of a luxury perfume bottle.'
    },
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Серия для рекламной кампании люксового аромата. Сложные материалы стекла, жидкости, этикетки и отражений.',
      en: 'Series for a luxury fragrance advertising campaign. Complex glass, liquid, label and reflection materials.'
    },
    brief: {
      ru: 'Нужен «дорогой» look: идеальные блики, объём жидкости, читаемая этикетка. Использование в print и digital.',
      en: 'Needed a “premium” look: perfect highlights, liquid volume, readable label. For print and digital.'
    },
    solution: {
      ru: 'Высокая детализация стекла и каустики в Octane. Жидкость с правильным IOR. Композитинг с контролируемыми отражениями.',
      en: 'High-detail glass and caustics in Octane. Liquid with correct IOR. Compositing with controlled reflections.'
    },
    tools: ['Blender', 'Octane', 'Photoshop'],
    time: { ru: '10 дней', en: '10 days' },
    result: { ru: '6 ключевых кадров + варианты фона', en: '6 key frames + background variants' }
  },
  vertex: {
    id: 'vertex',
    year: '2023',
    cat: 'Character · Game',
    title: { ru: 'Vertex', en: 'Vertex' },
    lead: {
      ru: 'Игровой персонаж: от скульпта до ригга.',
      en: 'Game character: from sculpt to rig.'
    },
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Полный пайплайн персонажа для игры: high-poly скульпт, ретопология, текстуры, риггинг и базовые анимации.',
      en: 'Full character pipeline for a game: high-poly sculpt, retopology, textures, rigging and basic animations.'
    },
    brief: {
      ru: 'Стиль — современный sci-fi. Модель должна быть production-ready для Unreal Engine 5.',
      en: 'Style — modern sci-fi. Model must be production-ready for Unreal Engine 5.'
    },
    solution: {
      ru: 'ZBrush → ретопология → Substance → риг в Blender. Экспорт в Unreal с правильными LODs и materials.',
      en: 'ZBrush → retopo → Substance → rig in Blender. Export to Unreal with proper LODs and materials.'
    },
    tools: ['ZBrush', 'Blender', 'Substance', 'Unreal Engine'],
    time: { ru: '4 недели', en: '4 weeks' },
    result: { ru: 'Game-ready модель + 5 анимаций', en: 'Game-ready model + 5 animations' }
  },
  echo: {
    id: 'echo',
    year: '2025',
    cat: 'Motion · Brand',
    title: { ru: 'Echo Sphere', en: 'Echo Sphere' },
    lead: {
      ru: 'Motion-идентификация и 3D-анимация для tech-бренда.',
      en: 'Motion identity and 3D animation for a tech brand.'
    },
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Абстрактные формы, звуковые волны и логотип в движении. 15-секундный ролик + seamless loop для digital.',
      en: 'Abstract forms, sound waves and logo in motion. 15-second film + seamless loop for digital.'
    },
    brief: {
      ru: 'Нужна сильная motion-идентификация, которая ощущается «технологично» и премиально.',
      en: 'Needed strong motion identity that feels both tech and premium.'
    },
    solution: {
      ru: 'Процедурные формы в Cinema 4D + Octane. Анимация и sound design в After Effects. Финальный delivery в нескольких форматах.',
      en: 'Procedural forms in Cinema 4D + Octane. Animation and sound design in After Effects. Final delivery in multiple formats.'
    },
    tools: ['Cinema 4D', 'Octane', 'After Effects'],
    time: { ru: '2 недели', en: '2 weeks' },
    result: { ru: '15с ролик + loop 10с + stil frames', en: '15s film + 10s loop + still frames' }
  },
  urban: {
    id: 'urban',
    year: '2024',
    cat: 'Environment · City',
    title: { ru: 'Urban Pulse', en: 'Urban Pulse' },
    lead: {
      ru: 'Концептуальный городской пейзаж будущего.',
      en: 'Conceptual future cityscape.'
    },
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Сочетание архитектуры, атмосферы и неонового освещения. Мат-пейнт + 3D-элементы.',
      en: 'Mix of architecture, atmosphere and neon lighting. Matte-paint + 3D elements.'
    },
    brief: {
      ru: 'Концепт для pitch-deck. Нужна сильная атмосфера «город будущего» без перегруза деталями.',
      en: 'Concept for a pitch-deck. Strong “city of the future” atmosphere without detail overload.'
    },
    solution: {
      ru: '3D-блокинг + kitbash, атмосфера в post, неоновые акценты. Финальный кадр работает и как key art, и как фон.',
      en: '3D blocking + kitbash, atmosphere in post, neon accents. Final frame works as both key art and background.'
    },
    tools: ['Blender', 'Photoshop', 'After Effects'],
    time: { ru: '1,5 недели', en: '1.5 weeks' },
    result: { ru: 'Key art 8K + 3 варианта освещения', en: 'Key art 8K + 3 lighting variants' }
  },
  neon: {
    id: 'neon',
    year: '2023',
    cat: 'Automotive · Concept',
    title: { ru: 'Neon Drift', en: 'Neon Drift' },
    lead: {
      ru: 'Концепт-кар в неоновом стиле.',
      en: 'Neon-style concept car.'
    },
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'Драматичное освещение, высокодетализированные материалы кузова и интерьера. Серия из 6 кадров.',
      en: 'Dramatic lighting, highly detailed body and interior materials. Series of 6 frames.'
    },
    brief: {
      ru: 'Концепт для automotive-студии. Нужен wow-эффект и ощущение скорости даже в статике.',
      en: 'Concept for an automotive studio. Needed wow-factor and sense of speed even in stills.'
    },
    solution: {
      ru: 'Детальный кузов и материалы в Blender/Octane. Неоновый light setup. Пост с контролем бликов и глубины.',
      en: 'Detailed body and materials in Blender/Octane. Neon light setup. Post with controlled highlights and depth.'
    },
    tools: ['Blender', 'Octane', 'Photoshop'],
    time: { ru: '3 недели', en: '3 weeks' },
    result: { ru: '6 кадров 5K + material breakdown', en: '6 × 5K frames + material breakdown' }
  },
  aether: {
    id: 'aether',
    year: '2025',
    cat: 'Character · Fantasy',
    title: { ru: 'Aether Guardian', en: 'Aether Guardian' },
    lead: {
      ru: 'Фэнтезийный персонаж-страж.',
      en: 'Fantasy guardian character.'
    },
    img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1400&q=90&auto=format&fit=crop',
    thumbs: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=85&auto=format&fit=crop'
    ],
    desc: {
      ru: 'High-poly скульпт, стилизованные текстуры, cloth simulation в Marvelous Designer, готовый к анимации.',
      en: 'High-poly sculpt, stylized textures, cloth simulation in Marvelous Designer, animation-ready.'
    },
    brief: {
      ru: 'Персонаж для fantasy-проекта. Нужна сильная силуэтная читаемость и ощущение «магии» в материалах.',
      en: 'Character for a fantasy project. Strong silhouette readability and sense of “magic” in materials.'
    },
    solution: {
      ru: 'ZBrush sculpt → Marvelous для ткани → Substance → риг. Материалы с emissive и subsurface для «эфирного» эффекта.',
      en: 'ZBrush sculpt → Marvelous for cloth → Substance → rig. Materials with emissive and subsurface for ethereal effect.'
    },
    tools: ['ZBrush', 'Marvelous Designer', 'Substance', 'Blender'],
    time: { ru: '5 недель', en: '5 weeks' },
    result: { ru: 'Production-ready character + turntable', en: 'Production-ready character + turntable' }
  }
};

const ORDER = ['haniex', 'aurora', 'lumina', 'vertex', 'echo', 'urban', 'neon', 'aether'];

function getLang() {
  return localStorage.getItem('lang') || 'ru';
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ru]').forEach(el => {
    const t = el.getAttribute('data-' + lang);
    if (t !== null) el.textContent = t;
  });
  document.querySelectorAll('.lang-ru, .lang-en').forEach(span => {
    span.classList.toggle('active', span.classList.contains('lang-' + lang));
  });
}

function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(saved);
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(isDark ? 'light' : 'dark');
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
  }
}

function initLang() {
  const toggle = document.querySelector('.lang-toggle');
  let current = getLang();
  applyLang(current);
  if (toggle) {
    toggle.addEventListener('click', () => {
      current = current === 'ru' ? 'en' : 'ru';
      localStorage.setItem('lang', current);
      applyLang(current);
      renderProject();
    });
  }
}

function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('touch');
    return;
  }
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  const trail = document.querySelector('.cursor-trail');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;
  const points = [];

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    if (trail) {
      points.push({ x: mx, y: my, life: 1 });
      if (points.length > 12) points.shift();
    }
  });

  function loop() {
    fx += (mx - fx) * 0.14;
    fy += (my - fy) * 0.14;
    follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%, -50%)`;
    if (trail && points.length) {
      // simple trail via CSS box-shadow not needed — opacity cascade
    }
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('a, button, .magnetic').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
  });
}

function renderProject() {
  const params = new URLSearchParams(window.location.search);
  let id = params.get('id') || 'haniex';
  if (!PROJECTS[id]) id = 'haniex';

  const p = PROJECTS[id];
  const lang = getLang();

  document.title = `${p.title[lang]} — Александр Фролов`;
  document.getElementById('p-year').textContent = p.year;
  document.getElementById('p-cat').textContent = p.cat;
  document.getElementById('p-title').textContent = p.title[lang];
  document.getElementById('p-lead').textContent = p.lead[lang];
  document.getElementById('p-desc').textContent = p.desc[lang];
  document.getElementById('p-brief').textContent = p.brief[lang];
  document.getElementById('p-solution').textContent = p.solution[lang];
  document.getElementById('p-time').textContent = p.time[lang];
  document.getElementById('p-result').textContent = p.result[lang];

  const img = document.getElementById('p-img');
  img.src = p.img;
  img.alt = p.title[lang];

  const tools = document.getElementById('p-tools');
  tools.innerHTML = p.tools.map(t => `<li>${t}</li>`).join('');

  const thumbs = document.getElementById('p-thumbs');
  thumbs.innerHTML = p.thumbs.map((src, i) =>
    `<button type="button" class="thumb${i === 0 ? ' active' : ''}" data-src="${src}"><img src="${src}" alt="" loading="lazy" /></button>`
  ).join('');

  thumbs.querySelectorAll('.thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      img.src = btn.dataset.src;
      thumbs.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const idx = ORDER.indexOf(id);
  const prevId = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const nextId = ORDER[(idx + 1) % ORDER.length];
  const prev = PROJECTS[prevId];
  const next = PROJECTS[nextId];

  document.getElementById('prev-link').href = `project.html?id=${prevId}`;
  document.getElementById('prev-name').textContent = prev.title[lang];
  document.getElementById('next-link').href = `project.html?id=${nextId}`;
  document.getElementById('next-name').textContent = next.title[lang];

  if (typeof gsap !== 'undefined') {
    gsap.from('.project-hero', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' });
    gsap.from('.project-gallery', { y: 30, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
    gsap.from('.project-body', { y: 30, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initCursor();
  renderProject();
});
