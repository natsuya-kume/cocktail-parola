import type { NextPage } from 'next'
import { Button } from '@mui/material'
import Image from 'next/image'
import profile from 'public/images/profile.png'

const Home: NextPage = () => {
  return (
    <>
      <Button variant='contained'>Hello World</Button>
      <Image src={profile} width={200} height={200} alt='テストプロフィール画像' />
    </>
  )
}

export default Home
