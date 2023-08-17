import React from "react";
import './footer.css';
export default function Footer(){
    return(
        <footer class="footer">
            <div class="container-footer">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Linkdin</h4>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/darlamward">Darla Ward</a></li>
                            <li><a href="https://www.linkedin.com/in/danielle-reid-8404bb242/">Danielle Reid</a></li>
                            <li><a href="https://www.linkedin.com/in/jarod-chambers-genge-1a309a216/">Jarod Chambers Genge</a></li>
                            <li><a href="#">Luke Jones (cannot find Linkdin)</a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </footer>
    )
}