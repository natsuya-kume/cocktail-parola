import { memo, useCallback } from 'react'
import { ListItemButton, ListItemIcon } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { colorConfigs } from 'src/config/color'
import { RouteType } from 'src/config/routes/routeType'
import { RootState } from 'src/stores/store'
import { setSidebarItemState } from 'src/stores/features/sidebar/sidebarItemStateSlice'
type Props = {
  item: RouteType
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
    router.push(item.path)
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
        {item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  )
})
