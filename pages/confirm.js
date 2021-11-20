import React, {  useEffect, useState} from "react";
import 'tailwindcss/tailwind.css'
import tw from "tailwind-styled-components"
import Map from "./components/map";
import { useRouter } from "next/dist/client/router";
import RideSelector from "./components/RideSelector";
import Link from "next/dist/client/link";

const Confirm = () => {

    const router = useRouter()
    const {pickup , dropoff } = router.query
    
    const [pickupCordinates,setPickupCordinates ] = useState([0, 0])
    const [dropoffCordinates, setDropoffCordinates] = useState([0, 0])

    const getPickupCordinates = (pickup) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiaGF3a2V5ZWtrIiwiYSI6ImNrdm80ZTAycDVwcTQydG9rbGJiNmJub2sifQ.SSohFMSzHBwCw-UEv_DHhg",
            limit:1
        })

        )
        .then(Response =>Response.json())
        .then(data => {

            setPickupCordinates(data.features[0].center)
        })
    }

    const getDropoffCordinates = (dropoff) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiaGF3a2V5ZWtrIiwiYSI6ImNrdm55ZmxxeTFkb24zM291ZThkZWd6eDIifQ.CK3xgNLwJBbm8WWLJUo9rg",
            limit:1
        })

        )
        .then(Response =>Response.json())
        .then(data => {

            setDropoffCordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCordinates(pickup);
        getDropoffCordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map 
            
            pickupCordinates ={pickupCordinates}
            dropoffCordinates = {dropoffCordinates}
            />
            <BackButtonContainer> 
                <Link href="/search">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </BackButtonContainer>

            <RideConatainer>
                <RideSelector 
                 pickupCordinates ={pickupCordinates}
                 dropoffCordinates = {dropoffCordinates}
                />
                <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm Uberx
                </ConfirmButton>
                </ConfirmButtonContainer>
            </RideConatainer>
        </Wrapper>
    )
}
export default Confirm

const BackButton = tw.img`
h-12  cursor-pointer
`
const BackButtonContainer = tw.div`
bg-white h-12 w-12 rounded-full absolute ml-2 mt-2 
items-center flex shadow-md
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-3 text-center text-xl 
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const RideConatainer = tw.div`
flex-1 flex flex-col h-1/2
`
const Wrapper = tw.div`
flex flex-col  h-screen

`

