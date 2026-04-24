'use strict';
(function (w, d) {
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

  function canUseNativeDialog() {
    return (
      typeof HTMLDialogElement !== 'undefined' &&
      typeof HTMLDialogElement.prototype.showModal === 'function'
    );
  }

  var dialogEl = null;

  function ensureContactDialog() {
    if (dialogEl) return dialogEl;
    var dlg = d.createElement('dialog');
    dlg.className = 'myaiki-contact-dialog';
    dlg.setAttribute('aria-labelledby', 'myaiki-contact-dialog-title');
    dlg.innerHTML =
      '<p id="myaiki-contact-dialog-title" class="myaiki-contact-dialog__title">Email the operator</p>' +
      '<p class="myaiki-contact-dialog__body">Use the link below so your mail app can open. This site does not show the address as plain text.</p>' +
      '<p class="myaiki-contact-dialog__actions">' +
      '<a class="myaiki-contact-dialog__mailto" href="#">Open in email app</a>' +
      '<button type="button" class="myaiki-contact-dialog__cancel">Cancel</button>' +
      '</p>';
    d.body.appendChild(dlg);

    var mailLink = dlg.querySelector('.myaiki-contact-dialog__mailto');
    var cancelBtn = dlg.querySelector('.myaiki-contact-dialog__cancel');

    cancelBtn.addEventListener('click', function () {
      dlg.close('cancel');
    });

    dlg.addEventListener('cancel', function (ev) {
      ev.preventDefault();
      dlg.close('cancel');
    });

    mailLink.addEventListener('click', function () {
      dlg.dataset.myaikiMailed = '1';
      w.setTimeout(function () {
        track('contact_email_confirm', {});
      }, 0);
      w.setTimeout(function () {
        try {
          if (dlg.open) dlg.close();
        } catch (e) {
          void e;
        }
      }, 200);
    });

    dlg.addEventListener('close', function () {
      w.setTimeout(function () {
        if (dlg.dataset.myaikiMailed === '1') return;
        track('contact_email_cancel', {});
      }, 0);
    });

    dialogEl = dlg;
    return dlg;
  }

  var overlayEl = null;

  function ensureContactOverlay() {
    if (overlayEl) return overlayEl;
    var wrap = d.createElement('div');
    wrap.className = 'myaiki-contact-overlay';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'myaiki-contact-overlay-title');
    wrap.innerHTML =
      '<div class="myaiki-contact-overlay__card">' +
      '<p id="myaiki-contact-overlay-title" class="myaiki-contact-dialog__title">Email the operator</p>' +
      '<p class="myaiki-contact-dialog__body">Use the link below so your mail app can open. This site does not show the address as plain text.</p>' +
      '<p class="myaiki-contact-dialog__actions">' +
      '<a class="myaiki-contact-overlay__mailto myaiki-contact-dialog__mailto" href="#">Open in email app</a>' +
      '<button type="button" class="myaiki-contact-overlay__cancel myaiki-contact-dialog__cancel">Cancel</button>' +
      '</p>' +
      '</div>';

    var card = wrap.querySelector('.myaiki-contact-overlay__card');
    var mailLink = wrap.querySelector('.myaiki-contact-overlay__mailto');
    var cancelBtn = wrap.querySelector('.myaiki-contact-overlay__cancel');

    function closeOverlay() {
      wrap.hidden = true;
      wrap.setAttribute('aria-hidden', 'true');
      d.body.style.overflow = '';
    }

    cancelBtn.addEventListener('click', function () {
      closeOverlay();
      w.setTimeout(function () {
        track('contact_email_cancel', {});
      }, 0);
    });

    wrap.addEventListener('click', function (ev) {
      if (ev.target === wrap) {
        cancelBtn.click();
      }
    });

    wrap.tabIndex = -1;
    wrap.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        cancelBtn.click();
      }
    });

    card.addEventListener('click', function (ev) {
      ev.stopPropagation();
    });

    mailLink.addEventListener('click', function () {
      wrap.dataset.myaikiMailed = '1';
      w.setTimeout(function () {
        track('contact_email_confirm', {});
      }, 0);
      w.setTimeout(function () {
        closeOverlay();
      }, 200);
    });

    wrap.hidden = true;
    d.body.appendChild(wrap);
    overlayEl = wrap;
    return wrap;
  }

  function openContactOverlay(mailtoUrl) {
    var wrap = ensureContactOverlay();
    delete wrap.dataset.myaikiMailed;
    var mailLink = wrap.querySelector('.myaiki-contact-overlay__mailto');
    mailLink.href = mailtoUrl;
    wrap.hidden = false;
    wrap.removeAttribute('aria-hidden');
    d.body.style.overflow = 'hidden';
    w.setTimeout(function () {
      track('contact_email_click', {});
    }, 0);
    w.setTimeout(function () {
      try {
        wrap.focus();
        mailLink.focus();
      } catch (e) {
        void e;
      }
    }, 0);
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest('[data-contact-email]') : null;
    if (!btn) return;
    ev.preventDefault();
    var addr = buildOperatorEmail();
    var subject = 'Myaiki (website)';
    var mailtoUrl = 'mailto:' + addr + '?subject=' + encodeURIComponent(subject);

    if (canUseNativeDialog()) {
      var dlg = ensureContactDialog();
      delete dlg.dataset.myaikiMailed;
      var dlgMail = dlg.querySelector('.myaiki-contact-dialog__mailto');
      dlgMail.href = mailtoUrl;
      dlg.showModal();
      w.setTimeout(function () {
        track('contact_email_click', {});
      }, 0);
      w.setTimeout(function () {
        try {
          dlgMail.focus();
        } catch (e) {
          void e;
        }
      }, 0);
      return;
    }

    openContactOverlay(mailtoUrl);
  });
})(window, document);
