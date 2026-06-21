const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

function updateCountdown() {
  const countdown = document.querySelector('.countdown');
  if (!countdown) return;

  const eventDate = new Date(countdown.dataset.eventDate);
  const now = new Date();
  const diff = eventDate - now;

  if (Number.isNaN(eventDate.getTime()) || diff <= 0) {
    document.querySelector('#days').textContent = '0';
    document.querySelector('#hours').textContent = '0';
    document.querySelector('#minutes').textContent = '0';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.querySelector('#days').textContent = days;
  document.querySelector('#hours').textContent = hours;
  document.querySelector('#minutes').textContent = minutes;
}

updateCountdown();
setInterval(updateCountdown, 60_000);
