



let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function cliqueBotao() {
    console.log('O botão foi clicado');
}

function amoJS () {
    alert('Eu amo JS');
}

function qualNomeDaCidade(){
    let cidade = prompt('Digite uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de voce.`)
}

function digiteDoisNumeros() {
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    let soma = numero1 + numero2
    alert(`A soma dos números ${numero1} + ${numero2} = ${soma}`)

}







// Criar uma função que exibe "Olá, mundo!" no console.

function saudacao() {
    console.log('Ola, mundo!')

}

saudacao();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function recebeNome(nome) {
    let nome = console.log(`Olá, ${nome}`)

}
recebeNome('Marco')
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(a,b,c) {
    return (a + b + c) / 3
}


let media = calcularMedia();
console.log(media);


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorDosDois(a, b) {
    return a > b ? a : b;   // está escrito 'Mostre 'a' maior do que 'b'? se sim, mostre 'a' se nao, mostre 'b'
}



let maior = maiorDosDois();
console.log(maior);
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicarUmNumero(numero){
    return numero * numero;

}



let multiplicacao = multiplicarUmNumero();
console.log(multiplicacao);








// Criar uma função que exibe "Olá, mundo!" no console.

function cumprimento () {
    console.log('Olá, mundo')
}

cumprimento();
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function recebeNome(nome) {
    console.log(`Olá ${nome}`);
}

recebeNome('Marco');
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function recebeNumero(numero){
    return (numero * 2);

}
recebeNumero(5)

// let rsultadoDobreo = recebeNumero(5);
// console.log(resultadoDobro);
// Criar uma função que recebe três números como parâmetros e retorna a média deles.


function mediaDeTres(a,b,c) {
    return (a + b + c) / 3;
    
}

let media = mediaDeTres(2,3,4);
console.log(mediaDeTres(2,3,4));


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(a,b){
    return a > b ? a : b;
}

console.log(maiorNumero(2,3));
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicarNumero(numero){
    return numero * numero
}
let multiplicacao = multiplicacao(1);
console.log(multiplicacao);




// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.


function calcularImc(peso,altura){
    return peso / (altura  ** 2) ;
}

let imc = calcularImc(85, 1.7);
console.log(imc);


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valor){
    return valor * 4.8;

}

let realConvertido = converterDolarParaReal(5);




function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.


function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);
  
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.




function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);