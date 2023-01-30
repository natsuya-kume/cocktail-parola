import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import { ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import { colorConfigs } from 'src/config/color'
import { SideBarNavigationsType } from 'src/domain/sideBar/sideBar'
import { pagesPath } from 'src/lib/$path'
import { activeSideBarItemAtom } from 'src/stores/atom'
type Props = {
  item: SideBarNavigationsType
}

export const SideBarItem = memo(({ item }: Props) => {
  const [sideBarItemState, setActiveSideBarItemState] = useAtom(activeSideBarItemAtom)
  const router = useRouter()
  const onClickSideBarItem = useCallback(() => {
    if (item.state) {
      setActiveSideBarItemState({ activeSideBarItemState: item.state })
    }
    if (!item.path) return
    router.push(pagesPath.cocktail._slug(item.path).$url())
  }, [item.path, item.state, router, setActiveSideBarItemState])

  if (!item.sidebarProps || !item.path) {
    return <></>
  }

  return (
    <ListItemButton
      onClick={onClickSideBarItem}
      sx={{
        '&: hover': {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor:
          sideBarItemState.activeSideBarItemState === item.state
            ? colorConfigs.sidebar.activeBg
            : 'unset',
        paddingY: '12px',
        paddingX: '24px',
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.fontColor,
        }}
      >
        {/* {item.sidebarProps.icon} */}
        <LocalBarOutlinedIcon />
      </ListItemIcon>
      <Typography
        sx={{
          color: colorConfigs.sidebar.fontColor,
        }}
      >
        {item.sidebarProps.displayText}
      </Typography>
    </ListItemButton>
  )
})
