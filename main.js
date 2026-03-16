/* ============================================
   SIGNVM — Interactions
   ============================================ */

(function () {
    'use strict';

    const trigger = document.getElementById('waitlist-trigger');
    const form = document.getElementById('waitlist-form');
    const confirmation = document.getElementById('confirmation');
    const input = form?.querySelector('.waitlist-input');

    // Show form on trigger click
    trigger?.addEventListener('click', () => {
        trigger.classList.add('is-hidden');
        form.classList.add('is-visible');
        input?.focus();
    });

    // Handle form submit
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.remove('is-visible');
        confirmation.classList.add('is-visible');
    });

})();
