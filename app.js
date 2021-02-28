var press = document.getElementById("submit");
var result;
var calculate;
var convert;

press.addEventListener("click", function() {

    var height = document.getElementById("height").value;
    var weigth = document.getElementById("weigth").value;

    convert = Number(height) / 100
    calculate = Number(convert) * Number(convert);
    result = Number(weigth) / Number(calculate);
    result = Number(result);


    if (result <= 16) {
        output.innerText = "Severe Thinness" + " " + result;
    };
    if (result <= 17 && result > 16) {
        output.innerText = "Moderate Thinness" + " " + result;
    };
    if (result <= 18.5 && result > 17) {
        output.innerText = "Mild Thinness" + " " + result;
    };
    if (result <= 25 && result > 18.5) {
        output.innerText = "Normal" + " " + result;
    };
    if (result <= 30 && result > 25) {
        output.innerText = "Overwieght" + " " + result;
    };
    if (result <= 35 && result > 30) {
        output.innerText = "Obese Class I" + " " + result;
    };
    if (result <= 40 && result > 35) {
        output.innerText = "Obese Class II" + " " + result;
    };
    if (result > 40) {
        output.innerText = "Obese Class III" + " " + result;
    };
});