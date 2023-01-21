import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarItem } from 'src/components/elements/Sidebar/SidebarItem/SidebarItem'
import { appRoutes } from 'src/config/routes/appRoutes'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/Sidebar/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>

export const Default: ComponentStory<typeof SidebarItem> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SidebarItem item={appRoutes[1]} />
    </div>
  )
}
