/* chinnzz.com: menu, copy button, live status, footer year. No framework. */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  var lastFocus = null;

  function openMenu() {
    lastFocus = document.activeElement;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
    var first = menu.querySelector("a");
    if (first) first.focus();
  }
  function closeMenu() {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function trapTab(e) {
    var items = menu.querySelectorAll("a");
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (menu.hidden) openMenu();
      else closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) closeMenu();
      if (e.key === "Tab" && !menu.hidden) trapTab(e);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }

  /* ---------- Copy code ---------- */
  var copyBtn = document.getElementById("copyCode");
  var codeValue = document.getElementById("codeValue");
  if (copyBtn && codeValue) {
    var original = copyBtn.querySelector("span").textContent;
    var timer = null;
    copyBtn.addEventListener("click", function () {
      var code = codeValue.textContent.trim();
      function done() {
        copyBtn.classList.add("is-copied");
        copyBtn.querySelector("span").textContent = "Copied";
        clearTimeout(timer);
        timer = setTimeout(function () {
          copyBtn.classList.remove("is-copied");
          copyBtn.querySelector("span").textContent = original;
        }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done, function () {
          fallbackCopy(code);
          done();
        });
      } else {
        fallbackCopy(code);
        done();
      }
    });
    function fallbackCopy(code) {
      var range = document.createRange();
      range.selectNodeContents(codeValue);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  /* ---------- Live status ---------- */
  var pill = document.getElementById("livePill");
  var pillText = document.getElementById("liveText");
  var watchCta = document.getElementById("watchCta");
  var watchCtaLabel = watchCta ? watchCta.querySelector("span") : null;
  var streamCard = document.getElementById("streamCard");
  var streamStatus = document.getElementById("streamStatus");
  var streamTitle = document.getElementById("streamTitle");
  var streamCta = document.getElementById("streamCta");

  var LABELS = {
    live: "Watch live on Kick",
    offline: "Watch on Kick",
    unknown: "Watch on Kick",
  };

  function setPill(state, text) {
    if (!pill) return;
    if (pill.getAttribute("data-state") !== state || pillText.textContent !== text) {
      pill.setAttribute("data-state", state);
      pillText.textContent = text;
    }
  }

  function setWatch(label) {
    if (watchCtaLabel && watchCtaLabel.textContent !== label) watchCtaLabel.textContent = label;
    if (streamCta) {
      var s = streamCta.querySelector("span");
      if (s && s.textContent !== label) s.textContent = label;
    }
  }

  function render(data) {
    var state = data && data.status === "live" ? "live" : data && data.status === "offline" ? "offline" : "unknown";
    var d = streamCard ? streamCard.dataset : {};
    if (state === "live") {
      var viewers = typeof data.viewers === "number" ? formatViewers(data.viewers) : null;
      setPill("live", viewers ? "Live now · " + viewers + " watching" : "Live now");
      setWatch(LABELS.live);
      if (streamCard) streamCard.setAttribute("data-state", "live");
      if (streamStatus) streamStatus.textContent = d.liveHeading || "Live now";
      if (streamTitle) streamTitle.textContent = data.title || "Streaming on Kick right now.";
    } else if (state === "offline") {
      setPill("offline", "Offline. Back soon.");
      setWatch(LABELS.offline);
      if (streamCard) streamCard.setAttribute("data-state", "offline");
      if (streamStatus) streamStatus.textContent = d.offlineHeading || "Offline";
      if (streamTitle) streamTitle.textContent = d.offlineBody || "";
    } else {
      setPill("unknown", "Watch on Kick");
      setWatch(LABELS.unknown);
      if (streamCard) streamCard.setAttribute("data-state", "unknown");
      if (streamStatus) streamStatus.textContent = d.neutralHeading || "";
      if (streamTitle) streamTitle.textContent = d.neutralBody || "";
    }
  }

  function formatViewers(n) {
    if (n >= 1000) {
      var k = n / 1000;
      return (k >= 100 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, "")) + "K";
    }
    return String(n);
  }

  var pollTimer = null;
  var inFlight = null;

  function check() {
    if (inFlight) inFlight.abort();
    var controller = new AbortController();
    inFlight = controller;
    var started = Date.now();
    fetch("/api/live", { signal: controller.signal, cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("bad status");
        return res.json();
      })
      .then(function (data) {
        // Treat responses older than 3 minutes as stale.
        var checked = data && data.checkedAt ? Date.parse(data.checkedAt) : 0;
        if (checked && Date.now() - checked > 180000) {
          render({ status: "unknown" });
        } else {
          render(data);
        }
      })
      .catch(function () {
        render({ status: "unknown" });
      })
      .finally(function () {
        inFlight = null;
        void started;
      });
  }

  function schedule() {
    clearInterval(pollTimer);
    pollTimer = setInterval(function () {
      if (!document.hidden) check();
    }, 60000);
  }

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) check();
  });
  window.addEventListener("pagehide", function () {
    if (inFlight) inFlight.abort();
    clearInterval(pollTimer);
  });

  if (pill) {
    check();
    schedule();
  }
})();
