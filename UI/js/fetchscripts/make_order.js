dlg_footer = document.getElementById("dlg-footer")
dlg_btn = dlg_footer.getElementsByTagName("a")[0]


dlg_btn.onclick = () => {
    
    event.preventDefault()
    destination = document.getElementById("to").value
    source = document.getElementById("from").value
    weight = Number(document.getElementById("weight").value)
    price = Number(document.getElementById("price").innerHTML)

    console.log(destination)
    const data = {
        source,
        destination,
        weight,
        price
    }
    const url = "http://127.0.0.1:5000/api/v2/parcels"
    const auth = `Bearer ${localStorage.getItem("token")}`

    fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": auth
            }
        })
        .then(response => response.json())
        .then(data => {
            message = data["message"]
            if (message === "Parcel has been created") {
                window.location.href = "./delivery_orders.html"
            } else {
                console.log(message)
            }
        })
        .catch(err => console.log(`Error: ${err}`))
}