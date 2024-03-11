//info sobre a div selecionada
function mostrarInfoDiv() {
    if(document.getElementById("panel").style.visibility != 'visible') {
        document.getElementById("panel").style.visibility = 'visible';
    } else {
        document.getElementById("panel").style.visibility = 'hidden';
    }
}

function fecharInfoDiv() {
    document.getElementById("panel").style.visibility = 'hidden';
}

function atualizarInfoDiv() {
    document.getElementById('id-input').textContent = divSelected.id;
    document.getElementById('top-input').value = divSelected.style.top;
    document.getElementById('left-input').value = divSelected.style.left;
    document.getElementById('width-input').value = divSelected.offsetWidth + 'px';
    document.getElementById('height-input').value = divSelected.offsetHeight + 'px';
    document.getElementById('border-input').value = window.getComputedStyle(divSelected).border;
    document.getElementById('position-input').value = window.getComputedStyle(divSelected).position;
    document.getElementById('cursor-input').value = window.getComputedStyle(divSelected).cursor;
}

function atualizarEstilos() {
    alert("atualizar os estilos.");
}



//botao de excluir a div
function ativarBotaoInfoDiv() {
    document.getElementById("info").disabled = false;
}

function desativarBotaoInfoDiv() {
    document.getElementById("info").disabled = true;
}

