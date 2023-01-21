import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from 'src/components/elements/Sidebar/Sidebar'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

export const Default: ComponentStory<typeof Sidebar> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <Sidebar />
    </div>
  )
}
