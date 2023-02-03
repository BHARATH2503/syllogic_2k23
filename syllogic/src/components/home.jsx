import "../css/home.css";
import { Link } from "react-router-dom";
export default function Home() {

    return (
        <>
            <div class="full1">
               
                <div class="dept1">
                    <h5 class="dept">Chemical department proudly present's</h5>

                </div>



                <div class="wrapper">
                    <div class="bg"> Syllogic 2k23 </div>
                    <div class="fg">Syllogic 2k23 </div>
                </div>

                
                <div class="wrap">
                    <Link to="/home"> <button class='button'>Let's Go</button></Link> 
                </div>
            </div>

        </>
    )
}