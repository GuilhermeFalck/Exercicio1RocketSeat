let number1 = Number(prompt("Digite o primeiro número"));
let number2 = Number(prompt("Digite o segundo número"));

function calcultates(n1, n2) {
  let soma = n1 + n2;
  alert(`A soma dos dois numeros e: ${soma}`);
  let sub = n1 - n2;
  alert(`A subtracao dos dois numeros e ${sub}`);
  let multi = n1 * n2;
  alert(`A multiplicacao dos dois numeros e ${multi}`);
  let div = n1 / n2;
  alert(`A divisao dos dois numeros e ${div}`);
  let restDiv = (n1 % n2).toFixed(2);
  alert(`O resto da divisao dos dois numeros e ${restDiv}`);
  let pairOdd = soma % 2;
  if (pairOdd == 0) {
    alert("Numero e par");
  } else {
    alert("Numero e impar");
  }
  if (n1 === n2) {
    alert("Os numeros sao iguais");
  } else {
    alert("Os numeros sao diferentes");
  }
}

calcultates(number1, number2);
