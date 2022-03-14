import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

Vue.directive('texto', {
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
})
//1 - nome da string
//2- objeto de configuração da diretiva. Podemos disparar os hooks das diretivas

Vue.directive('posicao',{
   created(el, binding){
      console.log(el, binding.arg, binding.value)

      const posicoesPossiveis = ['relative','fixed','absolute']

      if(posicoesPossiveis.includes(binding.arg)){
         el.style.position = binding.arg
         el.style.top = `${binding.value}px`
      }
   }
})

Vue.mount('#app')
