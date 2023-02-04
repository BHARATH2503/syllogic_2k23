import React from "react";
import '../css/mainpage.css'
import '../css/destination.css'
import '../css/destin.scss'
import Logo from '../assets/chemlogo2.png'
import { Navbar } from 'react-bootstrap';
import kec from "../assets/kec.png";
import chem from "../assets/chemlogo.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Mainpage() {
    return (
        <>
            <div className="page1">
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

                {/*------------------- kec name-------------------------- */}

                <div className="kecname">
                    <Container>
                        <Row className="logoside">
                            <Row>
                                <pre>
                                    <Col className="cname">
                                        <img src={kec} alt="Transform Yourself" className="ilogo" />
                                        Kongu Engineering College</Col>
                                </pre>
                            </Row>
                            <Row className="rank" style={{marginTop:"-2%"}}>
                                <Col sm={12}>Affilated to Anna University || Accrediated by NAAC with A++ grade</Col>
                                <Col sm={12}>Perundurai Erode-638060 TamilNadu</Col>
                            </Row>

                        </Row>
                    </Container>
                </div>

                {/*-------------------chemical dept name-------------------------- */}
                <div className="chemname">
                    <Container>
                        <Row sm={12}>
                            <Col sm={12} className="dir">
                                <img src={chem} alt="Chem" className="chemlogo" />
                                <h5 className="chemdep">Department Of Chemical Engineering</h5>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div>
                    <a href="#event">
                        <div className='scrolldown'>
                            <div className="chevrons">
                                <div className='chevrondown'></div>
                                <div className='chevrondown'></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {/*-------------------------------- Event page-------------------------------- */}
            <div id="event" className="events">
                <section className="dark">
                    <div className="container py-4">
                        <h1 className="clg1" id="pageHeaderTitle">Syllogic Events</h1>

                        <article className="postcard gold">
                            {/* <a className="postcard__img_link" href="#"> */}
                            <img className="postcard__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Frank_Schulenburg_giving_a_presentation_at_Wikimania_2011.jpg/1280px-Frank_Schulenburg_giving_a_presentation_at_Wikimania_2011.jpg" alt="Title" />
                            {/* </a> */}
                            <div className="postcard__text">
                                <h3 className="clg1">Technical Events</h3>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2"></i>ALL TIME
                                    </time>
                                </div>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className="postcard__tagbox">
                                    <Link to={`/explore/636123156cb6d9edd1201e5b`}><button className="button1">Register</button></Link>
                                </ul>
                            </div>
                        </article>
                        <article className="postcard ">
                            {/* <a className="postcard__img_link" href="#"> */}
                            <img className="postcard__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbp9gZILglItjzhcNfsZnOOtyesnv9RoKEw&usqp=CAU" alt="Title" />
                            {/* </a> */}
                            <div className="postcard__text">
                                <h3 className="clg1">
                                    {/* <a href="#"> */}
                                    Non technical events</h3>
                                <div className="postcard__subtitle small">
                                    <time dateTime="2020-05-25 12:00:00">
                                        <i className="fas fa-calendar-alt mr-2"></i>ALL TIME
                                    </time>
                                </div>
                                <div className="postcard__bar"></div>
                                <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                <ul className="postcard__tagbox">
                                    <Link to={`/explore/636140c29766fa1d74e76d3f`}><button className="button1">Register</button></Link>
                                </ul>
                            </div>
                        </article>

                    </div>
                </section>

            </div>




        </>
    )
}