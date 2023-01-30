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

export const SideBar = {
  getSideBarNavigationsList,
} as const
