import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { SidebarNavigationsType } from 'src/domain/sidebar/sidebar'

export const cocktailsAtom = atomWithStorage<CocktailsType[]>('cocktails', [])

export const sidebarNavigationsAtom = atom<SidebarNavigationsType[]>([])

type sidebarItemState = {
  activeSidebarItemState: string
}
const initialState: sidebarItemState = {
  activeSidebarItemState: '',
}

export const activeSidebarItemAtom = atomWithStorage<sidebarItemState>(
  'activeSidebarItem',
  initialState,
)
