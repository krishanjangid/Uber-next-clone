import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {  useEffect } from "react";
import 'tailwindcss/tailwind.css'
import tw from "tailwind-styled-components"
import Map from './components/map'

import Link from 'next/link'

export default function Home() {
  

//const map = new mapboxgl.Map({
  //container: 'map',
  //style: 'mapbox://styles/mapbox/streets-v11',
 // center: ,
 // zoom : .
 // });


  return (
    <Wrapper>
      <Map />
      <ActionItems>
      <Header>
        <UberLogo src="https://i.ibb.co/xm1wrLf/uber-technologies-new.jpg"/>
        <Profile>
          <Name>Krishan Jangid</Name>
          <UserImage src="https://i.ibb.co/jyMsFB9/11zon-cropped.png"/>
        </Profile>
      </Header>
      <ActionButtons>
      <Link href="/search">
      <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
        Ride</ActionButton>
        </Link>
        <ActionButton><ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
        2-Wheels</ActionButton>
        <ActionButton><ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
        Reserve</ActionButton>
      </ActionButtons>
      <InputBotton>
      Where to?
      </InputBotton>
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
`