/* ============================================
   SIGNVM — Interactions
   ============================================ */

(function () {
    'use strict';

    // ---- Scroll reveal ----
    const reveals = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // ---- Nav scroll state ----
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    function handleNavScroll() {
        const y = window.scrollY;
        if (y > 60) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = y;
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ---- Mobile menu ----
    const burger = document.getElementById('nav-burger');
    const mobileNav = document.getElementById('mobile-nav');

    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active')
                ? 'hidden'
                : '';
        });

        mobileNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Smooth anchor scrolling ----
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---- Parallax on opening glow ----
    const opening = document.querySelector('.opening');
    if (opening) {
        window.addEventListener(
            'scroll',
            () => {
                const rect = opening.getBoundingClientRect();
                if (rect.bottom > 0) {
                    const progress = 1 - rect.bottom / (window.innerHeight + rect.height);
                    const pseudo = opening;
                    pseudo.style.setProperty(
                        '--glow-opacity',
                        Math.max(0, 1 - progress * 1.5)
                    );
                }
            },
            { passive: true }
        );
    }

    // ---- Stagger reveal for thesis blocks ----
    const thesisBlocks = document.querySelectorAll('.thesis-block');
    const thesisObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    thesisObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    thesisBlocks.forEach((el) => thesisObserver.observe(el));
})();
