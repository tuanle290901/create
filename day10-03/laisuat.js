function ketqua() {
    let p = +document.getElementById('tienvay').value
    let n = +document.getElementById('thangvay').value
    let r = +document.getElementById('laixuat').value
    let a = P * (1 + (r / 100)) ** n

    if (p > 0 && n > 0 && r > 0) {
        document.getElementById('ketqua').innerHTML = " Số tiền bạn phải trả sau " + n + "  Tháng là " + a + " VND"
    } else {
        document.getElementById('ketqua').innerHTML = "Vui lòng nhập đúng dữ liệu"
    }
}