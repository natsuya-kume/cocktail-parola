import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Topbar } from 'src/components/elements/Topbar/Topbar'

export default {
  title: 'elements/Topbar',
  component: Topbar,
} as ComponentMeta<typeof Topbar>

export const Default: ComponentStory<typeof Topbar> = () => {
  return <Topbar hasSidebar={false} />
}
