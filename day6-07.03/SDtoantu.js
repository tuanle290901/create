function convertCurrency() {
    let amount= document.getElementById('sotien').value
    let from= document.getElementById('From').value
    let to= document.getElementById('To').value
  if (from == "USD" && to == "VND")
    document.getElementById("result").innerHTML = Number(amount) * 23000
    if ( from == "VND" && to == "USD")
    document.getElementById("result").innerHTML = Number(amount) / 23000

}
