import React from "react";
import '../css/mainpage.css'
import '../css/destination.css'
import '../css/destin.scss'
import '../css/hero.css'

import kec from "../assets/kec.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
export default function Mainpage() {
    return (
        <>
            <div className="mainpage">


                <nav className="navbar navbar-expand-sm sticky-top navbar-dark ">
                    <div className="container">
                        <button className="clg1">SYLLOGIC'23</button>
                    </div>
                </nav>




                <div className="clgname" >
                    <div className="row">


                        <div className="col-3">
                            <img src={kec} className="keclogo" alt="no"></img>
                        </div>

                        <div className="col-6">
                            <h2 className="clg" >Kongu Engineering College</h2>
                        </div>


                    </div>
                    <div className="clg2">
                        <div className="row">

                            <div col-12>
                                <h6 className="clg1" >Affilated to Anna Ubiversity || Accrediated by NAAC with A++ grade</h6>
                            </div>


                        </div>
                    </div>
                    <div className="clg2">
                        <div className="row">

                            <div col-12>
                                <h6 className="clg1" >Perundurai Erode-638060 TamilNadu</h6>
                            </div>


                        </div>
                    </div>



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
                                    <time datetime="2020-05-25 12:00:00">
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

            {/* <div className="contact">

                <div className="row">

                    <div className="col-12 mt-5">
                        <img src="https://lh3.googleusercontent.com/aXMdHIDlOz3EcYrfJfHjhfNh2FmIXpmsE2-GmsLHj-2CSWTaobxJ-9u6OkODqLMwUE3O4BDAIURQfhEFNTo3BRw=w1280" alt="" />
                        <h2>kanni</h2>
                    </div>
                </div>
                <div className="row mt-5">

                    <div className="col-4">
                        <h2>periasamy</h2>

                    </div>
                    <div className="col-4">
                        <h2>sakthish</h2>

                    </div>
                    <div className="col-4">
                        <h2>mona</h2>

                    </div>

                </div>

            </div> */}
            <div className='hero'>
                <div className='content'>
                    <div className="row">

                        <div className="col-12 mt-5">
                            <img src="https://lh3.googleusercontent.com/aXMdHIDlOz3EcYrfJfHjhfNh2FmIXpmsE2-GmsLHj-2CSWTaobxJ-9u6OkODqLMwUE3O4BDAIURQfhEFNTo3BRw=w1280" alt="" />
                            <h2>kanni</h2>
                        </div>
                    </div>
                    <div className="row mt-5">

                        <div className="col-4">
                            <h2>periasamy</h2>

                        </div>
                        <div className="col-4">
                            <h2>sakthish</h2>

                        </div>
                        <div className="col-4">
                            <h2>mona</h2>

                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}