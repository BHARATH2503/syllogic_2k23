import '../css/tech.css';
import kec from "../assets/kec.png";
import chem from "../assets/chemlogo.jpg";
import Logo from '../assets/chemlogo2.png'
import { Navbar } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Tech() {
    return (
        <>
            <div className="mainpage">
                <Navbar expand="lg" className="ms-4" >
                    <p className="navbrand">
                        <Link to="/home" className="d-flex">
                            <img src={chem} alt="Chem" className="chemlogo me-2" />
                            <h2 className="navbrand1">SYLLOGIC 2K23</h2>
                            <img src={Logo} alt="Logo" className="logo1  ms-2" />
                        </Link>
                    </p>
                </Navbar>
            </div>
            <div className="tech">
                <h1 id="pageHeaderTitle" className="techheader">Technical events</h1>
                <div className='div1'>
                    <ul class="cards">
                        <li style={{ marginLeft: "50px" }}>
                            <div class="card">
                                <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                                        <div class="card__header-text">
                                            <h3 class="card__title">Paper Presentation</h3>

                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn" id="but1">Register</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{ marginLeft: "50px" }}>
                            <div class="card">
                                <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div class="card__header-text">
                                            <h3 class="card__title">Poster</h3>

                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn" id="but1">Register</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div></>
    )
}