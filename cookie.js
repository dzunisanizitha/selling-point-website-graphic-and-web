// Animated mobile-friendly cookie banner
(function() {
  try {
    document.addEventListener("DOMContentLoaded", function() {
      console.log("COOKIE SCRIPT LOADED");

      // For testing, remove consent to see banner again (comment out in production)
      // localStorage.removeItem("cookieConsent");

      if (localStorage.getItem("cookieConsent") === "true") {
        console.log("Consent already given");
        return;
      }

      // Create banner
      var banner = document.createElement("div");
      banner.id = "cookie-banner";
      banner.style.cssText = `
        position: fixed !important;
        bottom: -100px; /* start off-screen */
        left: 0 !important;
        width: 100% !important;
        background: #ff3c78;
        color: #fff;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Arial, sans-serif;
        font-size: 14px;
        z-index: 999999;
        box-sizing: border-box;
        transition: bottom 0.5s ease-in-out;
      `;

      banner.innerHTML = `
        <span>
          We use cookies to improve your experience on <strong>ARIDESIGN</strong>.
          Read our <a href="privacy.html" style="color:#000; text-decoration:underline;">Privacy Policy</a>.
        </span>
        <button id="allowCookies" style="
          background:#000;
          color:#fff;
          padding:8px 16px;
          border:none;
          cursor:pointer;
          border-radius:4px;
        ">Allow</button>
      `;

      document.body.appendChild(banner);

      // Trigger slide-up animation
      setTimeout(() => {
        banner.style.bottom = "0";
      }, 100); // slight delay for smooth animation

      // Handle Allow click
      document.getElementById("allowCookies").addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "true");
        // Slide down before removing
        banner.style.bottom = "-100px";
        setTimeout(() => banner.remove(), 500); // match transition time
        console.log("Consent given, banner removed");
      });
    });
  } catch (e) {
    console.error("Cookie script error:", e);
  }
})();
