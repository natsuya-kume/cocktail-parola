import { Box, Typography } from '@mui/material'
import { memo } from 'react'
import { theme } from 'src/config/theme'

export const Footer = memo(() => {
  return (
    <Box
      sx={{
        padding: '30px 0px',
        backgroundColor: theme.palette.background.default,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography align='center' sx={{ color: theme.palette.text.primary }}>
        ©︎ 2023 - Natsuya Kume
      </Typography>
    </Box>
  )
})
