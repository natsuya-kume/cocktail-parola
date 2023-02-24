import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MaterialUISwitch } from 'src/components/elements/ThemeColorSwitch/ThemeColorSwitch'

export default {
  title: 'elements/ThemeColorSwitch',
  component: MaterialUISwitch,
} as ComponentMeta<typeof MaterialUISwitch>

export const Default: ComponentStory<typeof MaterialUISwitch> = () => {
  return <MaterialUISwitch />
}
