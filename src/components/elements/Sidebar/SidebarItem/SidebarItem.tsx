import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import { ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'
import { colorConfigs } from 'src/config/color'
import { SidebarNavigationsType } from 'src/domain/sidebar/sidebar'
import { pagesPath } from 'src/lib/$path'
import { activeSidebarItemAtom } from 'src/stores/atom'
type Props = {
  item: SidebarNavigationsType
}

export const SidebarItem = memo(({ item }: Props) => {
  const [sidebarItemState, setActiveSidebarItemState] = useAtom(activeSidebarItemAtom)
  const router = useRouter()
  const onClickSidebarItem = useCallback(() => {
    if (item.state) {
      setActiveSidebarItemState({ activeSidebarItemState: item.state })
    }
    if (!item.path) return
    router.push(pagesPath.cocktail._slug(item.path).$url())
  }, [item.path, item.state, router, setActiveSidebarItemState])

  if (!item.sidebarProps || !item.path) {
    return <></>
  }

  return (
    <ListItemButton
      onClick={onClickSidebarItem}
      sx={{
        '&: hover': {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor:
          sidebarItemState.activeSidebarItemState === item.state
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
