import { Avatar, Box } from '@mui/material'
import { ComponentStory } from '@storybook/react'
import { SideBarItem } from 'src/components/elements/SideBar/SideBarItem/SideBarItem'

export default {
  title: 'Assets/Image',
}

export const Default: ComponentStory<typeof SideBarItem> = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={'/images/cocktail.jpeg'} />
      <Avatar sx={{ backgroundColor: 'background.default' }} src={'/images/cocktailWhite.jpeg'} />
    </Box>
  )
}
