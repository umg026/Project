function a() {
    var n1 = document.getElementById('one').value
    var r1 = document.getElementById('one_result').innerHTML =  2000 * n1

    var n2 = document.getElementById('two').value
    var r2 = document.getElementById('two_result').innerHTML = 1000 * n2

    var n3 = document.getElementById('three').value
    var r3 = document.getElementById('three_result').innerHTML = 500 * n3

    var n4 = document.getElementById('four').value
    var r4 = document.getElementById('four_result').innerHTML = 200 * n4

    var n5 = document.getElementById('five').value
    var r5 = document.getElementById('five_result').innerHTML = 100 * n5

    var n6 = document.getElementById('six').value
    var r6 = document.getElementById('six_result').innerHTML = 50 * n6

    var n7 = document.getElementById('seven').value
    var r7 = document.getElementById('seven_result').innerHTML = 20 * n7

    var n8 = document.getElementById('eight').value
    var r8 = document.getElementById('eight_result').innerHTML = 10 * n8



   
    var r20 = document.getElementById('total').innerHTML = r1+r2+r3+r4+r5+r6+r7+r8;
    const amount = r20;
    const words = convertToWords(amount);

    document.getElementById("word").innerHTML =   words;
}

function convertToWords(number) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (1 <= number && number < 10) {
        return units[number];
    } else if (10 < number && number < 20) {
        return teens[number - 10];
    } else if (20 <= number && number < 100) {
        return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? " " + units[number % 10] : "");
    } else if (100 <= number && number < 1000) {
        return units[Math.floor(number / 100)] + " Hundred" + (number % 100 !== 0 ? " and " + convertToWords(number % 100) : "");
    } else if (1000 <= number && number < 1000000) {
        return convertToWords(Math.floor(number / 1000)) + " Thousand" + (number % 1000 !== 0 ? " " + convertToWords(number % 1000) : "");
    } else if (1000000 <= number && number < 1000000000) {
        return convertToWords(Math.floor(number / 1000000)) + " Million" + (number % 1000000 !== 0 ? " " + convertToWords(number % 1000000) : "");
    } else {
        return "Number out of range";
    }
}




