// BOTÃO VENHA FOCAR

const botaoFoco = document.getElementById("botao-foco");

botaoFoco.addEventListener("click", function() {

    document.getElementById("habilidades").scrollIntoView({
        behavior: "smooth"
    });

});


// MODO ESCURO

const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        botaoTema.textContent = "☀️ Desativar modo escuro";

    } else {

        botaoTema.textContent = "🌙 Ativar modo escuro";

    }

});


// CARDS

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.classList.toggle("selecionado");

    });

});