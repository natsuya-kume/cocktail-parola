import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SideBar } from 'src/components/elements/SideBar/SideBar'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>

export const Default: ComponentStory<typeof SideBar> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SideBar />
    </div>
  )
}
