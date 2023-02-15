import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useEffect, useMemo } from 'react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'
import { SideBarItemCollapse } from 'src/components/elements/SideBar/SideBarItemCollapse/SideBarItemCollapse'
import { useSideBar } from 'src/components/elements/SideBar/useSideBar'
import { colorConfigs } from 'src/config/color'
import { sizeConfigs } from 'src/config/size'
import { theme } from 'src/config/theme'
import { pagesPath } from 'src/lib/$path'
import { activeSideBarItemAtom, cocktailsAtom } from 'src/stores/atom'

type Props = {
  isDrawerToggleOpen: boolean
  handleDrawerToggle: () => void
}

export const SideBar = memo(({ isDrawerToggleOpen, handleDrawerToggle }: Props) => {
  const cocktails = useAtomValue(cocktailsAtom)
  const setActiveSideBarItemState = useSetAtom(activeSideBarItemAtom)
  const { sideBarNavigations } = useSideBar(cocktails)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/') {
      setActiveSideBarItemState({ activeSideBarItemState: '' })
    }
  }, [router, setActiveSideBarItemState])

  const drawerContent = useMemo(
    () => (
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack sx={{ width: '100%' }} direction='row' justifyContent='center'>
            <Link
              href={pagesPath.$url()}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onClick={isDrawerToggleOpen ? handleDrawerToggle : () => {}}
            >
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
              <SideBarItemCollapse
                item={route}
                key={index}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                handleDrawerToggle={isDrawerToggleOpen ? handleDrawerToggle : () => {}}
              />
            ) : (
              <SideBarItem
                item={route}
                key={index}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                handleDrawerToggle={isDrawerToggleOpen ? handleDrawerToggle : () => {}}
              />
            )
          ) : null,
        )}
      </List>
    ),
    [handleDrawerToggle, sideBarNavigations, isDrawerToggleOpen],
  )
  return (
    <>
      <Drawer
        variant='permanent'
        open
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' },
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
        {drawerContent}
      </Drawer>
      <Drawer
        variant='temporary'
        open={isDrawerToggleOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          display: { xs: 'block', sm: 'none' },
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
        {drawerContent}
      </Drawer>
    </>
  )
})
