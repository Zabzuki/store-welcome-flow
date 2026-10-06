const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  const sessionData = JSON.parse(sessionStorage.formData);
  const url = sessionData.url;
  const checkUrl = url.match(/example-shop.com/g);
  if (checkUrl) {
    location.href = "../ChooseDestination/chooseDestination.html";
    return;
  }
  location.href = "../End/end.html";
  const updatedJSON = { ...formJSON, ...sessionData };
  sessionStorage.formData = JSON.stringify(updatedJSON);
}
