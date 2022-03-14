import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

import texto from './directives/texto.js'
import informacao from './directives/informacao.js'
import posicao from './directives/posicao.js'

Vue.directive('texto', texto)
//1 - nome da string
//2- objeto de configuração da diretiva. Podemos disparar os hooks das diretivas

Vue.directive('posicao', posicao)

Vue.directive('informacao', informacao)

Vue.mount('#app')
