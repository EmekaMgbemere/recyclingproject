
import React, { useState } from 'react';
// import prod1 from "../images/prod1.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod5.jpg";
import prod6 from "../images/prod6.png";
import vid8 from "../images/vid8.mp4";
import prod7 from "../images/prod7.jpg";
import prod9 from "../images/prod9.jpg";
import prod10 from "../images/prod10.jpg"
import prod11 from "../images/prod11.jpg";
import prod12 from "../images/prod12.jpg";
import prodhero1 from "../images/prodhero1.png";
import prodhero2 from "../images/prodhero2.png";
import prodhero3 from "../images/prodhero3.png";
import Footer from './Footer';
import Nav from './Nav';


export default function Products(){


  return(
<div className=''>
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
                    <h1 className=''>PRODUCTS</h1>
                    <span><img src={prodhero1} alt='prodhero1'/></span>
                    <span><img src={prodhero2} alt='prodhero2'/></span>
                    <span><img src={prodhero3} alt='prodhero3'/></span>
                </div>
            </div>
            <div className="prodintro" style={{backgroundColor: "#1b8381"}}>
                <p className='text-white'>We specialize in offering a comprehensive range of cutting-edge recycling technologies and equipment, designed to meet the diverse needs of waste management. Our innovative offerings include:</p>
            </div>
        </div>

        <div>
            <div className='box'>
                <div className='boximgdiv'>
                    <img src={prod3} alt='Municipal Waste Sorting Plant' />
                </div>  
                <div className='boxtxt '>
                    <div>Municipal Waste Sorting Plant</div>
                    <p>An advanced facility that efficiently segregates mixed waste materials, enabling the extraction of recyclable components, thereby promoting sustainable resource utilization.</p>
                   
                </div>   
            </div>   
        </div>
        <div>
            <div className='box1 boxbox'>
                <div className='boxtxt '>
                    <div>Plastic/Rubber Pyrolysis Plant</div>
                    <p>A ground-breaking solution that transforms plastic and rubber waste into valuable products, reducing environmental impact and fostering circular economy principles.</p>
                </div>  
                <div className='boximgdiv'>
                    <img src={prod4} alt='Plastic/Rubber Pyrolysis Plant' />
                </div>  
            </div>   
        </div>
        <div>
            <div className='box'>
                <div className='boximgdiv'>
                    <img src={prod6} alt='first Product' />
                </div>  
                <div className='boxtxt '>
                    <div>Waste Oil Distillation Equipment</div>
                    <p>Innovative technology that converts waste oil into useful products, reducing pollution and contributing to resource conservation.</p>
                </div>   
            </div>   
        </div>
        <div>
            <div className='box1 boxbox'>
                <div className='boxtxt '>
                    <div>Bio-Mass Carbonization Machine</div>
                    <p>An eco-friendly approach to processing biomass waste, converting it into high-value carbonized products.</p>
                </div>  
                <div className='boximgdiv'>
                    <img src={prod7} alt='Plastic/Rubber Pyrolysis Plant' />
                </div>  
            </div>   
        </div>
        <div>
            <div className='box'>
                <div className='boximgdiv'>
                    <img src={prod9} alt='Paper Pulp Moulding Machine' />
                </div>  
                <div className='boxtxt '>
                    <div>Paper Pulp Moulding Machine</div>
                    <p>A sustainable solution for recycling paper waste into reusable products, minimizing waste and enhancing resource efficiency</p>
                </div>   
            </div>   
        </div>

        <div>
            <div className='box1 boxbox'>
                <div className='boxtxt '>
                    <div>Sludge Carbonization Equipment</div>
                    <p>Advanced machinery that converts sludge waste into valuable carbonized materials, mitigating environmental hazards</p>
                </div> 
                <div className='boximgdiv'>
                    <img src={prod10} alt='Sludge Carbonization Equipment' />
                </div>  
            </div>   
        </div>
        <div>
            <div className='box'>
                <div className='boximgdiv'>
                    <img src={prod12} alt='Medical Waste Treatment Equipment' />
                </div>  
                <div className='boxtxt '>
                    <div>Medical Waste Treatment Equipment</div>
                    <p>Specialized technology designed to handle medical waste safely and efficiently, minimizing health risks and pollution</p>
                </div>   
            </div>   
        </div>
        <div>
            <div className='box1 boxbox'>
                <div className='boxtxt '>
                <div>Oil Sludge Pyrolysis Plant</div>
                    <p>A strategic solution for treating oil sludge waste, transforming it into beneficial outputs while reducing contamination</p>
                </div>  
                <div className='boximgdiv'>
                    <img src={prod11} alt='Plastic/Rubber Pyrolysis Plant' />
                </div>  
            </div>   
        </div>

    <div className="" style={{margin: "2rem"}}>   
      <p style={{width: "100%", margin: "2rem 0", padding: "1px", backgroundColor: "black"}}></p>
    </div>
    <div style={{margin: "2rem;"}}> 
        <p style={{width: "100%",margin: "2rem 0",  padding: "1px" , backgroundColor: "black"}}></p>
    </div>
    <Footer />

</div>
  )
}

