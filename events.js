document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
isPanelSelected = false;


function handleMouseDown(event) {
    document.addEventListener('mousemove', handleMouseMove);

    //se o clique foi dentro da div
    if(event.target.classList.contains('box')) {

        //selecionando a div e o element em seguida
        
        //tirando o estilo de div selecionada da antiga div
        if(isDivSelected) isDivSelected.classList.remove('selected');

        selecionarElement(event);

        //atualizando para a nova div
        isDivSelected = event.target;

        // Adiciona a classe a nova div
        isDivSelected.classList.add('selected');
        
        ativarBotaoExcluirDiv();
        ativarBotaoInfoDiv();

    }
    //se o clique foi fora das divs e alguma está selecionada
    else if(isDivSelected && event.target.id === 'content') {
        
        isDivSelected.classList.remove('selected');
        isDivSelected = null;

        desativarBotaoExcluirDiv();
        desativarBotaoInfoDiv();
    }
    if(event.target.id === "toolbar-panel") {
        console.log(event.target.id);
        selecionarElement(event);
        isPanelSelected = true;
    }

    //colocar mais ifs conforme necessário
}

function handleMouseMove(event) {
    if(isDivSelected || isPanelSelected) { //colocar mais condições conforme necessário
        moverElement(event);
    }
}

function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    isPanelSelected = false;
}

function handleKeyDown(event) {
    if(isDivSelected) {
        if(event.key === 'Delete') excluirDiv();
    }
}

function handleKeyUp(event) {
}
