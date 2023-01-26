import { useSetAtom } from 'jotai'
import { getPlaiceholder } from 'plaiceholder'
import { getAllCocktails } from 'src/domain/cocktails/api/getCocktail'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { Cocktails } from 'src/features/cocktail/components/Cocktails'
import { cocktailsAtom } from 'src/stores/atom'
type Props = {
  cocktails: CocktailsType[]
}

const HomePage = ({ cocktails }: Props) => {
  const setCocktails = useSetAtom(cocktailsAtom)

  setCocktails(cocktails)
  return <Cocktails />
}

export default HomePage

export const getStaticProps = async () => {
  const cocktails: CocktailsType[] = await getAllCocktails()

  for (const cocktail of cocktails) {
    const { base64 } = await getPlaiceholder(cocktail.image.url)
    cocktail.image.blurDataURL = base64
  }
  return {
    props: {
      cocktails: cocktails,
    },
  }
}
