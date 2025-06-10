import data from '@/data/posts.json';
import type { Article } from "@/types/Article";

export default defineEventHandler((event) => {
  const posts:Article[] = JSON.parse(JSON.stringify(data))
  const id = getRouterParam(event, 'id')

  const post: Article | undefined = posts.find(p => p.id === id)

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found',
    })
  }

  return post
})