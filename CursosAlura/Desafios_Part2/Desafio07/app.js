/*  1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
    function calculoDeIMC(altura, peso) {
        let imc = peso / (altura * altura);
        return imc;
    }
    console.log(calculoDeIMC(1.82, 85));
*/
/*  2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
    function calcularFatorial(num) {
        let resultado = 1;
        for(let i = num; i > 1; i--){
            resultado = resultado * num;
            num--;
        }
        return resultado;
    }
    console.log(calcularFatorial(10));
*/
/*  3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
    function conversorDeMoedas(valor) {
        return valor * 4.91;
    }
    console.log(conversorDeMoedas(50).toFixed(2));
*/
/*  4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
    function calcularArea(altura, largura) {
        return altura * largura;
    }
    console.log(calcularArea(15, 5));
*/
/*  5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
    function calcularPerimetro(raio) {
        return 2 * Math.PI * raio;
    }
    console.log(calcularPerimetro('10').toFixed(2));
*/
/*  6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
   function mostrarTabuada(numero) {
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
    }
    mostrarTabuada(7);
*/