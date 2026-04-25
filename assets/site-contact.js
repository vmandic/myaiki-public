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

  var POPUP_INNER =
    '<p id="myaiki-contact-popup-title" class="myaiki-contact-popup__title">Contact</p>' +
    '<p class="myaiki-contact-popup__hint">Tap the address to open your mail app. You can also copy it.</p>' +
    '<p class="myaiki-contact-popup__email-row">' +
    '<a class="myaiki-contact-popup__mailto"></a>' +
    '</p>' +
    '<p class="myaiki-contact-popup__actions">' +
    '<button type="button" class="myaiki-contact-popup__cancel">Close</button>' +
    '</p>';

  function setMailtoLink(root, mailtoUrl, addr) {
    var mailLink = root.querySelector('.myaiki-contact-popup__mailto');
    mailLink.href = mailtoUrl;
    mailLink.textContent = addr;
  }

  var dialogEl = null;

  function ensureContactDialog() {
    if (dialogEl) return dialogEl;
    var dlg = d.createElement('dialog');
    dlg.className = 'myaiki-contact-dialog';
    dlg.setAttribute('aria-labelledby', 'myaiki-contact-popup-title');
    dlg.innerHTML = POPUP_INNER;
    d.body.appendChild(dlg);

    var mailLink = dlg.querySelector('.myaiki-contact-popup__mailto');
    var cancelBtn = dlg.querySelector('.myaiki-contact-popup__cancel');

    mailLink.addEventListener('click', function () {
      dlg.dataset.myaikiUsedMailto = '1';
      w.setTimeout(function () {
        track('contact_email_confirm', {});
      }, 0);
    });

    cancelBtn.addEventListener('click', function () {
      dlg.close('dismiss');
    });

    dlg.addEventListener('cancel', function (ev) {
      ev.preventDefault();
      dlg.close('dismiss');
    });

    dlg.addEventListener('close', function () {
      w.setTimeout(function () {
        if (dlg.dataset.myaikiUsedMailto === '1') return;
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
    wrap.setAttribute('aria-labelledby', 'myaiki-contact-popup-title');
    wrap.innerHTML = '<div class="myaiki-contact-overlay__card">' + POPUP_INNER + '</div>';

    var card = wrap.querySelector('.myaiki-contact-overlay__card');
    var mailLink = wrap.querySelector('.myaiki-contact-popup__mailto');
    var cancelBtn = wrap.querySelector('.myaiki-contact-popup__cancel');

    function closeOverlay() {
      wrap.hidden = true;
      wrap.setAttribute('aria-hidden', 'true');
      d.body.style.overflow = '';
    }

    mailLink.addEventListener('click', function () {
      wrap.dataset.myaikiUsedMailto = '1';
      w.setTimeout(function () {
        track('contact_email_confirm', {});
      }, 0);
    });

    cancelBtn.addEventListener('click', function () {
      if (wrap.dataset.myaikiUsedMailto !== '1') {
        w.setTimeout(function () {
          track('contact_email_cancel', {});
        }, 0);
      }
      closeOverlay();
    });

    wrap.addEventListener('click', function (ev) {
      if (ev.target === wrap) cancelBtn.click();
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

    wrap.hidden = true;
    d.body.appendChild(wrap);
    overlayEl = wrap;
    return wrap;
  }

  function openPopup(mailtoUrl, addr) {
    if (canUseNativeDialog()) {
      var dlg = ensureContactDialog();
      delete dlg.dataset.myaikiUsedMailto;
      setMailtoLink(dlg, mailtoUrl, addr);
      dlg.showModal();
      w.setTimeout(function () {
        track('contact_email_click', {});
      }, 0);
      w.setTimeout(function () {
        try {
          dlg.querySelector('.myaiki-contact-popup__mailto').focus();
        } catch (e) {
          void e;
        }
      }, 0);
      return;
    }

    var wrap = ensureContactOverlay();
    delete wrap.dataset.myaikiUsedMailto;
    setMailtoLink(wrap, mailtoUrl, addr);
    wrap.hidden = false;
    wrap.removeAttribute('aria-hidden');
    d.body.style.overflow = 'hidden';
    w.setTimeout(function () {
      track('contact_email_click', {});
    }, 0);
    w.setTimeout(function () {
      try {
        wrap.focus();
        wrap.querySelector('.myaiki-contact-popup__mailto').focus();
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
    openPopup(mailtoUrl, addr);
  });
})(window, document);
