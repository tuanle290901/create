function kiemtra() {
    let cs1 = document.getElementById("cannang").value
    let cs2 = document.getElementById("chieucao").value
    let kq = cs1 / (cs2 ^ 2)

    if (kq < 18.5) {
        document.getElementById('ketqua').innerHTML = 'Chỉ số BMI của bạn là ' + kq + ' Bạn thiếu cân, đớp nhiều vào nhé' +
            '<img src="3b97635b6bd4a5bfc436fbd3908f05e0.gif" height="50" width="100"/>'
    } else if (kq >= 18.5 && kq < 25.0) {
        document.getElementById('ketqua').innerHTML = 'Chỉ số BMI của bạn là ' + kq + ', Bạn bình thường'
    } else if (kq >= 25 && kq < 30.0) {
        document.getElementById('ketqua').innerHTML = 'Chỉ số BMI của bạn là ' + kq + ', Bạn bị béo phì rồi, Đớp ít thôi' +
            '<img src="734d11cc677595ce3c3e5e3bba02721f.gif" height="93" width="45"/>'
    } else {
        document.getElementById('ketqua').innerHTML = 'Chỉ số BMI của bạn là ' + kq + ', Bạn bị béo phì rồi, Đớp ít thôi' +
            '<img src="734d11cc677595ce3c3e5e3bba02721f.gif" height="93" width="45"/>'
    }
}