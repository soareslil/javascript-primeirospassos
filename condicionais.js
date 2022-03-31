console.log("trabalhando com condicionais");

const listasDeDestinos = new Array(`Salvador`, `Rio de Janeiro`, `Gramado`);

const idadeComprador = 10;
const estaAcompanhado = true;

// console.log(listasDeDestinos);

// if (idadeComprador >= 18) {
//   listasDeDestinos.splice(1, 1);
//   console.log("pode comprar passagens");
// } else {
//   console.log("não pode comprar passagem sendo menor de idade");
// }

const idadeDoComprador = 77;

// if (idadeDoComprador >= 18) {
//   listasDeDestinos.splice(1, 1);
//   console.log("pode comprar passagens");
// } else {
//   console.log("não pode comprar passagem sendo menor de idade");
// }

// if (idadeComprador >= 18) {
//   listasDeDestinos.splice(1, 1);
//   console.log("pode comprar passagens");
// } else if (estaAcompanhado) {
//   listasDeDestinos.splice(1, 1);
//   console.log("pode comprar passagens");
// } else {
//   console.log("não pode comprar passagem sendo menor de idade");
// }


if (idadeComprador >= 18 || estaAcompanhado == true) {
  listasDeDestinos.splice(1, 1);
  console.log("pode comprar passagens");
} else {
  console.log("não pode comprar passagem sendo menor de idade");
}
console.log(listasDeDestinos);


// O que aprendemos nessa aula:

// If e Else

// Operadores lógicos

// if encadeado

// else if

// && e ||