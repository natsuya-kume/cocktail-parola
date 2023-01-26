import { Box, Typography, CardActionArea, CardMedia, CardContent, Card } from '@mui/material'
import { useAtom } from 'jotai'
import { memo } from 'react'
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
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='350'
                image={cocktail.image.url}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {cocktail.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
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
