//Conversão de temperatura de Celsius para Fahrenheit

function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);
console.log(`A temperatura em graus Fahrenheit é: ${temperaturaFahrenheit}°F`);



//Dia da semana com estrutura condicional switch 


function obterDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Digite um número de 1 a 7.";
    }
}

const numeroDia = 3;
const diaDaSemana = obterDiaDaSemana(numeroDia);
console.log(`O dia da semana é: ${diaDaSemana}`);


// Verificar se um número é positivo, negativo ou zero

function verificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

const numeroVerificado = -5;
const statusNumero = verificarNumero(numeroVerificado);
console.log(`O número é: ${statusNumero}`);



//Cálculo do custo final de um carro ao consumidor

function calcularCustoFinalCarro(custoFabrica) {
    const percentagemDistribuidor = 0.28;
    const impostos = 0.45;
    return custoFabrica + (custoFabrica * percentagemDistribuidor) + (custoFabrica * impostos);
}

const custoFabricaCarro = 20000;
const custoFinalCarro = calcularCustoFinalCarro(custoFabricaCarro);
console.log(`O custo final ao consumidor é: R$${custoFinalCarro.toFixed(2)}`);


//Cálculo do Índice de Massa Corporal (IMC)

function calcularIMC(altura, peso) {
    return peso / (altura ** 2);
}

const alturaPessoa = 1.75; // Em metros
const pesoPessoa = 70; // Em quilogramas
const imc = calcularIMC(alturaPessoa, pesoPessoa);

if (imc < 18.5) {
    console.log("Você está abaixo da faixa de peso ideal.");
} else if (imc > 24.99) {
    console.log("Você está acima da faixa de peso ideal.");
} else {
    console.log("Você está dentro da faixa de peso ideal.");
}


//Calculadora com operação matemática

function calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
        default:
            return "Operação inválida. Use +, -, *, ou /.";
    }
}

const num1 = 10;
const num2 = 5;
const operacao = "+";
const resultado = calcular(num1, num2, operacao);
console.log(`O resultado da operação é: ${resultado}`);



