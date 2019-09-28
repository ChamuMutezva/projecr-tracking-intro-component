const openModal = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");
console.log(openModal);

openModal.addEventListener("click", function () {
    this.src = "images/times-circle-regular.svg";
    modal.style.visibility = "visible";
})
