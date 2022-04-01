console.log(`\n Trabalhando com while`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); 

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false; 

console.log('\n destinos possiveis:');
console.log(listasDeDestinos);


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);