window.onload = () => {
    dlg_wrapper = document.getElementsByClassName("dlg-wrapper")[0]
    dlg_wrapper_edit = document.getElementsByClassName("dlg-wrapper-edit")[0]
    dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
    dlg_box = document.getElementsByClassName("dlg-box")[0]
    dlg_wrapper_edit.style.display = "none"
    dlg_wrapper.style.display = "none"
    dlg_box_edit.style.display = "none"
    dlg_box.style.display = "none"

    const token = localStorage.getItem("token");
    data = JSON.parse(atob(token.split(".")[1]));
    userData = data["identity"];
    // console.log(`Data: ${JSON.stringify(userData)}`);

    // const url = "http://127.0.0.1:5000/api/v2/parcels";
    var url = "https://sendit-updated.herokuapp.com/api/v2/parcels";
    const auth = `Bearer ${localStorage.getItem("token")}`;

    loader = document.getElementById("loader")
    loader.style.display = "block"
    fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            }
        })
        .then(response => response.json())
        .then(data => {
            order_list = document.getElementsByClassName("order-list")[0];
            kids = order_list.children
            for (i = 0; i < kids.length; i++) {
                if (kids[i].classList.contains("list-item")) {
                    kids[i].style.display = "none"
                }
            }
            if (data.length == 0) {
                order_list = document.getElementsByClassName("order-list")[0]
                noneDiv = document.createElement("div")
                noneDiv.setAttribute("id", "none")
                noneDiv.innerHTML = "No orders currently available"
                order_list.appendChild(noneDiv)
            }
            data.forEach(parcel => {
                handleParcel(parcel);
            });
            loader.style.display = "none"
        })
        .catch(err => console.log(err))


    var search_input = document.getElementById("search_orders")
    search_input.onkeyup = (event) => {
        val = event.target.value
        if (val.trim() === "" || isNaN(val.trim())) {
            // var url = `http://127.0.0.1:5000/api/v2/parcels`;
            var url = "https://sendit-updated.herokuapp.com/api/v2/parcels";
            method = "GET"
        } else {
            new_val = val.trim()
            // var url = `http://127.0.0.1:5000/api/v2/parcel/${new_val}`;
            var url = `https://sendit-updated.herokuapp.com/api/v2/parcel/${new_val}`;
            method = "PUT"
        }
        const auth = `Bearer ${localStorage.getItem("token")}`;

        fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: auth
                }
            })
            .then(response => response.json())
            .then(data => {
                order_list = document.getElementsByClassName("order-list")[0];
                kids = order_list.children
                for (i = 0; i < kids.length; i++) {
                    if (kids[i].classList.contains("list-item")) {
                        kids[i].style.display = "none"
                    }
                }
                if (data.length == 0) {
                    order_list = document.getElementsByClassName("order-list")[0]
                    noneDiv = document.createElement("div")
                    noneDiv.setAttribute("id", "none")
                    noneDiv.innerHTML = "No orders currently available"
                    order_list.appendChild(noneDiv)
                }
                data.forEach(parcel => {
                    if (parcel["role"] !== "admin") {
                        handleParcel(parcel);
                    }
                });
            });
    }
};

handleParcel = parcel => {
    // console.log(parcel)
    from = parcel["source"]
    to = parcel["destination"]
    weight = parcel["weight"]
    price = parcel["price"]
    status = parcel["status"]
    curr_location = parcel["current_location"]
    date = parcel["creation_date"]
    parcelId = parcel["parcelid"]

    order_list = document.getElementsByClassName("order-list")[0];

    div_item = document.createElement("div");
    div_item.classList.add("list-item", "item-active");

    div_id = document.createElement("div");
    div_id.classList.add("list-col");
    div_id.innerHTML = parcelId;
    div_item.appendChild(div_id);

    div_from = document.createElement("div");
    div_from.classList.add("list-col");
    div_from.innerHTML = from;
    div_item.appendChild(div_from);

    div_to = document.createElement("div");
    div_to.classList.add("list-col");
    div_to.innerHTML = to;
    div_item.appendChild(div_to);

    div_weight = document.createElement("div");
    div_weight.classList.add("list-col");
    div_weight.innerHTML = weight;
    div_item.appendChild(div_weight);

    div_price = document.createElement("div");
    div_price.classList.add("list-col");
    div_price.innerHTML = price;
    div_item.appendChild(div_price);

    div_status = document.createElement("div");
    if (status === "Delivered") {
        div_status.classList.add("list-col", "yeah");
    } else if (status === "In Transit") {
        div_status.classList.add("list-col", "yeah", "italic");
    } else {
        div_status.classList.add("list-col", "not");
    }
    div_status.innerHTML = status;
    div_item.appendChild(div_status);

    div_icon = document.createElement("div");
    div_icon.classList.add("list-col-icon");
    a_icon = document.createElement("a");
    a_icon.setAttribute("href", "#");
    a_icon.classList.add("icon-style", "edit");
    icon_edit = document.createElement("icon");
    icon_edit.classList.add("fa", "fa-edit")
    a_icon.appendChild(icon_edit)

    a_icon2 = document.createElement("a");
    a_icon2.setAttribute("href", "#");
    a_icon2.classList.add("icon-style", "trash");
    icon_trash = document.createElement("icon");
    icon_trash.classList.add("fa", "fa-trash")
    a_icon2.appendChild(icon_trash)

    div_icon.appendChild(a_icon)
    div_icon.appendChild(a_icon2)
    div_item.appendChild(div_icon)
    order_list.appendChild(div_item)

    a_icon.onclick = () => {
        event.preventDefault()
        handleDlg(parcel)
    }

    a_icon2.onclick = () => {
        event.preventDefault()
        dlg_wrapper = document.getElementsByClassName("dlg-wrapper")[0]
        dlg_box = document.getElementsByClassName("dlg-box")[0]
        dlg_wrapper.style.display = "block"
        dlg_box.style.display = "block"
    }

};

handleDlg = parcel => {
    from = parcel["source"]
    to = parcel["destination"]
    weight = parcel["weight"]
    price = parcel["price"]
    status = parcel["status"]
    curr_location = parcel["current_location"]
    date = parcel["creation_date"]
    parcelId = parcel["parcelid"]

    dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
    dlg_header_edit = dlg_box_edit.getElementsByClassName("dlg-header")[0]
    dlg_header_span = dlg_header_edit.getElementsByTagName("span")[0]
    dlg_header_span.innerHTML = parcelId

    from_edit = document.getElementById("from-edit")
    from_edit.options[0].innerHTML = from

    to_edit = document.getElementById("to-edit")
    to_edit.setAttribute("disabled", "disabled")
    to_edit.options[0].innerHTML = to

    input_weight = document.getElementById("weight")
    input_weight.setAttribute("disabled", "disabled")
    input_weight.value = weight

    input_price = document.getElementById("price")
    input_price.setAttribute("disabled", "disabled")
    input_price.value = price

    input_status = document.getElementById("status")
    for (i = 0; i < input_status.options.length; i++) {
        if (input_status.options[i].innerHTML === status) {
            input_status.options[i].setAttribute("selected", "selected")
        }
    }

    input_location = document.getElementById("location-edit")
    input_location.value = curr_location

    dlg_wrapper_edit = document.getElementsByClassName("dlg-wrapper-edit")[0]
    dlg_box_edit = document.getElementsByClassName("dlg-box-edit")[0]
    dlg_wrapper_edit.style.display = "block"
    dlg_box_edit.style.display = "block"

}