import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/SideBar/SideBarItem',
  component: SideBarItem,
} as ComponentMeta<typeof SideBarItem>

export const Default: ComponentStory<typeof SideBarItem> = () => {
  const sidebarNavigations = {
    path: 'kir',
    state: 'kir',
    sidebarProps: {
      displayText: 'キール',
    },
  }

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SideBarItem item={sidebarNavigations} />
    </div>
  )
}
