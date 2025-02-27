

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (quantidade > (ate - de + 1)) {
        alert("Quantidade de números sorteados não pode ser maior que o intervalo disponível.");
        return;
    }

    let sorteados = new Set();
    while (sorteados.size < quantidade) {
        sorteados.add(obterNumeroAleatorio(de, ate));
    }
      document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${[...sorteados].join(', ')}</label>`;
      statusBotaoReiniciar()
}

function statusBotaoReiniciar(){
let botaoReiniciar = document.getElementById('btn-reiniciar');
if (botaoReiniciar.classList.contains ('container__botao-desabilitado')) {
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}else{
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">OS NÚMEROS APARECERAM AQUI</label>';
    statusBotaoReiniciar();
}

