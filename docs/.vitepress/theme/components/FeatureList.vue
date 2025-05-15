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
import MyFeature from './MyFeature.vue'
import { features } from './features'
import { useData } from 'vitepress'
import { computed } from 'vue'

// 🧠 Extrai a linguagem atual (pt, en, es, fr)
const { lang } = useData()
const locale = computed(() => lang.value.split('-')[0] || 'pt')

// 🌍 Carrega o array de features correspondente ao idioma
const localizedFeatures = computed(() => features[locale.value] || features.pt)
</script>
