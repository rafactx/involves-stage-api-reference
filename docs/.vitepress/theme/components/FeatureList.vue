<template>
  <MyFeature
    v-for="(feature, index) in localizedFeatures"
    :key="feature.title"
    :title="feature.title"
    :details="feature.details"
    :link="feature.link"
    :index="index"
  />
</template>

<script setup lang="ts">
/**
 * Componente FeatureList.vue
 *
 * Renderiza dinamicamente os cards de recursos visuais (features) exibidos na home,
 * utilizando os dados definidos em `features.ts` e adaptando o idioma conforme o contexto.
 *
 * Se uma prop `locale` for fornecida, ela será usada como idioma base.
 * Caso contrário, o idioma será detectado automaticamente via VitePress (`useData().lang`).
 *
 * Este componente é utilizado dentro do `MyLayout.vue`.
 */

import { computed } from 'vue'
import { useData } from 'vitepress'
import MyFeature from './MyFeature.vue'
import { features } from './features'
import type { Lang } from '../types'

/**
 * Prop opcional que permite forçar um idioma específico.
 * Caso não seja passada, será usado o locale detectado automaticamente.
 *
 * @prop locale - Idioma da interface, como 'pt', 'en', 'es', 'fr'
 */
const props = defineProps<{
  locale?: Lang
}>()

/**
 * Idioma detectado automaticamente com base no contexto do VitePress.
 * Exemplo: 'pt-BR' vira 'pt'
 */
const { lang } = useData()
const fallbackLang = computed<Lang>(() => lang.value.split('-')[0] as Lang || 'pt')

/**
 * Idioma final considerado para exibir os dados.
 * Se `props.locale` for definido, ele prevalece sobre o valor detectado.
 */
const selectedLocale = computed<Lang>(() => props.locale ?? fallbackLang.value)

/**
 * Lista de features correspondente ao idioma selecionado.
 * Usada para renderizar os componentes <MyFeature />.
 */
const localizedFeatures = computed(() => features[selectedLocale.value] || features.pt)
</script>
