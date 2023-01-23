import { atom } from 'jotai'
import { RouteType } from 'src/config/routes/routeType'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'

export const cocktailsAtom = atom<CocktailsType[]>([])

export const sidebarNavigationsAtom = atom<RouteType[]>([])
