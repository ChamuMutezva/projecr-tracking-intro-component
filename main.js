const openModal = document.querySelector(".toggleMenu");

const modal = document.querySelector(".modal");
console.log(openModal);

openModal.addEventListener("click", function () {
    this.src = "images/times-circle-regular.svg";
    modal.style.visibility = "visible";
})

/*openModal.addEventListener("click", fav )

function fav(e){
    const target = e.target;
    const closeIcon = document.querySelector(".fa-window-close");
    console.log(closeIcon);    
    target.classList.toggle(".fa-window-close");
    target.classList.remove(".fa-bars");
    modal.style.visibility = "visible";
}*/