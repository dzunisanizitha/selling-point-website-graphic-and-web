// Hamburger menu on about page
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active"); // toggles open/close
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active"); // close when clicking X
});

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Testimony slideshow
const slider = document.querySelector('.testimonials-slider');
const slides = document.querySelectorAll('.testimonial-card');
let index = 0;

function slideTestimonials() {
  index++;
  if(index >= slides.length) index = 0;
  slider.style.transform = `translateX(-${index * 100}%)`; // moves exactly one card at a time
}

// Slide every 4 seconds
setInterval(slideTestimonials, 4000);

// Pop-up reveal animations
document.addEventListener("DOMContentLoaded", function() {
  // select all headings, paragraphs, buttons, spans inside sections
  const elements = document.querySelectorAll(
    "section h1, section h2, section h3, section p, section a, section span"
  );

  // add pop-up class to all selected elements
  elements.forEach(el => el.classList.add('pop-up'));

  // function to reveal elements in viewport
  function reveal() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 50) {
        el.classList.add('revealed');
      }
    });
  }

  // trigger on scroll and on page load
  window.addEventListener('scroll', reveal);
  reveal();
});
// Hamburger menu on ABOUT PAGE DONE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".image-slider");

  sliders.forEach(slider => {
    const images = slider.querySelectorAll("img");
    let index = 0;
    images[index].classList.add("active");

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 4000); // 4 seconds per image
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // select all headings, paragraphs, buttons, spans inside sections
  const elements = document.querySelectorAll(
    "section h1, section h2, section h3, section p, section a, section span"
  );

  // add pop-up class to all selected elements
  elements.forEach(el => el.classList.add('pop-up'));

  // function to reveal elements in viewport
  function reveal() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 50) {
        el.classList.add('revealed');
      }
    });
  }

  // trigger on scroll and on page load
  window.addEventListener('scroll', reveal);
  reveal();
});

  // ARTWORK PORTFOLIO DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// GRAPHIC DESIGN PAGE>>>>>
document.addEventListener("DOMContentLoaded", function() {
  // ===== TESTIMONIALS SLIDER =====
  const slider = document.querySelector('.testimonials-slider');
  const slides = document.querySelectorAll('.testimonial-card');

  if (slider && slides.length > 1) { // only run if more than 1 slide
    let index = 0;
    function slideTestimonials() {
      index++;
      if (index >= slides.length) index = 0;
      slider.style.transform = `translateX(-${index * 100}%)`;
      slider.style.transition = 'transform 0.5s ease-in-out'; // smooth animation
    }
    setInterval(slideTestimonials, 4000);
  }

  // ===== POP-UP ANIMATION =====
  const elements = document.querySelectorAll(
    "section h1, section h2, section h3, section p, section a, section span"
  );
  elements.forEach(el => el.classList.add('pop-up'));

  function reveal() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 50) {
        el.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal();
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


// -------------------------
// Cookie banner homepage>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// -------------------------
if (!localStorage.getItem("cookieConsent")) {
  const banner = document.createElement("div");
  banner.id = "cookie-banner";

  banner.innerHTML = `
    <span>
      We use cookies to improve your experience on <strong>ARIDESIGN</strong>.
      Read our <a href="privacy-policy.html">Privacy Policy</a>.
    </span>
    <button id="allowCookies">Allow</button>
  `;

  document.body.appendChild(banner);

  // Slide-up animation
  setTimeout(() => {
    banner.style.bottom = "0";
  }, 100);

  document
    .getElementById("allowCookies")
    .addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      banner.style.bottom = "-120px";
      setTimeout(() => banner.remove(), 500);
    });
}


document.addEventListener("DOMContentLoaded", function() {

  // -------------------------
  // 3. Typewriter
  // -------------------------
  const headline = "Helping Your Brand Stand Out with Graphic Design, Web & Photography";
  let i = 0;
  const typeEl = document.getElementById("typewriter");

  function typeWriter() {
    if (!typeEl) return;
    if (i < headline.length) {
      typeEl.innerHTML += headline.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }
  typeWriter();
  

  // -------------------------
  // 4. Scroll reveal
  // -------------------------
  const elements = document.querySelectorAll(
    "section h1, section h2, section h3, section p, section a, section span"
  );
  elements.forEach(el => el.classList.add('pop-up'));

  function reveal() {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 50) el.classList.add('revealed');
    });
  }

  window.addEventListener('scroll', reveal);
  reveal();

  // -------------------------
  // 5. Portfolio slider
  // -------------------------
  const portfolioSliders = document.querySelectorAll('.portfolio-slider');

  portfolioSliders.forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.portfolio-card');
    let index = 0;

    function slidePortfolio() {
      if (slides.length === 0) return; // safety check
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
      track.style.transition = 'transform 0.5s ease-in-out';
      index++;
      if (index >= slides.length) index = 0;
    }

    setInterval(slidePortfolio, 4000);
  });

});
  // -------------------------
  // HOMEPAGE DONE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // -------------------------
  // Portfolio page
  document.addEventListener("DOMContentLoaded", function() {
  // select all headings, paragraphs, buttons, spans inside sections
  const elements = document.querySelectorAll(
    "section h1, section h2, section h3, section p, section a, section span"
  );

  // add pop-up class to all selected elements
  elements.forEach(el => el.classList.add('pop-up'));

  // function to reveal elements in viewport
  function reveal() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 50) {
        el.classList.add('revealed');
      }
    });
  }

  // trigger on scroll and on page load
  window.addEventListener('scroll', reveal);
  reveal();
});

  // WEB DESIGN PAGE JS STARTS HERE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector(".slides");
  const testimonials = document.querySelectorAll(".testimonial");
  const dotsContainer = document.querySelector(".dots");

  if (!slides || testimonials.length === 0 || !dotsContainer) return;

  let currentIndex = 0;

  // Create navigation dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  // Auto slide every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showSlide(currentIndex);
  }, 3000);
});





document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default submission
  const form = e.target;
  const data = new FormData(form);

  fetch("https://formspree.io/f/mrbykzgp", {
    method: "POST",
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      window.location.href = "https://aridesign.co.za/thank-you.html"; // redirect on success
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  }).catch(error => {
    alert("Oops! There was a problem submitting your form.");
  });
});



