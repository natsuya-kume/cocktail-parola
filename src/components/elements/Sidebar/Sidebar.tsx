import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useEffect } from 'react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'
import { SideBarItemCollapse } from 'src/components/elements/SideBar/SideBarItemCollapse/SidebarItemCollapse'
import { useSidebar } from 'src/components/elements/SideBar/useSidebar'
import { colorConfigs } from 'src/config/color'
import { sizeConfigs } from 'src/config/size'
import { theme } from 'src/config/theme'
import { activeSideBarItemAtom, cocktailsAtom } from 'src/stores/atom'

export const SideBar = memo(() => {
  const cocktails = useAtomValue(cocktailsAtom)
  const setActiveSideBarItemState = useSetAtom(activeSideBarItemAtom)
  const { sideBarNavigations } = useSidebar(cocktails)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      setActiveSideBarItemState({ activeSideBarItemState: '' })
    }
  }, [router, setActiveSideBarItemState])
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
        {sideBarNavigations.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SideBarItemCollapse item={route} key={index} />
            ) : (
              <SideBarItem item={route} key={index} />
            )
          ) : null,
        )}
      </List>
    </Drawer>
  )
})
