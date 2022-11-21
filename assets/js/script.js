// MUDAR TAMANHO DE TELA
function mudouTamanho() {
    if (window.innerWidth <= 700) {
        
        // MENU
        menu.classList.remove('ativado');

        // BOTÃO DE FECHAR MENU
        btnFecharMenu.classList.remove('aparecer');
    }
}

// FUNCÃO PARA ABRIR E FECHAR MENU
function menuShow(event) {

    // MENU
    const menu = document.querySelector('.listaLinks');
    menu.classList.toggle('ativado');
    
    // BOTÃO DE FECHAR MENU
    btnFecharMenu.classList.toggle('aparecer');

    // ACESSIBILIDADE
    if (event.type == 'touchstart') event.preventDefault();

}

// FECHAR MENU
const btnFecharMenu = document.getElementById('btnCloseMenu');
btnFecharMenu.addEventListener('click', menuShow)
btnFecharMenu.addEventListener('touchstart', menuShow)

// ABRIR MENU
const btnMenu = document.getElementById('btnOpenMenu');
btnMenu.addEventListener('click', menuShow)
btnMenu.addEventListener('touchstart', menuShow)