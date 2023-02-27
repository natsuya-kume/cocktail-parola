import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/SideBar/SideBarItem',
  component: SideBarItem,
  argTypes: {
    item: {
      description: 'サイドバーに表示するアイテム',
    },
    handleDrawerToggle: {
      description: 'mbで表示するドロワーを操作するときに使用する関数',
    },
  },
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
