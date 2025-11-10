window.onload = function () {
  console.log("COOKIE SCRIPT LOADED"); // Debug message

  // Check if consent already given
  if (localStorage.getItem("cookieConsent") === "true") {
    console.log("Consent already given");
    return;
  }

  // Create banner
  var banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.style.cssText = `
    position: fixed; bottom: 0; left: 0; width: 100%;
    background: #ff3c78; color: #fff; padding: 15px 20px;
    display: flex; justify-content: space-between; align-items: center;
    font-family: Arial, sans-serif; font-size: 14px; z-index: 999999;
  `;

  banner.innerHTML = `
    <span>
      We use cookies to improve your experience on <strong>ARIDESIGN</strong>.
      Read our <a href="privacy.html" style="color:#000; text-decoration:underline;">Privacy Policy</a>.
    </span>
    <button id="allowCookies" style="
      background:#000; color:#fff; padding:8px 16px; border:none; cursor:pointer; border-radius:4px;
    ">Allow</button>
  `;

  document.body.appendChild(banner);

  // Button click
  document.getElementById("allowCookies").onclick = function () {
    localStorage.setItem("cookieConsent", "true");
    banner.remove();
  };
};
