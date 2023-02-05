import React from "react";
import '../css/mainpage.css'
import '../css/destin.scss'
import Logo from '../assets/chemlogo2.png'
import "../assets/js/back2top.js"

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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Mainpage() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <div className="page1">
                <div className="mainpage">
                    <Navbar expand="lg" className="" fixed="top" >

                        <Link to="/" className="w-100 d-flex justify-content-center">
                            <img src={chem} alt="Chem" className="chemlogo me-2" />
                            <h2 className="navbrand1">SYLLOGIC 2K23</h2>
                            <img src={Logo} alt="Logo" className="logo1  ms-2" />
                        </Link>

                    </Navbar>
                </div>


                  <Navbar className="ml-3" fixed="bottom" >
                    

                    {/* <a id="b2t" style={{ display: "none" }} href="#top" className="back">go top</a> */}
                    <a href="#top">  <button id="b2t" style={{ display: "none" }} class="noselect"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg></button>

                    </a>

                </Navbar>

                {/*------------------- kec name-------------------------- */}

                <div className="kecname mt-0 pt-5">
                    <Container>
                        <Row>
                            <Row>
                                <pre className="cname">
                                    <Col className="cname">
                                        <img src={kec} alt="Transform Yourself" className="ilogo" />
                                        <small>Kongu Engineering College</small></Col>
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
                    <Container >
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
                <div className="about">
                    <div className="row mt-2.8" style={{ width: "100%", padding: "1% 3% 1% 3%" }}>

                        {/* <Slider {...settings} className="mx-5 mt-3">
                            <div><img className="sliderImg" src={hod}  alt="" /></div>
                            <div><img className="sliderImg" src={mail}  alt="" /></div>
                            <div><img className="sliderImg" src={sc2}  alt="" /></div>
                            <div><img className="sliderImg" src={sc1}  alt="" /></div>
                        </Slider> */}
                       
                            <h5 className="heading">ABOUT THE INSTITUTION</h5>
                            <p className="para">
                                Kongu Engineering College (KEC) was established in the year 1984. Approved by AICTE, New Delhi and affiliated to Anna University, Chennai. The Institution has completed 39 years of dedicated and excellent service in the field of technical education. It offers 14 UG, 19 PG and 16 Research programmes in Engineering, Applied Sciences and Management branches. The Institution has got NBA accreditation for UG programme, Best Engineering College award and the Best Principal Award twice. The Institution is one among the best in imparting high quality technical education in Tamil Nadu and it is ranked high among the Engineering Institutes including IITs, NITs, Central Universities by various surveys conducted by magazines such as Outlook, The Week, Competition Success Review etc. The institution has established a Technology Business Incubator (TBI) supported by Department of Science and Technology (DST) Government of India.
                            </p>
                            <h5 className="heading">ABOUT THE DEPARTMENT</h5>
                            <p className="para" style={{ textAlign: "justify" }}>
                                The Department of Chemical Engineering was started in the academic year 1994-95. It offers B.Tech, M.Tech
                                and Ph.D degree programmes recognized by Anna University, Chennai. Besides teaching, the department is actively
                                involved in industrial consultancy, and conducting training programmes including various sponsored seminar and
                                workshops for students and practicing engineers. Numerous funded projects from MoEF, AICTE and UGC has been
                                completed successfully and few are in progress. The department has advanced simulation softwares such as Fluent,
                                HYSIS, ASPEN plus, HTRI, gPROM and PROSIM.
                            </p>

                    </div>

                </div>
            </div>



            <div style={{paddingBottom:"1%"}}>
                <a href="#event">
                    <div className='scrolldown'>
                        <div className="chevrons">
                            <div className='chevrondown'></div>
                            <div className='chevrondown'></div>
                        </div>
                    </div>
                </a>
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


            <div className="container">

                <b className="clgcont">UPCOMING EVENT</b>
                <br />
                <iframe className="framev w-100" src="https://www.youtube.com/embed/sCpRzUfzi4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


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
                    <div className="col-lg-4 col-md-3 mt-3">
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


                                <a href="mailto:syllogic2023@gmail.com" className="social1">
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













        </>
    )
}
