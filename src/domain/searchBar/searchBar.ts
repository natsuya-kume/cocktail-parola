import { CocktailsType } from 'src/domain/cocktails/types/cocktail'

const convertStrSearchKeyWordToArray = (searchWord: string): RegExpMatchArray | null => {
  return searchWord
    .trim()
    .toLowerCase()
    .match(/[^\s]+/g)
}

const filterCocktailBySearchWord = (cocktails: CocktailsType[], searchWords: RegExpMatchArray) => {
  return cocktails.filter((cocktail) =>
    searchWords.every((kw) => cocktail.name.toLowerCase().indexOf(kw) !== -1),
  )
}

export const SearchBar = {
  convertStrSearchKeyWordToArray,
  filterCocktailBySearchWord,
} as const
