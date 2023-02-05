import React from "react";
import '../css/mainpage.css'
import '../css/destination.css'
import '../css/destin.scss'
import Logo from '../assets/chemlogo2.png'
import {FaTwitter ,FaInstagram,FaLocationArrow,FaVoicemail} from 'react-icons/fa'
import { Navbar } from 'react-bootstrap';
// import kec from "../assets/kec.png";


import kec from "../assets/kec.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
export default function Mainpage() {
    return (
        <>
            <div id="top" className="mainpage">
                <Navbar expand="lg" fixed="top" >
                    <p className="navbrand">
                        <Link to="/">
                            <Navbar.Brand className="navbrand1">SYLLOGIC 2K23</Navbar.Brand>
                            <img src={Logo} alt="Logo" className="logo1" />
                        </Link>
                    </p>
                </Navbar>

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


            {/* contact */}

            <div className="contact">

                <div className="row">

                    <div className="col-6">

                      <div className="row">
                        <FaLocationArrow/>
                        <h4>location</h4>

                      </div>

                      <div className="row">
                        <FaVoicemail/>
                        <h4>email</h4>

                      </div>
                      <div className="row">
                        <FaInstagram></FaInstagram>
                        <h4>instagram</h4>

                      </div>
                      <div className="row">
                      <FaTwitter className='icon' ></FaTwitter>
                      
                        

                      </div>



                    </div>
                    <div className="col-6">

                        <div className="map">
                        <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" ></iframe>
                            
                        </div>

                    </div>
                </div>
                <a href="#top">go top</a>
               
                            
                           
            </div>



        </>
    )
}