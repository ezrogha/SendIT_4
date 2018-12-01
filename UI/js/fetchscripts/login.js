register = () => {
    event.preventDefault()
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;
    password = document.getElementById("password").value;
    confirm = document.getElementById("confirm").value;

    if (password != confirm) {
        document.getElementById("notif-register").innerHTML = "Passwords do not match, , please check again"
        console.log("Passwords dont match, please check again")
    } else {
        const data = {
            username,
            email,
            phone,
            address,
            password
        };

        const url = "http://127.0.0.1:5000/api/v2/signup";

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            message = data["message"]
            if (message === "Account has been created") {
                succ_element = document.getElementById("notif-register") 
                if(succ_element.classList.contains("err-msg")){
                    succ_element.classList.remove("err-msg")
                }
                succ_element.classList.add("succ-msg")
                succ_element.innerHTML = "You account has been successfully created"
            } else {
                err_element = document.getElementById("notif-register")
                if(err_element.classList.contains("succ-msg")){
                    succ_element.classList.remove("succ-msg")
                }
                err_element.classList.add("err-msg")
                err_element.innerHTML = message
            }
        })
        .catch(err => console.log(err))
    }
};
