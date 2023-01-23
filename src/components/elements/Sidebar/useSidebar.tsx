import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { sidebarNavigationsAtom } from 'src/stores/atom'

export const useSidebar = (cocktails: CocktailsType[]) => {
  const [sidebarNavigations, setSidebarNavigations] = useAtom(sidebarNavigationsAtom)

  useEffect(() => {
    if (!cocktails.length || cocktails.length === sidebarNavigations.length) return
    cocktails.map((cocktail) =>
      setSidebarNavigations((prev) => [
        ...prev,
        {
          path: cocktail.slug,
          state: cocktail.slug,
          sidebarProps: {
            displayText: cocktail.name,
          },
        },
      ]),
    )
  }, [cocktails, setSidebarNavigations])
  return { sidebarNavigations }
}
