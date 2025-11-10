import './style.css'
import './animations.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { gsap } from 'gsap'

// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true
})

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle') as HTMLInputElement
const navbar = document.querySelector('.navbar') as HTMLElement

if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode')
      if (navbar) navbar.classList.add('navbar-dark')
    } else {
      document.body.classList.remove('dark-mode')
      if (navbar) navbar.classList.remove('navbar-dark')
    }
  })
}

// Form submission
const contactForm = document.getElementById('contactForm') as HTMLFormElement
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    alert('Thank you for your message! I will get back to you soon.')
    contactForm.reset()
  })
}

// Hero section animations
document.addEventListener('DOMContentLoaded', function() {
  // Animate hero text
  gsap.from('.hero-content h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  })
  
  gsap.from('.hero-content h2', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  })
  
  gsap.from('.hero-content p', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
  })
  
  gsap.from('.hero-content .btn', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6,
    stagger: 0.2
  })
  
  // Animate profile image
  gsap.from('.profile-img', {
    duration: 1,
    scale: 0.5,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 0.2
  })
  
  // Add floating animation to profile image
  const profileImg = document.querySelector('.profile-img')
  if (profileImg) {
    profileImg.classList.add('floating')
  }
})

// Scroll animations
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY
  const heroSection = document.getElementById('hero')
  
  if (heroSection) {
    // Parallax effect for hero background
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`
  }
  
  // Navbar background change on scroll
  if (navbar) {
    if (scrollPosition > 100) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }
  
  // Animate skill progress bars when they come into view
  const skillBars = document.querySelectorAll('.progress-bar')
  skillBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3
    
    if (barPosition < screenPosition) {
      bar.classList.add('animate')
    }
  })
})

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new (window as any).bootstrap.Tooltip(tooltipTriggerEl)
})