function login() {
    let user = document.getElementById('user').value
    let pass = document.getElementById('password').value

    if (user == "admin" && pass == "123") {
        alert (" đăng nhập tài khoản admin")
    } else if (user == "user" && pass == "123") {
        alert("đăng nhập tài khoản user")
    } else
        alert("tài khoản không tồn tại")
}