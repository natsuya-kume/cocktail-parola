import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Footer } from 'src/components/elements/Footer/Footer'

export default {
  title: 'elements/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => {
  return <Footer />
}
