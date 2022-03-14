export default {
   created(el, binding){
      const posicoesPossiveis = ['relative','fixed','absolute']

      if(posicoesPossiveis.includes(binding.arg)){
         el.style.position = binding.arg
         el.style.top = `${binding.value}px`
      }
   }
}