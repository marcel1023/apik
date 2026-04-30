/* JavaScript Document

TemplateMo 601 Chain Summit
https://templatemo.com/tm-601-chain-summit

*/

// =========================
// Animate counter numbers
// =========================
function animateCounters() {
   const counters = document.querySelectorAll('.stat-number');

   counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 200;
      let current = 0;

      const timer = setInterval(() => {
         current += increment;
         counter.textContent = Math.floor(current);

         if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
         }
      }, 10);
   });
}

// =========================
// Countdown timer
// =========================
function updateCountdown() {
   const eventDate = new Date('2026-11-14T09:00:00');
   const now = new Date();
   const diff = eventDate - now;

   if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
   }
}

// =========================
// Neural Network Animation
// =========================
function createNeuralNetwork() {
   const container = document.getElementById('neuralNetwork');
   const nodes = 20;

   for (let i = 0; i < nodes; i++) {
      const node = document.createElement('div');
      node.className = 'node';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(node);

      if (i > 0 && Math.random() > 0.5) {
         const connection = document.createElement('div');
         connection.className = 'connection';
         connection.style.left = Math.random() * 100 + '%';
         connection.style.top = Math.random() * 100 + '%';
         connection.style.width = Math.random() * 200 + 50 + 'px';
         connection.style.animationDelay = Math.random() * 3 + 's';
         container.appendChild(connection);
      }
   }
}

// =========================
// Floating Particles
// =========================
function createParticles() {
   const container = document.getElementById('particles');
   const particleCount = 50;

   for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (10 + Math.random() * 4) + 's';
      container.appendChild(particle);
   }
}

// =========================
// Schedule Tabs
// =========================
function showSchedule(day, event) {
   document.querySelectorAll('.schedule-content').forEach(content => {
      content.classList.remove('active');
   });

   document.querySelectorAll('.tab-btn').forEach(tab => {
      tab.classList.remove('active');
   });

   document.getElementById(day).classList.add('active');
   event.target.classList.add('active');
}

// =========================
// Mobile Menu
// =========================
function toggleMenu() {
   const mobileMenu = document.querySelector('.mobile-menu');
   const mobileNav = document.getElementById('mobileNav');

   mobileMenu.classList.toggle('active');
   mobileNav.classList.toggle('active');

   document.body.style.overflow =
      mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
   document.querySelector('.mobile-menu').classList.remove('active');
   document.getElementById('mobileNav').classList.remove('active');
   document.body.style.overflow = 'auto';
}

// =========================
// Timeline Toggle
// =========================
function toggleTimelineItem(item) {
   item.classList.toggle('expanded');
}

// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   });
});

// =========================
// Active Menu on Scroll
// =========================
function updateActiveMenuItem() {
   const sections = document.querySelectorAll('section[id]');
   const scrollPosition = window.scrollY + 100;

   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
         scrollPosition >= sectionTop &&
         scrollPosition < sectionTop + sectionHeight
      ) {
         document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === `#${sectionId}`) {
               link.classList.add('active');
            }
         });

         document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.classList.remove('active');

            if (link.getAttribute('href') === `#${sectionId}`) {
               link.classList.add('active');
            }
         });
      }
   });
}

// =========================
// Header Scroll Effect
// =========================
window.addEventListener('scroll', () => {
   const header = document.querySelector('header');

   if (window.scrollY > 100) {
      header.style.background = 'rgba(10,10,15,0.95)';
      header.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
   } else {
      header.style.background = 'rgba(10,10,15,0.9)';
      header.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
   }

   updateActiveMenuItem();
});

// =========================
// Scroll Animation Observer
// =========================
const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('animated');
      }
   });
}, {
   threshold: 0.1,
   rootMargin: '0px 0px -100px 0px'
});

function initScrollAnimations() {
   document.querySelectorAll('.section h2').forEach(heading => {
      heading.classList.add('animate-on-scroll');
   });

   document.querySelectorAll('.timeline-item').forEach((item, index) => {
      item.style.setProperty('--stagger', index + 1);
      item.classList.add('stagger-animation');
   });

   document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
   });
}

// =========================
// Hex Decorations
// =========================
function addHexDecorations() {
   const sections = document.querySelectorAll('.section');

   sections.forEach((section, index) => {
      if (index > 0) {
         const hexCount = 2 + Math.floor(Math.random() * 3);

         for (let i = 0; i < hexCount; i++) {
            const hex = document.createElement('div');
            hex.className = 'hex-decoration';
            hex.style.top = Math.random() * 80 + 10 + '%';
            hex.style.left = Math.random() * 80 + 10 + '%';
            hex.style.animationDelay = Math.random() * 6 + 's';

            section.style.position = 'relative';
            section.appendChild(hex);
         }
      }
   });
}

// =========================
// Slider XE8
// =========================
let currentSlide = 0;

function showSlide(index) {
   const slides = document.querySelectorAll('.slide');
   const dots = document.querySelectorAll('.slide-dots span');

   if (slides.length === 0) return;

   slides.forEach(slide => slide.classList.remove('active'));
   dots.forEach(dot => dot.classList.remove('active'));

   slides[index].classList.add('active');

   if (dots[index]) {
      dots[index].classList.add('active');
   }

   currentSlide = index;
}

function changeSlide(step) {
   const slides = document.querySelectorAll('.slide');
   let newIndex = currentSlide + step;

   if (newIndex >= slides.length) newIndex = 0;
   if (newIndex < 0) newIndex = slides.length - 1;

   showSlide(newIndex);
}

function goToSlide(index) {
   showSlide(index);
}

function autoSlide() {
   setInterval(() => {
      const slides = document.querySelectorAll('.slide');

      if (slides.length > 0) {
         changeSlide(1);
      }
   }, 4000);
}

// =========================
// Page Load
// =========================
window.addEventListener('load', () => {
   animateCounters();
   createNeuralNetwork();
   createParticles();
   updateCountdown();
   initScrollAnimations();
   addHexDecorations();
   showSlide(0);
   autoSlide();

   setInterval(updateCountdown, 1000);
});
