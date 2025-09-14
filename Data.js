// Target the icon
const themeToggleIcon = document.querySelector('.bx-moon');

// Add a click event listener to toggle the theme
themeToggleIcon.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});

