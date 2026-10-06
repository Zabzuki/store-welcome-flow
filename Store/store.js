const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());
  console.log(formJSON);

  sessionStorage.formData = JSON.stringify(formJSON);
  location.href = "../ChoosingCheckbox/choosingCheckbox.html";
}
