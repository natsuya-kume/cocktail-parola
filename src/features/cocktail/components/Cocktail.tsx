import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { theme } from 'src/config/theme'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'

type Props = {
  cocktail: CocktailsType
}

export const Cocktail = memo(({ cocktail }: Props) => {
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
})
