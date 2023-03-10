import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useAtomValue } from 'jotai'
import { memo, useEffect, useState } from 'react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'
import { colorConfigs } from 'src/config/theme'
import { SideBarNavigationsType } from 'src/domain/sideBar/sideBar'
import { activeSideBarItemAtom } from 'src/stores/atom'

type Props = {
  item: SideBarNavigationsType
  handleDrawerToggle?: () => void
}

export const SideBarItemCollapse = memo(({ item, handleDrawerToggle }: Props) => {
  const [open, setOpen] = useState(false)
  const sideBarItemState = useAtomValue(activeSideBarItemAtom)
  useEffect(() => {
    if (sideBarItemState.activeSideBarItemState.includes(item.state)) {
      setOpen(true)
    }
  }, [sideBarItemState, item])

  if (!item.sidebarProps) {
    return <></>
  }
  const renderExpandIcon = open ? (
    <ExpandLessOutlinedIcon sx={{ color: 'primary.main' }} />
  ) : (
    <ExpandMoreOutlinedIcon sx={{ color: 'primary.main' }} />
  )

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          '&: hover': {
            backgroundColor: 'primary.light',
          },
          paddingY: '12px',
          paddingX: '24px',
        }}
      >
        <ListItemIcon
          sx={{
            color: colorConfigs.text.secondary,
          }}
        >
          <LocalBarOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={
            <Typography
              sx={{
                color: 'primary.main',
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
                <SideBarItemCollapse
                  item={route}
                  key={index}
                  handleDrawerToggle={handleDrawerToggle}
                />
              ) : (
                <SideBarItem item={route} key={index} handleDrawerToggle={handleDrawerToggle} />
              )
            ) : null,
          )}
        </List>
      </Collapse>
    </>
  )
})
