const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", checkValid);

function checkValid(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  const formatedMail = email.value.trim();
  const formatedPswd = password.value.trim();

  if (!formatedMail || !formatedPswd) {
    return alert("All fields must be filled!");
  }

  const formValues = {
    email: formatedMail,
    password: formatedPswd,
  };
  console.log(formValues);
  event.currentTarget.reset();
}
