// Funcionalidade 1: Log de Sistema
console.log("VoyageX - Sistema Iniciado");

// Funcionalidade 2: Carrossel de Destinos
let slideIndex = 1;

if (document.querySelector('.carousel-container')) {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    
    if (slides.length === 0) return;

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].className = slides[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].className += " active";
}

// Funcionalidade 3: Validação de Formulário
function validarFormulario(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    if(nome === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    
    alert(`Obrigado, ${nome}! A VoyageX recebeu sua mensagem. Entraremos em contato via ${email}.`);
    document.getElementById('contactForm').reset();
    return true;
}

// Funcionalidade 4: Mostrar Detalhes do Pacote (Toggle)
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Funcionalidade 5: Saudação Dinâmica no Footer
// Saudação Dinâmica no Footer (usa load para não sobrescrever handlers)
window.addEventListener('load', function() {
    const hora = new Date().getHours();
    const footerMsg = document.getElementById("footer-msg");
    let saudacao = "";

    if (hora < 12) saudacao = "Bom dia";
    else if (hora < 18) saudacao = "Boa tarde";
    else saudacao = "Boa noite";

    if(footerMsg) {
        footerMsg.innerHTML = `${saudacao}! Obrigado por escolher a VoyageX.`;
    }
});

/* Navegação móvel: toggle do menu (hamburger) */
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (!toggle || !nav) return;

    // Inicializar atributos aria
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('nav-open');
        // bloquear scroll do body quando menu aberto
        document.body.classList.toggle('no-scroll', !expanded);

        // mover foco para primeiro link do menu quando aberto
        if (!expanded) {
            const firstLink = nav.querySelector('a');
            if (firstLink) firstLink.focus();
        } else {
            this.focus();
        }
    });

    // Fechar menu ao clicar em um link (mobile)
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Ao redimensionar para desktop, garantir menu visível via CSS
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            nav.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });

    // Fechar menu ao clicar fora (overlay)
    document.addEventListener('click', function(e) {
        const isOpen = nav.classList.contains('nav-open');
        if (!isOpen) return;
        const clickedInsideNav = nav.contains(e.target) || toggle.contains(e.target);
        if (!clickedInsideNav) {
            nav.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
                toggle.focus();
            }
        }
    });
});