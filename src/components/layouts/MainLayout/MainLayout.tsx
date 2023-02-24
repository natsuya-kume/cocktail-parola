import { Box, Toolbar } from '@mui/material'
import { Dispatch, memo, ReactNode, SetStateAction, useState } from 'react'
import { Footer } from 'src/components/elements/Footer/Footer'
import { SideBar } from 'src/components/elements/SideBar/SideBar'
import { TopBar } from 'src/components/elements/TopBar/TopBar'
import { sizeConfigs } from 'src/config/size'
import { ThemeColorType } from 'src/config/theme'

type Props = {
  children: ReactNode
  handleChangeThemeColor: Dispatch<SetStateAction<'light' | 'dark'>>
  themeColor: ThemeColorType
}

export const MainLayout = memo(({ children, handleChangeThemeColor, themeColor }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        isDrawerToggleOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleChangeThemeColor={handleChangeThemeColor}
        themeColor={themeColor}
      />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: '100vh',
          backgroundColor: 'background.paper',
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
