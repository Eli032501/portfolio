function submit(event) {
  event.preventDefault();

  alert("Your message was sent");
}

let buttonSubmit = document.querySelector("#button_submit");
buttonSubmit.addEventListener("click", submit);
