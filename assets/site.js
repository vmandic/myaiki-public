(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll('[data-copyright-year]').forEach(function (el) {
    el.textContent = year;
  });
})();
