<template>
	<section class="articles">
		<h1>Articles</h1>
		<div v-if="articles && articles.length > 0" class="articles-list">
			<div v-for="(item, index) in articles" :key="index" class="articles-item">
				<div class="articles-picture">
					<img src="@/assets/img/articles-placeholder.jpg" :alt="item.title">
				</div>
				<p class="articles-title">{{ item.title }}</p>
				<nuxt-link :to="`/articles/${item.id}`" class="articles-more">Read more</nuxt-link>
			</div>
		</div>
		<Pagination v-model="articlesStore.page" :page-count="articlesStore.pageCount"/>
	</section>
</template>

<script setup lang="ts">
import type { Article } from '@/types/Article';
import { useArticlesStore } from '@/stores/articles';

const articlesStore = useArticlesStore()

defineProps<{
  articles: Article[] | null;
}>();
</script>