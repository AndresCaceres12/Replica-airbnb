import React, { useEffect } from "react";
import Modal from "react-modal";
import "../style/ModalAsistencia.css";

const MyModal = ({ isOpen, onRequestClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <button className="close-button" onClick={onRequestClose}>
          X
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-3">
            <p>Asistencia</p>
            <ul>
              <li>Centro de ayuda</li>
              <li>AirCover</li>
              <li>Apoyo a las personas con discapacidad</li>
              <li>Opciones de cancelación</li>
              <li>Nuestra respuesta frente a la COVID-19</li>
              <li>Denunciar un problema en el vecindario</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p>Comunidad</p>
            <ul>
              <li>Airbnb.org: alojamiento de ayuda en caso de catástrofe</li>
              <li>Luchamos contra la discriminación</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p>Modo anfitrión</p>
            <ul>
              <li>Pon tu espacio en Airbnb</li>
              <li>AirCover para anfitriones</li>
              <li>Recursos para anfitriones</li>
              <li>Visita el foro de la comunidad</li>
              <li>Cómo brindar servicios de anfitrión de forma responsable</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p>Airbnb</p>
            <ul>
              <li>Sala de prensa</li>
              <li>Más información sobre las nuevas funciones</li>
              <li>Carta de nuestros fundadores</li>
              <li>Carreras</li>
              <li>Inversionistas</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MyModal;
