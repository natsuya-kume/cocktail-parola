import { AppBar, Toolbar, Typography } from '@mui/material'
import { memo } from 'react'
import { colorConfigs } from 'src/config/color'
import { sizeConfigs } from 'src/config/size'

type Props = {
  hasSidebar?: boolean
}

export const Topbar = memo(({ hasSidebar = true }: Props) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: hasSidebar ? `calc(100% - ${sizeConfigs.sidebar.width})` : '100%',
        ml: sizeConfigs.sidebar.width,
        boxShadow: '0 5px 10px 0 rgb(0 0 0 / 15%)',
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar>
        <Typography variant='h5' sx={{ color: colorConfigs.text.primary, fontWeight: 700 }}>
          Cocktail Parola
        </Typography>
      </Toolbar>
    </AppBar>
  )
})
