window.onload = () => {
    dlg_wrapper = document.getElementsByClassName("dlg-wrapper")[0]
    dlg_box = document.getElementsByClassName("dlg-box")[0]
    dlg_trash = document.getElementsByClassName("trash")
    dlg_footer = document.getElementsByClassName("dlg-footer")
    status_btn = document.getElementsByClassName("status")[0].firstElementChild
    dropdown = document.getElementsByClassName("dropdown")[0]

    all = dropdown.getElementsByClassName("all")[0]
    active = dropdown.getElementsByClassName("active")[0]
    not_active = dropdown.getElementsByClassName("not-active")[0]

    list_item = document.getElementsByClassName("list-item")
    item_not_active = document.getElementsByClassName("item-not-active")
    item_active = document.getElementsByClassName("item-active")

    dlg_wrapper.style.display = "none"
    dlg_box.style.display = "none"

    for (i = 0; i < dlg_trash.length; i++) {
        dlg_trash[i].onclick = () => {
            dlg_wrapper.style.display = "block"
            dlg_box.style.display = "block"
        }
    }

    for (i = 0; i < dlg_footer.length; i++) {
        dlg_footer[i].firstElementChild.onclick = () => {
            dlg_wrapper.style.display = "none"
            dlg_box.style.display = "none"
        }
    }

    status_btn.onclick = () => {
        dropdown.classList.toggle("show_dropdown")
    }

    all.onclick = () => {
        item_active.style.display = "block"
        item_not_active.style.display = "block"
    }

    active.onclick = () => {
        item_active.style.display = "block"
        item_not_active.style.display = "none"
    }

    not_active.onclick = () => {
        item_active.style.display = "block"
        item_not_active.style.display = "none"
    }

}