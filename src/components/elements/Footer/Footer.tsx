import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { memo } from 'react'
import styles from 'src/components/elements/Footer/styles.module.css'
import { colorConfigs } from 'src/config/color'
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
        <Typography
          align='center'
          variant='h5'
          sx={{ color: theme.palette.text.primary, fontWeight: 700 }}
        >
          Made with
        </Typography>
        <span className={styles.movingHeart}>♥</span>
        <Typography
          align='center'
          variant='h5'
          sx={{ color: colorConfigs.text.primary, fontWeight: 700 }}
        >
          by
        </Typography>
        <Link href='https://tsunatsuna.vercel.app/'>
          <Typography
            align='center'
            variant='h5'
            sx={{
              color: colorConfigs.text.quaternary,
              fontWeight: 700,
              display: 'inline-block',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            Natsuya Kume
          </Typography>
        </Link>
      </Box>
    </Box>
  )
})
