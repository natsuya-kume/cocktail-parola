import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})

export const getCocktailBySlug = async (slug: string) => {
  try {
    const post = await client.get({
      endpoint: 'cocktails',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getPostBySlug ~~')
    console.log(err)
  }
}

export const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: 'cocktails',
      queries: { fields: 'name,slug', orders: '-publishDate', limit: limit },
    })
    return slugs.contents
  } catch (err) {
    console.log('-- getAllSlugs --')
    console.log(err)
  }
}

export const getAllCocktails = async (limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'cocktails',
      queries: {
        fields: 'name,parola,publishDate,slug,image,description,howToMake,cocktailType,base',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}
