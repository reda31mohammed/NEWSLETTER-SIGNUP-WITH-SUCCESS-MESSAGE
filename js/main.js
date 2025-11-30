const form = document.getElementById("form");
const email = document.getElementById("mail");
const errorElement = document.getElementById("error");
const activeButton = document.getElementById("submit-button");
const successButton = document.getElementById("success-button");
const successWindow = document.getElementById("success-window");
const signUpWindow = document.querySelector(".signup-page");
console.log(signUpWindow);
let validEmail =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|int|arpa|biz|info|name|pro|aero|asia|cat|coop|jobs|mobi|museum|travel|[a-zA-Z]{2})$/;

form.addEventListener("submit", (e) => {
  let messages = [];
  // errors handling
  if (email.value === "" || email.value === null) {
    messages.push("Valid email required");
    email.classList.add("error-style");
  } else if (!email.value.match(validEmail)) {
    messages.push("Invalid Email");
  } else {
    signUpWindow.style.opacity = "0";
    successWindow.style.display = "flex";
    const formData = new FormData(form).entries();
    for (item of formData) {
      console.log(item[0], item[1]);
    }
  }
  if (messages.length > 0) {
    errorElement.innerText = messages.join("");
    email.validEmail = "";
  }
  email.onfocus = function () {
    errorElement.innerText = "";
    activeButton.classList.add("active-btn");
  };
  activeButton.classList.remove("active-btn");
  e.preventDefault();
});
email.onfocus = function () {
  activeButton.classList.add("active-btn");
};
email.oninput = function () {
  email.classList.remove("error-style");
};
successButton.addEventListener("click", function () {
  signUpWindow.style.opacity = "1";
  successWindow.style.display = "none";
});
