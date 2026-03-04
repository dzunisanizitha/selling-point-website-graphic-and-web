document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector("#cookieBanner, .cookie-banner");
  const accept = document.querySelector("#cookieAccept, .cookie-accept");

  if (!banner || !accept) return;

  if (localStorage.getItem("cookiesAccepted") === "yes") {
    banner.style.display = "none";
    return;
  }

  accept.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "yes");
    banner.style.display = "none";
  });
});