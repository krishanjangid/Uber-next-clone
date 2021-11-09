import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useRouter } from 'next/dist/client/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useRoutes } from 'react-router'


 const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user =>{
          if (user) {
             router.push('/')
         }
        })
    }, [])
    return ( 
        <Wrapper> 
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png"/>
            <Title>Log in to access your account </Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>            
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 w-screen p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`
const HeadImage = tw.img`
object-contain h-64 w-full
`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`