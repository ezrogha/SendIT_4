dlg_wrapper_edit = document.getElementsByClassName("dlg-wrapper-edit")[0]
dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
dlg_footer = dlg_box_edit.getElementsByClassName("dlg-footer")[0]
dlg_footer_make_order = dlg_footer.getElementsByTagName("button")[2]
dlg_footer_make_order.onclick = () => {
    dlg_header = dlg_box_edit.getElementsByClassName("dlg-header")[0]
    dlg_header_ord = dlg_header.getElementsByTagName("span")[0]
    orderId = dlg_header_ord.innerHTML

    const auth = `Bearer ${localStorage.getItem("token")}`
    const url = `http://127.0.0.1:5000/api/v2/parcels/${parcelid}/order`

    fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))

    dlg_wrapper_edit.style.display = "none"
    dlg_box_edit.style.display = "none"

    setTimeout(() => {
        location.reload()
    }, 2000)

}