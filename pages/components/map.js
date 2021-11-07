import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl, { clearStorage } from 'mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1IjoiaGF3a2V5ZWtrIiwiYSI6ImNrdm80ZTAycDVwcTQydG9rbGJiNmJub2sifQ.SSohFMSzHBwCw-UEv_DHhg';

const Map = (props) => {
    useEffect(() => {
        
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/hawkeyekk/ckvn9ctyx5av614pfpqp1exwi',
        center: [75.740056, 26.915973],
        zoom: 7
        ,
        })

        if(props.pickupCordinates){
         addToMap(map, props.pickupCordinates)   
        } 

        if(props.dropoffCordinates){
            addToMap(map, props.dropoffCordinates)   
           } 

        if(props.pickupCordinates && props.dropoffCordinates){
            map.fitBounds([
                props.dropoffCordinates,
                props.pickupCordinates
            ],{
                padding:60
            })
        }

      },[props.pickupCordinates,props.dropoffCordinates])

      const addToMap =(map, cordinates) =>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(cordinates)
        .addTo(map);
      };



    return (
        <Wrapper id='map'></Wrapper>
    )
}
export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`