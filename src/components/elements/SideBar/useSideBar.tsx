import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { SideBar } from 'src/domain/sideBar/sideBar'
import { sideBarNavigationsAtom } from 'src/stores/atom'

export const useSideBar = (cocktails: CocktailsType[]) => {
  const [sideBarNavigations, setSideBarNavigations] = useAtom(sideBarNavigationsAtom)
  const sideBarNavigationsList = SideBar.getSideBarNavigationsListGroupedByCocktailBase(cocktails)

  useEffect(() => {
    if (sideBarNavigations.length) return
    setSideBarNavigations(sideBarNavigationsList)
  }, [setSideBarNavigations, sideBarNavigationsList, sideBarNavigations.length])

  return { sideBarNavigations }
}
