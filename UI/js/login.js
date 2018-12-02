window.onload = () => {
  register_form = document.getElementById("register-form")
  login_form = document.getElementById("login-form")
  register_form.style.display = "none"
  message_element = document.getElementsByClassName("message")
  for(i=0; i<message_element.length; i++) {
      message_element[i].firstElementChild.onclick = () => {
          event.preventDefault()
          if(register_form.style.display == "none"){
              register_form.style.display = "block"
              login_form.style.display = "none"
          } else {
              register_form.style.display = "none"
              login_form.style.display = "block"
          }
      }
  }
}