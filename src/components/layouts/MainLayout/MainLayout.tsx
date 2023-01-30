import { Box, Toolbar } from '@mui/material'
import { memo, ReactNode } from 'react'
import { Footer } from 'src/components/elements/Footer/Footer'
import { SideBar } from 'src/components/elements/SideBar/SideBar'
import { TopBar } from 'src/components/elements/TopBar/TopBar'
import { sizeConfigs } from 'src/config/size'
import { theme } from 'src/config/theme'

type Props = {
  children: ReactNode
}

export const MainLayout = memo(({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar />
      <Box
        component='nav'
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <SideBar />
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: '100vh',
          backgroundColor: theme.palette.background.paper,
          position: 'relative',
          paddingBottom: '150px',
        }}
      >
        <Toolbar />
        <Box sx={{ pt: 5, pl: 3, pr: 3 }}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  )
})
