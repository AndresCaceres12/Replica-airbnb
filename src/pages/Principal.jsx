import React from 'react'
import NavbarAir from '../components/NavbarAir'
import FiltroPrecio from '../components/FiltroPrecio'
import Body from '../components/Body'
import FooterAir from '../components/FooterAir'
const Principal = () => {
  return (
    <div>
        <NavbarAir/>
        <FiltroPrecio/>
       <Body />
       <FooterAir/>
    </div>
  )
}
  
export default Principal