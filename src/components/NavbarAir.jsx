import React, { useState, useEffect } from "react";
import "../style/NavbarAir.css";
import Logo from "../Imagenes/airbnbImg-removebg-preview.png";
import rejilla from "../Imagenes/rejilla.png";
import { SearchOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { InfoNavbar } from "../data/InfoNavbar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Filtro from "../Imagenes/filtro.png"
const NavbarAir = () => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    document.querySelector(".Navbar2").addEventListener("mouseenter", handleMouseEnter);
    document.querySelector(".Navbar2").addEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="Navbar">
      <div className="Fullnavbar">
        <header className="ContainerNavbar">
          <div className="Logo">
            <img src={Logo} style={{ maxWidth: "32px" }} alt="" srcset="" />
            <span style={{ color: "#FF385C" }}>
              <b>airbnb </b>
            </span>
          </div>
          <div className="InputNavbar">
            <ul>
              <li className="Borde">En cualquier lugar del mundo</li>
              <li className="Borde">Cualquier semana</li>
              <li className="Cuantos">¿Cuántos?</li>
              <li>
                {" "}
                <SearchOutlined color="disabled" />
              </li>
            </ul>
          </div>
          <div className="Users">
            <span>Pon tu espacio en Airbnb</span>
            <img src={rejilla} alt="" srcset="" style={{ maxWidth: "17px" }} />
            <button className="IconsUser">
              <MenuIcon fontSize="inherit" />
              <AccountCircleIcon color="action" fontSize="large" />
            </button>
          </div>
        </header>
      </div>
      <div
        className={
          isHover ? "Navbar2 active" : "Navbar2"
        }
      >
        <ul>
          {InfoNavbar.map((info, index) => {
            return (
              <li key={index}>
                <img src={info.img} width={"24px"}  height={"24px"}/>
                <span>{info.nombre} </span>
              </li>
            );
          })}

        </ul>
        <div className="BotonesNavbar">
          <button className="ButtonRight">
            <KeyboardArrowRightIcon/>
          </button>
          <div>
            <button className="ButtonRight2">
              <img src={Filtro} alt="" srcset=""  width={"24px"} height={"20px"}/>
              filtrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAir;