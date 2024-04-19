function calculate() {
    let angka1 = parseFloat(prompt("Masukan angka pertama:"));
    let operator = prompt("Masukan operator (+, -, *, /):");
    let angka2 = parseFloat(prompt("Masukan angka kedua:"));
    let hasil;

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            hasil = angka1 / angka2;
            break;
        default:
            alert("Masukan tidak valid!!!");
    }

    document.getElementById('angka1').innerText = angka1;
    document.getElementById('operator').innerText = operator;
    document.getElementById('angka2').innerText = angka2;
    document.getElementById('hasil').innerText = hasil;
    }
calculate();

