const btn = document.querySelector("#btn");

const inputPeso = document.querySelector("#peso");

const inputAltura = document.querySelector("#altura");

const inputIdade = document.querySelector("#idade");

const resultadoInner = document.querySelector("#resultado");
btn.addEventListener('click', (event) => {
    event.preventDefault();
    let reaultado = 66 + (13.8 * parseInt(inputPeso.value)) + (5 * parseInt(inputAltura.value)) - (6.8 * parseInt(inputIdade.value));
    resultadoInner.innerHTML = reaultado;
})

console.log(parseInt('13'));