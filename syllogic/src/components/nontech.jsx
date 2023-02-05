import "../css/nontech.css"
import kec from "../assets/kec.png";
import chem from "../assets/chemlogo.jpg";
import Logo from '../assets/chemlogo2.png'
import {  Navbar  } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Nontech() {
    return (
        <div className="nontech">
            <div className="mainpage">
                    <Navbar expand="lg" fixed="top" >
                        <p className="navbrand">
                            <Link to="/">
                                <Navbar.Brand className="navbrand1">SYLLOGIC 2K23</Navbar.Brand>
                                <img src={Logo} alt="Logo" className="logo1" />
                            </Link>
                        </p>
                    </Navbar>
                </div>
            <h1 id="pageHeaderTitle" className="techheader">Non-Technical events</h1>
                <ul class="cards">
                    <li className="nl">
                        <div class="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div class="card__header-text">
                                        <h3 class="card__title">ConnectionX</h3>

                                    </div>
                                </div>
                                <div>
                                    <button className="btn" id="d1">Register</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nl">
                        <div class="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div class="card__header-text">
                                        <h3 class="card__title">Wisdom Torch</h3>

                                    </div>
                                </div>
                                <div>
                                    <button className="btn" id="d1">Register</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nl">
                        <div class="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div class="card__header-text">
                                        <h3 class="card__title">Picturesque</h3>

                                    </div>
                                </div>
                                <div>
                                    <button className="btn" id="d1">Register</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
    )
}