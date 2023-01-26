import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarItem } from 'src/components/elements/Sidebar/SidebarItem/SidebarItem'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/Sidebar/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>

export const Default: ComponentStory<typeof SidebarItem> = () => {
  const sidebarNavigations = {
    path: 'kir',
    state: 'kir',
    sidebarProps: {
      displayText: 'キール',
    },
  }

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SidebarItem item={sidebarNavigations} />
    </div>
  )
}
