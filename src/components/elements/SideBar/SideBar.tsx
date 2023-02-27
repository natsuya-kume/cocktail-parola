import { Avatar, Box, Drawer, FormControlLabel, List, Stack, Toolbar } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, memo, SetStateAction, useEffect, useMemo } from 'react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'
import { SideBarItemCollapse } from 'src/components/elements/SideBar/SideBarItemCollapse/SideBarItemCollapse'
import { useSideBar } from 'src/components/elements/SideBar/useSideBar'
import { MaterialUISwitch } from 'src/components/elements/ThemeColorSwitch/ThemeColorSwitch'
import { sizeConfigs } from 'src/config/size'
import { ThemeColorType } from 'src/config/theme'
import { pagesPath } from 'src/lib/$path'
import { activeSideBarItemAtom, cocktailsAtom } from 'src/stores/atom'

type Props = {
  isDrawerToggleOpen: boolean
  handleDrawerToggle: () => void
  themeColor: ThemeColorType
  handleChangeThemeColor: Dispatch<SetStateAction<ThemeColorType>>
}

export const SideBar = memo(
  ({ isDrawerToggleOpen, handleDrawerToggle, themeColor, handleChangeThemeColor }: Props) => {
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
        <List disablePadding sx={{ backgroundColor: 'background.default' }}>
          <Toolbar sx={{ marginBottom: '20px' }}>
            <Stack
              sx={{ width: '100%', position: 'relative' }}
              direction='row'
              justifyContent='center'
            >
              <FormControlLabel
                onClick={() =>
                  handleChangeThemeColor((prev) => (prev === 'light' ? 'dark' : 'light'))
                }
                control={<MaterialUISwitch />}
                label=''
                sx={{ position: 'absolute', left: 0, top: '10%' }}
              />
              <Link
                href={pagesPath.$url()}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onClick={isDrawerToggleOpen ? handleDrawerToggle : () => {}}
              >
                <Avatar
                  sx={{ backgroundColor: 'background.default' }}
                  src={
                    themeColor === 'dark' ? '/images/cocktail.jpeg' : '/images/cocktailWhite.jpeg'
                  }
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
      [
        handleDrawerToggle,
        sideBarNavigations,
        isDrawerToggleOpen,
        themeColor,
        handleChangeThemeColor,
      ],
    )
    return (
      <Box sx={{ backgroundColor: 'background.default' }}>
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
              backgroundColor: 'background.default',
              boxShadow: '0 0px 10px 0 rgb(0 0 0 / 15%)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          elevation={0}
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
              backgroundColor: 'background.default',
              boxShadow: '0 0px 10px 0 rgb(0 0 0 / 15%)',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    )
  },
)
