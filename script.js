document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}