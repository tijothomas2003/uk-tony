document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle') // Fix: Use querySelector with class
  const navLinks = document.getElementById('nav-links') // Fix: Use correct ID

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show') // Fix: Toggle 'show' class correctly
  })

  // Close menu when a link is clicked (for mobile)
  document.querySelectorAll('#nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show') // Fix: Ensure menu closes when clicking a link
    })
  })
})
