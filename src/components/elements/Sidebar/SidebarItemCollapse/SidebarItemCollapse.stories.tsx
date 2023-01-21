import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarItemCollapse } from 'src/components/elements/Sidebar/SidebarItemCollapse/SidebarItemCollapse'
import { appRoutes } from 'src/config/routes/appRoutes'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/Sidebar/SidebarItemCollapse',
  component: SidebarItemCollapse,
} as ComponentMeta<typeof SidebarItemCollapse>

export const Default: ComponentStory<typeof SidebarItemCollapse> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SidebarItemCollapse item={appRoutes[2]} />
    </div>
  )
}
