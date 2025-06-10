<template>
	<Article :article/>
</template>

<script setup lang="ts">
import type { Article } from "@/types/Article";
const route = useRoute()

const { data: article } = useAsyncData('article', () => $fetch<Article>(`/api/posts/${route.params.id}`))
</script>