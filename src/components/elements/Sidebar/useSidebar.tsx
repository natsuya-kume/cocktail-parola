import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { SideBar } from 'src/domain/sideBar/sideBar'
import { sideBarNavigationsAtom } from 'src/stores/atom'

export const useSidebar = (cocktails: CocktailsType[]) => {
  const [sideBarNavigations, setSideBarNavigations] = useAtom(sideBarNavigationsAtom)
  const sideBarNavigationsList = SideBar.getSideBarNavigationsList(cocktails)
  useEffect(() => {
    if (sideBarNavigations.length) return
    console.log('jh')
    setSideBarNavigations(sideBarNavigationsList)
  }, [setSideBarNavigations, sideBarNavigationsList, sideBarNavigations.length])

  return { sideBarNavigations }
}
