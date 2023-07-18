import React from "react";
import Slider from "react-slick";
import "../style/Body.css";
import StarIcon from "@mui/icons-material/Star";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { DataInfo } from "../data/DataPrincipal";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useTranslation } from 'react-i18next';
import i18n from "../config/i18next";
import { DataInfoEn } from "../../public/en/DataPrincipal";
import { DataInfoEs } from "../../public/es/DataPrincipal-es";
import IdiomasModal from "./IdiomasModal";
const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { t, } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const DataInfo = i18n.language === "en" ? DataInfoEn : DataInfoEs;
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="contenedor">
      <div className="row">
        {DataInfo.map((item, index) => (
          <div key={index} className="col-3">
            <Slider {...settings}>
              {item.imagenes.map((image, i) => (
                <div key={i} className="ContenedorImg">
                  <img
                    src={image}
                    alt={`Imagen ${i + 1}`}
                    style={{
                      borderRadius: 19 / 2,
                      minWidth: "300px",
                      maxWidth: "300px",
                      maxHeight: "270px",
                      minHeight: "270px",
                      zIndex: "999 ",
                    }}
                  /><Checkbox className="CorazonIcon"
                  {...label}
               style={{color:"white"}}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </div>
              ))}
            </Slider>
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <b>{item.ubicacion}</b>

                <span>
                  <StarIcon style={{ fontSize: "14px" }} /> {item.rating}
                </span>
              </div>
              <p>{t(item.distancia)}</p>
            <p>{t(item.tiempo)}</p>
              <p>
                <b>{item.precio} COP </b>noche
              </p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => changeLanguage('es')}>Cambiar a español</button>
      <button onClick={() => changeLanguage('en')}>Change to English</button>
   
    </div>
  );
};

export default Body;