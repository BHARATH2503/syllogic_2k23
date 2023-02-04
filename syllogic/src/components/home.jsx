import "../css/home.css"
import { Link } from "react-router-dom";
import Contact from "./contact";
import "../assets/js/timer.js";

export default function Home() {

    return (
        <>
            <div class="full1">

                <div class="dept1">

                </div>



                <div class="wrapper">
                    <div class="bg"> Syllogic 2k23 </div>
                    <div class="fg">Syllogic 2k23 </div>
                </div>


                <div class="wrap">
                    <Link to="/home"> <button class='button1'>Let's Go</button></Link>
                </div>
            </div>

            <div className="overlay"></div>
            
            
            <div className="crapper">
                <div>
                    <div className="countdown-container">
                        <div>
                            <p id="days" style={{ margin: "0px" }} className="big-text">0</p>
                            <span>Days</span>
                        </div>
                        <div>
                            <p id="hours" style={{ margin: "0px" }} className="big-text">0</p>
                            <span>Hours</span>
                        </div>
                        <div>
                            <p id="min" style={{ margin: "0px" }} className="big-text">0</p>
                            <span>Minutes</span>
                        </div>
                        <div>
                            <p id="sec" style={{ margin: "0px" }} className="big-text">0</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}