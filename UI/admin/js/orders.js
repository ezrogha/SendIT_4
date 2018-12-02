window.onload = () => {
  dlg_wrapper = document.getElementsByClassName("dlg-wrapper")[0]
  dlg_wrapper_edit = document.getElementsByClassName("dlg-wrapper-edit")[0]
  dlg_box = document.getElementsByClassName("dlg-box")[0]
  dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
  dlg_footer = document.getElementsByClassName("dlg-footer")
  dlg_trash = document.getElementsByClassName("trash")
  dlg_edit = document.getElementsByClassName("edit")
  status_btn = document.getElementsByClassName("status")[0].firstElementChild
  dropdown = document.getElementsByClassName("dropdown")[0]

  dlg_wrapper.style.display = "none"
  dlg_wrapper_edit.style.display = "none"
  dlg_box_edit.style.display = "none"
  dlg_box.style.display = "none"

  for(i=0; i<dlg_footer.length; i++){
      dlg_footer[i].firstElementChild.onclick = () => {
          dlg_wrapper.style.display = "none"
          dlg_wrapper_edit.style.display = "none"
          dlg_box_edit.style.display = "none"
          dlg_box.style.display = "none"
      }
  }

  for(i=0; i<dlg_trash.length; i++){
      dlg_trash[i].onclick = () => {
          dlg_wrapper.style.display = "block"
          dlg_box.style.display = "block"
      }
  }

  for(i=0; i<dlg_edit.length; i++){
      dlg_edit[i].onclick = () => {
          dlg_wrapper_edit.style.display = "block"
          dlg_box_edit.style.display = "block"
      }
  }

  status_btn.onclick = () => {
      dropdown.classList.toggle("show_dropdown")
  }

}