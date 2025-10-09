/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.portfolio-container');
    const items = container.querySelectorAll('.portfolio-box');

    // הסר קלאס קודם אם היה (במקרה של ריספונסיביות או טעינה חוזרת)
    items.forEach(item => item.classList.remove('center-last'));

    if (items.length % 2 === 1) {
      const lastItem = items[items.length - 1];
      lastItem.classList.add('center-last');
    }
  });

/*================================= scroll reveal ===================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const form = document.getElementById('contactForm');
const privacyCheck = document.getElementById('privacyCheck');
const errorMessage = document.getElementById('errorMessage');

// Validate checkbox on form submit
form.addEventListener('submit', function(e) {
    if (!privacyCheck.checked) {
        e.preventDefault();
        errorMessage.classList.add('show');
        privacyCheck.focus();
        
        // Remove error message after 3 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }
});

// Remove error message when checkbox is checked
privacyCheck.addEventListener('change', function() {
    if (this.checked) {
        errorMessage.classList.remove('show');
    }
});

// Prevent link from submitting form
document.querySelector('.privacy-checkbox a').addEventListener('click', function(e) {
    e.stopPropagation();
});