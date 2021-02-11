import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ItemsLleno } from "../carrito/ItemsLleno";
import { ItemsVacio } from "../carrito/ItemsVacio";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhoneAlt,
  faEnvelope,
  faClosedCaptioning,
  faTimes,
  faSearch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

// images svg
import Lupa from "../../assets/images/svg/lupa.svg";
import Carrito from "../../assets/images/svg/carrito.svg";

export const Navegacion = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loading = false;

  const [active, setActive] = useState(false);

  

  const handleInactive = () => {
    const close = document.querySelector('.menu');
    close.classList.remove('active');
  };

  return (
    <>
      <div class="d-none d-lg-block d-xl-block">
        <div class="fixed-top">
          <div class="d-flex justify-content-between bg-negro align-items-center">
            <div class="">
              <a class="m-0" href="mailto:jhon@correo.com">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <FontAwesomeIcon icon={faEnvelope} /> administracion@paqari.pe
              </a>
              <a class="m-0" href="tel:986624949">
                <FontAwesomeIcon icon={faPhoneAlt} /> +51 922 319 806
              </a>
              <a class="m-0" href="tel:986624949">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>{" "}
                <FontAwesomeIcon icon={faWhatsapp} /> +51 922 319 806
              </a>
            </div>
            <div class="d-flex">
              <p class="m-0">Siguenos en</p>
              <a class="m-0" href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a class="m-0" href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div class="bg-gray header-menu">
            <nav role="navigation" class="m-auto">
              <ul class="menu-grid">
                <li class="top-level-list-item">
                  <a href="#" class="top-level-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36.55 19.27"
                      height="20 "
                      width="100%"
                    >
                      <defs></defs>
                      <title>menu</title>
                      <g id="Capa_2" data-name="Capa 2">
                        <g id="Menú">
                          <path
                            class="cls-menu"
                            d="M35.55,2H1A1,1,0,0,1,1,0H35.55a1,1,0,0,1,0,2Z"
                          />
                          <path
                            class="cls-menu"
                            d="M27.42,11.15H1a1,1,0,0,1,0-2H27.42a1,1,0,0,1,0,2Z"
                          />
                          <path
                            class="cls-menu"
                            d="M14.21,19.27H1a1,1,0,0,1,0-2H14.21a1,1,0,1,1,0,2Z"
                          />
                        </g>
                      </g>
                    </svg>
                    <p class="m-0 text-menu">Categorias</p>
                  </a>
                </li>
                <a href="index.html" class="d-flex logo-link">
                  <svg
                    xmlns="http://www.w3.org/1999/xlink"
                    viewBox="0 0 178.5 47.8"
                    height="49"
                    width="100%"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                  >
                    <g id="Capa_2">
                      <g id="Logins">
                        <path
                          class="st0"
                          d="M51,0H41c-2.1,0-4.1,1.1-5.3,2.9l-1.5,2.5h-0.3c-4,0-7.2,3.2-7.2,7.2c0,1.3,0.4,2.6,1.1,3.8    c-2.4,0.2-4.5,1.9-5.2,4.3c-0.3-0.2-0.5-0.4-0.8-0.6c-4.7-2.8-10.5-2.9-15.3-0.1c-2,1.1-3.3,3.2-3.4,5.5c0,2.1,1.2,4.1,3.4,5.5    c0.5,0.3,1,0.6,1.6,0.8L5.8,37c-0.3,0.7-1.1,1.2-1.9,1.2H1.4c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h2.5c1.7,0,3.2-1,3.8-2.5    l2.4-5.3c1.3,0.3,2.7,0.5,4.1,0.5c1.2,0,2.3-0.1,3.5-0.4L15.8,37c-0.3,0.7-1.1,1.2-1.9,1.2h-2.5c-0.6,0-1.1,0.5-1.1,1.1    s0.5,1.1,1.1,1.1h2.5c1.7,0,3.2-1,3.8-2.5l2.8-6.1c0.5-0.2,1-0.5,1.4-0.8c1.6-0.9,2.7-2.4,3.3-4.1c1.8,1.1,4,1.2,5.9,0.2l0.5,1.1    c0.7,1.4,2.3,2,3.8,1.3h0.1l1.6-0.9c0.2-0.1,0.4-0.1,0.6,0c0.2,0.1,0.3,0.2,0.4,0.4l3.5,9.1c0.5,1.3,1.7,2.1,3.1,2.1h3.2    c0.6,0,1.1-0.5,1.1-1.1S48.5,38,47.9,38l0,0h-3.2c-0.5,0-0.9-0.3-1.1-0.8L40.1,28c-0.3-0.8-0.9-1.4-1.7-1.6    c-0.8-0.3-1.6-0.2-2.4,0.1l-1.6,0.9c-0.2,0.1-0.3,0.1-0.5,0s-0.3-0.2-0.4-0.3l-0.7-1.6c0.8-1,1.3-2.3,1.3-3.6    c0-0.8-0.2-1.6-0.5-2.3H34c2.5,0,6.9-2.1,8.2-2.7c5.7-2.8,5.7-4,5.7-4.5s0-1.5-5.7-4.4c-1.8-0.9-3.7-1.7-5.6-2.3l1.1-1.8    c0.7-1.2,2-1.9,3.4-1.9h10c0.6,0,1.1-0.5,1.1-1.1S51.6,0,51,0L51,0z M11,30.6l2.6-5.7c0.1-0.2,0.3-0.4,0.5-0.4s0.5,0.1,0.6,0.2    l4.5,5.2c-1.6,0.7-3.4,1-5.1,1C13.1,30.9,12.1,30.8,11,30.6L11,30.6z M21.2,28.9l-4.7-5.6c-1-1.2-2.8-1.3-4-0.3    c-0.3,0.3-0.6,0.6-0.7,1l-2.7,5.9c-2.2-1-3.7-2.6-3.7-4.4c0-2.9,4.1-5.4,8.9-5.4s9,2.5,9,5.4C23.1,26.9,22.4,28.1,21.2,28.9    L21.2,28.9z M24.6,22.1c0-2,1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6C26.3,25.7,24.6,24.1,24.6,22.1L24.6,22.1z     M45.4,12.6c-1.8,1.5-8.7,5-11.4,5c-2.8,0-5-2.3-5-5s2.3-5,5-5c1.2,0,3.8,0.9,6.7,2.3C42.3,10.6,43.9,11.6,45.4,12.6L45.4,12.6z"
                        />
                        <circle class="st0" cx="35.4" cy="12.4" r="1.6" />
                        <path
                          class="st0"
                          d="M64.6,25.2v10.6c-0.3,0.1-0.7,0.2-1.1,0.3c-0.5,0.1-1,0.1-1.5,0.1c-0.8,0.1-1.6-0.1-2.3-0.6    c-0.5-0.5-0.8-1.3-0.7-2V7.3c0-0.5,0.1-1,0.5-1.3c0.4-0.4,0.8-0.6,1.4-0.7c1.2-0.4,2.5-0.7,3.8-0.8c1.5-0.1,2.8-0.2,4.1-0.2    c4.4,0,7.7,0.9,9.8,2.8c2.1,1.9,3.3,4.7,3.2,7.6c0.1,2.9-1,5.7-3.2,7.7c-2.1,1.9-5.3,2.9-9.5,2.9L64.6,25.2z M68.8,20.7    c2,0.1,3.9-0.4,5.5-1.5c1.4-1.1,2.1-2.8,2-4.6c0.2-1.7-0.5-3.4-1.9-4.5c-1.6-1.1-3.5-1.6-5.5-1.4c-0.8,0-1.6,0-2.3,0.1    S65.2,9,64.5,9.1v11.7h4.3V20.7z"
                        />
                        <path
                          class="st0"
                          d="M93.4,11.2c2.7-0.1,5.3,0.6,7.6,2.1c1.9,1.4,2.8,3.5,2.8,6.5v11.9c0,0.6-0.2,1.3-0.5,1.8    c-0.4,0.5-0.9,0.9-1.4,1.2c-1.1,0.6-2.2,1-3.4,1.3c-1.6,0.4-3.2,0.6-4.9,0.6c-3.3,0-5.9-0.6-7.7-1.9c-1.8-1.3-2.9-3.4-2.8-5.7    c-0.1-2,0.7-3.9,2.2-5.1c1.8-1.3,4-2.1,6.3-2.2l7.1-0.7v-1.2c0.1-1.3-0.4-2.5-1.4-3.3c-1.2-0.7-2.6-1.1-4.1-1    c-1.3,0-2.7,0.2-3.9,0.6c-1.2,0.3-2.3,0.8-3.4,1.3c-0.3-0.3-0.6-0.6-0.9-1c-0.2-0.4-0.4-0.8-0.4-1.3s0.1-1,0.4-1.4    c0.4-0.4,0.8-0.8,1.4-1c1-0.5,2.1-0.8,3.3-1C90.8,11.4,92.1,11.2,93.4,11.2z M93.5,32.4c1,0,2.1-0.1,3.1-0.4    c0.7-0.1,1.3-0.4,1.9-0.8v-6.5l-5.6,0.6c-1.2,0.1-2.4,0.4-3.5,1c-0.8,0.5-1.2,1.5-1.2,2.4c0,1,0.4,2,1.3,2.6    C90.7,32.2,92.1,32.5,93.5,32.4L93.5,32.4z"
                        />
                        <path
                          class="st0"
                          d="M128.7,45.1c-0.3,0.1-0.7,0.2-1,0.3c-0.5,0.1-1,0.1-1.4,0.1c-0.8,0.1-1.5-0.1-2.2-0.6    c-0.5-0.5-0.8-1.2-0.7-1.9v-7.7c-0.7,0.4-1.5,0.7-2.3,0.9c-1,0.3-2,0.4-3.1,0.4c-1.6,0-3.2-0.2-4.8-0.7c-1.4-0.5-2.7-1.3-3.8-2.3    c-1.1-1.1-1.9-2.5-2.5-3.9c-0.6-1.8-0.9-3.7-0.9-5.6s0.3-3.8,0.9-5.6c0.6-1.5,1.5-2.9,2.6-4s2.5-1.9,4-2.4    c1.6-0.5,3.4-0.8,5.1-0.8c1.6,0,3.2,0.2,4.7,0.6c1.2,0.3,2.4,0.8,3.4,1.5c0.5,0.3,1,0.8,1.4,1.3c0.3,0.5,0.5,1.2,0.5,1.8    L128.7,45.1z M118.7,32.2c0.9,0,1.8-0.1,2.6-0.4c0.7-0.2,1.4-0.6,2.1-1v-14c-0.6-0.3-1.3-0.6-1.9-0.9c-0.9-0.3-1.7-0.4-2.6-0.4    c-1,0-2,0.2-2.9,0.5c-0.9,0.3-1.7,0.8-2.3,1.5c-0.7,0.8-1.2,1.6-1.6,2.6c-0.4,1.2-0.6,2.5-0.5,3.8c0,2.9,0.6,5,1.9,6.3    C114.9,31.6,116.7,32.3,118.7,32.2z"
                        />
                        <path
                          class="st0"
                          d="M141.4,11.2c2.7-0.1,5.3,0.6,7.6,2.1c1.9,1.4,2.8,3.5,2.8,6.5v11.9c0,0.6-0.2,1.3-0.5,1.8    c-0.4,0.5-0.9,0.9-1.4,1.2c-1.1,0.6-2.2,1-3.4,1.3c-1.6,0.4-3.2,0.6-4.9,0.6c-3.3,0-5.9-0.6-7.7-1.9c-1.8-1.3-2.9-3.4-2.8-5.7    c-0.1-2,0.7-3.9,2.2-5.1c1.8-1.3,4-2.1,6.3-2.2l7.1-0.7v-1.2c0.1-1.3-0.4-2.5-1.4-3.3c-1.2-0.7-2.6-1.1-4.1-1    c-1.3,0-2.7,0.2-3.9,0.6c-1.2,0.3-2.3,0.8-3.4,1.3c-0.3-0.3-0.6-0.6-0.9-1c-0.2-0.4-0.4-0.9-0.4-1.3c0-0.5,0.1-1,0.4-1.4    c0.4-0.4,0.8-0.8,1.4-1c1-0.5,2.1-0.8,3.3-1C138.8,11.3,140.1,11.2,141.4,11.2z M141.5,32.4c1,0,2.1-0.1,3.1-0.4    c0.7-0.1,1.3-0.4,1.9-0.8v-6.5l-5.6,0.6c-1.2,0.1-2.4,0.4-3.4,1.1c-0.8,0.5-1.2,1.5-1.2,2.4c0,1,0.4,2,1.3,2.6    C138.8,32.2,140.1,32.5,141.5,32.4L141.5,32.4z"
                        />
                        <path
                          class="st0"
                          d="M160,35.7c-0.3,0.1-0.7,0.2-1,0.3c-0.5,0.1-0.9,0.1-1.4,0.1c-0.8,0.1-1.5-0.1-2.2-0.6    c-0.5-0.5-0.8-1.2-0.7-1.9V17c0-0.7,0.1-1.4,0.5-2.1c0.4-0.6,1-1.1,1.6-1.5c1.2-0.7,2.5-1.2,3.8-1.5c1.6-0.4,3.3-0.6,5-0.6    c3,0,4.5,0.9,4.5,2.6c0,0.4-0.1,0.8-0.2,1.1c-0.1,0.3-0.3,0.7-0.5,1c-0.3-0.1-0.8-0.1-1.3-0.2c-0.5-0.1-1.1-0.1-1.6-0.1    c-1.3,0-2.5,0.1-3.7,0.4c-1,0.2-2,0.6-2.9,1.1L160,35.7z"
                        />
                        <path
                          class="st0"
                          d="M172.1,4.6c0-0.8,0.3-1.6,0.9-2.2c0.6-0.6,1.5-0.9,2.4-0.9s1.7,0.3,2.3,0.9s0.9,1.4,0.9,2.2s-0.3,1.6-0.9,2.2    c-0.6,0.6-1.4,0.9-2.3,0.9c-0.9,0-1.7-0.3-2.4-0.9C172.4,6.3,172.1,5.4,172.1,4.6z M178,35.7c-0.3,0.1-0.7,0.2-1,0.3    c-0.5,0.1-1,0.1-1.5,0.1c-0.8,0.1-1.5-0.1-2.2-0.6c-0.5-0.5-0.8-1.2-0.7-1.9V12.1l1-0.3c0.5-0.1,1-0.2,1.5-0.2    c0.8-0.1,1.5,0.1,2.2,0.6c0.5,0.5,0.8,1.2,0.7,1.9V35.7z"
                        />
                        <path
                          class="st0"
                          d="M133.3,44.3c0.3,0,0.6-0.1,0.8-0.2c0.2-0.2,0.3-0.4,0.3-0.6c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.2-0.4-0.3-0.7-0.3    l-0.7-0.2c-0.3-0.1-0.6-0.2-0.8-0.5c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.2,0-0.4,0.1-0.5c0.1-0.2,0.2-0.3,0.3-0.4    c0.2-0.1,0.3-0.2,0.5-0.3s0.4-0.1,0.7-0.1c0.2,0,0.4,0,0.6,0.1c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.2,0.1,0.3,0.2    c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.1c-0.2-0.1-0.3-0.2-0.5-0.3s-0.5-0.1-0.8-0.1s-0.5,0.1-0.7,0.2    c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.3,0.2,0.5c0.2,0.1,0.4,0.3,0.6,0.3l0.5,0.1c0.4,0.1,0.7,0.3,1,0.5c0.2,0.2,0.4,0.6,0.4,0.9    c0,0.4-0.2,0.7-0.4,1c-0.4,0.3-0.8,0.4-1.3,0.4c-0.2,0-0.4,0-0.7-0.1c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.1-0.3-0.2    c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2    c0.1,0.1,0.2,0.1,0.4,0.1C133,44.3,133.1,44.3,133.3,44.3z"
                        />
                        <path
                          class="st0"
                          d="M141.8,42.3c0,0.4-0.1,0.8-0.2,1.1c-0.1,0.3-0.3,0.6-0.5,0.8s-0.5,0.4-0.7,0.5c-0.6,0.2-1.2,0.2-1.8,0    c-0.3-0.1-0.5-0.3-0.7-0.5s-0.4-0.5-0.5-0.8c-0.1-0.4-0.2-0.7-0.2-1.1c0-0.4,0.1-0.7,0.2-1.1c0.1-0.3,0.3-0.6,0.5-0.8    s0.5-0.4,0.7-0.5c0.6-0.2,1.2-0.2,1.8,0c0.3,0.1,0.5,0.3,0.7,0.5s0.4,0.5,0.5,0.8C141.7,41.6,141.8,41.9,141.8,42.3z M141.1,42.3    c0-0.5-0.1-1.1-0.4-1.5c-0.3-0.3-0.8-0.5-1.2-0.5c-0.2,0-0.5,0-0.7,0.1s-0.4,0.2-0.5,0.4s-0.3,0.4-0.3,0.6    c-0.1,0.3-0.1,0.6-0.1,0.8c0,0.5,0.1,1.1,0.4,1.5c0.6,0.7,1.7,0.7,2.4,0.1c0,0,0,0,0.1-0.1C141,43.4,141.2,42.9,141.1,42.3z"
                        />
                        <path
                          class="st0"
                          d="M147.2,39.9L147.2,39.9v0.2c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-2.2v1.7h2.1v0.1c0,0,0,0.1,0,0.2    c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-1.9v2.1h-0.1h-0.2c-0.2,0-0.4-0.1-0.4-0.3v-4.2c0-0.2,0.1-0.3,0.3-0.3h0.1    L147.2,39.9L147.2,39.9z"
                        />
                        <path
                          class="st0"
                          d="M151.3,40.4v4.3h-0.1H151c-0.2,0-0.4-0.1-0.4-0.3v-4h-1.5v-0.1c0,0,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2    c0-0.1,0.1-0.1,0.2-0.1h3.5v0.1V40c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-1.3V40.4z"
                        />
                        <path
                          class="st0"
                          d="M157.2,41.1h0.1c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.4,0.2s0.2,0.6,0.3,0.8l0.3,0.7l0.2,0.7    c0.1,0.2,0.1,0.5,0.2,0.7l0,0c0.1-0.4,0.1-0.7,0.2-1s0.1-0.7,0.2-1s0.1-0.7,0.2-1.1s0.1-0.7,0.2-1.1c0.1,0,0.2-0.1,0.3-0.1    s0.2,0,0.3,0.1s0.1,0.1,0.1,0.2c0,0.2,0,0.3,0,0.5s0,0.5-0.1,0.7c0,0.3-0.1,0.6-0.2,0.9s-0.1,0.6-0.2,0.9s-0.1,0.6-0.2,0.9    s-0.1,0.5-0.2,0.7l-0.2,0.1c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.2-0.5    c-0.1-0.2-0.2-0.4-0.2-0.7c-0.1-0.3-0.2-0.5-0.3-0.8s-0.2-0.5-0.3-0.8c-0.1,0.3-0.2,0.5-0.3,0.8s-0.2,0.6-0.3,0.8    s-0.2,0.5-0.2,0.7s-0.1,0.4-0.2,0.6c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3-0.1c-0.1,0-0.1-0.1-0.1-0.2    c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.5-0.2-0.7s-0.1-0.5-0.2-0.9l-0.2-0.9c-0.1-0.3-0.1-0.6-0.2-0.9s-0.1-0.5-0.1-0.8    c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2,0c0.2,0,0.3,0.1,0.3,0.3l0,0c0.1,0.3,0.1,0.7,0.2,1s0.1,0.6,0.2,1s0.1,0.7,0.2,1    s0.1,0.7,0.2,1.1l0,0c0.1-0.2,0.1-0.5,0.2-0.7s0.1-0.5,0.2-0.7l0.3-0.8C157,41.8,157.1,41.5,157.2,41.1z"
                        />
                        <path
                          class="st0"
                          d="M165.2,43.5H163l-0.1,0.3l-0.1,0.4c0,0.1-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.3c-0.1,0-0.2,0-0.3,0    s-0.2,0-0.2-0.1c-0.1,0-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.2l0.1-0.2c0.1-0.2,0.2-0.5,0.3-0.9s0.3-0.7,0.4-1.1s0.3-0.8,0.5-1.2    s0.3-0.8,0.4-1.1l0.2-0.1h0.3c0.1,0,0.2,0,0.3,0s0.2,0.1,0.2,0.2c0.1,0.3,0.3,0.7,0.4,1.1s0.3,0.8,0.5,1.2l0.4,1.2    c0.1,0.4,0.3,0.8,0.4,1.1c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2L165.2,43.5z     M164.1,40.4l-0.2,0.5c-0.1,0.2-0.1,0.4-0.2,0.7s-0.2,0.4-0.2,0.7l-0.2,0.7h1.8l-0.3-0.7l-0.3-0.7c-0.1-0.2-0.1-0.4-0.2-0.6    S164.2,40.5,164.1,40.4L164.1,40.4z"
                        />
                        <path
                          class="st0"
                          d="M169.1,44.8H169h-0.2c-0.2,0-0.4-0.1-0.4-0.3v-4.2c0-0.1,0-0.2,0.1-0.2s0.1-0.1,0.2-0.1    c0.2-0.1,0.4-0.1,0.6-0.1h0.7c0.5,0,1.1,0.1,1.5,0.4c0.3,0.3,0.5,0.7,0.5,1.2c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.3-0.5,0.5-0.9,0.5    l0.4,0.5c0.1,0.2,0.3,0.3,0.4,0.5s0.2,0.3,0.3,0.4l0.2,0.3c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1    c-0.1-0.1-0.1-0.1-0.2-0.2l-1.2-1.6h-1.1V44.8z M170,42.4c0.3,0,0.7-0.1,0.9-0.3s0.4-0.5,0.3-0.8c0-0.3-0.1-0.6-0.4-0.8    c-0.3-0.2-0.6-0.3-1-0.3c-0.1,0-0.3,0-0.4,0H169v2L170,42.4z"
                        />
                        <path
                          class="st0"
                          d="M174.5,44.7c-0.1-0.1-0.1-0.2-0.1-0.3v-4.2c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1h2.7V40v0.1    c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1H175V42h2.1v0.1c0,0,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-1.9v1.7    h2.6v0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-2.5C174.7,44.8,174.6,44.7,174.5,44.7z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <div class="d-flex justify-content-center bg-white bg-menu">
                  <div
                    class="d-flex align-items-center"
                    style={{ width: "95%" }}
                  >
                    <img src={Lupa} class="icon-lupa img-fluid" alt="iconos" />
                    <input
                      type="text"
                      name="seach"
                      id="seach"
                      class="transparent form-control"
                      placeholder="¿Qué producto estas buscando?"
                      autoFocus
                    />
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* manu responsive */}

      <div class="d-xs-block d-sm-block d-lg-none d-xl-none">
        <div class="fixed-top">
          <div class="bg-gray header-menu">
            <nav role="navigation" class="m-auto">
              <ul class="menu-grid-2">
                <li class="top-level-list-item">
                  <a href="#" class="top-level-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36.55 19.27"
                      height="20 "
                      width="100%"
                    >
                      <defs></defs>
                      <title>menu</title>
                      <g id="Capa_2" data-name="Capa 2">
                        <g id="Menú">
                          <path
                            class="cls-menu"
                            d="M35.55,2H1A1,1,0,0,1,1,0H35.55a1,1,0,0,1,0,2Z"
                          />
                          <path
                            class="cls-menu"
                            d="M27.42,11.15H1a1,1,0,0,1,0-2H27.42a1,1,0,0,1,0,2Z"
                          />
                          <path
                            class="cls-menu"
                            d="M14.21,19.27H1a1,1,0,0,1,0-2H14.21a1,1,0,1,1,0,2Z"
                          />
                        </g>
                      </g>
                    </svg>
                    <p class="m-0 text-menu">Categorias</p>
                  </a>
                </li>
                <a
                  href="index.html"
                  class="d-flex justify-content-center logo-link"
                >
                  <svg
                    xmlns="http://www.w3.org/1999/xlink"
                    viewBox="0 0 178.5 47.8"
                    height="49"
                    width="100%"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                  >
                    <g id="Capa_2">
                      <g id="Logins">
                        <path
                          class="st0"
                          d="M51,0H41c-2.1,0-4.1,1.1-5.3,2.9l-1.5,2.5h-0.3c-4,0-7.2,3.2-7.2,7.2c0,1.3,0.4,2.6,1.1,3.8    c-2.4,0.2-4.5,1.9-5.2,4.3c-0.3-0.2-0.5-0.4-0.8-0.6c-4.7-2.8-10.5-2.9-15.3-0.1c-2,1.1-3.3,3.2-3.4,5.5c0,2.1,1.2,4.1,3.4,5.5    c0.5,0.3,1,0.6,1.6,0.8L5.8,37c-0.3,0.7-1.1,1.2-1.9,1.2H1.4c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h2.5c1.7,0,3.2-1,3.8-2.5    l2.4-5.3c1.3,0.3,2.7,0.5,4.1,0.5c1.2,0,2.3-0.1,3.5-0.4L15.8,37c-0.3,0.7-1.1,1.2-1.9,1.2h-2.5c-0.6,0-1.1,0.5-1.1,1.1    s0.5,1.1,1.1,1.1h2.5c1.7,0,3.2-1,3.8-2.5l2.8-6.1c0.5-0.2,1-0.5,1.4-0.8c1.6-0.9,2.7-2.4,3.3-4.1c1.8,1.1,4,1.2,5.9,0.2l0.5,1.1    c0.7,1.4,2.3,2,3.8,1.3h0.1l1.6-0.9c0.2-0.1,0.4-0.1,0.6,0c0.2,0.1,0.3,0.2,0.4,0.4l3.5,9.1c0.5,1.3,1.7,2.1,3.1,2.1h3.2    c0.6,0,1.1-0.5,1.1-1.1S48.5,38,47.9,38l0,0h-3.2c-0.5,0-0.9-0.3-1.1-0.8L40.1,28c-0.3-0.8-0.9-1.4-1.7-1.6    c-0.8-0.3-1.6-0.2-2.4,0.1l-1.6,0.9c-0.2,0.1-0.3,0.1-0.5,0s-0.3-0.2-0.4-0.3l-0.7-1.6c0.8-1,1.3-2.3,1.3-3.6    c0-0.8-0.2-1.6-0.5-2.3H34c2.5,0,6.9-2.1,8.2-2.7c5.7-2.8,5.7-4,5.7-4.5s0-1.5-5.7-4.4c-1.8-0.9-3.7-1.7-5.6-2.3l1.1-1.8    c0.7-1.2,2-1.9,3.4-1.9h10c0.6,0,1.1-0.5,1.1-1.1S51.6,0,51,0L51,0z M11,30.6l2.6-5.7c0.1-0.2,0.3-0.4,0.5-0.4s0.5,0.1,0.6,0.2    l4.5,5.2c-1.6,0.7-3.4,1-5.1,1C13.1,30.9,12.1,30.8,11,30.6L11,30.6z M21.2,28.9l-4.7-5.6c-1-1.2-2.8-1.3-4-0.3    c-0.3,0.3-0.6,0.6-0.7,1l-2.7,5.9c-2.2-1-3.7-2.6-3.7-4.4c0-2.9,4.1-5.4,8.9-5.4s9,2.5,9,5.4C23.1,26.9,22.4,28.1,21.2,28.9    L21.2,28.9z M24.6,22.1c0-2,1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6C26.3,25.7,24.6,24.1,24.6,22.1L24.6,22.1z     M45.4,12.6c-1.8,1.5-8.7,5-11.4,5c-2.8,0-5-2.3-5-5s2.3-5,5-5c1.2,0,3.8,0.9,6.7,2.3C42.3,10.6,43.9,11.6,45.4,12.6L45.4,12.6z"
                        />
                        <circle class="st0" cx="35.4" cy="12.4" r="1.6" />
                        <path
                          class="st0"
                          d="M64.6,25.2v10.6c-0.3,0.1-0.7,0.2-1.1,0.3c-0.5,0.1-1,0.1-1.5,0.1c-0.8,0.1-1.6-0.1-2.3-0.6    c-0.5-0.5-0.8-1.3-0.7-2V7.3c0-0.5,0.1-1,0.5-1.3c0.4-0.4,0.8-0.6,1.4-0.7c1.2-0.4,2.5-0.7,3.8-0.8c1.5-0.1,2.8-0.2,4.1-0.2    c4.4,0,7.7,0.9,9.8,2.8c2.1,1.9,3.3,4.7,3.2,7.6c0.1,2.9-1,5.7-3.2,7.7c-2.1,1.9-5.3,2.9-9.5,2.9L64.6,25.2z M68.8,20.7    c2,0.1,3.9-0.4,5.5-1.5c1.4-1.1,2.1-2.8,2-4.6c0.2-1.7-0.5-3.4-1.9-4.5c-1.6-1.1-3.5-1.6-5.5-1.4c-0.8,0-1.6,0-2.3,0.1    S65.2,9,64.5,9.1v11.7h4.3V20.7z"
                        />
                        <path
                          class="st0"
                          d="M93.4,11.2c2.7-0.1,5.3,0.6,7.6,2.1c1.9,1.4,2.8,3.5,2.8,6.5v11.9c0,0.6-0.2,1.3-0.5,1.8    c-0.4,0.5-0.9,0.9-1.4,1.2c-1.1,0.6-2.2,1-3.4,1.3c-1.6,0.4-3.2,0.6-4.9,0.6c-3.3,0-5.9-0.6-7.7-1.9c-1.8-1.3-2.9-3.4-2.8-5.7    c-0.1-2,0.7-3.9,2.2-5.1c1.8-1.3,4-2.1,6.3-2.2l7.1-0.7v-1.2c0.1-1.3-0.4-2.5-1.4-3.3c-1.2-0.7-2.6-1.1-4.1-1    c-1.3,0-2.7,0.2-3.9,0.6c-1.2,0.3-2.3,0.8-3.4,1.3c-0.3-0.3-0.6-0.6-0.9-1c-0.2-0.4-0.4-0.8-0.4-1.3s0.1-1,0.4-1.4    c0.4-0.4,0.8-0.8,1.4-1c1-0.5,2.1-0.8,3.3-1C90.8,11.4,92.1,11.2,93.4,11.2z M93.5,32.4c1,0,2.1-0.1,3.1-0.4    c0.7-0.1,1.3-0.4,1.9-0.8v-6.5l-5.6,0.6c-1.2,0.1-2.4,0.4-3.5,1c-0.8,0.5-1.2,1.5-1.2,2.4c0,1,0.4,2,1.3,2.6    C90.7,32.2,92.1,32.5,93.5,32.4L93.5,32.4z"
                        />
                        <path
                          class="st0"
                          d="M128.7,45.1c-0.3,0.1-0.7,0.2-1,0.3c-0.5,0.1-1,0.1-1.4,0.1c-0.8,0.1-1.5-0.1-2.2-0.6    c-0.5-0.5-0.8-1.2-0.7-1.9v-7.7c-0.7,0.4-1.5,0.7-2.3,0.9c-1,0.3-2,0.4-3.1,0.4c-1.6,0-3.2-0.2-4.8-0.7c-1.4-0.5-2.7-1.3-3.8-2.3    c-1.1-1.1-1.9-2.5-2.5-3.9c-0.6-1.8-0.9-3.7-0.9-5.6s0.3-3.8,0.9-5.6c0.6-1.5,1.5-2.9,2.6-4s2.5-1.9,4-2.4    c1.6-0.5,3.4-0.8,5.1-0.8c1.6,0,3.2,0.2,4.7,0.6c1.2,0.3,2.4,0.8,3.4,1.5c0.5,0.3,1,0.8,1.4,1.3c0.3,0.5,0.5,1.2,0.5,1.8    L128.7,45.1z M118.7,32.2c0.9,0,1.8-0.1,2.6-0.4c0.7-0.2,1.4-0.6,2.1-1v-14c-0.6-0.3-1.3-0.6-1.9-0.9c-0.9-0.3-1.7-0.4-2.6-0.4    c-1,0-2,0.2-2.9,0.5c-0.9,0.3-1.7,0.8-2.3,1.5c-0.7,0.8-1.2,1.6-1.6,2.6c-0.4,1.2-0.6,2.5-0.5,3.8c0,2.9,0.6,5,1.9,6.3    C114.9,31.6,116.7,32.3,118.7,32.2z"
                        />
                        <path
                          class="st0"
                          d="M141.4,11.2c2.7-0.1,5.3,0.6,7.6,2.1c1.9,1.4,2.8,3.5,2.8,6.5v11.9c0,0.6-0.2,1.3-0.5,1.8    c-0.4,0.5-0.9,0.9-1.4,1.2c-1.1,0.6-2.2,1-3.4,1.3c-1.6,0.4-3.2,0.6-4.9,0.6c-3.3,0-5.9-0.6-7.7-1.9c-1.8-1.3-2.9-3.4-2.8-5.7    c-0.1-2,0.7-3.9,2.2-5.1c1.8-1.3,4-2.1,6.3-2.2l7.1-0.7v-1.2c0.1-1.3-0.4-2.5-1.4-3.3c-1.2-0.7-2.6-1.1-4.1-1    c-1.3,0-2.7,0.2-3.9,0.6c-1.2,0.3-2.3,0.8-3.4,1.3c-0.3-0.3-0.6-0.6-0.9-1c-0.2-0.4-0.4-0.9-0.4-1.3c0-0.5,0.1-1,0.4-1.4    c0.4-0.4,0.8-0.8,1.4-1c1-0.5,2.1-0.8,3.3-1C138.8,11.3,140.1,11.2,141.4,11.2z M141.5,32.4c1,0,2.1-0.1,3.1-0.4    c0.7-0.1,1.3-0.4,1.9-0.8v-6.5l-5.6,0.6c-1.2,0.1-2.4,0.4-3.4,1.1c-0.8,0.5-1.2,1.5-1.2,2.4c0,1,0.4,2,1.3,2.6    C138.8,32.2,140.1,32.5,141.5,32.4L141.5,32.4z"
                        />
                        <path
                          class="st0"
                          d="M160,35.7c-0.3,0.1-0.7,0.2-1,0.3c-0.5,0.1-0.9,0.1-1.4,0.1c-0.8,0.1-1.5-0.1-2.2-0.6    c-0.5-0.5-0.8-1.2-0.7-1.9V17c0-0.7,0.1-1.4,0.5-2.1c0.4-0.6,1-1.1,1.6-1.5c1.2-0.7,2.5-1.2,3.8-1.5c1.6-0.4,3.3-0.6,5-0.6    c3,0,4.5,0.9,4.5,2.6c0,0.4-0.1,0.8-0.2,1.1c-0.1,0.3-0.3,0.7-0.5,1c-0.3-0.1-0.8-0.1-1.3-0.2c-0.5-0.1-1.1-0.1-1.6-0.1    c-1.3,0-2.5,0.1-3.7,0.4c-1,0.2-2,0.6-2.9,1.1L160,35.7z"
                        />
                        <path
                          class="st0"
                          d="M172.1,4.6c0-0.8,0.3-1.6,0.9-2.2c0.6-0.6,1.5-0.9,2.4-0.9s1.7,0.3,2.3,0.9s0.9,1.4,0.9,2.2s-0.3,1.6-0.9,2.2    c-0.6,0.6-1.4,0.9-2.3,0.9c-0.9,0-1.7-0.3-2.4-0.9C172.4,6.3,172.1,5.4,172.1,4.6z M178,35.7c-0.3,0.1-0.7,0.2-1,0.3    c-0.5,0.1-1,0.1-1.5,0.1c-0.8,0.1-1.5-0.1-2.2-0.6c-0.5-0.5-0.8-1.2-0.7-1.9V12.1l1-0.3c0.5-0.1,1-0.2,1.5-0.2    c0.8-0.1,1.5,0.1,2.2,0.6c0.5,0.5,0.8,1.2,0.7,1.9V35.7z"
                        />
                        <path
                          class="st0"
                          d="M133.3,44.3c0.3,0,0.6-0.1,0.8-0.2c0.2-0.2,0.3-0.4,0.3-0.6c0-0.2-0.1-0.4-0.2-0.5c-0.2-0.2-0.4-0.3-0.7-0.3    l-0.7-0.2c-0.3-0.1-0.6-0.2-0.8-0.5c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.2,0-0.4,0.1-0.5c0.1-0.2,0.2-0.3,0.3-0.4    c0.2-0.1,0.3-0.2,0.5-0.3s0.4-0.1,0.7-0.1c0.2,0,0.4,0,0.6,0.1c0.2,0,0.3,0.1,0.5,0.1c0.1,0,0.2,0.1,0.3,0.2    c0.1,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.1c-0.2-0.1-0.3-0.2-0.5-0.3s-0.5-0.1-0.8-0.1s-0.5,0.1-0.7,0.2    c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.3,0.2,0.5c0.2,0.1,0.4,0.3,0.6,0.3l0.5,0.1c0.4,0.1,0.7,0.3,1,0.5c0.2,0.2,0.4,0.6,0.4,0.9    c0,0.4-0.2,0.7-0.4,1c-0.4,0.3-0.8,0.4-1.3,0.4c-0.2,0-0.4,0-0.7-0.1c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.1-0.3-0.2    c-0.1-0.1-0.1-0.2-0.1-0.3s0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2    c0.1,0.1,0.2,0.1,0.4,0.1C133,44.3,133.1,44.3,133.3,44.3z"
                        />
                        <path
                          class="st0"
                          d="M141.8,42.3c0,0.4-0.1,0.8-0.2,1.1c-0.1,0.3-0.3,0.6-0.5,0.8s-0.5,0.4-0.7,0.5c-0.6,0.2-1.2,0.2-1.8,0    c-0.3-0.1-0.5-0.3-0.7-0.5s-0.4-0.5-0.5-0.8c-0.1-0.4-0.2-0.7-0.2-1.1c0-0.4,0.1-0.7,0.2-1.1c0.1-0.3,0.3-0.6,0.5-0.8    s0.5-0.4,0.7-0.5c0.6-0.2,1.2-0.2,1.8,0c0.3,0.1,0.5,0.3,0.7,0.5s0.4,0.5,0.5,0.8C141.7,41.6,141.8,41.9,141.8,42.3z M141.1,42.3    c0-0.5-0.1-1.1-0.4-1.5c-0.3-0.3-0.8-0.5-1.2-0.5c-0.2,0-0.5,0-0.7,0.1s-0.4,0.2-0.5,0.4s-0.3,0.4-0.3,0.6    c-0.1,0.3-0.1,0.6-0.1,0.8c0,0.5,0.1,1.1,0.4,1.5c0.6,0.7,1.7,0.7,2.4,0.1c0,0,0,0,0.1-0.1C141,43.4,141.2,42.9,141.1,42.3z"
                        />
                        <path
                          class="st0"
                          d="M147.2,39.9L147.2,39.9v0.2c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-2.2v1.7h2.1v0.1c0,0,0,0.1,0,0.2    c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-1.9v2.1h-0.1h-0.2c-0.2,0-0.4-0.1-0.4-0.3v-4.2c0-0.2,0.1-0.3,0.3-0.3h0.1    L147.2,39.9L147.2,39.9z"
                        />
                        <path
                          class="st0"
                          d="M151.3,40.4v4.3h-0.1H151c-0.2,0-0.4-0.1-0.4-0.3v-4h-1.5v-0.1c0,0,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2    c0-0.1,0.1-0.1,0.2-0.1h3.5v0.1V40c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-1.3V40.4z"
                        />
                        <path
                          class="st0"
                          d="M157.2,41.1h0.1c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0.1,0.4,0.2s0.2,0.6,0.3,0.8l0.3,0.7l0.2,0.7    c0.1,0.2,0.1,0.5,0.2,0.7l0,0c0.1-0.4,0.1-0.7,0.2-1s0.1-0.7,0.2-1s0.1-0.7,0.2-1.1s0.1-0.7,0.2-1.1c0.1,0,0.2-0.1,0.3-0.1    s0.2,0,0.3,0.1s0.1,0.1,0.1,0.2c0,0.2,0,0.3,0,0.5s0,0.5-0.1,0.7c0,0.3-0.1,0.6-0.2,0.9s-0.1,0.6-0.2,0.9s-0.1,0.6-0.2,0.9    s-0.1,0.5-0.2,0.7l-0.2,0.1c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3-0.1c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.2-0.1-0.4-0.2-0.5    c-0.1-0.2-0.2-0.4-0.2-0.7c-0.1-0.3-0.2-0.5-0.3-0.8s-0.2-0.5-0.3-0.8c-0.1,0.3-0.2,0.5-0.3,0.8s-0.2,0.6-0.3,0.8    s-0.2,0.5-0.2,0.7s-0.1,0.4-0.2,0.6c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3-0.1c-0.1,0-0.1-0.1-0.1-0.2    c-0.1-0.2-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.5-0.2-0.7s-0.1-0.5-0.2-0.9l-0.2-0.9c-0.1-0.3-0.1-0.6-0.2-0.9s-0.1-0.5-0.1-0.8    c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2,0c0.2,0,0.3,0.1,0.3,0.3l0,0c0.1,0.3,0.1,0.7,0.2,1s0.1,0.6,0.2,1s0.1,0.7,0.2,1    s0.1,0.7,0.2,1.1l0,0c0.1-0.2,0.1-0.5,0.2-0.7s0.1-0.5,0.2-0.7l0.3-0.8C157,41.8,157.1,41.5,157.2,41.1z"
                        />
                        <path
                          class="st0"
                          d="M165.2,43.5H163l-0.1,0.3l-0.1,0.4c0,0.1-0.1,0.2-0.1,0.3s-0.1,0.2-0.1,0.3c-0.1,0-0.2,0-0.3,0    s-0.2,0-0.2-0.1c-0.1,0-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.2l0.1-0.2c0.1-0.2,0.2-0.5,0.3-0.9s0.3-0.7,0.4-1.1s0.3-0.8,0.5-1.2    s0.3-0.8,0.4-1.1l0.2-0.1h0.3c0.1,0,0.2,0,0.3,0s0.2,0.1,0.2,0.2c0.1,0.3,0.3,0.7,0.4,1.1s0.3,0.8,0.5,1.2l0.4,1.2    c0.1,0.4,0.3,0.8,0.4,1.1c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2L165.2,43.5z     M164.1,40.4l-0.2,0.5c-0.1,0.2-0.1,0.4-0.2,0.7s-0.2,0.4-0.2,0.7l-0.2,0.7h1.8l-0.3-0.7l-0.3-0.7c-0.1-0.2-0.1-0.4-0.2-0.6    S164.2,40.5,164.1,40.4L164.1,40.4z"
                        />
                        <path
                          class="st0"
                          d="M169.1,44.8H169h-0.2c-0.2,0-0.4-0.1-0.4-0.3v-4.2c0-0.1,0-0.2,0.1-0.2s0.1-0.1,0.2-0.1    c0.2-0.1,0.4-0.1,0.6-0.1h0.7c0.5,0,1.1,0.1,1.5,0.4c0.3,0.3,0.5,0.7,0.5,1.2c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.3-0.5,0.5-0.9,0.5    l0.4,0.5c0.1,0.2,0.3,0.3,0.4,0.5s0.2,0.3,0.3,0.4l0.2,0.3c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1    c-0.1-0.1-0.1-0.1-0.2-0.2l-1.2-1.6h-1.1V44.8z M170,42.4c0.3,0,0.7-0.1,0.9-0.3s0.4-0.5,0.3-0.8c0-0.3-0.1-0.6-0.4-0.8    c-0.3-0.2-0.6-0.3-1-0.3c-0.1,0-0.3,0-0.4,0H169v2L170,42.4z"
                        />
                        <path
                          class="st0"
                          d="M174.5,44.7c-0.1-0.1-0.1-0.2-0.1-0.3v-4.2c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1h2.7V40v0.1    c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1H175V42h2.1v0.1c0,0,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-1.9v1.7    h2.6v0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.2,0.1h-2.5C174.7,44.8,174.6,44.7,174.5,44.7z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <div>
                  <div>
                    <a
                      href="#"
                      variant="primary"
                      onClick={handleShow}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32.62 32.63"
                        height="35 "
                        width="100%"
                      >
                        <title>lupa</title>
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="Menú">
                            <path
                              fill="#fff"
                              d="M3.67,3.68A12.49,12.49,0,0,0,20.86,21.79l.95,1a2,2,0,0,0,0,2.79h0l6.51,6.51a2,2,0,0,0,2.8,0h0l.93-.93a2,2,0,0,0,0-2.79l-6.52-6.51a2,2,0,0,0-2.79,0h0l-.95-1A12.49,12.49,0,0,0,3.67,3.68ZM24.6,22.75l6.51,6.51a.65.65,0,0,1,0,.93l-.93.93a.65.65,0,0,1-.93,0l-6.51-6.51a.67.67,0,0,1,0-.93l.93-.93A.65.65,0,0,1,24.6,22.75ZM20.42,4.61a11.18,11.18,0,1,1-15.82,0A11.19,11.19,0,0,1,20.42,4.61Z"
                            />
                            <path
                              fill="#fff"
                              d="M5.53,5.54h0l.93.93a8.56,8.56,0,0,1,12.1,0l.93-.93A9.88,9.88,0,0,0,5.53,5.54Z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose} className="modal-paqari">
        <Modal.Header >
          <a onClick={handleClose} className="close-search" closeButton>
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </Modal.Header >
        <Modal.Body className="bg-transparent modal-search">
          <div class="w-100 d-flex align-items-center">
            <input
              type="search"
              name="search"
              id="seach"
              placeholder="¿Qué producto estas buscando?"
              class="btn search-modal"
            />
            <a href="#">
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </a>
          </div>
        </Modal.Body>
      </Modal>


      {/* menu chevere */}

      <div class="d-xs-block d-sm-block d-lg-none d-xl-none">
        <div class="menu">
            <div class="menu__wrapper">
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="d-flex justify-content-between p-2 align-items-center w-100" style={{fontSize: '14px'}}>
                        <div><img src={Carrito} className="carrito" alt="carrito" /> 0: Productos</div>
                        <div>Mínimo s/ 200</div>
                    </div>
                    <div class="p-3">
                        <FontAwesomeIcon icon={faTimes} className="close-chevere" onClick={handleInactive}/>
                    </div>
                </div>
                <div class="carrito-chevere bg-white">
                {loading ? <ItemsLleno/> : <ItemsVacio />}
                    <hr/>
                </div>
                <div class="">
                    <div class="">
                        <div class="d-flex justify-content-center w-100">
                            <a href="datos-clientes.html" class="btn-block d-flex justify-content-between btn-cool-procesar disabled">
                                PROCESAR COMPRA
                                <span>S/ 00.00</span>
                            </a>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <a href="#" class="close-chevere">
                            Seguir comprando
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
