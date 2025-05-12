/**
 * Cash Cleaner Simulator - Main JavaScript
 * This file contains the main functionality for the Cash Cleaner Simulator website
 */

// AMP doesn't allow custom JavaScript in the main document, but we can prepare this file
// for potential use in non-AMP contexts or for future implementation in AMP components

(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
    animationSpeed: 300,
    scrollOffset: 50
  };
  
  // DOM Elements
  const DOM = {
    navLinks: document.querySelectorAll('.nav-links a'),
    featureCards: document.querySelectorAll('.feature-card'),
    testimonials: document.querySelectorAll('.testimonial'),
    faqItems: document.querySelectorAll('amp-accordion section')
  };
  
  // Utility Functions
  const UTILS = {
    /**
     * Smooth scroll to target element
     * @param {Element} target - The target element to scroll to
     */
    scrollTo: function(target) {
      const targetPosition = target.getBoundingClientRect().top;
      const offsetPosition = targetPosition - CONFIG.scrollOffset;
      
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    },
    
    /**
     * Add animation class to element when it comes into view
     * @param {Element} element - The element to animate
     */
    animateOnScroll: function(element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(element);
    }
  };
  
  // Event Handlers
  const HANDLERS = {
    /**
     * Handle navigation link clicks for smooth scrolling
     * @param {Event} e - The click event
     */
    navLinkClick: function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          UTILS.scrollTo(targetElement);
        }
      }
    },
    
    /**
     * Initialize animations for elements
     */
    initAnimations: function() {
      // Animate feature cards
      DOM.featureCards.forEach(card => {
        UTILS.animateOnScroll(card);
      });
      
      // Animate testimonials
      DOM.testimonials.forEach(testimonial => {
        UTILS.animateOnScroll(testimonial);
      });
    }
  };
  
  // Initialize the application
  function init() {
    // Add event listeners
    DOM.navLinks.forEach(link => {
      link.addEventListener('click', HANDLERS.navLinkClick);
    });
    
    // Initialize animations
    HANDLERS.initAnimations();
    
    // Log initialization
    console.log('Cash Cleaner Simulator website initialized');
  }
  
  // When DOM is fully loaded
  document.addEventListener('DOMContentLoaded', init);
})(); 