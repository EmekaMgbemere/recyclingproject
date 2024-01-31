import React from 'react'
import Nav from './Nav'
import Footer from './Footer';
import newsimg1 from "../images/newsimg1.jpg"

function News() {
    const first = "https://www.unep.org/news-and-stories/press-release/climate-change-undermines-nearly-all-sustainable-development-goals#:~:text=To%20get%20on%20track%20to,to%20net%20zero%20by%202050."
 
    const firstnews = () => {
        window.open(first, '_blank');
    };

    return (
    <div>

        <div className=''>
            <Nav />
        </div>

        <div className='' style={{marginTop:"112px"}}></div>
        
        <div className='news text-center'>
            <div className='text-center'>
                <h1 className='display-2 mt-5 fw-bolder'>NEWS</h1>
            </div>
            <div className='text-center mb-5'>
                <p>
                Welcome to the News Section of Emivik Nigeria Limited, your trusted source for the latest updates and insights. Explore our dynamic news platform to stay informed about the cutting-edge developments, innovations, and milestones within Emivik and the industries we serve. From groundbreaking projects to industry trends and corporate announcements, our news section is designed to keep you abreast of the impactful endeavors shaping our business landscape. Dive into a world of information that reflects our commitment to transparency, progress, and excellence. Discover the stories that define Emivik Nigeria Limited's journey and the broader landscape of our ever-evolving industries.
                </p>
            </div>
            <div className='newsdetails'>
                <div className='newsdetailsimg'>
                    <img src={newsimg1} alt='newsimage' />
                </div>
                <div className='newsdetailstext'>
                    <p>11/21/2023</p>
                    <p>
                    Unchecked, climate change is poised to elevate global temperatures by over 3°C, posing a significant threat to every ecosystem. The current evidence showcases its role in intensifying storms, disasters, and escalating challenges like food and water scarcity, potentially fueling conflicts.
                    </p>
                    <button className='btn btn-success btn-pills' onClick={firstnews} >Read More</button>
                </div>
            </div>
        </div>

        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default News