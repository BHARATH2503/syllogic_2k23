import React from "react";
import '../css/mainpage.css'
import '../css/destin.scss'
import Logo from '../assets/chemlogo2.png'

import { Navbar } from 'react-bootstrap';
import kec from "../assets/kec.png";
import hod from "../assets/hod.jpg";

import video from "../assets/hod.jpg";
import sc1 from "../assets/sc1.jpg";
import sc2 from "../assets/sc2.jpg";
import sc3 from "../assets/sc3.jpg";
import mail from "../assets/gmail.png";
import insta from "../assets/instagram.png";
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
                    <Navbar expand="lg" className="ms-4  " fixed="top" >
                        <p className="navbrand">
                            <Link to="/" className="d-flex">
                                <img src={chem} alt="Chem" className="chemlogo me-2" />
                                <h2 className="navbrand1">SYLLOGIC 2K23</h2>
                                <img src={Logo} alt="Logo" className="logo1  ms-2" />
                            </Link>
                        </p>
                    </Navbar>
                </div>

                {/*------------------- kec name-------------------------- */}

                <div className="kecname">
                    <Container>
                        <Row>
                            <Row>
                                <pre className="cname">
                                    <Col className="cname">
                                        <img src={kec} alt="Transform Yourself" className="ilogo" />
                                        Kongu Engineering College</Col>
                                </pre>
                            </Row>
                            <Row className="rank" style={{ marginTop: "-2%" }}>
                                <Col sm={12}>Affilated to Anna University || Accrediated by NAAC with A++ grade</Col>
                                <Col sm={12}>Perundurai Erode-638060 TamilNadu</Col>
                            </Row>


                        </Row>
                    </Container>
                </div>


                <div className="chemname">
                    <Container>
                        <Row>
                            <Row>
                                <Col className="chass">Indian Institute Of Chemical Engineering</Col>
                            </Row>
                            <Row>
                                <Col sm={12} className="chemdep">Chemical Engineering Association</Col>
                                <Col sm={12} className="present">Presents</Col>
                            </Row>

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
                                    <Link to={`/tech`}><button className="button1">Register</button></Link>
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
                                    <Link to={`/nontech`}><button className="button1">Register</button></Link>
                                </ul>
                            </div>
                        </article>

                    </div>
                </section>

            </div>

            {/* upcoming events */}

          
                <div className="video">

                    <b className="clgcont">UPCOMING EVENT</b>

                    <iframe className="framev" src="https://www.youtube.com/embed/sCpRzUfzi4s?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>

        




            {/* contact */}
            <div className="images">

                <b className="clgcont">DEPARTMENT    HOD</b>

                <div className="row  ">
                    <div className="col-lg-12 col-md-3">
                        <img className="staffs" src={hod} alt="" />
                        <br></br>
                        <small className="clg1">Dr. K. KANNAN
                        </small>

                    </div>
                </div>

                <div className="row mt-5">
                    <b className="clgcont">STAFF COORDINATORS</b>
                    <div className="col-lg-4 col-md-3">
                        <img className="staffs" src={sc1} alt="" />
                        <br></br>

                        <small className="clg1">Dr. A. S. PERIASAMY MANIKANDAN<br></br>
                            Associate Proffesor
                            Departmnt of Chemical Engineering</small>

                    </div>
                    <div className="col-lg-4 col-md-3 mt-3">
                        <img className="staffs" src={sc2} alt="" />
                        <br></br>
                        <small className="clg1">S. MOTHIL <br></br>
                            Assistant Professor 
                            Departmnt of Chemical Engineering</small>


                    </div>
                    <div className="col-lg-4 col-md-3 mt-3">
                        <img className="staffs" src={sc3} alt="" />
                        <br></br>
                        <small className="clg1">T. SATHISH<br></br>
                        Assistant Professor
                            Departmnt of Chemical Engineering</small>

                    </div>

                </div>

            </div>

            <div className="contact">
                <div className="row">


                    <div className="col-lg-6 col-md-12 p-5">

                        <div className="row">



                            <div className="conus">
                                <b className="clgcont">CONTACT US</b>
                                <h3 className="clgcont1" > student coordinators</h3>

                                <h5 className="coname">Mr B.Charan - +91 94447 70517</h5>
                                <h5 className="coname">Mr R.Deenadhayalan - +91 99940 41738</h5>



                            </div>
                        </div>

                        <div className="row mt-5">





                            <div className="col-6" >


                                <a href="syllogic2023@gmail.com" className="social1">
                                    <img className="social1img" src={mail} alt="" />
                                    <br />
                                    <small className="clg1">
                                        syllogic2023@gmail.com
                                    </small>
                                </a>

                            </div>
                            <div className="col-6" >
                                <a className="social" href="https://www.instagram.com/kec_chem_official/?igshid=YmMyMTA2M2Y%3D">
                                    <img className="socialimg" src={insta} alt="" />
                                    <br />
                                    <small className="clg1">
                                        CEA
                                    </small>

                                </a>


                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">


                        <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.826470171063!2d77.60483861480529!3d11.27416319198491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1675595314904!5m2!1sen!2sin"
                        ></iframe>



                    </div>

                </div>





            </div>





            <Navbar expand="lg" fixed="bottom" >
                <p className="navbrand">

                    <a href="#top" className="back">go top</a>

                </p>
            </Navbar>








        </>
    )
}