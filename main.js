// This file handles the main functionality of the website, including event listeners for navigation and form submissions.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling (example)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you can add your form submission logic (e.g., AJAX request)
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }
    
});
const preview = document.getElementById('previewArea');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopupBtn');

preview.addEventListener('click', function() {
  popupOverlay.classList.add('active');
});

closeBtn.addEventListener('click', function() {
  popupOverlay.classList.remove('active');
});

// Optional: close popup when clicking outside the card
popupOverlay.addEventListener('click', function(e) {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});
// JavaScript
document.querySelectorAll('.learn-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('.service-card');
        card.classList.toggle('open');
    });
});
// Array of image URLs (replace with your own image file paths)
const images = [
  "meetings,jpg",
  "image2.jpg",
  "image3.jpg"
];

// Matching text for each image
const slides = [
  {
    title: "We are here to tell your story to the world.",
    text: "Press releases that help your business and personal brand reach new heights."
  },
  {
    title: "Turn data into decisions.",
    text: "Insightful reports that keep your team aligned and ahead."
  },
  {
    title: "Make every launch unforgettable.",
    text: "Strategic communication that amplifies your biggest moments."
  }
];

const hero = document.querySelector(".hero");
const headline = document.getElementById("headline");
const subtext = document.getElementById("subtext");

let index = 0;

function showSlide(i) {
  hero.style.backgroundImage = `url(${images[i]})`;
  headline.textContent = slides[i].title;
  subtext.textContent = slides[i].text;
}

// Show first slide immediately
showSlide(index);

// Change slide every 2 seconds (2000 ms)
setInterval(() => {
  index = (index + 1) % images.length;
  showSlide(index);
}, 2000);
