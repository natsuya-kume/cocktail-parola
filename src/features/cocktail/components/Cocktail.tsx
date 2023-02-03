import { Box, Chip, Typography } from '@mui/material'
import Image from 'next/image'
import { memo, useCallback, useState } from 'react'
import { SimpleDialog } from 'src/components/elements/Dialog/Dialog'
import { theme } from 'src/config/theme'
import { CocktailsType } from 'src/domain/cocktails/types/cocktail'

type Props = {
  cocktail: CocktailsType
}

export const Cocktail = memo(({ cocktail }: Props) => {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const handleClickOpen = useCallback((value: string) => {
    setSelectedValue(value)
    setOpen(true)
  }, [])

  const handleClose = useCallback((value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }, [])
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 10,
      }}
    >
      <Image
        src={cocktail.image.url}
        alt='カクテルの画像'
        width={cocktail.image.width}
        height={cocktail.image.height}
        style={{ borderRadius: '6px' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}>
          <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
            作り方:{cocktail.howToMake}
          </Typography>
          <Chip
            onClick={() => handleClickOpen(cocktail.howToMake)}
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
          <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
            タイプ:{cocktail.cocktailType}
          </Typography>
          <Chip
            onClick={() => handleClickOpen(cocktail.cocktailType)}
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
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </Box>
    </Box>
  )
})
