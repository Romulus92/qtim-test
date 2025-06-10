import data from '@/data/posts.json';
import type { Article } from "@/types/Article";

export default defineEventHandler(async (event) => {
	const query = getQuery(event)

  const posts: Article[] = JSON.parse(JSON.stringify(data))
	
	const limit = query.limit ? query.limit : posts.length
	const offset = query.offset ? query.offset : 0

	const filteredPosts = posts.slice(Number(offset), Number(limit) + Number(offset))

	return filteredPosts
});