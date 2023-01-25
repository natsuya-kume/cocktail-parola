import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import { colorConfigs } from 'src/config/color'
import { sizeConfigs } from 'src/config/size'
import { SidebarItem } from 'src/components/elements/Sidebar/SidebarItem/SidebarItem'
import { SidebarItemCollapse } from 'src/components/elements/Sidebar/SidebarItemCollapse/SidebarItemCollapse'
import { memo, useEffect } from 'react'
import { theme } from 'src/config/theme'
import { useAtom } from 'jotai'
import { cocktailsAtom, activeSidebarItemAtom } from 'src/stores/atom'
import { useSidebar } from 'src/components/elements/Sidebar/useSidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Sidebar = memo(() => {
  const [cocktails] = useAtom(cocktailsAtom)
  const [_, setActiveSidebarItemState] = useAtom(activeSidebarItemAtom)
  const { sidebarNavigations } = useSidebar(cocktails)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      setActiveSidebarItemState({ activeSidebarItemState: '' })
    }
  }, [router, setActiveSidebarItemState])
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
            <Link href='/'>
              <Avatar
                sx={{ backgroundColor: theme.palette.background.default }}
                src='/images/cocktail.jpeg'
              />
            </Link>
          </Stack>
        </Toolbar>
        {sidebarNavigations.map((route, index) =>
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
