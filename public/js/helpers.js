function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
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
  email = document.getElementById("register_email");
  pass = document.getElementById("register_pass");
  pass_2 = document.getElementById("register_pass_2");

  if (String(email.value).trim() == "" || !validateEmail(String(email.value))) {
    email.value = "";
    email.classList.add("input-error");
    email.focus();
    return;
  } else email.classList.remove("input-error");

  if (String(pass.value).trim() == "" || String(pass.value).trim().length < 8) {
    pass.value = "";
    pass.classList.add("input-error");
    pass.focus();
    return;
  } else pass.classList.remove("input-error");

  if (String(pass_2.value).trim() == "") {
    pass_2.value = "";
    pass_2.classList.add("input-error");
    pass_2.focus();
    return;
  } else pass_2.classList.remove("input-error");

  if (pass.value != pass_2.value) {
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

  const api_res = await fetch(
    `/__api/register/?email=${email.value}&password=${pass.value}`
  );
  const api_data = await api_res.json();

  if (api_data.error == 1) {
    showErrorDialog("An error occured!");
    return;
  }

  if (api_data.success == 1) {
    if (api_data.api_token != undefined) {
      console.log(api_token);
    }
    if (api_data.redirect != undefined) {
      window.location.replace(api_data.redirect);
    }
    return;
  } else {
    showErrorDialog(api_data.message);
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

  if (String(pass.value).trim() == "" || String(pass.value).trim().length < 8) {
    pass.value = "";
    pass.classList.add("input-error");
    pass.focus();
    return;
  } else pass.classList.remove("input-error");
}
