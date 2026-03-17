/* ============================================
   SIGNVM — Interactions
   ============================================ */

(function () {
    'use strict';

    // Google Apps Script Web App URL - Replace with your own
    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

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
            // Send to Google Sheets
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, timestamp: new Date().toISOString() })
            });

            // Show confirmation
            form.classList.remove('is-visible');
            confirmation.classList.add('is-visible');
        } catch (error) {
            console.error('Waitlist submission error:', error);
            // Still show confirmation (no-cors won't return response)
            form.classList.remove('is-visible');
            confirmation.classList.add('is-visible');
        }
    });

})();
