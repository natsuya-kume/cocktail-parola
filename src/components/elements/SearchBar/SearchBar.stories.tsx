import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchBar } from 'src/components/elements/SearchBar/SearchBar'
import { theme } from 'src/config/theme'

export default {
  title: 'elements/SearchBar/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>

export const Default: ComponentStory<typeof SearchBar> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default, width: 260 }}>
      <SearchBar />
    </div>
  )
}
