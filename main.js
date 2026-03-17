/* ============================================
   SIGNVM — Interactions
   ============================================ */

(function () {
    'use strict';

    // Formspree endpoint - Replace YOUR_FORM_ID with your Formspree form ID
    const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

    const trigger = document.getElementById('waitlist-trigger');
    const form = document.getElementById('waitlist-form');
    const confirmation = document.getElementById('confirmation');
    const input = form?.querySelector('.waitlist-input');
    const submitBtn = form?.querySelector('.waitlist-submit');

    // Show form on trigger click
    trigger?.addEventListener('click', () => {
        trigger.classList.add('is-hidden');
        form.classList.add('is-visible');
        input?.focus();
    });

    // Handle form submit
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = input?.value;
        if (!email) return;

        // Disable button while submitting
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '...';
        }

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                form.classList.remove('is-visible');
                confirmation.classList.add('is-visible');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Waitlist submission error:', error);
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Retry';
            }
        }
    });

})();
