/* ============================================
   SIGNVM — Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Formspree endpoint
    var FORMSPREE_URL = 'https://formspree.io/f/mlgppqln';

    var trigger = document.getElementById('waitlist-trigger');
    var form = document.getElementById('waitlist-form');
    var confirmation = document.getElementById('confirmation');
    var input = form ? form.querySelector('.waitlist-input') : null;
    var submitBtn = form ? form.querySelector('.waitlist-submit') : null;

    // Show form on trigger click
    if (trigger) {
        trigger.addEventListener('click', function () {
            trigger.classList.add('is-hidden');
            if (form) {
                form.classList.add('is-visible');
            }
            if (input) {
                input.focus();
            }
        });
    }

    // Handle form submit
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            var email = input ? input.value : '';
            if (!email) return;

            // Disable button while submitting
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = '...';
            }

            fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(function (response) {
                if (response.ok) {
                    form.classList.remove('is-visible');
                    confirmation.classList.add('is-visible');
                } else {
                    throw new Error('Submission failed');
                }
            })
            .catch(function (error) {
                console.error('Waitlist submission error:', error);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Retry';
                }
            });
        });
    }
});
