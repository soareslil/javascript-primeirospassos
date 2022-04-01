console.log(`\n Trabalhando com while`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); 

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false; 
const destino = "Rio de Janeiro";

console.log('\n destinos possiveis:');
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
  if(listasDeDestinos[contador] == destino){
     console.log('destino existe');
     destinoExiste = true; 
     break;
  }
    contador +=1;
}