import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import { colorConfigs } from 'src/config/color'
import { sizeConfigs } from 'src/config/size'
import { appRoutes } from 'src/config/routes/appRoutes'
import { SidebarItem } from 'src/components/elements/Sidebar/SidebarItem/SidebarItem'
import { SidebarItemCollapse } from 'src/components/elements/Sidebar/SidebarItemCollapse/SidebarItemCollapse'
import { memo } from 'react'

export const Sidebar = memo(() => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sizeConfigs.sidebar.width,
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.fontColor,
          boxShadow: '0 0px 10px 0 rgb(0 0 0 / 15%)',
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack sx={{ width: '100%' }} direction='row' justifyContent='center'>
            <Avatar src={'public/images/profile.png'} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null,
        )}
      </List>
    </Drawer>
  )
})
