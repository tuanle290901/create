function tinhtoan(number) {
    let result = document.getElementById('number').value
    result += number
    document.getElementById('number').value = result
}

function tinhKetQua() {
    let result = document.getElementById('number').value
    if (result) {
        try {
            let ketqua = eval(result)
            document.getElementById('number').value = ketqua

        } catch (e) {
            document.getElementById('number').value = 'error'
        }
    }
}

function xoa() {
    document.getElementById('number').value = ""
}