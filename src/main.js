document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.getElementById('nav-links')

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show')
    })

    // Close menu when a link is clicked (for mobile)
    document.querySelectorAll('#nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show')
      })
    })
  }
})
