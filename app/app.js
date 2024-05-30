import validator, { contains } from "validator";
import isEmail from "validator/lib/isEmail";

const modal = document.getElementById("modal");
const container = document.querySelector(".container");
const form = document.getElementById("form");
const emailAddressInput = document.getElementById("emailInput");
const userEmailAddress = document.querySelector("#emailAddressText");
const dismissButton = document.getElementById("dismissBtn");
const statusIndicator = document.querySelector("#emailStatusText");
let formIsVisible = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailAddressInput.value)) {
    statusIndicator.style.display = "block";
    statusIndicator.classList.add("status-error");
  } else {
    statusIndicator.style.display = "none";
    formIsVisible = false;
    userEmailAddress.textContent = emailAddressInput.value;
    container.classList.add("container-hide");
    modal.classList.add("modal-show");
  }
});

console.log(dismissButton);

dismissButton.addEventListener("click", () => {
  modal.classList.remove("modal-show");
  container.classList.remove("container-hide");
});
