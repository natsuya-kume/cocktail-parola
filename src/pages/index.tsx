import { useSetAtom } from 'jotai'
import { getPlaiceholder } from 'plaiceholder'
import Meta from 'src/components/layouts/Meta/Meta'
import { getAllCocktails } from 'src/domain/cocktails/api/getCocktail'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { Cocktails } from 'src/features/cocktail/Cocktails'
import { cocktailsAtom } from 'src/stores/atom'
type Props = {
  cocktails: CocktailsType[]
}

const HomePage = ({ cocktails }: Props) => {
  const setCocktails = useSetAtom(cocktailsAtom)

  setCocktails(cocktails)
  return (
    <>
      <Meta
        pageTitle='Cocktail Parola - トップページ'
        pageDesc='カクテル言葉紹介サイト「Cocktail Parola」のトップページです'
      />
      <Cocktails />
    </>
  )
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
