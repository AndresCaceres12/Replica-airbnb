import React from "react";
import "../style/FiltroPrecio.css";
import { Switch } from "@nextui-org/react";
import CheckIcon from "@mui/icons-material/Check";


const FiltroPrecio = ({title,body}) => {

  return (
    <div >
    <div className="ContainerFilter">
      <b>{title}</b>

      <div className="Switch">
      <p>{body}</p>
      
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
