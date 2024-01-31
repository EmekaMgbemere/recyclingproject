import { Link } from 'react-router-dom';
import React from 'react';
import hero101 from "../images/hero101.jpg";
import mission1 from "../images/mission1.png";
import mission2 from "../images/mission2.png";
import mission3 from "../images/mission3.png";
import pic3 from "../images/pic3.jpg";
import pic5 from "../images/pic5.jpg";
import hero9 from "../images/hero9.jpg";
import hero5 from "../images/hero5.jpg";
import recycle1 from "../images/recycle1.jpg";
import recycle2 from "../images/recycle2.jpg";
import recycle3 from "../images/recycle3.jpg";
import recycle4 from "../images/recycle4.jpg";
import recycle5 from "../images/recycle5.jpg";
import recycle6 from "../images/recycle6.jpg";
import Footer from './Footer';
import Nav from './Nav';
import vid11 from "../images/vid11.mp4";
import vid12 from "../images/vid12.mp4";
import vid7 from "../images/vid7.mp4";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import team5 from "../images/team5.jpg";


function Home(){
      const facebook = "https://www.facebook.com/emekamgbemere";
    const instagram = 'https://www.instagram.com/emiviksng';
    const whatsapp = "https://www.facebook.com/emekamgbemere";
    const x = "https://www.twitter.com/emiviksng";

    // const scrollTo = () => { window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth'})};
    
  return(
    <div>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div> 
        <div>
            <Nav />
        </div>
        <div className="hero1">
            <div className="hero2">
                <div className="hero3">
                    <h1>Emivik Nigeria Limited</h1>  
                        <div classNameName=''>
                          Emivik Nigeria Limited is a pioneering Nigerian indigenous Environment Protection and Waste Management Company, dedicated to driving sustainability and fostering a greener environment for present and future generations.
                        </div> 
                    <a href="/aboutus.html" ><button type="button" className="btn btn-success mt-3">Learn More</button></a>
                </div>
  
                  <div className="hero4" >
                      <img src={hero101} className="w-100" alt='herobackgroundimage'/>    
                  </div>
            </div>
        </div>

        <div style={{margin:"5%",borderBottom:"1px solid black", padding:"2px"}}></div>

          <div className="" style={{margin:""}}>
              
            <div className="text-center mb-4">
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
                    <h1>Our Vision</h1> 
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
            </div>
                <div className='herofocus'>
                    <div className='herofocusright'>
                        <div className="herofocusshade"></div> 
                            <div className="herofocusvid">               
                                <video autoPlay loop muted >
                                        <source src={vid12} type='video/mp4' />
                                        <source src={vid12} type="video/ogg" /> 
                                </video>
                            </div> 
                    </div>
                        <div className='herofocusleft'  >
                            <p>Our vision is to be the preeminent force in driving the transformation and reinvigoration of living environments, safeguarding the health and improving the quality of life of citizens, and preserving the beauty of the natural world.</p>
                        </div>
                </div>
          </div>

          <div style={{margin:"5%",borderBottom:"1px solid black", padding:"2px"}}></div>


          <div className="mission">
              <div className="text-center mb-4">
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
                    <h1>Our Mission</h1> 
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
            </div>
              <div className='missiondiv'>
                    <div className='missiondivp'>
                        <div><img src={mission1} alt='mission icon' /></div>
                        <p className=''>Create a greener and more sustainable Nigeria and Sub-Saharan Africa.</p>
                        <span>By fostering environmental awareness and implementing innovative solutions, we can collectively contribute to mitigating climate change and preserving the rich biodiversity of the region.</span>
                    </div>
                    <div className='missiondivp'>
                        <div><img src={mission2} alt='mission Second icon' style={{width:"10rem", margin:"17px"}} /></div>
                        <p className=''>Providing cutting-edge waste management solutions.</p>
                        <span>Developing and implementing comprehensive waste-to-energy strategy, leveraging cutting-edge technologies to convert waste into valuable resources and sustainable energy.</span>
                    </div>
                    <div className='missiondivp'>
                        <div className=''><img src={mission3} alt='mission Second icon'/></div>
                        <p className=''>Promoting resource regeneration through advanced recycling processes.</p>
                        <span>Fostering resource regeneration by employing advanced recycling processes to transform waste into reusable materials and reduce environmental impact</span>
                    </div>
              </div>
          </div>

    
    <div style={{margin:"5%",borderBottom:"1px solid black", padding:"2px"}}></div>

  <div className="" style={{backgroundColor: "whitesmoke"}}>
            <div className="text-center mb-4">
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
                    <h1>FOCUS</h1> 
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
            </div>
        <div className='herofocus'>
              <div className='herofocusright'>
                  <div className="herofocusshade"></div> 
                      <div className="herofocusvid">               
                          <video autoPlay loop muted >
                                  <source src={vid12} type='video/mp4' />
                                  <source src={vid12} type="video/ogg" /> 
                          </video>
                      </div> 
              </div>
                <div className='herofocusleft'>
                    <p>Advise governments on the best approaches to handle waste management and combat environmental pollution effectively.</p>                
                </div>
        </div>
        <div className='herofocus1'>
              <div className='herofocusleft'>
                <p>Utilizing waste generated from domestic households and businesses as the raw materials underscores our commitment to sustainability and circular economy principles.</p>
                </div>
              <div className='herofocusright'>
                  <div className="herofocusshade"></div> 
                      <div className="herofocusvid">               
                          <video autoPlay loop muted >
                                  <source src={vid7} type='video/mp4' />
                                  <source src={vid7} type="video/ogg" /> 
                          </video>
                      </div> 
              </div>
                
        </div>
  </div>

  <div style={{margin:"5%",borderBottom:"1px solid black", padding:"2px"}}></div>


  <div className="" style={{margin:"35px 0 0 0"}}>
            <div className="text-center mb-4">
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
                    <h1>WHAT WE RECYCLE</h1> 
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
            </div>
            <div className='recycle'>
                  <div className="card recyclecard" >
                      <img src={recycle1} class="card-img-top" alt="recycle1" />
                      <div class="card-body">
                        <h5 class="card-title"> Tyres</h5>
                      </div>
                  </div>
                  <div className="card recyclecard" >
                      <img src={recycle2} class="card-img-top" alt="recycle2" />
                      <div class="card-body">
                        <h5 class="card-title"> Plastic</h5>
                      </div>
                  </div>
                  <div className="card recyclecard" >
                      <img src={recycle3} class="card-img-top" alt="recycle3" />
                      <div class="card-body">
                        <h5 class="card-title">Oil </h5>
                      </div>
                  </div>
                  <div className="card recyclecard" >
                      <img src={recycle4} class="card-img-top" alt="recycle4" />
                      <div class="card-body">
                        <h5 class="card-title">Paper</h5>
                      </div>
                  </div>
                  <div className="card recyclecard" >
                      <img src={recycle5} class="card-img-top" alt="recycle5" />
                      <div class="card-body">
                        <h5 class="card-title">Electronics</h5>
                      </div>
                  </div>
                  <div className="card recyclecard" >
                      <img src={recycle6} class="card-img-top" alt="recycle6" />
                      <div class="card-body">
                        <h5 class="card-title">Glass</h5>
                      </div>
                  </div>
            </div>
            <div>

            </div>
    </div>
  
  <div style={{margin:"5%",borderBottom:"1px solid black", padding:"2px"}}></div>
      
      <div className="body1 mt-4 pt-4" >
            <div className="text-center">
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
                    <h1>How we do it </h1> 
                <span>───── ⋆⋅☆⋅⋆ ─────</span>
            </div>
          <div className="m-4 body1card text-center">
                <div className="card">
                  <img src={pic3} className="card-img-top" alt="HOW WE DO IT" />
                      <div className="card-body">
                          <h5 className="card-title">Providing Expert Guidance to Partners</h5>
                      </div>
                </div>
                <div className="card">
                  <img src={pic5} className="card-img-top" alt="HOW WE DO IT" />
                      <div className="card-body">
                          <h5 className="card-title">Deploying Cutting-Edge Equipment</h5>
                      </div>
                </div>
                <div className="card">
                  <img src={hero9} className="card-img-top " alt="HOW WE DO IT" />
                      <div className="card-body">
                          <h5 className="card-title"> Development of Green Initiatives  </h5>
                      </div>
                </div>
                <div className="card">
                  <img src={hero5} className="card-img-top" alt="HOW WE DO IT" />
                      <div className="card-body">
                          <h5 className="card-title">Proper Waste Management</h5>
                      </div>
                </div>
  
          </div>
      </div>

      <div style={{margin:"5%",borderBottom:"1px solid black", padding:"2px"}}></div>

      <div className="mgndiv">
                <div className="text-center">
                    <span>───── ⋆⋅☆⋅⋆ ─────</span>
                        <h1>Emivik's Management </h1> 
                    <span>───── ⋆⋅☆⋅⋆ ─────</span>
                </div>
                <p  className="text-center" style={{fontSize: "1.5rem", margin:" 35px"}}>Our leaders are guided by the foundation's mission to lead the charge in creating a greener and more sustainable Nigeria and Sub-Saharan Africa by providing cutting-edge waste management solutions and promoting resource regeneration through advanced recycling processes.</p>
                    <div className="mgngroup">
                        <div className="mgn">
                            <div className="mgnpic">
                                <img src={team1} alt="management pic" className=""/>
                            </div>
                            <div className="mgntxt">
                                <h3>Mr. Ikechukwu Mozie</h3>
                                <p><i>Chief Executive Officer</i></p>
                                {/* <Link to={"/about#ikechukwu"} >
                                  <button type="button" className="btn btn-pills bg-success text-white b">
                                    View Profile
                                  </button>
                                </Link> */}
                                
                            </div>
                        </div>
                        <div className="mgn">
                            <div className="mgnpic">
                                <img src={team2} alt="management pic" className=""/>
                            </div>
                            <div className="mgntxt">
                                <h3>Mr. DABERECHUKWU IHENKO</h3>
                                <p><i>Chief Marketing/Operations Officer</i></p>
                                {/* <button type="button" className="btn btn-pills bg-success text-white b">
                                  View Profile
                                </button> */}
                                
                            </div>
                        </div>
                    </div>
                <div className="mgngroup">
                      <div className="mgn">
                          <div className="mgnpic">
                              <img src={team3} alt="management pic" className=""/>
                          </div>
                          <div className="mgntxt">
                              <h3>Chief Augustine Mgbemere</h3>
                              <p><i>Chief Financial Officer</i></p>
                              {/* <button type="button" className="btn btn-pills bg-success text-white b">
                                View Profile
                              </button> */}
                          </div>
                      </div>
                        <div className="mgn">
                            <div className="mgnpic">
                                <img src={team4}alt="management pic" className=""/>
                            </div>
                            <div className="mgntxt">
                                <h3>Mr. Onyema Akor</h3>
                                <p><i>Public Affairs Manager </i></p>
                                {/* <button type="button" className="btn btn-pills bg-success text-white b">
                                  View Profile
                                </button> */}
                            </div>
                        </div>
                        <div className="mgn">
                            <div className="mgnpic">
                                <img src={team5} alt="management pic" className=""/>
                            </div>
                            <div className="mgntxt">
                                <h3>Arch. Kanayochukwu Nwofor</h3>
                                <p><i>Chief Project Officer</i></p>
                                {/* <button type="button" className="btn btn-pills bg-success text-white b">
                                  View Profile
                                </button> */}
                            </div>
                        </div>
                  </div>
            </div>

      <div style={{margin:"2%",borderBottom:"1px solid black", padding:"2px"}}></div>

      <div className="body1 mt-4 pt-4" >
          <div className="text-center">
              <span>───── ⋆⋅☆⋅⋆ ─────</span>
                  <h1>CONTACT US</h1> 
              <span>───── ⋆⋅☆⋅⋆ ─────</span>
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
      </div>

        <Footer />
    </div>
    )
}


  export default Home;