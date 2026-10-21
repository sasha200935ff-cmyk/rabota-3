// ===== LOADER =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const progress = document.querySelector('.loader-progress');
  if (!loader || !progress) {
    initSite();
    return;
  }

  let width = 0;
  const interval = setInterval(() => {
    width += Math.random() * 28 + 8;
    if (width >= 100) {
      width = 100;
      clearInterval(interval);
      progress.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        initSite();
      }, 350);
    } else {
      progress.style.width = width + '%';
    }
  }, 90);
});

function initSite() {
  if (window.matchMedia('(pointer: coarse)').matches) {
    document.body.classList.add('touch');
  }

  initCursor();
  initTheme();
  initLang();
  initMagnetic();
  initHeaderScroll();
  initThree();
  initAnimations();
  initFilters();
  initTestimonials();
  initForm();
  initMobileMenu();
  initCounters();
  initTilt();
  initCursorTrail();
}

// ===== CUSTOM CURSOR =====
function initCursor() {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower || document.body.classList.contains('touch')) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverTargets = document.querySelectorAll('a, button, .magnetic, .work-card, .skill, .filter-btn');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
  });
}

// ===== THEME =====
function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem('theme') || 'light';
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(saved);

  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark');
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}

// ===== LANGUAGE =====
function initLang() {
  const toggle = document.querySelector('.lang-toggle');
  if (!toggle) return;

  let current = localStorage.getItem('lang') || 'ru';
  applyLang(current);

  toggle.addEventListener('click', () => {
    current = current === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', current);
    applyLang(current);
  });

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ru]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          // labels handle display
        } else {
          el.textContent = text;
        }
      }
    });
    document.querySelectorAll('.lang-ru, .lang-en').forEach(span => {
      span.classList.toggle('active', span.classList.contains('lang-' + lang));
    });
  }
}

// ===== MAGNETIC =====
function initMagnetic() {
  if (document.body.classList.contains('touch')) return;

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// ===== HEADER SCROLL =====
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== THREE.JS HERO =====
function initThree() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Particles
  const count = 800;
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    sizes[i] = Math.random() * 2.5 + 0.5;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.035,
    color: document.body.classList.contains('dark') ? 0xe8e8e8 : 0x2d2d2d,
    transparent: true,
    opacity: 0.55,
    sizeAttenuation: true,
    depthWrite: false
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Soft abstract torus / ring
  const torusGeo = new THREE.TorusGeometry(1.6, 0.08, 16, 100);
  const torusMat = new THREE.MeshBasicMaterial({
    color: document.body.classList.contains('dark') ? 0x444444 : 0xcccccc,
    transparent: true,
    opacity: 0.25,
    wireframe: true
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.rotation.x = Math.PI / 3;
  scene.add(torus);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  function animate() {
    requestAnimationFrame(animate);
    const t = performance.now() * 0.00015;
    points.rotation.y = t * 0.4 + mouseX * 0.3;
    points.rotation.x = t * 0.15 + mouseY * 0.2;
    torus.rotation.z = t * 0.6;
    torus.rotation.y = t * 0.3 + mouseX * 0.5;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // React to theme change
  const observer = new MutationObserver(() => {
    const isDark = document.body.classList.contains('dark');
    material.color.setHex(isDark ? 0xe8e8e8 : 0x2d2d2d);
    torusMat.color.setHex(isDark ? 0x444444 : 0xcccccc);
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

// ===== GSAP ANIMATIONS =====
function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero-badge', { y: 30, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });
  gsap.from('.hero-title .line', { y: 80, opacity: 0, duration: 1, stagger: 0.12, delay: 0.35, ease: 'power3.out' });
  gsap.from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.9, delay: 0.7, ease: 'power3.out' });
  gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, delay: 0.9, ease: 'power3.out' });

  // Section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: { trigger: header, start: 'top 85%' },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Work cards
  gsap.utils.toArray('.work-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      y: 50,
      opacity: 0,
      duration: 0.7,
      delay: (i % 2) * 0.1,
      ease: 'power3.out'
    });
  });

  // Process steps
  gsap.utils.toArray('.process-step').forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: { trigger: step, start: 'top 90%' },
      y: 40,
      opacity: 0,
      duration: 0.65,
      delay: i * 0.08,
      ease: 'power3.out'
    });
  });

  // Service cards
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      y: 40,
      opacity: 0,
      duration: 0.7,
      delay: (i % 2) * 0.1,
      ease: 'power3.out'
    });
  });
}

