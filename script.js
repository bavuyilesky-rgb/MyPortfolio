// Interactive Feature 1: Dark / Light Mode Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
}

// Persist saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Interactive Feature 2: Digital Clock
function updateClock() {
  const clockElement = document.getElementById('digital-clock');
  if (clockElement) {
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);
updateClock();

// Interactive Feature 3: Show / Hide Career Vision
function toggleVision() {
  const vision = document.getElementById('vision-content');
  const btn = document.getElementById('toggle-vision-btn');
  if (vision.style.display === 'none' || vision.style.display === '') {
    vision.style.display = 'block';
    btn.innerText = 'Show Less';
  } else {
    vision.style.display = 'none';
    btn.innerText = 'Read Career Vision';
  }
}

// Interactive Feature 4: Media Slideshow
let currentSlideIndex = 0;
function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  slides[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
  slides[currentSlideIndex].classList.add('active');
}

// Interactive Feature 5: Contact Form Validation & Confirmation
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg = document.getElementById('contact-msg').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !msg) {
    feedback.innerText = 'Please complete all required fields.';
    feedback.style.color = '#ef4444';
    return;
  }

  feedback.innerText = `Thank you, ${name}! Your message has been sent to Hlokoma.`;
  feedback.style.color = '#22c55e';
  document.getElementById('contact-form').reset();
}