const openModal = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");
console.log(openModal);

openModal.addEventListener("click", function () {
    modal.style.visibility = "visible";
})
