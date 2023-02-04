import React from "react";
import '../css/mainpage.css'
import '../css/destination.css'
import '../css/destin.scss'

import kec from "../assets/kec.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
export default function Mainpage() {
    return (
        <>
            <div className="mainpage">


                <nav class="navbar navbar-expand-sm sticky-top navbar-dark ">
                    <div class="container">
                        <a class="clg1">SYLLOGIC'23</a>
                    </div>
                </nav>




                <div className="clgname" >
                    <div class="row">


                        <div class="col-3">
                            <img src={kec} className="keclogo" alt="no"></img>
                        </div>

                        <div class="col-6">
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
                    <div class='scrolldown'>
                        <div class="chevrons">
                            <div class='chevrondown'></div>
                           
                            <div class='chevrondown'></div>
                        </div>
                    </div>
                    </a>
                </div>






            </div>

            <div id="event" className="events">
            <section class="dark">
				<div class="container py-4">
					<h1 class="clg1"  id="pageHeaderTitle">Syllogic Events</h1>

					<article class="postcard gold">
						<a class="postcard__img_link" href="#">
							<img class="postcard__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Frank_Schulenburg_giving_a_presentation_at_Wikimania_2011.jpg/1280px-Frank_Schulenburg_giving_a_presentation_at_Wikimania_2011.jpg" alt="Image Title" />
						</a>
						<div class="postcard__text">
							<h3 class="clg1"><a href="#">Technical Events</a></h3>
							<div class="postcard__subtitle small">
								<time datetime="2020-05-25 12:00:00">
									<i class="fas fa-calendar-alt mr-2"></i>ALL TIME
								</time>
							</div>
							<div class="postcard__bar"></div>
							<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
							<ul class="postcard__tagbox">
								<Link to={`/explore/636123156cb6d9edd1201e5b`}><button class="button1">Register</button></Link>
							</ul>
						</div>
					</article>
					<article class="postcard ">
						<a class="postcard__img_link" href="#">
							<img class="postcard__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbp9gZILglItjzhcNfsZnOOtyesnv9RoKEw&usqp=CAU" alt="Image Title" />
						</a>
						<div class="postcard__text">
							<h3 class="clg1"><a href="#">Non technical events</a></h3>
							<div class="postcard__subtitle small">
								<time datetime="2020-05-25 12:00:00">
									<i class="fas fa-calendar-alt mr-2"></i>ALL TIME
								</time>
							</div>
							<div class="postcard__bar"></div>
							<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
							<ul class="postcard__tagbox">
								<Link to={`/explore/636140c29766fa1d74e76d3f`}><button class="button1">Register</button></Link>
							</ul>
						</div>
					</article>
					
				</div>
			</section>

            </div>




        </>
    )
}