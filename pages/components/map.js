import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1IjoiaGF3a2V5ZWtrIiwiYSI6ImNrdm42ZXBwNDEyODIyeG81azlhM2t0NGMifQ.DdeDqcn_1u9qv7pjL_Oqsw';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/hawkeyekk/ckvn9ctyx5av614pfpqp1exwi',
        center: [75.778885, 26.922070],
        zoom: 4,
        })
      })

    return (
        <Wrapper id='map'></Wrapper>
    )
}
export default Map

const Wrapper = tw.div`
flex-1
`