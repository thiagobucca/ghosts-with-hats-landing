/**
 * ============================================
 * GHOSTS WITH HATS - Landing Page
 * Desenvolvido por Pinatra Studios
 * ============================================
 */

// ============================================
// Translations
// ============================================
const translations = {
    en: {
        'story.title': 'The Mystery Unfolds',
        'story.p1': 'In a world where all humans have mysteriously transformed into ghosts, follow <strong>Linda</strong> on her journey to uncover the truth.',
        'story.p2': 'What caused this supernatural transformation? Why do these spectral beings now race through haunted tracks, collecting ancient relics?',
        'story.p3': 'The answers lie ahead... if you can reach the finish line first.',
        'features.tracks.title': 'Dynamic Tracks',
        'features.tracks.desc': 'Race through 24 unique tracks filled with obstacles, shortcuts, and secrets. Each track offers a different challenge across 10 difficulty levels.',
        'features.ghosts.title': 'Playable Ghosts',
        'features.ghosts.desc': 'Choose from 6 unique characters: Linda, Josh, Mikael, Kid, Grandpa, and Hanna. Each ghost brings their own personality and playstyle to the race.',
        'features.progression.title': 'Deep Progression',
        'features.progression.desc': 'Collect relics, upgrade your stats, and unlock powerful abilities through an extensive talent tree. Build offensive or defensive strategies to dominate the competition.',
        'gameplay.title': 'Intense Arcade Racing',
        'gameplay.lead': 'Ghosts With Hats combines fast-paced top-down racing with strategic combat mechanics.',
        'gameplay.list1': '<strong>Attack & Sprint</strong> — Use special abilities to defeat opponents and steal their relics',
        'gameplay.list2': '<strong>Relic System</strong> — Collect relics to progress, but lose them if you\'re defeated',
        'gameplay.list3': '<strong>Talent Tree</strong> — Customize your playstyle with offensive or defensive builds',
        'gameplay.list4': '<strong>Story Mode</strong> — Uncover the mystery across multiple chapters and difficulties',
        'characters.title': 'The Ghosts',
        'characters.linda': 'Nerves on edge',
        'characters.josh': 'The watchful police officer',
        'characters.mikael': 'The man who just needs a cup of coffee',
        'characters.kid': 'The cheerful child who lives in a fantasy world',
        'characters.grandpa': 'The grumpy old man',
        'characters.hanna': 'The calm and wise one',
        'platforms.title': 'Available On',
        'platforms.release': 'Release',
        'platforms.languages': 'Languages',
        'platforms.languagesValue': '9 Languages',
        'platforms.controller': 'Controller',
        'platforms.controllerValue': 'Full Support'
    },
    pt: {
        'story.title': 'Uma história envolvente com pitadas de humor',
        'story.p1': 'Em um mundo onde todos os humanos misteriosamente se transformaram em fantasmas, siga <strong>Linda</strong> em sua jornada para descobrir a verdade.',
        'story.p2': 'O que causou essa transformação sobrenatural? Por que esses seres espectrais agora correm por pistas assombradas, coletando relíquias antigas?',
        'story.p3': 'As respostas estão à frente... se você conseguir cruzar a linha de chegada primeiro.',
        'features.tracks.title': 'Pistas Dinâmicas',
        'features.tracks.desc': 'Corra por 24 pistas únicas cheias de obstáculos, atalhos e segredos. Cada pista oferece um desafio diferente em 10 níveis de dificuldade.',
        'features.ghosts.title': 'Fantasmas Jogáveis',
        'features.ghosts.desc': 'Escolha entre 6 personagens únicos: Linda, Josh, Mikael, Kid, Grandpa e Hanna. Cada fantasma traz sua própria personalidade e estilo de jogo.',
        'features.progression.title': 'Progressão Profunda',
        'features.progression.desc': 'Colete relíquias, melhore suas estatísticas e desbloqueie habilidades poderosas através de uma extensa árvore de talentos. Monte estratégias ofensivas ou defensivas.',
        'gameplay.title': 'Corrida Arcade Insana',
        'gameplay.lead': 'Ghosts With Hats combina corrida top-down em ritmo acelerado com mecânicas de combate estratégico.',
        'gameplay.list1': '<strong>Ataque & Sprint</strong> — Use habilidades especiais para derrotar oponentes e roubar suas relíquias',
        'gameplay.list2': '<strong>Sistema de Relíquias</strong> — Colete relíquias para progredir, mas perca-as se for derrotado',
        'gameplay.list3': '<strong>Árvore de Talentos</strong> — Personalize seu estilo de jogo com builds ofensivas ou defensivas',
        'gameplay.list4': '<strong>Modo História</strong> — Descubra o mistério através de múltiplos capítulos e dificuldades',
        'characters.title': 'Os Fantasmas',
        'characters.linda': 'Nervos à flor da pele',
        'characters.josh': 'O policial vigilante',
        'characters.mikael': 'O homem que só precisa de uma xícara de café',
        'characters.kid': 'A criança alegre que vive em um mundo de fantasia',
        'characters.grandpa': 'O velho rabugento',
        'characters.hanna': 'A calma e sábia',
        'platforms.title': 'Disponível Em',
        'platforms.release': 'Lançamento',
        'platforms.languages': 'Idiomas',
        'platforms.languagesValue': '9 Idiomas',
        'platforms.controller': 'Controle',
        'platforms.controllerValue': 'Suporte Completo'
    }
};

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initParallax();
    initRevealAnimations();
    initSmoothScroll();
    initLanguageSwitcher();
});

// ============================================
// Header Scroll Effect
// ============================================
function initHeader() {
    const header = document.getElementById('header');
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    updateHeader();
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') &&
            !menu.contains(e.target) &&
            !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// Parallax Effects
// ============================================
function initParallax() {
    const heroParallax = document.querySelector('.hero-parallax-bg');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;

        // Hero parallax
        if (heroParallax) {
            const heroOffset = scrollY * 0.4;
            heroParallax.style.transform = `scale(1.1) translateY(${heroOffset}px)`;
        }

        // Section parallax layers
        parallaxLayers.forEach(layer => {
            const section = layer.closest('.section');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const speed = parseFloat(layer.dataset.speed) || 0.1;

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = (rect.top - window.innerHeight) * speed;
                layer.style.transform = `translateY(${offset}px)`;
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    updateParallax();
}

// ============================================
// Reveal on Scroll Animations
// ============================================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ============================================
// Console Easter Egg
// ============================================
console.log(`
%c👻 GHOSTS WITH HATS 👻
%cDeveloped by Pinatra Studios
%chttps://store.steampowered.com/app/4040130/Ghosts_With_Hats/
`,
    'font-family: serif; font-size: 20px; color: #8b7fcc; font-weight: bold;',
    'font-family: serif; font-size: 12px; color: #a8a4b8;',
    'font-family: serif; font-size: 10px; color: #6b6880;'
);

// ============================================
// Page Load Complete
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// Language Switcher
// ============================================
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('language') || 'en';

    // Set initial language
    setLanguage(savedLang);
    updateActiveButton(savedLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            updateActiveButton(lang);
            localStorage.setItem('language', lang);
        });
    });

    function updateActiveButton(lang) {
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }
}
