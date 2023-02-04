import React from "react";
import '../css/mainpage.css'
import kec from "../assets/kec.png"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Mainpage() {
    return (
        <>
            <div className="mainpage">

                


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
                <div class="sticky-top">
                    <div class="row">

                        <div className="col-5" >
                            <div className="ename">
                                <h3 >SYLLOGIC 2K23</h3>
                            </div>


                        </div>

                        <div className="col-5 ms-auto">
                            <button class="button-92" role="button">Contact us</button>

                        </div>

                    </div>

                </div>

                <div className="caro">



                </div>




            </div>




        </>
    )
}