const form = document.getElementById('tasks');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste" />';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha() {
    const inputNomeTask = document.getElementById('nome-atividade');
    const inputNotaTask = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeTask.value)) {
        alert(`A atividade: ${inputNomeTask.value} já foi inserida`);
    } else {
        atividades.push(inputNomeTask.value);
        notas.push(parseFloat(inputNotaTask.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeTask.value}`;
        linha += `<td>${inputNotaTask.value}`;
        linha += `<td>${inputNotaTask.value >= notaMinima ? imgAprovado : imgReprovado}`;
        linha += '</tr>';

        linhas += linha;
}

    inputNomeTask.value = '';
    inputNotaTask.value = ''; 
}

function atualizaTabela() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMedia();
    document.getElementById('media-final').innerHTML = mediaFinal;
    document.getElementById('media-final-result').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia() {
    let somaMedias = 0;

    for (let i = 0; i < notas.length; i++) {
        somaMedias += notas[i];
    }

    return somaMedias / notas.length;
}