// ===== FILTERS =====
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.work-card');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ===== TESTIMONIALS =====
function initTestimonials() {
  const items = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  if (!items.length) return;

  let current = 0;
  let interval;

  function show(index) {
    items.forEach((item, i) => item.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    current = index;
  }

  function next() {
    show((current + 1) % items.length);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      show(parseInt(dot.dataset.index, 10));
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 5500);
  }

  resetInterval();
}

// ===== FORM (Formspree AJAX) =====
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const action = form.getAttribute('action') || '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const original = btn.textContent;
    const isEn = document.documentElement.lang === 'en';

    // Placeholder endpoint check
    if (action.includes('YOUR_FORM_ID')) {
      if (status) {
        status.hidden = false;
        status.className = 'form-status error';
        status.textContent = isEn
          ? 'Replace YOUR_FORM_ID in the form action with your Formspree ID (formspree.io).'
          : 'Замени YOUR_FORM_ID в action формы на свой ID с formspree.io (бесплатно).';
      }
      return;
    }

    btn.textContent = isEn ? 'Sending…' : 'Отправка…';
    btn.style.pointerEvents = 'none';
    btn.setAttribute('disabled', 'true');
    if (status) status.hidden = true;

    try {
      const data = new FormData(form);
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        btn.textContent = isEn ? 'Sent!' : 'Отправлено!';
        if (status) {
          status.hidden = false;
          status.className = 'form-status success';
          status.textContent = isEn
            ? 'Message sent. I will reply soon.'
            : 'Сообщение отправлено. Отвечу в ближайшее время.';
        }
        form.reset();
      } else {
        throw new Error('Network');
      }
    } catch (err) {
      btn.textContent = original;
      if (status) {
        status.hidden = false;
        status.className = 'form-status error';
        status.textContent = isEn
          ? 'Something went wrong. Please write to email or Telegram.'
          : 'Что-то пошло не так. Напишите на email или в Telegram.';
      }
    }

    setTimeout(() => {
      btn.textContent = original;
      btn.style.pointerEvents = '';
      btn.removeAttribute('disabled');
    }, 3200);
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const links = document.querySelectorAll('.mobile-link');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ===== COUNTERS (fixed) =====
function initCounters() {
  const stats = document.querySelectorAll('.stat-num');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (isNaN(target) || el.dataset.animated === '1') return;

      el.dataset.animated = '1';
      let current = 0;
      const duration = 1400;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(eased * target);
        el.textContent = current + (target > 20 && progress === 1 ? '+' : '');
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + (target > 20 ? '+' : '');
        }
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.4, rootMargin: '0px 0px -40px 0px' });

  stats.forEach(stat => {
    // If already in view on load — force start
    const rect = stat.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Will be caught by observer almost immediately
    }
    observer.observe(stat);
  });
}

// ===== 3D TILT CARDS =====
function initTilt() {
  if (document.body.classList.contains('touch')) return;
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    const max = 8;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * max * 2;
      const rotX = (0.5 - y) * max * 2;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ===== CURSOR TRAIL =====
function initCursorTrail() {
  if (document.body.classList.contains('touch')) return;
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);

  let tx = 0, ty = 0, mx = 0, my = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    trail.classList.add('active');
  });

  function anim() {
    tx += (mx - tx) * 0.08;
    ty += (my - ty) * 0.08;
    trail.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    requestAnimationFrame(anim);
  }
  anim();
}
