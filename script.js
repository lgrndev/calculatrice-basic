const buttons = document.querySelectorAll("button");

let calcul = "";
let resultat = document.getElementById("resultat");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.value === "=") {
            let evalResult = eval(calcul);
            let resultString = evalResult.toString();
            
            // Si le résultat a plus de 7 chiffres, le tronquer
            if (resultString.length > 7) {
                evalResult = parseFloat(evalResult.toPrecision(7));
                resultString = evalResult.toString();
            }
            
            resultat.textContent = resultString;
            calcul = evalResult;
        } else if (button.value === "AC") {
            calcul = "";
            resultat.textContent = calcul;
        } else if (button.value === "DEL") {
            calcul = calcul.substring(0, calcul.length - 1);
            resultat.textContent = calcul;
        } else {
            calcul += button.value;
            resultat.textContent = calcul;
        }
    });
});
