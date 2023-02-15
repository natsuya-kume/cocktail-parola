import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { ComponentMeta } from '@storybook/react'
import { SearchBar } from 'src/components/elements/SearchBar/SearchBar'

export default {
  title: 'elements/Icons/Icons',
} as ComponentMeta<typeof SearchBar>

export const Default = () => {
  return (
    <div>
      <LocalBarOutlinedIcon />
      <ExpandLessOutlinedIcon />
      <ExpandMoreOutlinedIcon />
      <MenuIcon />
    </div>
  )
}
