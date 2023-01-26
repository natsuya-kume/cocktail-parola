import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
export type SidebarNavigationsType = {
  path: string
  state: string
  sidebarProps?: {
    displayText: string
  }
  child?: SidebarNavigationsType[]
}

export type Sidebar = Readonly<{
  path: string
  state: string
  sidebarProps?: {
    displayText: string
  }
  child?: SidebarNavigationsType[]
}>
const getSidebarNavigationsList = (list: CocktailsType[]) => {
  return list.map((cocktail) => ({
    path: cocktail.slug,
    state: cocktail.slug,
    sidebarProps: {
      displayText: cocktail.name,
    },
  }))
}

export const Sidebar = {
  getSidebarNavigationsList,
} as const
