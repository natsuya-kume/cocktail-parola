import { Box, Typography } from '@mui/material'
import { useSetAtom } from 'jotai'
import Link from 'next/link'
import { memo, useCallback } from 'react'
import styles from 'src/components/elements/Footer/styles.module.css'
import { colorConfigs } from 'src/config/color'
import { theme } from 'src/config/theme'
import { pagesPath } from 'src/lib/$path'
import { activeSideBarItemAtom } from 'src/stores/atom'
export const Footer = memo(() => {
  const setActiveSideBarItemState = useSetAtom(activeSideBarItemAtom)
  const onClickAboutText = useCallback(
    () => setActiveSideBarItemState({ activeSideBarItemState: '' }),
    [setActiveSideBarItemState],
  )
  return (
    <Box
      sx={{
        padding: '30px 20px',
        backgroundColor: theme.palette.background.default,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media screen and (max-width:600px)': {
          flexDirection: 'column',
          gap: 0.5,
        },
      }}
    >
      <Link href={pagesPath.about.$url()} onClick={onClickAboutText}>
        <Typography
          align='center'
          variant='h6'
          sx={{
            color: colorConfigs.text.primary,
            display: 'inline-block',
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          このサイトについて
        </Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
        }}
      >
        <Typography
          align='center'
          variant='h5'
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            '@media screen and (max-width:600px)': {
              fontSize: 15,
            },
          }}
        >
          Made with
        </Typography>
        <span className={styles.movingHeart}>♥</span>
        <Typography
          align='center'
          variant='h5'
          sx={{
            color: colorConfigs.text.primary,
            fontWeight: 700,
            '@media screen and (max-width:600px)': {
              fontSize: 15,
            },
          }}
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
              '@media screen and (max-width:600px)': {
                fontSize: 15,
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
