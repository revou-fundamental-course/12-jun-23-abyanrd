//ini rumus
// let rumusC = (("") * 9/5) + 32 ;
// let rumusF = (("") - 32) * 5/9 ;

// var gantiDefinisi = 'Enter the temperature in degrees Fahrenheit (°F) in the input box, then click the convert button and you will get the conversion result in Celsius (°C)'
// const gantiFormula = 'To convert Fahrenheit to Celsius, you can use the following formula: Celsius = (Fahrenheit - 32) × 5/9 To convert a temperature from Fahrenheit to Celsius,  subtract 32 from the Fahrenheit value and then multiply the result by 5/9. The resulting value will be the equivalent temperature in Celsius.'

//fungsi ini dipanggil pada tombol convert
function konversi() {
    // ambil nilai input dari kolom Celsius
    const celsiusInput = document.getElementById('inputField');
    const celsiusValue = parseFloat(celsiusInput.value);

    // konversi ke Fahrenheit
    const fahrenheitValue = (celsiusValue * 9/5) + 32;

    // menampilkan hasil konversi di kolom output
    const outputField = document.getElementById('outputField');
    outputField.value = fahrenheitValue + ('°F')

    // menampilkan metode perhitungan di kolom calculation method
    const methodField = document.getElementById('methodField');
    methodField.value = celsiusValue + (' * 9/5 + 32 = ') + outputField.value;
}

//fungsi ini dipanggil pada tombol reset
function reset() {
    //untuk mereset semua kolom
    document.getElementById('inputField').value = '';
    document.getElementById('outputField').value = '';
    document.getElementById('methodField').value = '';
}

//fungsi ini dipanggil pada tombol reverse
function reverse() {
    //menukar tulisan definisi yang dibawah header
    var definition1 = document.getElementById('definition');
    var definition2 = document.getElementById('definition2');
    var definisi = definition1.innerHTML;
    definition1.innerHTML = definition2.innerHTML;
    definition2.innerHTML = definisi;

    //menukar tulisan celsius dan fahrenheit
    var celsius = document.getElementById('celsius')
    var fahrenheit = document.getElementById('fahrenheit');
    var temperature = celsius.innerHTML;
    celsius.innerHTML = fahrenheit.innerHTML;
    fahrenheit.innerHTML = temperature;

    //menukar tulisan formula
    var formula1 = document.getElementById('formula');
    var formula2 = document.getElementById('formula2');
    var formula = formula1.innerHTML;
    formula1.innerHTML = formula2.innerHTML;
    formula2.innerHTML = formula;
}