import React from 'react';
import Slider from 'react-slick';
import '../style/Body.css';
import StarIcon from "@mui/icons-material/Star";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DataInfo } from '../data/DataPrincipal';

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {DataInfo.map((item, index) => (
        <div key={index}>
          <h2>Imágenes</h2>
          <Slider {...settings}>
            {item.imagenes.map((image, i) => (
              <div key={i}>
                <img src={image} alt={`Imagen ${i + 1}`} style={{ maxWidth: "200px" }} />
              </div>
            ))}
          </Slider>
          <p>Ubicación: {item.ubicacion}</p>
          <p>Distancia: {item.distancia}</p>
          <p>Tiempo: {item.tiempo}</p>
          <p>Precio: {item.precio}</p>
          <div>
            <StarIcon style={{ color: "#FFD700" }} />
            <span>Rating: {item.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
