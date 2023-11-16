
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
var appMobile = document.getElementById('appMobile');
var imgClodemodal = document.getElementById("closeModal")

appMobile.addEventListener('mouseover', function() {
    appMobile.style.cursor = 'pointer';
});

appMobile.addEventListener('mouseout', function() {
    appMobile.style.cursor = 'auto';
});

imgClodemodal.addEventListener('mouseover', function() {
    imgClodemodal.style.cursor = 'pointer';
});

imgClodemodal.addEventListener('mouseout', function() {
    imgClodemodal.style.cursor = 'auto';
});

const openModalButton = document.getElementById("appMobile");
const closeModalButton = document.getElementById("closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

//envio de email

function enviarEmail() {

    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var url = 'https://formspree.io/f/xqkvolvg';
    var data = {
      name: nome,
      email: email,
      phone: phone,
      message: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          alert('Mensagem enviada com sucesso!');
        } else {
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
    }


