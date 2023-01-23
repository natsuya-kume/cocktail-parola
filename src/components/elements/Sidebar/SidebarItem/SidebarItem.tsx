import { memo, useCallback } from 'react'
import { ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { colorConfigs } from 'src/config/color'
import { SidebarNavigationsType } from 'src/config/routes/routeType'
import { RootState } from 'src/stores/store'
import { setSidebarItemState } from 'src/stores/features/sidebar/sidebarItemStateSlice'
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import { pagesPath } from 'src/lib/$path'
type Props = {
  item: SidebarNavigationsType
}

export const SidebarItem = memo(({ item }: Props) => {
  const dispatch = useDispatch()
  const { sidebarItemState } = useSelector((state: RootState) => state.sidebarItemState)
  const router = useRouter()
  const onClickSidebarItem = useCallback(() => {
    if (item.state) {
      dispatch(setSidebarItemState(item.state))
    }
    if (!item.path) return
    router.push(pagesPath.cocktail._slug(item.path).$url())
  }, [dispatch, item.path, item.state, router])

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
        backgroundColor: sidebarItemState === item.state ? colorConfigs.sidebar.activeBg : 'unset',
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
