dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
dlg_footer = dlg_box_edit.getElementsByClassName("dlg-footer")[0]
dlg_footer_save = dlg_footer.getElementsByTagName("a")[0]
dlg_header = dlg_box_edit.getElementsByClassName("dlg-header")[0]


dlg_footer_save.onclick = () => {
    event.preventDefault()
    dlg_header_ord = dlg_header.getElementsByTagName("span")[0]
    parcelid = dlg_header_ord.innerHTML
    destination = document.getElementById("to-edit").value
    const data = {
        destination
    }
    const auth = `Bearer ${localStorage.getItem("token")}`
    const url = `http://127.0.0.1:5000/api/v2/parcels/${parcelid}/destination`

    fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(`Error: ${err}`))

    dlg_wrapper_edit = document.getElementsByClassName("dlg-wrapper-edit")[0]

    dlg_wrapper_edit.style.display = "none"
    dlg_box_edit.style.display = "none"

    location.reload()
}