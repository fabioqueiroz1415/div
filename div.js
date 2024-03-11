let divCount = 0; // Variável global para contar o número de divs

function adicionarDiv() {
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.id = `div${divCount}`; // Definindo o id com base no número atual de divs
    newDiv.style.left = '15px';
    newDiv.style.top = '15px';
    document.getElementById('content').appendChild(newDiv);

    divCount++; // Incrementando o número de divs
}


function excluirDiv() {

    desativarBotaoExcluirDiv();
    desativarBotaoInfoDiv();
    fecharInfoDiv();

    document.getElementById('content').removeChild(divSelected);

    divSelected = null;
}

//botao de excluir a div
function ativarBotaoExcluirDiv() {
    document.getElementById("excluir").disabled = false;
}

function desativarBotaoExcluirDiv() {
    document.getElementById("excluir").disabled = true;
}


