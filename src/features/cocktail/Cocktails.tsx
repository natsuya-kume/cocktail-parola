import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import { colorConfigs } from 'src/config/theme'
import { pagesPath } from 'src/lib/$path'
import { cocktailsAtom, searchedCocktailsAtom } from 'src/stores/atom'

export const Cocktails = memo(() => {
  const router = useRouter()
  const rawCocktails = useAtomValue(cocktailsAtom)
  const searchedCocktails = useAtomValue(searchedCocktailsAtom)
  const cocktails = searchedCocktails.length > 0 ? searchedCocktails : rawCocktails

  const onClickCocktail = useCallback(
    (slug: string) => {
      router.push(pagesPath.cocktail._slug(slug).$url())
    },
    [router],
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        '@media screen and (max-width:600px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '13px',
        },
      }}
    >
      {cocktails.map((cocktail) => (
        <Box
          sx={{
            '@media screen and (max-width:600px)': {
              display: 'flex',
              gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
              justifyContent: 'center',
            },
          }}
          key={cocktail.slug}
        >
          <Card
            sx={{
              width: 300,
              backgroundColor: 'background.default',
              '@media screen and (max-width:600px)': {
                width: 150,
                height: 280,
              },
            }}
            onClick={() => onClickCocktail(cocktail.slug)}
            elevation={0}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                height='350'
                image={cocktail.image.url}
                alt='cocktail'
                sx={{
                  '@media screen and (max-width:600px)': {
                    height: 200,
                  },
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: 'background.default',
                  '@media screen and (max-width:600px)': {
                    px: 1,
                    pt: 1,
                  },
                }}
              >
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    '@media screen and (max-width:600px)': {
                      fontSize: '15px',
                      margin: 0,
                    },
                  }}
                >
                  {cocktail.name}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: colorConfigs.text.tertiary,
                    opacity: 0.6,
                    '@media screen and (max-width:600px)': {
                      fontSize: '5px',
                    },
                  }}
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
