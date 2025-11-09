// cookie.js - ARIDESIGN cookie consent banner
(function() {
  if(localStorage.getItem('cookieConsent') === 'true') return;

  // Create banner container
  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.style.cssText = `
    position: fixed; bottom: 0; left: 0; width: 100%;
    background: #ff3c78; color: #fff; padding: 12px 20px;
    display: flex; justify-content: space-between; align-items: center;
    font-family: Arial, sans-serif; font-size: 14px; z-index: 9999;
    flex-wrap: wrap;
  `;
  banner.innerHTML = `
    <span>We use cookies to improve your experience on <strong>ARIDESIGN</strong>. By continuing, you agree to our <a href="privacy.html" style="color:#333; text-decoration:underline;">Privacy Policy</a>.</span>
    <button id="cookie-accept" style="
      background: #333;
      color: #fff;
      border: none;
      padding: 6px 14px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      margin-left: 10px;
    ">Allow</button>
  `;

  // Add banner to body
  document.body.appendChild(banner);

  // Click handler
  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'true');
    banner.style.display = 'none';
  });
})();
