import { Box, Toolbar } from '@mui/material'
import { memo, ReactNode } from 'react'
import { Footer } from 'src/components/elements/Footer/Footer'
import { Sidebar } from 'src/components/elements/Sidebar/Sidebar'
import { Topbar } from 'src/components/elements/Topbar/Topbar'
import { sizeConfigs } from 'src/config/size'
import { theme } from 'src/config/theme'

type Props = {
  children: ReactNode
}

export const MainLayout = memo(({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar />
      <Box
        component='nav'
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
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
