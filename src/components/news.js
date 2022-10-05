import React from "react";
import "./stars.scss";


class News extends React.Component {
  render() {
    return (
      <section id="news" className="about-mf sect-pt4 route background">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div>
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="title-box-2">
                        <h5 className="title-left">Recent News</h5>
                      </div>
                    </div>
                  </div>
                  <ul>
                     <li><b>August 2022</b> Facilitated Research on Artificial Intelligence for Education Listening sessions for National Educational Technology Plan (NETP) report for US Department of Education’s Office of Education Technology (OET),. </li>
                     <li><b>June 2022</b> Attended Consortium of Science of Socio-Technical Systems (CSST), Austin, TX</li>
                     <li><b>February 2022</b>	Recognized as Emerging Scholar in Research by CIRCLS team</li>
                     <li><b>December 2021</b>  Defended Doctoral Thesis</li>
                     <li><b>July 2021</b>  Started Post doctoral position at Digital Promise and University of Pittsburgh.</li>
                     <li><b>April 2021</b> Our paper on Coding scheme collective problem solving regulation in immersive environments got accepted for CSCL 2021</li>
                    <li><b>March 2021</b>  Defended my Preliminary Examination for Doctoral degree in Computer Science</li>  
                  </ul>
                </div>
              </div>
             </div>
            </div>
          </div>
      </section>
    );
  }
}

export default News;
