/* ============================================
   SIGNVM — Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    console.log('[v0] DOM loaded, initializing waitlist...');

    // Formspree endpoint
    var FORMSPREE_URL = 'https://formspree.io/f/mlgppqln';

    var trigger = document.getElementById('waitlist-trigger');
    var form = document.getElementById('waitlist-form');
    var confirmation = document.getElementById('confirmation');
    var input = form ? form.querySelector('.waitlist-input') : null;
    var submitBtn = form ? form.querySelector('.waitlist-submit') : null;

    console.log('[v0] Elements found:', { trigger: !!trigger, form: !!form, input: !!input });

    // Show form on trigger click
    if (trigger) {
        trigger.onclick = function (e) {
            console.log('[v0] Waitlist trigger clicked');
            e.preventDefault();
            trigger.classList.add('is-hidden');
            if (form) {
                form.classList.add('is-visible');
                console.log('[v0] Form should now be visible');
            }
            if (input) {
                setTimeout(function() {
                    input.focus();
                }, 100);
            }
        };
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
