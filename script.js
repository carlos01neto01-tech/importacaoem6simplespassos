// Add the checkout URL here when the payment page is ready.
const CHECKOUT_URL = '';

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -45px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('[data-checkout-link]').forEach((link) => {
  const hint = link.parentElement.querySelector('[data-checkout-hint]');

  if (CHECKOUT_URL) {
    link.href = CHECKOUT_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    if (hint) hint.textContent = 'O link seguro de compra será ativado assim que o checkout for definido.';
  });
});
