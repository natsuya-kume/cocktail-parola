import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { memo, useEffect, useMemo, useState } from 'react'
import { colorConfigs } from 'src/config/color'
import { RouteType } from 'src/config/routes/routeType'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { SidebarItem } from 'src/components/elements/Sidebar/SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { RootState } from 'src/stores/store'
type Props = {
  item: RouteType
}

export const SidebarItemCollapse = memo(({ item }: Props) => {
  const [open, setOpen] = useState(false)
  const { sidebarItemState } = useSelector((state: RootState) => state.sidebarItemState)

  useEffect(() => {
    if (sidebarItemState.includes(item.state)) {
      setOpen(true)
    }
  }, [sidebarItemState, item])

  if (!item.sidebarProps) {
    return <></>
  }
  const renderExpandIcon = useMemo(
    () => (open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />),
    [open],
  )
  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          '&: hover': {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
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
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {renderExpandIcon}
      </ListItemButton>
      <Collapse in={open} timeout='auto'>
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null,
          )}
        </List>
      </Collapse>
    </>
  )
})
