//ini rumus
// let cKeF = (("celsius") * 9/5) + 32 ("°F");
// let fKeC = (("fahrenheit") - 32) * 5/9 ("°C");

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

function reset() {
    document.getElementById('inputField').value = '';
    document.getElementById('outputField').value = '';
    document.getElementById('methodField').value = '';
}

function reverse() {

}