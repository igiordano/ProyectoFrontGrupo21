let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let nombreDeUsuario = id("nombreDeUsuario"),
correoElectronico = id("correoElectronico"),
  form = id("form"),
  
  msjError = classes("error"),
  iconoExito = classes("success-icon"),
  failureIcon = classes("failure-icon");

  form.addEventListener("enviar", (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(correoElectronico, 1, "Email cannot be blank");
  });

  let motor = (id, serial, mensaje) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
  
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  };

