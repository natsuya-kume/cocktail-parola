import { getAllCocktails } from 'src/domain/cocktails/api/getCocktail'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { getPlaiceholder } from 'plaiceholder'
import { Cocktails } from 'src/features/cocktail/components/Cocktails'
import { useAtom } from 'jotai'
import { cocktailsAtom } from 'src/stores/atom'

type Props = {
  cocktails?: CocktailsType[]
}

const HomePage = ({ cocktails }: Props) => {
  const [_, setCocktails] = useAtom(cocktailsAtom)
  if (!cocktails) {
    return <></>
  }
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
