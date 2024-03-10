let isDivSelected = null;

function adicionarDiv() {
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.style.left = '15px';
    newDiv.style.top = '15px';
    document.getElementById('content').appendChild(newDiv);
}

function excluirDiv() {

    desativarBotaoExcluirDiv();
    desativarBotaoInfoDiv();

    document.getElementById('content').removeChild(isDivSelected);

    isDivSelected = null;
}

//botao de excluir a div
function ativarBotaoExcluirDiv() {
    document.getElementById("excluir").disabled = false;
}

function desativarBotaoExcluirDiv() {
    document.getElementById("excluir").disabled = true;
}


