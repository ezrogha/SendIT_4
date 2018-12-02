if (localStorage.getItem("token") != null) {
    localStorage.removeItem("token");
    window.location.replace("./order.html");
}
