import { Modal,Text } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import CheckIcon from "@mui/icons-material/Check";
import "../style/IdiomasModal.css";
import { useLanguage } from "./useProvider";

const IdiomasModal = () => {
  const { changeLanguage, setVisible, bindings } = useLanguage();
 
  return (
    <div>
      <Modal
        scroll
        fullScreen
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        {" "}
        <span className="CerrarModal" onClick={() => setVisible(false)}>
          X
        </span>
        <Modal.Body>
          <ul className="ListaIdioma">
            <li>
              <p>Idioma y región</p>
            </li>
            <li>
              <p>Moneda</p>
            </li>
          </ul>
          <div className="Containertranslator">
            <b>Traducción</b>

            <div className="Switch2">
              <p>
                Traducir automáticamente las descripciones y las reseñas al
                Español.
              </p>

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
            <div className="IdiomaSugeridos">
              <h4>Idioma y región sugeridos</h4>
              <span>
                <ul>
                  <li>Español</li>
                  <li style={{ color: "grey" }}>España</li>
                </ul>
              </span>
              <h5>Elige un idioma y una región</h5>
              <span style={{ display: "flex" }}>
                <ul onClick={()=>{changeLanguage("es")}}>
                  <li>Español</li>
                  <li style={{ color: "grey" }}>España</li>
                </ul>
                <ul  onClick={()=>{changeLanguage("en")}}>
                  <li>English</li>
                  <li style={{ color: "grey" }}>United States</li>
                </ul>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
export default IdiomasModal;
