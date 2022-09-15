console.log(`\n Trabalhando com while`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); 

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false; 
const destino = "São Paulo";

console.log('\n destinos possiveis:');
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
for(
    let cont = 0 ;
    cont <3;
    cont ++
    ){
  if(listasDeDestinos[contador] == destino){
     console.log('destino existe');
     destinoExiste = true; 
  }
}

console.log('destino existe:' , destinoExiste);

if(podeComprar && destinoExiste){
    console.log('boa viagem pra voce!');
}else{
    console.log('desculpe tivemos um erro');
}