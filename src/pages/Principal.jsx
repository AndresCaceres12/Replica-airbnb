import React from 'react'

import NavbarAir from '../components/NavbarAir'
import FiltroPrecio from '../components/FiltroPrecio'
import ContendCards from '../components/ContendCards'
import FooterAir from '../components/FooterAir'
import ButtonMap from '../components/ButtonMap'
const Principal = () => {

  return (
    <div>
        <NavbarAir />
        <FiltroPrecio title="Mostrar el Precio total" body="Incluidas todas las tarifas, pero sin contar los impuestos"/>
       <ContendCards />
       <FooterAir/>
       <ButtonMap/>
    
    </div>
  )
}
  
export default Principal