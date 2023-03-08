function cong() {
    let so1=+document.getElementById('firstnumber').value
    let so2=+document.getElementById('andnumber').value
    let congg = so1 + so2


    document.getElementById('result').innerHTML = congg


}
function tru() {

    let so1=+document.getElementById('firstnumber').value
    let so2=+document.getElementById('andnumber').value
    let tru = so1 - so2


    document.getElementById('result').innerHTML = tru
}
function nhan() {

    let so1=+document.getElementById('firstnumber').value
    let so2=+document.getElementById('andnumber').value
    let nhan = so1 * so2


    document.getElementById('result').innerHTML = nhan
}
function chia() {

    let so1=+document.getElementById('firstnumber').value
    let so2=+document.getElementById('andnumber').value
    let chia = so1 / so2


    document.getElementById('result').innerHTML = chia
}
