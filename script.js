function calculateIMC() {
    // Obter os valores dos campos de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Determinar a classificação do IMC
    let classification = '';
    if (imc < 18.5) {
        classification = 'Magreza';
    } else if (imc < 24.9) {
        classification = 'Normal';
    } else if (imc < 30) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    // Exibir o resultado
    document.getElementById('result').innerText = `Seu IMC é ${imc.toFixed(2)} - ${classification}`;
}
