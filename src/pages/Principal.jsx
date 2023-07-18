import React from 'react'
import {useModal} from "@nextui-org/react";
import NavbarAir from '../components/NavbarAir'
import FiltroPrecio from '../components/FiltroPrecio'
import Body from '../components/Body'
import FooterAir from '../components/FooterAir'
const Principal = () => {
  const { setVisible, bindings } = useModal();
  return (
    <div>
        <NavbarAir setVisible={setVisible} bindings={bindings}/>
        <FiltroPrecio title="Mostrar el Precio total" body="Incluidas todas las tarifas, pero sin contar los impuestos"/>
       <Body />
       <FooterAir/>
    </div>
  )
}
  
export default Principal