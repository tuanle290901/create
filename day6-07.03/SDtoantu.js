function convertCurrency() {
    let amount= document.getElementById('sotien').value
    let from= document.getElementById('From').value
    let to= document.getElementById('To').value
  // if (from == "USD" && to == "VND")

    document.getElementById("result").innerHTML = Number(amount) * 23000
    // console.log(Number(amount) *23000)
    // alert(Number(amount) *23000)

}
