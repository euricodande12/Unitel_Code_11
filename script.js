function mostrarMenu(){
    let menu_mobile = document.querySelector('.menu-mobile');

    if (menu_mobile.classList.contains('open')){
        menu_mobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu_white_36dp.svg";
    }
    else{
        menu_mobile.classList.add('open');
        document.querySelector('.icon').src = "./img/close_white_36dp.svg";
    }
}