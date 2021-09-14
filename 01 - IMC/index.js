function calcular() {
   var altura = document.getElementById("altura");
   var peso = document.getElementById("peso");
   var alturaValor = parseFloat(altura.value);
   var pesoValor = parseFloat(peso.value);
   if (isNaN(alturaValor)) {
      alert('Digite uma altura válida!');
      return;
   }
   if (isNaN(pesoValor)) {
      alert('Digite um peso válido!');
      return;
   }
   
   var valor = (pesoValor / (alturaValor * alturaValor))
   
   var resultado = document.getElementById('imc');
   resultado.innerHTML = 'IMC: ' + valor.toFixed(2);
   
   var classificacao = document.getElementById('nivel');

   switch (true) {
      case (valor < 16):
         classificacao.innerHTML = 'Magreza grave';
         classificacao.style.color = 'red';
         break;
      case (valor < 17):
         classificacao.innerHTML = 'Magreza moderada';
         classificacao.style.color = 'orange';
         break;
      case (valor < 18.5):
         classificacao.innerHTML = 'Magreza leve';
         classificacao.style.color = 'blue';
         break;
      case (valor < 25):
         classificacao.innerHTML = 'Saudável';
         classificacao.style.color = 'green';
         break;
      case (valor < 30):
         classificacao.innerHTML = 'Sobrepeso';
         classificacao.style.color = 'blue';
         break;
      case (valor < 35):
         classificacao.innerHTML = 'Obesidade Grau I';
         classificacao.style.color = 'orange';
         break;
      case (valor < 40):
         classificacao.innerHTML = 'Obesidade Grau II (severa)';
         classificacao.style.color = 'red';
         break;
      default:
         classificacao.innerHTML = 'Obesidade Grau III (mórbida)';
         classificacao.style.color = 'red';
         break;
   }

}

function clear() {
   let fieldAltura = document.getElementById("altura");
   let fieldPeso = document.getElementById("peso");
   let fieldImc = document.getElementById('imc');
   let fieldNivel = document.getElementById('nivel');
   fieldAltura.value = '';
   fieldPeso.value = '';
   fieldImc.innerHTML = '';
   fieldNivel.innerHTML = '';
}