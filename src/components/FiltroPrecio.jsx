import React from "react";
import "../style/FiltroPrecio.css";
import { Switch } from "@nextui-org/react";
import CheckIcon from "@mui/icons-material/Check";


const FiltroPrecio = () => {

  return (
    <div >
    <div className="ContainerFilter">
      <b>Mostrar el Precio total</b>

      <div className="Switch">
      <p>Incluidas todas las tarifas, pero sin contar los impuestos</p>
      
      <span>
      <Switch
          checked={true}
          size="md"
          borderWeight="black"
          iconOn={<CheckIcon />}
          iconOff={<></>}
        />
      </span>

      </div>
     
    </div> 
   
    </div>
    
  );
};

export default FiltroPrecio;
