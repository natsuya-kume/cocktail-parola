import { ComponentMeta, ComponentStory } from '@storybook/react'
import { theme } from 'src/config/theme'
import { SideBarNavigationsType } from 'src/domain/sideBar/sideBar'
import { SideBarItemCollapse } from './SideBarItemCollapse'

export default {
  title: 'elements/Sidebar/SideBarItemCollapse',
  component: SideBarItemCollapse,
} as ComponentMeta<typeof SideBarItemCollapse>

export const Default: ComponentStory<typeof SideBarItemCollapse> = () => {
  const sideBarNavigations: SideBarNavigationsType = {
    path: 'liqueur',
    state: 'liqueur',
    sidebarProps: {
      displayText: 'リキュールベース',
    },
    child: [
      {
        path: 'kir',
        state: 'kir',
        sidebarProps: {
          displayText: 'キール',
        },
      },
      {
        path: 'Fuzzy navel',
        state: 'Fuzzy navel',
        sidebarProps: {
          displayText: 'ファジーネーブル',
        },
      },
    ],
  }
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SideBarItemCollapse item={sideBarNavigations} />
    </div>
  )
}
