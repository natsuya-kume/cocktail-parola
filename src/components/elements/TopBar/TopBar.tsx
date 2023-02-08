import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useMemo } from 'react'
import { SearchBar } from 'src/components/elements/SearchBar/SearchBar'
import { colorConfigs } from 'src/config/color'
import { sizeConfigs } from 'src/config/size'
import { pagesPath } from 'src/lib/$path'

type Props = {
  hasSideBar?: boolean
  handleDrawerToggle?: () => void
}

export const TopBar = memo(({ hasSideBar = true, handleDrawerToggle }: Props) => {
  const router = useRouter()
  const renderSearchBar = useMemo(
    () => (router.pathname === '/' ? <SearchBar /> : null),
    [router.pathname],
  )
  return (
    <AppBar
      position='fixed'
      sx={{
        width: hasSideBar ? { sm: `calc(100% - ${sizeConfigs.sidebar.width}px)` } : '100%',
        ml: sizeConfigs.sidebar.width,
        boxShadow: '0 5px 10px 0 rgb(0 0 0 / 15%)',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar>
        <IconButton
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' }, color: colorConfigs.text.primary }}
        >
          <MenuIcon />
        </IconButton>
        <Link href={pagesPath.$url()}>
          <Typography
            variant='h5'
            sx={{
              color: colorConfigs.text.primary,
              fontWeight: 700,
              display: 'inline-block',
              '@media screen and (max-width:600px)': {
                fontSize: 18,
              },
            }}
          >
            Cocktail Parola
          </Typography>
        </Link>
        {renderSearchBar}
      </Toolbar>
    </AppBar>
  )
})
