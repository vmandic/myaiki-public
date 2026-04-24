'use strict';
(function (w) {
  function buildOperatorEmail() {
    return ['mandic.vedran', '+', 'myaiki', '\u0040', 'gmail', '.', 'com'].join('');
  }

  function pagePath() {
    try {
      return (w.location.pathname || '/').slice(0, 120);
    } catch (err) {
      void err;
      return '';
    }
  }

  function track(eventName, params) {
    var t = w.MyaikiSiteTracking;
    if (!t || typeof t.trackEvent !== 'function') return;
    var extra = params && typeof params === 'object' ? params : {};
    t.trackEvent(eventName, Object.assign({ page_path: pagePath() }, extra));
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest('[data-contact-email]') : null;
    if (!btn) return;
    ev.preventDefault();
    track('contact_email_click', {});
    if (
      !w.confirm(
        'Contact the author via email? If you continue, your default mail app may open with a new message.'
      )
    ) {
      track('contact_email_cancel', {});
      return;
    }
    track('contact_email_confirm', {});
    var addr = buildOperatorEmail();
    var subject = 'Myaiki (website)';
    w.location.href = 'mailto:' + addr + '?subject=' + encodeURIComponent(subject);
  });
})(window);
