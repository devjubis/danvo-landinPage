function openMenu() {
    let barraMenu = document.getElementById('beam-menu');

    if(barraMenu.style.width == "0px") {
        barraMenu.style.width = "300px";
    }else {
        barraMenu.style.width = "0px";
    }
}