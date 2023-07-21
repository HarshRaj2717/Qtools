function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function callRegister() {
  email = document.getElementById("register_email");
  pass = document.getElementById("register_pass");
  pass_2 = document.getElementById("register_pass_2");

  if (String(email.value).trim() == "" || !validateEmail(String(email.value))) {
    email.value = "";
    email.classList.add("input-error");
    email.focus();
    return;
  } else email.classList.remove("input-error");

  if (String(pass.value).trim() == "") {
    // TODO - show error in pass and ask it again
    pass.value = "";
    pass.classList.add("input-error");
    pass.focus();
    return;
  } else pass.classList.remove("input-error");

  if (String(pass_2.value).trim() == "") {
    // TODO - show error in confirm_pass and ask it again
    pass_2.value = "";
    pass_2.classList.add("input-error");
    pass_2.focus();
    return;
  } else pass_2.classList.remove("input-error");

  if (pass.value != pass_2.value) {
    // show error in pass & confirm_pass and ask both again
    pass.value = "";
    pass.classList.add("input-error");
    pass_2.value = "";
    pass_2.classList.add("input-error");
    pass.focus();
    return;
  } else {
    pass.classList.remove("input-error");
    pass_2.classList.remove("input-error");
  }
}

function callLogin() {
  email = document.getElementById("login_email");
  pass = document.getElementById("login_pass");

  if (String(email.value).trim() == "" || !validateEmail(String(email.value))) {
    email.value = "";
    email.classList.add("input-error");
    email.focus();
    return;
  } else email.classList.remove("input-error");

  if (String(pass.value).trim() == "") {
    pass.value = "";
    pass.classList.add("input-error");
    pass.focus();
    return;
  } else pass.classList.remove("input-error");
}
