import React from 'react';
import vid8 from "../images/contactus.mp4";
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';




function ContactUs() {
    const facebook = "https://www.facebook.com/emekamgbemere";
    const instagram = 'https://www.instagram.com/emiviksng';
    const whatsapp = "https://www.facebook.com/emekamgbemere";
    const x = "https://www.twitter.com/emiviksng";
    

  return (
    <div>
           <div> <Nav /></div>
        <div className="prodiv">
            <div className="prodimgdiv">               
                 <video autoPlay loop muted >
                        <source src={vid8} type='video/mp4' />
                        <source src={vid8} type="video/ogg" /> 
                </video>
            </div> 
            <div className="prodimgshadow">
                <div className="prodtxt">
                    <h1 className='' style={{fontFamily:'Oswald, sans-serif', fontSize:"11vw"}}>CONTACT US</h1>
                    <ul class="social-media-list">
                
                <Link to={facebook} target="_blank" className='someli mx-5'>
                   <i class="fa-brands fa-facebook fa-2xl" ></i>
               </Link>
               <Link to={whatsapp} target="_blank" className='someli mx-5'>
                   <i class="fa-brands fa-whatsapp fa-2xl" ></i>
               </Link>
               <Link to={instagram} target="_blank" className='someli mx-5'>
                   <i class="fa-brands fa-instagram fa-2xl"></i>
               </Link>
               <Link to={x} target="_blank" className='someli mx-5'>
                   <i><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" class="svg-icon"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg></i>
               </Link>
       </ul>
                </div>
            </div>
        </div>
        <div style={{fontFamily:"Oswald, sans-serif", margin:"20px", fontSize:"1.8rem", textAlign:"center"}}>
            <p>For the most accurate and up-to-date information, we encourage our website visitors to connect with us through our official communication channels. Our website serves as a gateway to various platforms where you can find the latest news and updates. Our official social media profiles are vibrant hubs of activity, providing a space for discussions, announcements, and community engagement. Feel free to follow us on our social media handles to be a part of our online community and receive timely updates directly on your preferred platform. </p>
        </div>

        <div className='bg-dark mt-5'>
            <section id="contact">

        <div class="contact-wrapper">

            <form id="contact-form" class="form-horizontal" role="form" action="mailto:infoemiviknigeria@gmail.com" method="post">

                <div class="form-group">
                    <div class="col-sm-12 my-1">
                        <input type="text" class="form-control" id="name" placeholder="NAME" name="name"  required />
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-12 my-1">
                        <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" required />
                    </div>
                </div>

                <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                    <div class="alt-send-button">
                        <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                    </div>
                </button>

            </form>

            <div class="direct-contact-container">

                <ul class="contact-list">
                    
                    <li class="list-item my-4"><i class="fa fa-phone fa-2x"><span class="contact-text phone "><a href="tel:+(234)-7057605652" title="Give me a call">+(234)-7057605652</a></span></i></li>

                    <li class="list-item my-4"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:officialemiviksnigeria@gmail.com" title="Send me an email">officialemiviksnigeria@gmail.com</a></span></i></li>
                
                    <li class="list-item my-4 d-flex">
                        <i class="fa fa-map-marker fa-2x"> </i>
                        <div class="contact-text place" >
                                Suite 29, (3rd Floor), Bataiya PLaza, Plot 1271, No. 5 Rahama Close. off Dunukofia Street, off Ahmadu Bello Way, Area 11, Garki - Abuja FCT.
                            </div>
                    </li>

                </ul>

                <hr />
                <ul class="social-media-list">
                
                         <Link to={facebook} target="_blank" className='someli'>
                            <i class="fa-brands fa-facebook fa-2xl" ></i>
                        </Link>
                        <Link to={whatsapp} target="_blank" className='someli'>
                            <i class="fa-brands fa-whatsapp fa-2xl" ></i>
                        </Link>
                        <Link to={instagram} target="_blank" className='someli'>
                            <i class="fa-brands fa-instagram fa-2xl"></i>
                        </Link>
                        <Link to={x} target="_blank" className='someli'>
                            <i><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" class="svg-icon"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg></i>
                        </Link>
                </ul>
                <hr />

            </div>

        </div>

            </section>
        </div>
        <div><Footer /></div>        
    </div>
  )
}

export default ContactUs