const openModal = document.querySelector(".toggleMenu");
let isOpen = false;
const modal = document.querySelector(".modal");
console.log(openModal);

openModal.addEventListener("click", function () {
    if(isOpen){
        this.src = "images/bars-solid.svg";
        modal.style.visibility = "hidden";
        isOpen = false;
    } else {
    this.src = "images/times-circle-regular.svg";
    modal.style.visibility = "visible";
    isOpen = true;
    }
})

