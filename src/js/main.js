document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.form-open');
  const anchor = document.querySelector('.form-open-anchor');

  if (!button || !anchor) return;

  function toggleFloatButton() {
    const { top } = anchor.getBoundingClientRect();
	console.log(top);
    button.classList.toggle('float-button', top < 300);
  }

  window.addEventListener('scroll', toggleFloatButton, { passive: true });
  window.addEventListener('resize', toggleFloatButton);
  toggleFloatButton();
});