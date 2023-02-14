import { Box, Chip, Typography } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { theme } from 'src/config/theme'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'
import { useCocktailDescriptionChipDialog } from 'src/features/cocktail/hooks/useCocktailDescriptionChipDialog'

type Props = {
  cocktail: CocktailsType
}

export const Cocktail = memo(({ cocktail }: Props) => {
  const { Dialog, openDialog } = useCocktailDescriptionChipDialog()
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 10,
        '@media screen and (max-width:600px)': {
          flexDirection: 'column',
          gap: 5,
        },
      }}
    >
      <Image
        src={cocktail.image.url}
        alt='カクテルの画像'
        width={cocktail.image.width}
        height={cocktail.image.height}
        style={{ borderRadius: '6px', width: 'auto' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '@media screen and (max-width:600px)': {
              flexDirection: 'column',
              gap: 1,
              alignItems: 'flex-start',
            },
          }}
        >
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'flex-end',
            '@media screen and (max-width:600px)': {
              flexDirection: 'column',
              alignItems: 'flex-start',
              mt: 3,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
              作り方:{cocktail.howToMake}
            </Typography>
            <Chip
              onClick={() => openDialog(cocktail.howToMake)}
              label='?'
              variant='outlined'
              size='small'
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
              タイプ:{cocktail.cocktailType}
            </Typography>
            <Chip
              onClick={() => openDialog(cocktail.cocktailType)}
              label='?'
              variant='outlined'
              size='small'
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            />
          </Box>
        </Box>
        <Dialog />
      </Box>
    </Box>
  )
})
