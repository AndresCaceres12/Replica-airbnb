import React, { useState, useEffect, useRef } from "react";
import "../style/NavbarAir.css";
import Logo from "../Imagenes/airbnbImg-removebg-preview.png";
import rejilla from "../Imagenes/rejilla.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { InfoNavbar } from "../data/InfoNavbar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Filtro from "../Imagenes/filtro.png";
import { Search } from "@mui/icons-material";
import IdiomasModal from "./IdiomasModal";
import { useLanguage } from "./useProvider";

const NavbarAir = () => {
  const [isHover, setIsHover] = useState(false);
  const { setVisible1, bindings1 } = useLanguage();
  const [Login, setLogin] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    document
      .querySelector(".Navbar2")
      .addEventListener("mouseenter", handleMouseEnter);
    document
      .querySelector(".Navbar2")
      .addEventListener("mouseleave", handleMouseLeave);
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLogin(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
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
              <li className="Search">
                <Search />
              </li>
            </ul>
          </div>
          <div className="Users">
            <span>Pon tu espacio en Airbnb</span>
            <div className="rejilla" onClick={() => setVisible1(true)}>
              <img
                src={rejilla}
                alt=""
                srcset=""
                style={{ maxWidth: "17px" }}
              />
            </div>

            <button
              className="IconsUser"
              onClick={() => {
                setLogin(!Login);
              }}
            >
              <MenuIcon fontSize="inherit" />
              <AccountCircleIcon color="action" fontSize="large" />
            </button>
          </div>
        </header>
      </div>
      {Login && (
        <div className="ShowLogin" ref={modalRef}>
          <ul className="ulPrincipal">
            <li>
              <b>Regístrarse</b>
            </li>
            <li>Inicia sesión</li>
          </ul>
          <ul>
            <li>Pon tu espacio en Airbnb</li>
            <li>Ayuda</li>
          </ul>
        </div>
      )}
      <div className={isHover ? "Navbar2 active" : "Navbar2"}>
        <ul>
          {InfoNavbar.map((info, index) => {
            return (
              <li key={index}>
                <img src={info.img} width={"24px"} height={"24px"} />
                <span>{info.nombre} </span>
              </li>
            );
          })}
        </ul>
        <div className="BotonesNavbar">
          <button className="ButtonRight">
            <KeyboardArrowRightIcon />
          </button>
          <div>
            <button className="ButtonRight2">
              <img
                src={Filtro}
                alt=""
                srcset=""
                width={"24px"}
                height={"20px"}
              />
              filtrar
            </button>
          </div>
        </div>
      </div>
      <IdiomasModal />
    </div>
  );
};

export default NavbarAir;
