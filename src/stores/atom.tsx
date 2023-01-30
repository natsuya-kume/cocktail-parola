import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { SideBarNavigationsType } from 'src/domain/sideBar/sideBar'

export const cocktailsAtom = atomWithStorage<CocktailsType[]>('cocktails', [])

export const sideBarNavigationsAtom = atom<SideBarNavigationsType[]>([])

type sideBarItemState = {
  activeSideBarItemState: string
}
const initialState: sideBarItemState = {
  activeSideBarItemState: '',
}

export const activeSideBarItemAtom = atomWithStorage<sideBarItemState>(
  'activeSideBarItem',
  initialState,
)

export const searchedCocktailsAtom = atom<CocktailsType[]>([])
