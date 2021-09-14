function calcular() {
   console.log('a');
   var peso = document.getElementById("peso");
   var pesoValor = parseFloat(peso.value);
   if (isNaN(pesoValor)) {
      alert('Digite um peso válido!');
      return;
   }

   var campoPlaneta = document.getElementById('planeta');
   var planeta = parseInt(campoPlaneta.value);

   var resultado = document.getElementById('pesoplaneta');
   var valor;

   switch (planeta) {
      case 1:
         valor = (pesoValor / 10) * 3.7;
         break;
      case 2:
         valor = (pesoValor / 10) * 8.8;
         break;
      case 3:
         valor = (pesoValor / 10) * 3.8;
         break;
      case 4:
         valor = (pesoValor / 10) * 26.4;
         break;
      case 5:
         valor = (pesoValor / 10) * 11.5;
         break;
      case 6:
         valor = (pesoValor / 10) * 11.7;
         break;
      default:
         alert('Selecione um planeta válido!');
         return;
   }

   resultado.innerHTML = 'Seu peso no planeta seria: ' + valor.toFixed(2);

}

function limpa() {
   var peso = document.getElementById("peso");
   var resultado = document.getElementById('pesoplaneta');
   var campoPlaneta = document.getElementById('planeta');
   peso.value = '';
   resultado.innerHTML = '';
   campoPlaneta.value = 1;
}