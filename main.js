let vetor = [];

const vetorElemento = document.getElementById("vetor");
const resultadoElemento = document.getElementById("resultado");

const botaoGerar = document.getElementById("gerar");
const botaoOrdenar = document.getElementById("ordenar");


// BOTÃO GERAR NÚMEROS

botaoGerar.addEventListener("click", function() {

    vetor = [];

    for (let i = 0; i < 10; i++) {

        let numero = Math.floor(Math.random() * 100) + 1;

        vetor.push(numero);
    }

    vetorElemento.textContent = vetor.join(" - ");

    resultadoElemento.textContent = "-";
});


// BOTÃO ORDENAR

botaoOrdenar.addEventListener("click", function() {

    if (vetor.length === 0) {

        alert("Primeiro clique em Gerar Números!");

        return;
    }

    let copia = [...vetor];


    // BUBBLE SORT

    for (let i = 0; i < copia.length - 1; i++) {

        for (let j = 0; j < copia.length - 1 - i; j++) {

            if (copia[j] > copia[j + 1]) {

                let temp = copia[j];

                copia[j] = copia[j + 1];

                copia[j + 1] = temp;
            }
        }
    }


    resultadoElemento.textContent = copia.join(" - ");

});