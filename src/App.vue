<template>
   <p>Sem diretiva</p>
   
   <p v-texto="{cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15}">Minha primeira diretiva customizada</p>
   <p v-texto="configuracaoTexto">Teste</p>
   
   <div v-posicao:absolute="75" v-texto="{cor: 'green', totalCaracteres: 50}">Olá, eu sou um binding de argumento e valor</div>

   <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse="'Você encontrará o código A na parte frontal do equipamento.'"> i</span>

   <br>

   <span>Código A: </span><input type="text"><span v-informacao:destacado.doisClicksMouse.sairAutomaticamente="'Você encontrará o código B na parte traseira do equipamento, abaixo da tampa de proteção'"> i</span>

   <hr>

   <h1 v-colorir-fundo-texto="'red'">Diretiva customizada registrada localmente (no componente) </h1>
</template>

<script>

import colirirFundoTexto from '@/directives/colorirFundoTexto'
//podemos omitir a extensão

export default {
   name: 'App',
   data: ()=>({
      configuracaoTexto: {
         cor: 'blue', 
         tamanhoFonte: '200%', 
         totalCaracteres: 15
      },
   }),

   directives: {
      colorirFundoTexto: colirirFundoTexto
   }
}
</script>

<style>

</style>
