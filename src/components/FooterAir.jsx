import React from "react";
import rejilla from "../Imagenes/rejilla.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../style/FooterAir.css";
function FooterAir() {
  return (
    <div className="FullFooter">
      <ul className="Footer1">
        <li>© 2023 Airbnb, Inc.</li>
        <li>· Privacidad·</li>
        <li>Términos</li>
        <li>· Mapa del sitio·</li>
        <li>Datos de la empresa</li>
      </ul>
      <ul className="Footer1">
        <li>
          <img src={rejilla} alt="" srcset="" style={{ maxWidth: "17px" }} />
        </li>
        <li>Español (CO)</li>
        <li>$ COP</li>
        <li>Asistencia y recursos</li>
        <li>
          <KeyboardArrowUpIcon />
        </li>
      </ul>
    </div>
  );
}

export default FooterAir;
