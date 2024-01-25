let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado.');
}

function exibirAlerta() {
    console.log('Eu amo JS');
}

function exibirPrompt() {
    let cidade = prompt('Qual é sua cidade: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}