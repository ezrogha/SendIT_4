window.onload = () => {
  dlg_wrapper_edit = document.getElementsByClassName("dlg-wrapper-edit")[0]
  dlg_wrapper = document.getElementsByClassName("dlg-wrapper")[0]
  dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
  dlg_box = document.getElementsByClassName("dlg-box")[0]
  item_not_delivered = document.getElementsByClassName("item-not-delivered")
  item_delivered = document.getElementsByClassName("item-delivered")
  dlg_footer = document.getElementsByClassName("dlg-footer")
  status_btn = document.getElementsByClassName("status")[0].firstElementChild
  dropdown = document.getElementsByClassName("dropdown")[0]

  dlg_wrapper_edit.style.display = "none"
  dlg_wrapper.style.display = "none"
  dlg_box_edit.style.display = "none"
  dlg_box.style.display = "none"

  for(i=0; i<item_not_delivered.length; i++){
      item_not_delivered[i].onclick = () => {
          event.preventDefault()
          dlg_wrapper_edit.style.display = "block"
          dlg_box_edit.style.display = "block"
      }
  }

  for(i=0; i<item_delivered.length; i++){
      item_delivered[i].onclick = () => {
          event.preventDefault()
          dlg_wrapper.style.display = "block"
          dlg_box.style.display = "block"
      }
  }

  for(i=0; i<dlg_footer.length; i++){
      dlg_footer[i].firstElementChild.onclick = () => {
          dlg_wrapper_edit.style.display = "none"
          dlg_wrapper.style.display = "none"
          dlg_box_edit.style.display = "none"
          dlg_box.style.display = "none"
      }
  }

  status_btn.onclick = () => {
      dropdown.classList.toggle("show_dropdown")
  }
  
}