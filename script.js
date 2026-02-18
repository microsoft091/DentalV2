(function () {
  var menuToggle = document.getElementById('menuToggle');
  var navMobile = document.getElementById('navMobile');
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function () {
      navMobile.classList.toggle('open');
    });
  }
})();
