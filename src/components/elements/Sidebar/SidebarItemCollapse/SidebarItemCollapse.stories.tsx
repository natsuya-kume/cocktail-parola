import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarItemCollapse } from 'src/components/elements/Sidebar/SidebarItemCollapse/SidebarItemCollapse'
import { SidebarNavigationsType } from 'src/config/routes/routeType'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/Sidebar/SidebarItemCollapse',
  component: SidebarItemCollapse,
} as ComponentMeta<typeof SidebarItemCollapse>

export const Default: ComponentStory<typeof SidebarItemCollapse> = () => {
  const sidebarNavigations: SidebarNavigationsType = {
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
      <SidebarItemCollapse item={sidebarNavigations} />
    </div>
  )
}
