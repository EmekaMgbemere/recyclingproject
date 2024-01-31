import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logonew1.png"
    

function Footer(){
    const facebook = "https://www.facebook.com/emekamgbemere";
    const instagram = 'https://www.instagram.com/emiviksng';
    const whatsapp = "https://www.facebook.com/emekamgbemere";
    const x = "https://www.twitter.com/emiviksng";
    
    return(
    <div className="">
        <footer>
                <div className="footer">
                    <div className="footerdiv1">
                        <div>
                        <p className="footerdivheader" style={{textAlign:"center"}}>ABOUT US</p>
                            <img src={logo} alt="logo" style={{ float: 'left', marginRight: '10px' }}/>
                            <span>Emivik Nigeria Limited is a pioneering Nigerian indigenous Environment Protection and Waste Management Company, dedicated to driving sustainability and fostering a greener environment for present and future generations. </span>
                        </div>
                    </div>
                    <div className="footerdiv2">
                        <p className="footerdivheader">QUICK LINKS</p>
                        <div> <Link to={"/"} style={{textDecoration: "none", color:"white"}}>Home</Link></div>
                        <div> <Link to={"/blog"} style={{textDecoration: "none", color:"white"}}>Blog</Link></div>
                        <div> <Link to={"/about"} style={{textDecoration: "none", color:"white"}}>About</Link></div>
                        <div> <Link to={"/products"} style={{textDecoration: "none", color:"white"}}>Products</Link></div>
                    </div>
                    
                    <div className="footerdiv3">
                            <p className="footerdivheader">CONTACT US</p>
                            <div>
                                <span><i class="fa-solid fa-square-phone fa-2xl" style={{color: "#fcfcfc"}}></i></span>
                                <span className="mx-1">+(234)-7057605652</span>
                            </div>
                            <div style={{margin:"0 0 40px 0"}}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"#ffffff", margin:"0 0 0 8px"}} height="2em" viewBox="0 0 640 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
                                </span>
                                <span style={{margin:"0 0 0 8px"}}>officialemiviksnigeria@gmail.com</span>
                            </div>
                            <div>
                                <p className="footerdivheader">CONNECT WITH US</p>
                                <Link to={facebook} target="_blank">
                                    <i class="fa-brands fa-facebook fa-2xl" style={{color:"#ffffff", backgroundColor:"#1E3050"}}></i>
                                </Link>
                                <Link to={whatsapp} target="_blank">
                                    <i class="fa-brands fa-whatsapp fa-2xl" style={{color:"#ffffff", backgroundColor:"#1E3050"}}></i>
                                </Link>
                                <Link to={instagram} target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff", backgroundColor:"#1E3050"}}></i>
                                </Link>
                                <Link to={x} target="_blank">
                                    <i><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" class="svg-icon"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg></i>
                                </Link>
                            </div>
                    </div>
                </div>
                <div className="footerbottom">
                    <span>&copy;</span>
                    <p> 2023 Emivik Nigeria Limited</p>
                    <p>TERMS OF SERVICES</p>
                    <div>PRIVACY POLICY</div>
                </div>
        </footer>
    </div>
    );
}

export default Footer;