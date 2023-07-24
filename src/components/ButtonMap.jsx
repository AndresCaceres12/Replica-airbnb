import React from 'react'
import Map from "../Imagenes/Map.png"
import "../style/ButtonMap.css"
const ButtonMap = () => {
  return (
    <div>
        <button className='ButtonMap'> 
            Mostrar mapa 
            <img src={Map} alt="" srcset="" style={{maxWidth:"20px"}}/>
        </button>
    </div>
  )
}

export default ButtonMap