import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {  useEffect, useState } from "react";
import 'tailwindcss/tailwind.css'
import tw from "tailwind-styled-components"
import Map from '../components/map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut} from 'firebase/auth';
import { useRouter } from 'next/dist/client/router';
import { list } from 'postcss';

export default function Home() {
  
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user =>{
      if(user){
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
          


        })
      } else{
        setUser(null)
        router.push('/login')
      }
    })
  }, [])


  return (
    <Wrapper>
      <Map />
      <ActionItems>
      <Header>
        <UberLogo src="https://i.ibb.co/xm1wrLf/uber-technologies-new.jpg"/>
        <Profile>
          <Name>{user && user.name}</Name>
          <UserImage src={user && user.photoUrl} 
          onClick={() => signOut(auth)}/>
        </Profile>
      </Header>
      <Link href="/search">
      <ActionButtons>
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
        Ride</ActionButton>
        <ActionButton><ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
        2-Wheels</ActionButton>
        <ActionButton><ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
        Reserve</ActionButton>
      </ActionButtons>
      </Link>
      <Link href="/search">
      <InputBotton>
      Where to?
      </InputBotton>
      </Link>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col  h-screen 
`
const ActionItems = tw.div`
flex-1 p-4

`
const Header = tw.div`
flex justify-between  item-center
`
const UberLogo = tw.img`
h-10
` 
const Profile = tw.div`
flex item-center 
`
const Name = tw.div`
p-3 w-22 text-sm font-bold
`

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px 
cursor-pointer
`

const ActionButtons = tw.div`
flex 
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg 
transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`

const InputBotton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex item-center mt-8
cursor-text
`