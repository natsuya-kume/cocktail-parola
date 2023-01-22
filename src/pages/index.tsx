import { getAllCocktails } from 'src/domain/cocktails/api/getCocktail'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { getPlaiceholder } from 'plaiceholder'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { theme } from 'src/config/theme'

type Props = {
  cocktails: CocktailsType[]
}

const HomePage = ({ cocktails }: Props) => {
  // MEMO: ここでapproutesを加工してグローバルステートに保存する
  const cocktail = cocktails[0]
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10 }}>
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

export default HomePage

export const getStaticProps = async () => {
  const cocktails: CocktailsType[] = await getAllCocktails()

  for (const cocktail of cocktails) {
    const { base64 } = await getPlaiceholder(cocktail.image.url)
    cocktail.image.blurDataURL = base64
  }
  console.log(cocktails)
  return {
    props: {
      cocktails: cocktails,
    },
  }
}
