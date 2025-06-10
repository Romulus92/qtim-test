<template>
	<section class="article">
		<h1 class="article-title">{{article?.title}}</h1>
		<div class="article-picture">
			<img src="@/assets/img/article-placeholder.jpg" :alt="article?.title">
		</div>
		<span class="article-subtitle">About</span>
		<p class="article-text">{{ article?.description }}</p>
	</section>
</template>

<script setup lang="ts">
import type { Article } from "@/types/Article";
defineProps<{
  article: Article | null;
}>();
</script>