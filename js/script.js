//fungsi ini dipanggil pada tombol convert ketika input celsius
function convertToFahrenheit() {
    // ambil nilai input dari kolom Celsius
    const celsiusInput = document.getElementById('inputField');
    const celsiusValue = parseFloat(celsiusInput.value);

    // jika tidak ada input maka keluar alert
    if (isNaN(celsiusValue)) {
        alert('Silahkan masukkan nomor pada kolom input');
        return;
    }

    // konversi ke fahrenheit
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    // menampilkan hasil konversi di kolom output
    const outputField = document.getElementById('outputField');
    outputField.value = fahrenheitValue.toFixed(2) //+ ('°F')

    // menampilkan metode perhitungan di kolom calculation method
    var methodField = document.getElementById('methodField');
    methodField.value = '(' + celsiusValue + '°C' + ' * 9/5) + 32 = ' + outputField.value + '°F';


};

//fungsi ini dipanggil pada tombol convert ketika input fahrenheit
function convertToCelsius() {
    // ambil nilai input dari kolom fahrenheit
    const celsiusInput = document.getElementById('inputField');
    const celsiusValue = parseFloat(celsiusInput.value);

    // jika tidak ada input maka keluar alert
    if (isNaN(celsiusValue)) {
        alert('Silahkan masukkan nomor pada kolom input');
        return;
    }

    // konversi ke celsius
    const fahrenheitValue = (celsiusValue - 32) * 9 / 5;

    // menampilkan hasil konversi di kolom output
    const outputField = document.getElementById('outputField');
    outputField.value = fahrenheitValue.toFixed(2); //+ ('°C')

    // menampilkan metode perhitungan di kolom calculation method
    var methodField = document.getElementById('methodField');
    methodField.value = '(' + celsiusValue + '°F' + ' - 32) * 9/5 = ' + outputField.value + '°C';
};


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

    //menyimpan nilai input dan output
    const inputField = document.getElementById('inputField');
    const outputField = document.getElementById('outputField');
    const inputTemp = inputField.value;
    const outputTemp = outputField.value;

    //menukar nilai input dan output
    inputField.value = outputTemp;
    outputField.value = inputTemp;

    //sama seperti dibawah
    const celsiusLabel = document.getElementById('celsius');
    const labelValue = celsiusLabel.innerHTML;
    if (labelValue === 'Celsius') {
        convertToFahrenheit();
    } else if (labelValue === 'Fahrenheit') {
        convertToCelsius();
    }
}

//fungsi ini untuk tombol convert
function convert() {
    const celsiusLabel = document.getElementById('celsius');
    const labelValue = celsiusLabel.innerHTML;
    if (labelValue === 'Celsius') {
        convertToFahrenheit();
    } else if (labelValue === 'Fahrenheit') {
        convertToCelsius();
    }
}