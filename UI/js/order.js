window.onload = () => {
  dlg_wrapper = document.getElementById("dlg-wrapper")
  dlg_box = document.getElementById("dlg-box")
  order_btn = document.getElementsByClassName("order-btn")[0]
  cancel_btn = document.getElementById("dlg-footer").getElementsByTagName("button")[0]
  
  dlg_wrapper.style.display = "none"
  dlg_box.style.display = "none"

  order_btn.onclick = () => {
      dlg_wrapper.style.display = "block"
      dlg_box.style.display = "block"
  }

  cancel_btn.onclick = () => {
      dlg_wrapper.style.display = "none"
      dlg_box.style.display = "none"
  }
  
}