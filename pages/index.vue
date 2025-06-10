<template>
	<Articles :articles="articleStore.articles"/>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/stores/articles';
const articleStore = useArticlesStore()
</script>