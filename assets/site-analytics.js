/**
 * GA4 custom events for this static site. Uses MyaikiSiteTracking.trackEvent (respects opt-out).
 */
(function (w, d) {
  "use strict";

  function track(eventName, params) {
    var t = w.MyaikiSiteTracking;
    if (t && typeof t.trackEvent === "function") t.trackEvent(eventName, params);
  }

  function linkLabel(a) {
    return (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120);
  }

  function initNavTracking() {
    var header = d.querySelector(".site-header");
    if (!header) return;
    header.addEventListener("click", function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest("a") : null;
      if (!a || !header.contains(a)) return;
      var href = a.getAttribute("href") || "";
      if (!href) return;
      track("nav_click", {
        nav_href: href.slice(0, 240),
        link_text: linkLabel(a),
      });
    });
  }

  /** Prominent legal / repo links on the home page (not the header nav). */
  function initHomeCtaTracking() {
    var box = d.querySelector(".home-actions");
    if (!box) return;
    box.addEventListener("click", function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest("a") : null;
      if (!a || !box.contains(a)) return;
      var href = (a.getAttribute("href") || "").slice(0, 240);
      var lower = href.toLowerCase();
      var target = "other";
      if (lower.indexOf("terms.html") !== -1) target = "terms";
      else if (lower.indexOf("privacy.html") !== -1) target = "privacy";
      else if (lower.indexOf("github.com") !== -1) target = "github_repo";
      track("home_cta_click", {
        cta_target: target,
        link_href: href,
        link_text: linkLabel(a),
      });
    });
  }

  /** External links outside header and home CTAs (e.g. GitHub Issues in the legal notice, footer GitHub). */
  function initOutboundTracking() {
    d.addEventListener(
      "click",
      function (ev) {
        var a = ev.target && ev.target.closest ? ev.target.closest("a") : null;
        if (!a || !a.href) return;
        var url;
        try {
          url = new URL(a.href, w.location.href);
        } catch (err) {
          void err;
          return;
        }
        if (url.protocol !== "http:" && url.protocol !== "https:") return;
        if (url.origin === w.location.origin) return;
        var header = d.querySelector(".site-header");
        if (header && header.contains(a)) return;
        var home = d.querySelector(".home-actions");
        if (home && home.contains(a)) return;
        var href = (a.getAttribute("href") || "").slice(0, 240);
        var ctx = "other";
        if (a.closest(".site-notice")) ctx = "site_notice";
        else if (a.closest("main.legal")) ctx = "legal_main";
        else if (a.closest(".site-footer")) ctx = "footer";
        track("outbound_click", {
          link_href: href,
          link_text: linkLabel(a),
          link_context: ctx,
        });
      },
      false
    );
  }

  /** Fires once when a long legal page is read far enough, or immediately if the page fits in one screen. */
  function initLegalScrollEnd() {
    var main = d.querySelector("main.legal");
    if (!main) return;

    var path = (w.location.pathname || "").toLowerCase();
    var doc = "unknown";
    if (path.indexOf("terms") !== -1) doc = "terms";
    else if (path.indexOf("privacy") !== -1) doc = "privacy";

    var fired = false;
    var opts = { passive: true };

    function fire(extra) {
      if (fired) return;
      fired = true;
      w.removeEventListener("scroll", onScroll, opts);
      track("legal_page_scroll_end", Object.assign({ legal_document: doc }, extra || {}));
    }

    function measure() {
      if (fired) return;
      var root = d.documentElement;
      var total = root.scrollHeight - w.innerHeight;
      if (total <= 24) {
        fire({ engagement_type: "full_page_visible" });
        return;
      }
      var y = w.scrollY || root.scrollTop;
      if (y >= total * 0.92) {
        fire({
          engagement_type: "scrolled_near_end",
          scroll_depth_ratio:
            Math.round((y / Math.max(root.scrollHeight, 1)) * 100) / 100,
        });
      }
    }

    var raf = 0;
    function onScroll() {
      if (fired) return;
      if (raf) return;
      raf = w.requestAnimationFrame(function () {
        raf = 0;
        measure();
      });
    }

    w.addEventListener("scroll", onScroll, opts);
    measure();
  }

  function boot() {
    initNavTracking();
    initHomeCtaTracking();
    initOutboundTracking();
    initLegalScrollEnd();
  }

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window, document);
