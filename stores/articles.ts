import type { Article } from "@/types/Article";

export const useArticlesStore = defineStore("articlesStore", () => {
	const page = ref(1)
	const limit = 8;
	const pageCount = ref(1)

	const { data: articles, refresh: refreshArticles } = useAsyncData(
  'articles',
		() => $fetch<Article[]>('/api/posts', {
			query: {
				limit: 8,
				offset: page.value === 1 ? 0 : limit * (Number(page.value) - 1)
			}
		})
	)

	const { data: allArticles } = useAsyncData(
  'all-articles',
		() => $fetch<Article[]>('/api/posts'),
		{
			transform(allArticles) {
				pageCount.value = Math.ceil(allArticles.length / limit)
			}
		}
	)

	watch(() => page.value, () => {
		refreshArticles()
	})

	return {
		page,
		pageCount,
    articles,
		allArticles
  };
})