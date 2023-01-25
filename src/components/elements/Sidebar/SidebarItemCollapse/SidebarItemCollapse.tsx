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
import { SidebarNavigationsType } from 'src/config/routes/routeType'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { SidebarItem } from 'src/components/elements/Sidebar/SidebarItem/SidebarItem'
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import { activeSidebarItemAtom } from 'src/stores/atom'
import { useAtomValue } from 'jotai'

type Props = {
  item: SidebarNavigationsType
}

export const SidebarItemCollapse = memo(({ item }: Props) => {
  const [open, setOpen] = useState(false)
  const sidebarItemState = useAtomValue(activeSidebarItemAtom)
  useEffect(() => {
    if (sidebarItemState.activeSidebarItemState.includes(item.state)) {
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
          {/* {item.sidebarProps.icon} */}
          <LocalBarOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={
            <Typography
              sx={{
                color: colorConfigs.sidebar.fontColor,
              }}
            >
              {item.sidebarProps.displayText}
            </Typography>
          }
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
