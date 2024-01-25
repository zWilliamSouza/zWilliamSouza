alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto); // Impreção que aparece apenas no console do navegador.
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if(chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++; 
    }
}
// Operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);
/* if (tentativas > 1) {
    // Com Tamplate Strings (uso das [``] no lugar das [''] e o [${}] para variaveis)
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas`);  
} else {
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) na primeira tentativa`);  
}
*/