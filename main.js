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

    // ---- Waitlist toggle ----
    const waitlistBtn = document.getElementById('waitlist-btn');
    const waitlistForm = document.getElementById('waitlist-form');
    const confirmation = document.getElementById('confirmation');

    if (waitlistBtn && waitlistForm) {
        waitlistBtn.addEventListener('click', () => {
            waitlistBtn.style.display = 'none';
            waitlistForm.classList.add('is-visible');
            waitlistForm.querySelector('input').focus();
        });

        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            waitlistForm.classList.remove('is-visible');
            waitlistForm.style.display = 'none';
            confirmation.classList.add('is-visible');
        });
    }

})();
