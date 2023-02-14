export type HowToMakeType = 'ビルド' | 'シェイク'
export type CocktailType = 'ショート' | 'ロング'

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
  cocktailType: CocktailType
  howToMake: HowToMakeType
  createdAt?: string
  updatedAt?: string
  revisedAt?: string
}

export type SlugType = {
  name: string
  slug: string
}
