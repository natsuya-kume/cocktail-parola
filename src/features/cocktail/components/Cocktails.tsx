import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import { colorConfigs } from 'src/config/color'
import { theme } from 'src/config/theme'
import { cocktailsAtom, searchedCocktailsAtom } from 'src/stores/atom'

export const Cocktails = memo(() => {
  const router = useRouter()
  const rawCocktails = useAtomValue(cocktailsAtom)
  const searchedCocktails = useAtomValue(searchedCocktailsAtom)
  const cocktails = searchedCocktails.length > 0 ? searchedCocktails : rawCocktails

  const onClickCocktail = useCallback(
    (slug: string) => {
      router.push(`/cocktail/${slug}`)
    },
    [router],
  )
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}
    >
      {cocktails.map((cocktail) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
          }}
          key={cocktail.slug}
        >
          <Card
            sx={{ width: 300, backgroundColor: theme.palette.background.default }}
            onClick={() => onClickCocktail(cocktail.slug)}
          >
            <CardActionArea>
              <CardMedia component='img' height='350' image={cocktail.image.url} alt='cocktail' />
              <CardContent sx={{ backgroundColor: theme.palette.background.default }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  sx={{ color: colorConfigs.text.tertiary, fontWeight: 700 }}
                >
                  {cocktail.name}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: colorConfigs.text.tertiary, opacity: 0.6 }}
                >
                  {cocktail.parola}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Box>
  )
})
