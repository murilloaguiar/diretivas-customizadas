export default {
   created(el, binding){
   
      //? testa a existência de um atributo dentro de um objeto
      if(binding.value?.cor) el.style.color = binding.value.cor
      if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte
      
      let totalCaracteres = 25

      if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres

      let textoOriginal = el.innerText
      let tamanhoTextoOriginal = textoOriginal.length
      let textoAjustado = ''

      if (tamanhoTextoOriginal > totalCaracteres) {
         textoAjustado = textoOriginal.substring(0, (totalCaracteres-3)) + '...'
      } else {
         textoAjustado = textoOriginal
      }

      el.innerText = textoAjustado
   }
}