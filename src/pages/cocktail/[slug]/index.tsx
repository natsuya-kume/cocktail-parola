import { Box, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { theme } from 'src/config/theme'
import { getAllSlugs, getCocktailBySlug } from 'src/domain/cocktails/api/getCocktail'
import { CocktailsType, SlugType } from 'src/domain/cocktails/types/cocktail'

type Props = {
  cocktail: CocktailsType
}

export default function CocktailPage({ cocktail }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        marginTop: '10px',
      }}
    >
      <Image
        src={cocktail.image.url}
        alt='カクテルの画像'
        width={cocktail.image.width}
        height={cocktail.image.height}
        style={{ borderRadius: '6px' }}
      />
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
          <Typography variant='h4' sx={{ color: theme.palette.text.primary }}>
            {cocktail.name}
          </Typography>
          <Typography variant='h5' sx={{ color: theme.palette.text.secondary }}>
            {cocktail.parola}
          </Typography>
        </Box>
        <Typography variant='h6' sx={{ color: theme.palette.text.primary, mt: 3 }}>
          {cocktail.description}
        </Typography>
        <Typography variant='h6' sx={{ color: theme.palette.text.primary, mt: 5 }}>
          作り方:{cocktail.howToMake}
        </Typography>
        <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
          タイプ:{cocktail.cocktailType}
        </Typography>
      </Box>
    </Box>
  )
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
