const display = document.getElementById("display");


// ADICIONAR NÚMERO OU OPERADOR

function adicionar(valor) {

    if (display.value === "0") {

        display.value = valor;

    } else {

        display.value += valor;

    }

}


// LIMPAR

function limpar() {

    display.value = "0";

}


// CALCULAR

function calcular() {

    try {

        display.value = eval(display.value);

    } catch {

        display.value = "Erro";

    }

}


// APAGAR ÚLTIMO CARACTERE

function voltar() {

    if (display.value.length > 1) {

        display.value =
            display.value.slice(0, -1);

    } else {

        display.value = "0";

    }

}