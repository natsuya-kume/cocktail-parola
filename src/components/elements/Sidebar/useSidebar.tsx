import { useAtom } from 'jotai'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { sidebarNavigationsAtom } from 'src/stores/atom'

export const useSidebar = (cocktails: CocktailsType[]) => {
  const [sidebarNavigations, setSidebarNavigations] = useAtom(sidebarNavigationsAtom)
  // ここでfixedされたサイドバーを管理する配列を返す
  return { sidebarNavigations }
}
