let menus = document.querySelectorAll("#menu li");
let indicator = document.querySelector('.indicator');

for(let i = 0; i < menus.length; i++) {
    menu.addEventListener("click",function(e) {
        deselect();
        menus[i].classList.add("active");
        indicator.style = `--pos: ${menus[i]}`;
    });
}

function deselect() {
    for(let menu of menus) {
        menu.classList.remove("active");
    }
}