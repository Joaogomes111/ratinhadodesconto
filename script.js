(() => {
  const INITIAL_SPOTS = 7;
  const MIN_SPOTS = 1;
  const UPDATE_SECONDS = 10;
  const OFFER_SECONDS = 9 * 60;
  const STORAGE_KEY = "ratinha-campaign-counter-start-v2";

  const countdown = document.querySelector("#countdown");
  const spots = document.querySelector("#spots");
  const spotsUnit = document.querySelector("#spots-unit");
  const stickySpots = document.querySelector("#sticky-spots");
  const stickySpotsUnit = document.querySelector("#sticky-spots-unit");
  const progress = document.querySelector("#spots-progress");
  const stickyCta = document.querySelector("#sticky-cta");
  const heroCta = document.querySelector('[data-cta="hero"]');

  let leadTracked = false;
  document.querySelectorAll('a[data-cta][href^="https://chat.whatsapp.com/"]').forEach((cta) => {
    cta.addEventListener("click", () => {
      if (leadTracked || typeof window.fbq !== "function") return;
      leadTracked = true;
      window.fbq("track", "Lead", {
        content_name: "Grupo oficial no WhatsApp",
        cta_location: cta.dataset.cta,
      });
    });
  });

  let startedAt = Date.now();
  try {
    const savedStart = Number(sessionStorage.getItem(STORAGE_KEY));
    if (Number.isFinite(savedStart) && savedStart > 0 && savedStart <= startedAt) {
      startedAt = savedStart;
    } else {
      sessionStorage.setItem(STORAGE_KEY, String(startedAt));
    }
  } catch {
    // The counter still works when session storage is unavailable.
  }

  const updateUrgency = () => {
    const elapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
    const reducedSpots = Math.floor(elapsed / UPDATE_SECONDS);
    const availableSpots = Math.max(MIN_SPOTS, INITIAL_SPOTS - reducedSpots);
    const secondsUntilOffer = OFFER_SECONDS - (elapsed % OFFER_SECONDS);
    const minutes = Math.floor(secondsUntilOffer / 60);
    const seconds = secondsUntilOffer % 60;

    countdown.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    countdown.dateTime = `PT${minutes}M${seconds}S`;
    spots.textContent = String(availableSpots);
    spotsUnit.textContent = availableSpots === 1 ? "vaga" : "vagas";
    stickySpots.textContent = String(availableSpots);
    stickySpotsUnit.textContent = availableSpots === 1 ? "vaga" : "vagas";
    progress.style.width = `${(availableSpots / INITIAL_SPOTS) * 100}%`;
  };

  const toggleStickyCta = () => {
    if (!heroCta || !stickyCta) return;
    const heroCtaBottom = heroCta.getBoundingClientRect().bottom;
    stickyCta.classList.toggle("is-visible", heroCtaBottom < 0);
  };

  updateUrgency();
  window.setInterval(updateUrgency, 1000);
  window.addEventListener("scroll", toggleStickyCta, { passive: true });
  window.addEventListener("resize", toggleStickyCta);
  toggleStickyCta();
})();
