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
window.onload = function() {
    const hora = new Date().getHours();
    const footerMsg = document.getElementById("footer-msg");
    let saudacao = "";

    if (hora < 12) saudacao = "Bom dia";
    else if (hora < 18) saudacao = "Boa tarde";
    else saudacao = "Boa noite";

    if(footerMsg) {
        footerMsg.innerHTML = `${saudacao}! Obrigado por escolher a VoyageX.`;
    }
};