let offset = { x: 0, y: 0 };
let isElementSelected = null;

function selecionarElement(event) {
    isElementSelected = event.target;

    //atualizando os valores de offset: diferença de posição entre o mouse e a div.
    const left = parseFloat(event.target.style.left.replace('px'));
    const top = parseFloat(event.target.style.top.replace('px'));
    offset.x = event.clientX - left;
    offset.y = event.clientY - top;
}

function moverElement(event) {
    //nao usar o event pra recuperar posição do elemento. usar isElementSelected

    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;
    const maxX = document.getElementById('content').clientWidth - isElementSelected.clientWidth;
    const maxY = document.getElementById('content').clientHeight - isElementSelected.clientHeight;

    isElementSelected.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
    isElementSelected.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
}