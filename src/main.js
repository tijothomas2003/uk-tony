document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.getElementById('nav-links')
  const body = document.body

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show')
      body.classList.toggle('menu-open')
      if (menuToggle) {
        menuToggle.textContent = navLinks.classList.contains('show') ? '✕' : '☰'
      }
    })

    // Close menu when clicking a link
    document.querySelectorAll('#nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show')
        body.classList.remove('menu-open')
        if (menuToggle) {
          menuToggle.textContent = '☰'
        }
      })
    })
  }
})
