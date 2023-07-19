import React, { useState } from "react";
import rejilla from "../Imagenes/rejilla.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../style/FooterAir.css";
import MyModal from "./ModalAsistencia";
import { useLanguage } from "./useProvider";

function FooterAir() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { setVisible1, bindings1 } = useLanguage();
  return (
    <>
      <div className="FullFooter">
        <ul className="Footer1">
          <li >© 2023 Airbnb, Inc.</li>
          <li className="Asistencia"><p>· Privacidad·</p></li>
          <li className="Asistencia"><p>Términos</p></li>
          <li className="Asistencia"><p>· Mapa del sitio·</p></li>
          <li className="Asistencia" ><p>Datos de la empresa</p></li>
        </ul>
        <ul className="Footer1">
          <li>
          <div className="rejilla2" onClick={() => setVisible1(true)}>
               <img src={rejilla} alt="" srcset="" style={{ maxWidth: "17px" }}    />
            </div>
          </li>
          <li>Español (CO)</li>
          <li>$ COP</li>
          <li className="Asistencia">
            <p onClick={openModal}> Asistencia y recursos</p>
            <KeyboardArrowUpIcon />
          </li>
        </ul>
      </div>
     
      <MyModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
}

export default FooterAir;
