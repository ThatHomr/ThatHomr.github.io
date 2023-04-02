const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const helloName = document.querySelector("#helloName");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintHelloName();
}

function paintHelloName() {
  const username = localStorage.getItem(USERNAME_KEY);
  helloName.innerText = `Hello ${username}`;
  helloName.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintHelloName();
}
