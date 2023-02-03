import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { colorConfigs } from 'src/config/color'

export default function AboutPage() {
  return (
    <Box>
      <Typography variant='h5'>
        このサイトは、花言葉のようにそれぞれのカクテルにつけられた言葉
        「カクテル言葉」を紹介するサイトです。
      </Typography>
      <Typography variant='h5' sx={{ mt: 3 }}>
        カクテル言葉は人々の伝聞、書籍、ウェブなどを介して広まったものです。そのカクテルが作られた経緯やレシピなどから
        由来するもので、ロマンチックな言葉からメッセージ性が強い言葉まで、内容は様々。
      </Typography>
      <Typography variant='h6' sx={{ mt: 3, color: colorConfigs.text.tertiary }}>
        ※本サイトで使用されている画像はイメージであり、実際のカクテルとは違うカクテルの写真を使用している場合があります。
        カクテルによって複数のカクテル言葉、レシピがあります。
      </Typography>
      <Box sx={{ backgroundColor: colorConfigs.bg.primary, p: 2, mt: 3, borderRadius: '10px' }}>
        <Typography variant='h6' sx={{ color: colorConfigs.text.quaternary }}>
          当サイトの情報を引用・転載する場合は当サイトへのリンクや引用元記載の上でお願いします。
        </Typography>
      </Box>
      <Typography variant='h6' sx={{ mt: 3 }}>
        出典・関連リンク
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
        <Link href='https://sakecomi.com/'>
          <Typography
            variant='h6'
            sx={{
              color: colorConfigs.text.primary,
              display: 'inline-block',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            SAKE COMI
          </Typography>
        </Link>
        <Typography>｜</Typography>
        <Link href='https://cocktailkotoba.nomaki.jp/cocktailtitles.html'>
          <Typography
            variant='h6'
            sx={{
              color: colorConfigs.text.primary,
              display: 'inline-block',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            カクテル言葉
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}
