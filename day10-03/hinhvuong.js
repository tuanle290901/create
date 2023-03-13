function tinh_p() {
    let a = +document.getElementById('result').value
    let p = a * 4
    document.getElementById('ketqua').innerHTML = "Chu vi hình vuông là: " + p

}

function tinh_s() {
    let a = +document.getElementById('result').value
    let s = a * a
    document.getElementById('ketqua').innerHTML = "Diện tích hình vuông là: " + s
}