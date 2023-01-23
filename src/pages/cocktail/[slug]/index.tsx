import { Typography } from '@mui/material'
import React from 'react'
import { theme } from 'src/config/theme'

export default function CocktailPage() {
  return (
    <Typography sx={{ color: theme.palette.text.primary }}>
      各々のカクテルコンポーネントが入ります
    </Typography>
  )
}
