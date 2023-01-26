import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import { theme } from 'src/config/theme'

import { cocktailsAtom } from 'src/stores/atom'

export const Cocktails = memo(() => {
  const router = useRouter()
  const [cocktails] = useAtom(cocktailsAtom)
  const onClickCocktail = useCallback(
    (slug: string) => {
      router.push(`/cocktail/${slug}`)
    },
    [router],
  )
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: 8,
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
                  sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
                >
                  {cocktail.name}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: theme.palette.text.tertiary, opacity: 0.6 }}
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
