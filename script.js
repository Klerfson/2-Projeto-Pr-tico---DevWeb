//Menu suspenso

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const menuList = document.querySelector('.lista-menu');
    const menuLinks = document.querySelectorAll('.lista-menu__link, .lista-menu__link__titulo');

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); 
        menuList.classList.toggle('ativo'); 
    });

    
    document.addEventListener('click', function (event) {
        if (!menuList.contains(event.target) && event.target !== menuButton) {
            menuList.classList.remove('ativo');
        }
    });

    
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function () {
            menuList.classList.remove('ativo');
            menuButton.checked = false; 
        });
    });
});



//mensagem ao passar o mouse na imagem dos lançamentos (carrosel)

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.swiper-slide');
    const tooltip = document.getElementById('tooltip');

    slides.forEach(slide => {
        slide.addEventListener('mouseover', function (event) {
            const description = slide.getAttribute('data-description');
            tooltip.innerText = description;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        // Quando o mouse se move sobre o slide
        slide.addEventListener('mousemove', function (event) {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        // Quando o mouse sai do slide
        slide.addEventListener('mouseout', function () {

            tooltip.style.display = 'none';
        });
    });
});

//Validação dos campos nome telefone e e-mail

document.addEventListener('DOMContentLoaded', () => {
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');

    nomeInput.addEventListener('input', validateName);
    telefoneInput.addEventListener('input', validatePhone);
    telefoneInput.addEventListener('input', formatPhone);
    emailInput.addEventListener('input', validateEmail);

    function validateName() {
        const nomeError = document.getElementById('erro-nome');
        if (nomeInput.value.length < 3) {
            nomeInput.classList.add('invalid');
            nomeInput.classList.remove('valid');
            nomeError.classList.add('visible');
        } else {
            nomeInput.classList.add('valid');
            nomeInput.classList.remove('invalid');
            nomeError.classList.remove('visible');
        }
    }

    function validatePhone() {
        const telefoneError = document.getElementById('erro-telefone');
        const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!telefonePattern.test(telefoneInput.value)) {
            telefoneInput.classList.add('invalid');
            telefoneInput.classList.remove('valid');
            telefoneError.classList.add('visible');
        } else {
            telefoneInput.classList.add('valid');
            telefoneInput.classList.remove('invalid');
            telefoneError.classList.remove('visible');
        }
    }

    function formatPhone() {
        let telefoneValue = telefoneInput.value.replace(/\D/g, '');
        if (telefoneValue.length > 11) {
            telefoneValue = telefoneValue.slice(0, 11);
        }
        if (telefoneValue.length > 0) {
            telefoneValue = telefoneValue.replace(/^(\d{2})(\d)/g, "($1) $2");
        }
        if (telefoneValue.length > 9) {
            telefoneValue = telefoneValue.replace(/(\d{5})(\d)/, "$1-$2");
        }
        telefoneInput.value = telefoneValue;
    }

    function validateEmail() {
        const emailError = document.getElementById('erro-email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.classList.add('visible');
        } else {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            emailError.classList.remove('visible');
        }
    }
});