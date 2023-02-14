import { ComponentMeta, ComponentStory } from '@storybook/react'
import { theme } from 'src/config/theme'
import { CocktailBaseType, CocktailType, HowToMakeType } from 'src/domain/cocktails/types/cocktail'
import { Cocktail } from 'src/features/cocktail/Cocktail'

export default {
  title: 'features/cocktail/cocktail',
  component: Cocktail,
} as ComponentMeta<typeof Cocktail>

const cocktail = {
  id: 'i9-c1abzbe',
  createdAt: '2023-01-25T17:36:37.151Z',
  updatedAt: '2023-01-25T17:36:37.151Z',
  publishedAt: '2023-01-25T17:36:37.151Z',
  revisedAt: '2023-01-25T17:36:37.151Z',
  name: 'マルガリータ',
  parola: '無言の愛',
  image: {
    url: 'https://images.microcms-assets.io/assets/8f6539182f0743518f5496d884445d87/7a251b473fbd48ada260bfbdccaa09c7/margarita.jpg',
    height: 450,
    width: 360,
    blurDataURL:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AFxCHXNiUgsDAADVxaT/+OWtnXQAvaqAl4NVcF0mALing6+hfaCUbFNtEmE1OX0fAAAAAElFTkSuQmCC',
  },
  base: 1 as CocktailBaseType,
  publishDate: '2023-01-25T15:00:00.000Z',
  slug: 'margarita',
  description:
    'マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)マルガリータの説明が入ります(現在準備中です。)',
  cocktailType: 'ショート' as CocktailType,
  howToMake: 'シェイク' as HowToMakeType,
}

export const Default: ComponentStory<typeof Cocktail> = () => {
  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <Cocktail cocktail={cocktail} />
    </div>
  )
}
