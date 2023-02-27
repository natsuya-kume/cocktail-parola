import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TopBar } from 'src/components/elements/TopBar/TopBar'

export default {
  title: 'elements/TopBar',
  component: TopBar,
  argTypes: {
    handleDrawerToggle: {
      description: 'mbで表示するドロワーを操作するときに使用する関数',
    },
    hasSideBar: {
      description: 'サイドバーを持っているかどうか',
    },
  },
} as ComponentMeta<typeof TopBar>

export const Default: ComponentStory<typeof TopBar> = () => {
  return <TopBar hasSideBar={false} />
}
