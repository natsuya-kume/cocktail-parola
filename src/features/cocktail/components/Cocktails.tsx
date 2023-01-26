import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { memo } from 'react'
import { theme } from 'src/config/theme'

import { cocktailsAtom } from 'src/stores/atom'

export const Cocktails = memo(() => {
  const [cocktails] = useAtom(cocktailsAtom)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: '10px',
      }}
    >
      {cocktails.map((cocktail) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
          }}
          key={cocktail.slug}
        >
          <Card sx={{ maxWidth: 300, backgroundColor: theme.palette.background.default }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='350'
                image={cocktail.image.url}
                alt='green iguana'
              />
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
                  {cocktail.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Box>
  )
})
