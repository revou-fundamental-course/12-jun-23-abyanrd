let cKeF = (("") * 9/5) + 32 ("°F");
let fKeC = (("") - 32) * 5/9 ("°C");

function konversi(){
    let input = document.getElementById("celsiusField").value;
    let hasil = (parseInt(input) * 9/5) + 32;
    console.log(hasil + "°F");
    var output = document.getElementById("fahrenheitField");
    output.innerHTML = hasil;
}