export type CocktailsType = {
  name: string
  slug: string
  parola: string
  image: {
    url: string
    height: number
    width: number
    blurDataURL: string
  }
  publishDate: string
  description: string
  cocktailType: string
  howToMake: string
}
