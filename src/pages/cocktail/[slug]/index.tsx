import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import { getAllSlugs, getCocktailBySlug } from 'src/domain/cocktails/api/getCocktail'
import { CocktailsType, SlugType } from 'src/domain/cocktails/types/cocktail'
import { Cocktail } from 'src/features/cocktail/Cocktail'

type Props = {
  cocktail: CocktailsType
}

export default function CocktailPage({ cocktail }: Props) {
  return <Cocktail cocktail={cocktail} />
}

export const getStaticPaths = async () => {
  const allSlugs: SlugType[] = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/cocktail/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }
  const cocktail = await getCocktailBySlug(slug)
  const { base64 } = await getPlaiceholder(cocktail.image.url)
  cocktail.blurDataURL = base64

  return {
    props: {
      cocktail: cocktail,
    },
  }
}
