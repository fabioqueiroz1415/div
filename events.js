document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

let divSelected = null;

let isDivSelected = false;
let isPanelSelected = false;
let isPanelContentSelected = false;

let panel = null;
let panelContent = null;

let offset = { x: 0, y: 0 };

function handleMouseDown(event) {
    document.addEventListener('mousemove', handleMouseMove);

    //se o clique foi dentro da div
    if(event.target.classList.contains('box')) {
        //tirando o estilo de div selecionada da antiga div
        if(divSelected) divSelected.classList.remove('selected');

        divSelected = event.target;
        isDivSelected = true;
        divSelected.classList.add('selected');
        
        let left = event.target.offsetLeft;
        let top = event.target.offsetTop;
        offset.x = event.clientX - left;
        offset.y = event.clientY - top;

        ativarBotaoExcluirDiv();
        atualizarInfoDiv()
        ativarBotaoInfoDiv();
    } else if(divSelected &&
              event.target.id === 'content' &&
              !document.getElementById("panel").contains(event.target)
              ) {

        divSelected.classList.remove('selected');
        divSelected = null;
        isDivSelected = false;

        desativarBotaoExcluirDiv();
        desativarBotaoInfoDiv();
        fecharInfoDiv();
    }

    if(document.getElementById("toolbar-panel").contains(event.target)) {
        panel = document.getElementById("panel");
        let left = panel.offsetLeft;
        let top = panel.offsetTop;
        offset.x = event.clientX - left;
        offset.y = event.clientY - top;
        isPanelSelected = true;
    }

    if(document.getElementById("panel-content").contains(event.target)) {
        panelContent = document.getElementById("panel-content");

        const maxScrollX = panelContent.scrollWidth - panelContent.clientWidth;
        const maxScrollY = panelContent.scrollHeight - panelContent.clientHeight;

        let mouseX = maxScrollX - event.clientX;
        let mouseY = maxScrollY - event.clientY;
        
        let left = panelContent.scrollLeft;
        let top = panelContent.scrollTop;

        offset.x = mouseX - left;
        offset.y = mouseY - top;

        isPanelContentSelected = true;
    }

    //colocar mais ifs conforme necessário
}

function handleMouseMove(event) {
    if(isPanelSelected) {
        const x = event.clientX - offset.x;
        const y = event.clientY - offset.y;

        const maxX = document.getElementById("content").offsetWidth - panel.offsetWidth - 7;
        const maxY = document.getElementById("content").offsetHeight - panel.offsetHeight - 7;

        panel.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
        panel.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
    }
    else if(isDivSelected) {
        const x = event.clientX - offset.x;
        const y = event.clientY - offset.y;

        const maxX = document.getElementById("content").offsetWidth - divSelected.offsetWidth - 7;
        const maxY = document.getElementById("content").offsetHeight - divSelected.offsetHeight - 7;

        divSelected.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
        divSelected.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
        atualizarInfoDiv();
    }
    else if (isPanelContentSelected) {
        const maxScrollX = panelContent.scrollWidth - panelContent.clientWidth;
        const maxScrollY = panelContent.scrollHeight - panelContent.clientHeight;

        let mouseX = maxScrollX - event.clientX;
        let mouseY = maxScrollY - event.clientY;

        const x = mouseX - offset.x;
        const y = mouseY - offset.y;

        const scrollX = Math.max(0, Math.min(x, maxScrollX));
        const scrollY = Math.max(0, Math.min(y, maxScrollY));

        panelContent.scrollLeft = scrollX;
        panelContent.scrollTop = scrollY;
}

}

function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    isPanelSelected = false;
    isDivSelected = false;
    isPanelContentSelected = false;
}

function handleKeyDown(event) {
    if(isDivSelected) {
        if(event.key === 'Delete') excluirDiv();
    }
}

function handleKeyUp(event) {
}
