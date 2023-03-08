function result () {
    let so1=+document.getElementById('firstnumber').value
    let so2=+document.getElementById('andnumber').value
    let congg= so1 + so2
    let tru= so1 - so2

    document.getElementById('result').innerText = congg
    document.getElementById('result').innerHTML = tru

}