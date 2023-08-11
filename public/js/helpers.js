function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

function accountCheck() {
  var navbar_login_buttons = document.getElementsByClassName(
    "navbar-login-button"
  );

  if (
    localStorage.getItem("email") != "" &&
    localStorage.getItem("api_token") != "" &&
    localStorage.getItem("email") != undefined &&
    localStorage.getItem("api_token") != undefined
  ) {
    Array.from(navbar_login_buttons).forEach((cur_button) => {
      cur_button.textContent = localStorage.getItem("email").split("@")[0];
      cur_button.href = "/account";
    });
  }
}

function showErrorDialog(description) {
  const divElement = document.createElement("div");
  divElement.className = "alert alert-error max-w-fit fixed bottom-5 right-5";
  divElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 hidden md:flex md:h-6 md:w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>${description}</span>
  `;
  document.body.appendChild(divElement);
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

async function callRegister() {
  var email = document.getElementById("register_email");
  const email_text = email.value;
  var pass = document.getElementById("register_pass");
  const pass_text = pass.value;
  var pass_2 = document.getElementById("register_pass_2");
  const pass_2_text = pass_2.value;

  if (String(email_text).trim() == "" || !validateEmail(String(email_text))) {
    email.value = "";
    email.classList.add("input-error");
    email.focus();
    return;
  } else email.classList.remove("input-error");

  if (String(pass_text).trim().length < 8) {
    pass.value = "";
    pass.classList.add("input-error");
    pass.focus();
    return;
  } else pass.classList.remove("input-error");

  if (String(pass_2_text).trim().length < 8) {
    pass_2.value = "";
    pass_2.classList.add("input-error");
    pass_2.focus();
    return;
  } else pass_2.classList.remove("input-error");

  if (pass_text != pass_2_text) {
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

  document
    .getElementById("register-button")
    .classList.add("loading", "loading-spinner", "btn-disabled");
  const api_res = await fetch(
    `/__api/register/?email=${email_text}&password=${pass_text}`
  );
  const api_data = await api_res.json();
  document
    .getElementById("register-button")
    .classList.remove("loading", "loading-spinner", "btn-disabled");

  if (api_data.error == 1) {
    showErrorDialog("An error occured!");
    return;
  }

  if (api_data.success == 1) {
    localStorage.setItem("email", email_text);
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
    return;
  } else {
    showErrorDialog(api_data.message);
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
  }
}

async function callVerify() {
  const email_text = localStorage.getItem("email");
  if (!validateEmail(String(email_text))) {
    window.location.replace("/register");
  }

  var otp = document.getElementById("otp-input");
  const otp_text = otp.value;
  if (String(otp_text).trim().length != 6) {
    otp.value = "";
    otp.classList.add("input-error");
    otp.focus();
    return;
  } else otp.classList.remove("input-error");

  document
    .getElementById("verify-btn")
    .classList.add("loading", "loading-spinner", "btn-disabled");
  const api_res = await fetch(
    `/__api/verify/?email=${email_text}&otp=${otp_text}`
  );
  const api_data = await api_res.json();
  document
    .getElementById("verify-btn")
    .classList.remove("loading", "loading-spinner", "btn-disabled");

  if (api_data.error == 1) {
    showErrorDialog("An error occured!");
    return;
  }

  if (api_data.success == 1) {
    localStorage.setItem("api_token", api_data.api_token);
    accountCheck();
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
    return;
  } else {
    showErrorDialog(api_data.message);
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
  }
}

async function callLogin() {
  var email = document.getElementById("login_email");
  const email_text = email.value;
  var pass = document.getElementById("login_pass");
  const pass_text = pass.value;

  if (String(email_text).trim() == "" || !validateEmail(String(email_text))) {
    email.value = "";
    email.classList.add("input-error");
    email.focus();
    return;
  } else email.classList.remove("input-error");

  if (String(pass_text).trim() == "" || String(pass_text).trim().length < 8) {
    pass.value = "";
    pass.classList.add("input-error");
    pass.focus();
    return;
  } else pass.classList.remove("input-error");

  document
    .getElementById("login-button")
    .classList.add("loading", "loading-spinner", "btn-disabled");
  const api_res = await fetch(
    `/__api/login/?email=${email_text}&password=${pass_text}`
  );
  const api_data = await api_res.json();
  document
    .getElementById("login-button")
    .classList.remove("loading", "loading-spinner", "btn-disabled");

  if (api_data.error == 1) {
    showErrorDialog("An error occured!");
    return;
  }

  if (api_data.success == 1) {
    localStorage.setItem("email", email_text);
    if (api_data.api_token != undefined) {
      localStorage.setItem("api_token", api_data.api_token);
      accountCheck();
    }
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
    return;
  } else {
    showErrorDialog(api_data.message);
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
  }
}

async function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("api_token");
  accountCheck();
  window.location.replace("/");
}
