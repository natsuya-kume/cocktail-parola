import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SideBar } from 'src/components/elements/SideBar/SideBar'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/SideBar',
  component: SideBar,
  argTypes: {
    handleDrawerToggle: {
      description: 'mbで表示するドロワーを操作するときに使用する関数',
    },
    isDrawerToggleOpen: {
      description: 'mbで表示するドロワーの開閉状態',
    },
    themeColor: {
      description: 'テーマカラー',
    },
    handleChangeThemeColor: {
      description: 'テーマカラーを変更する時に使用する関数',
    },
  },
} as ComponentMeta<typeof SideBar>

export const Default: ComponentStory<typeof SideBar> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SideBar
        isDrawerToggleOpen={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        handleDrawerToggle={() => {}}
        themeColor='dark'
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        handleChangeThemeColor={() => {}}
      />
    </div>
  )
}
