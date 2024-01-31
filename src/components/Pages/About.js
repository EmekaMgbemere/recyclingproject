import React, { forwardRef } from 'react';
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import hero9 from "../images/hero9.jpg";
import hero5 from "../images/hero5.jpg";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import team5 from "../images/team5.jpg";
import objpic1 from "../images/objpic1.jpg";
import objpic2 from "../images/objpic2.jpg";
import objpic4 from "../images/objpic4.jpg";
import objpic3 from "../images/objpic3.jpg";
import objpic5 from "../images/objpic5.jpg";
import objpic7 from "../images/objpic7.jpg";
import objpic8 from "../images/objpic8.jpg";
import objpic9 from "../images/objpic9.jpg";
import objpic10 from "../images/objpic10.jpg";
import pic5 from "../images/pic5.jpg";
import about3pic2 from "../images/about3pic2.jpg";
import Nav from './Nav';
import Footer from './Footer';


function About(ikechukwuSection){

return(
<div>

<div><Nav /></div>
     
      <div className='topmargin'>
          <div className='about1'>

          </div>
          <div className='about2'>
          </div>

          <div className='about3'>
              <img src={about3pic2} alt='about3pic2' />
          </div>
          <div className="heroabouth1">
              <h1>About Us</h1>
                <p>Emivik Nigeria Limited is a pioneering Nigerian indigenous Environment Protection and Waste Management Company, dedicated to driving sustainability and fostering a greener environment for present and future generations.</p>
          </div>

          
      </div>

      <p style={{width: "95%", margin:" 2rem 20px",  padding:"1px", backgroundColor: "black"}}></p>


          <div className="bg-gray">
              <div className="text-center mt-4">
                <span>───── ⋆⋅☆⋅⋆ ─────</span><h1>Our Ten Core Mission Objectives </h1><span> ⋆⋅☆⋅⋆ </span>
              </div>
              <div className="heroobj">
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic1} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p>Revolutionize waste management in Africa</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic2} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                          <p className="pt-3">Establish advanced waste recycling and reprocessing plants</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic4} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                          <p>Transform waste into valuable commodities</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={pic5} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p>Deploy cutting-edge recycling technologies </p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic3} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p>Create a cleaner and healthier environment</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic5} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p className="px-3">Stimulate economic growth and job creation</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic7} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p>Address environmental challenges</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic9} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p>Conserve land resources </p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic8} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p style={{padding:"0 5px"}}>Collaboration with government and international institutions</p>
                      </div>
                  </div>
                  <div className="heroobj1">
                      <div className="heroobjimg">
                            <img src={objpic10} alt="images1" className=""/>
                      </div>
                      <div className="heroobjtxt">
                        <p>Build a greener future for all</p>
                      </div>
                  </div>
                </div>
          </div>

    <div className="" style={{margin: "2rem"}}>   
          <p style={{width: "100%", margin:" 2rem 0",  padding:"1px", backgroundColor: "black"}}></p>
            
          <div className="body1 mt-4 pt-4"  style={{color:"black"}}>
              <div className="text-center">
                  <span>───── ⋆⋅☆⋅⋆ ─────</span>
                      <h1>How we do it </h1> 
                  <span>───── ⋆⋅☆⋅⋆ ─────</span>
              </div>
            
            <div className="m-4 body1card text-center">
                  <div className="card">
                    <img src={pic3} className="card-img-top" alt="Expert Guidance to Partners" />
                        <div className="card-body">
                            <h5 className="card-title">Providing Expert Guidance to Partners</h5>
                
                        </div>
                  </div>
                  <div className="card">
                    <img src={pic4} className="card-img-top" alt="HOW WE DO IT" />
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
    </div>

        <div style={{margin: "2rem"}}> 
            <p style={{width: "100%", margin: "2rem 0",  padding:" 1px", backgroundColor: "black"}}></p>
              <div className="body1 mt-4 pt-4"  style={{color:"black;"}}>
                  <div className="text-center">
                      <span>───── ⋆⋅☆⋅⋆ ─────</span>
                          <h1>Emiviks Management </h1> 
                      <span>───── ⋆⋅☆⋅⋆ ─────</span>
                  </div>
              </div>
              <div>
                <div className='mapicdiv' id='ikechukwu'>
                      <div className='text-center'>
                          <div className='mapicdivimg' ><img src={team1} alt='mapic1' /></div>
                          <h1> Mr. Ikechukwu Mozie</h1>
                          <h3> Chief Executive Officer</h3>
                      </div>
                    <span>
                          Mr Ikechukwu has over 25 years of multi-industry career-driven work experience spanning Management, 
                          Consultancy, Marketing Communication, Advertising and Public Relations professions in the private sector industry. 
                          He is skilled in Corporate Policy, Business Strategy, Negotiation and Strategic Management dealings. 
                          He is an astute businessman of international repute.
                          He doubles as the appointed Regional Director (Africa) of Africa Caribbean Chamber of Trade, 
                          Commerce and Industry (ACCTCI), an international link business chamber organization that foster the bridge of 
                          integration and partnerships in business relationships amongst interested business groups from the 
                          Caribbean and African regions' markets and economies, which he is a pioneer Board member of. 
                          He has attended many business seminars and conferences both overseas and locally. 
                          His educational qualifications include Masters of Business Administration (MBA) in Marketing and 
                          Communication, Higher National Diploma (HND), Mass Communication, Anambra State Polytechnic now 
                          (Federal Polytechnic, Oko), an MBA in Management, and Diploma in Management from the International 
                          Business Management Institute, Berlin Germany. His Professional Membership, include: 
                          Advertising Practitioners Council of Nigeria (APCON); Member, Nigeria Institute of Management (NIM), 
                          as well as the Nigerian Institute of Public Relations (NIPR). He is married with children.
                    </span>
                </div>
                <div className='mapicdiv'>
                    <div className='text-center'>
                          <div className='mapicdivimg maspe'><img src={team2} alt='mapic1' /></div>
                          <h1> Mr. Daberechukwu Ephraim Ihenko </h1>
                          <h3> Chief Marketing/Operations Officer</h3>
                      </div>
                    <span className='maspantxt'>
                        Daberechukwu Ephraim Ihenko (Dab, as he’s called) is a graduate of Economics from the University of Uyo, Akwa Ibom State, Nigeria. 
                        He is an economist, very experienced in the field of marketing, with 25 years insightful knowledge as an executive marketer; his  employment history spans various executive marketing positions with reputable large corporations, such as Arista Nigeria Ltd, Palmprint Nigeria Ltd, Brent Oil and Gas Nigeria Ltd and Dabzeros Nigeria Ltd., where over the years of his period of service, he implemented marketing policies - planned, strategized, executed campaigns which enhanced companies’ profitability margins. 
                        He holds a B.Sc. (Hons) degree in Economics from the University of Uyo, Nigeria. He is married with four children. 
                    </span>
                </div>
                <div className='mapicdiv'>
                    <div className='text-center'>
                          <div className='mapicdivimg maspe'><img src={team3} alt='mapic1' /></div>
                          <h1> Chief Augustine Nkwugbukansi Mgbemere</h1>
                          <h3> Chief Financial Officer</h3>
                      </div>
                    <span className=''>
                        Mr Mgbemere is the Managing Partner, Augustine N. Mgbemere & Co. Chartered Accountants, MD/CEO, NESTINE Consult & Investment Ltd and has worked at the Abuja Chamber of Commerce (ABUCIMA) as Director-General. 
                        He is appointed Chairman Committee on Trade, African Caribbean Chamber of Trade, Commerce and Industry (ACCTCI). He is a chartered accountant with over 40 years’ experience in both public and private sectors, he holds bachelors of Economics degree from Obafemi Awolowo University as well as professional qualifications from chartered Institute of Taxation of Nigeria (CITN) and institute of Chartered Accountants of Nigeria (ICAN).
                        Other engagements include Messrs Francis Anokwu & Co (Chartered Accountants), Tax Consultants, Tax Practitioners and Management Consultant. Appointed controller of branches at United Bank for Africa (UBA) Plc, with the responsibility of managing the four branches of the bank. City Savings and Investment Bank Namibia with responsibility for developing the administration and operations manuals, internal control, accounting package, form designs, credit manuals and reporting formats also as Audit of MISR American Bank, Cairo Egypt. Merchant Bank of Africa (Nig.) Ltd as Deputy Manager/ Chief Internal Auditor and rose to the position of Deputy General Manager/Head of Operation Division, then as Chief Internal Auditor of the Bank and Federal Board of Inland Revenue as Inspector of Taxes.
                    </span>
                </div>
                <div className='mapicdiv'>
                    <div className='text-center'>
                          <div className='mapicdivimg'><img src={team4} alt='mapic1' /></div>
                          <h1>Noel Onyema Akor</h1>
                          <h3>Public Affairs Manager (PAM)</h3>
                      </div>
                    <span className='maspantxt' style={{marginTop:"-3px"}}>
                          Mr. Noel Onyema Akor, Nigerian, hails from Imo State. He holds a Bachelor's Degree, B.Sc., in Political Science from University of Abuja and Professional Diploma Certificates in Public Relations, Marketing and Advertising from both British Communication, Advertising and Marketing (CAM) Institute and the Nigerian Institute of Public Relations (NIPR).
                          Mr. Akor has a working career experience spanning over 30 years with Union Bank of Nigeria Plc. He traversed in both Corporate Affairs and the Public Sector departments of the Bank. He is a professional marketer, advertiser and public relations practitioner, with specialization in banking, agriculture, the environment and public policy analysis.
                          He is also member of various non-governmental organizations which includes Nigeria Cassava Growers Association (NCGA), Association for Public Policy Analysis (APPA), and Nigerian Institute of Public Relations (NIPR) to mention a few. 
                          Mr. Akor attended many professional courses, in management, finance, agriculture & environment, others are public relations, advertising and marketing, within Nigeria and globally. He is married with children.
                    </span>
                </div>
                <div className='mapicdiv'>
                    <div className='text-center'>
                          <div className='mapicdivimg'><img src={team5} alt='mapic1' /></div>
                          <h1>Arch. Kanayochukwu Nwofor</h1>
                          <h3>Chief Project Officer</h3>
                      </div>
                    <span className='maspantxt' style={{marginTop:"-3px"}}>
                        Arch. Kanayo Nwofor is a qualified Architect by training and the Managing Partner of KanaKorp Integrated Consultants, a firm of Architects. He has an Architecture Professional Degree, B. Arch. (Bachelor of Architecture Professional Degree) from the University of Wisconsin, Eau Claire Campus, Wisconsin, 1976-1978 and University of Houston, Texas, USA, 1978-1981. 
                        Arch. Nwofor is a professional member of the Nigeria Institute of Architects (NIA) which he also holds its Professional Certification - NIA. Kanayo Nwofor is a registered Member of Architect Registration Council of Nigeria (ARCON).
                        His wealth of working experience in the profession, as an Architect, amounts to over 35 years. He has to his credit numerous designs and constructions of landmark structural edifices’ to his portfolio credit.
                        He is a native of Nawfia Town in Njikoka Local Government Area of Anambra State, married and is blessed with four children, two boys and two girls.
                    </span>
                </div>
              </div>

        </div>

        <div>
          <Footer />
        </div>
    </div>

  )
}
export default forwardRef(About)

