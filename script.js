document.getElementById('calculate-button').addEventListener('click', function() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operador = document.getElementById('operador').value;
    var result;

    switch (operador) {
        case '+':
            result = valor1 + valor2;
            break;
        case '-':
            result = valor1 - valor2;
            break;
        case '*':
            result = valor1 * valor2;
            break;
        case '/':
            if (valor2 === 0) {
                alert('Não pode ser dividida por zero');
                return;
            }
            result = valor1 / valor2;
            break;
        default:
            alert('Operador invalido ');
            return;
    }

    document.getElementById('result').value = result;
});