import { Cocktail } from 'src/domain/cocktails/cocktail'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
export type SideBarNavigationsType = {
  path: string
  state: string
  sidebarProps?: {
    displayText: string
  }
  child?: SideBarNavigationsType[]
}

export type SideBar = Readonly<{
  path: string
  state: string
  sidebarProps?: {
    displayText: string
  }
  child?: SideBarNavigationsType[]
}>
const getSideBarNavigationsList = (list: CocktailsType[]) => {
  return list.map((cocktail) => ({
    path: cocktail.slug,
    state: cocktail.slug,
    sidebarProps: {
      displayText: cocktail.name,
    },
  }))
}

const getSideBarNavigationsListGroupedByCocktailBase = (list: CocktailsType[]) => {
  const cocktailBaseList = Cocktail.getCocktailBaseList(list)
  return cocktailBaseList.map(
    (cocktailBaseItem): SideBarNavigationsType => ({
      path: cocktailBaseItem.base,
      state: cocktailBaseItem.base,
      sidebarProps: {
        displayText: cocktailBaseItem.base,
      },
      child: cocktailBaseItem.cocktails.map((cocktail) => ({
        path: cocktail.slug,
        state: cocktail.slug,
        sidebarProps: {
          displayText: cocktail.name,
        },
      })),
    }),
  )
}

export const SideBar = {
  getSideBarNavigationsList,
  getSideBarNavigationsListGroupedByCocktailBase,
} as const
