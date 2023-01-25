import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { Sidebar } from 'src/domain/sidebar/sidebar'
import { sidebarNavigationsAtom } from 'src/stores/atom'

export const useSidebar = (cocktails: CocktailsType[]) => {
  const [sidebarNavigations, setSidebarNavigations] = useAtom(sidebarNavigationsAtom)
  const sidebarNavigationsList = Sidebar.getSidebarNavigationsList(cocktails)
  useEffect(() => {
    if (sidebarNavigations.length) return
    setSidebarNavigations(sidebarNavigationsList)
  }, [setSidebarNavigations, sidebarNavigationsList])

  return { sidebarNavigations }
}
