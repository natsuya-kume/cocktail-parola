import { ValueOf } from 'next/dist/shared/lib/constants'

export type HowToMakeType = 'ビルド' | 'シェイク'
export type CocktailType = 'ショート' | 'ロング'
export const COCKTAIL_BASE_TYPE = {
  GIN: 1,
  LIQUEUR: 2,
  BEER: 3,
  TEQUILA: 4,
  BRANDY: 5,
  VODKA: 6,
}
export type CocktailBaseType = ValueOf<typeof COCKTAIL_BASE_TYPE>

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
  base: CocktailBaseType
  createdAt?: string
  updatedAt?: string
  revisedAt?: string
}

export type SlugType = {
  name: string
  slug: string
}
