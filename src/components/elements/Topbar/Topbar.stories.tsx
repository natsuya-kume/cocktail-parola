import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TopBar } from 'src/components/elements/TopBar/TopBar'

export default {
  title: 'elements/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>

export const Default: ComponentStory<typeof TopBar> = () => {
  return <TopBar hasSideBar={false} />
}
