import React, { Component } from 'react';
import Degree from './Degree';
import Work from './Work';
import Skills from './Skills';
import "./stars.scss";

class Resume extends Component {
  render() {
    return(
        <section id="about" className="about-mf sect-pt4 route background">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div>
                <div id="about" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="title-box-2">
                        <h5 className="title-left">Resume</h5>
                      </div>
                        <div > 
                          <div className="col-12">
                            <h3 className="lead"><b>Education</b></h3>
                            <Degree
                              startYear={2016}
                              endYear={2021}
                              schoolName="University of Illinois at Chicago (UIC)"
                              schoolSubtitle="Computer Science (Human-Computer Interface and Data Mining Concerntration)"
                              title="Formative fugues: Conceptualizing data-driven formative feedback for open-ended learning environments "
                              Advisor="Leilah Lyons"
                              />

                              <Degree
                                startYear={2012}
                                endYear={2014}
                                schoolName="University of Illinois at Chicago (UIC)"
                                schoolSubtitle="Computer Science (Human-Computer Interface and Educational Data Mining Concerntration)"
                                title= "Developing Computational Methods to Measure and Track Learners ’ Spatial Reasoning in an Open-Ended Simulation"
                                Advisor="Leilah Lyons"
                                  />
                                <Degree
                                startYear={2007}
                                endYear={2011}
                                schoolName="Pune University, India"
                                schoolSubtitle="Computer Engineering"
                                title=""
                                Advisor=""
                                  />  

                                <hr style={{marginLeft: '50px', marginRight: '50px',borderTop: '2px solid white'}} />
                                <h3 className="lead"><b>Research and Teaching Experience</b></h3>
                                <Work
                              startYear={2021}
                              endYear={"Present"}
                              companyName="Digital Promise, CA"
                              teamName = "Center for Integrated Research in Computing and Learning Sciences (CIRCLS)"
                              jobName="Learning Sciences and Technology Post Doctoral Researcher"
                              jobDescription="Focus on issues and challenges of Artificial Intelligence in future learning technologies. 
                              Organize online working groups of scholars and develop research reports that synthesize content."
                              />
                              <Work
                              startYear={2021}
                              endYear={"Present"}
                              companyName="University of Pittsburgh, PA"
                              teamName="Learning Researchh and Development Center (LRDC)"
                              jobName="Artificial Intelligence for Education Post Doctoral Researcher"
                              jobDescription="Develop Artificial Intelligence solutions for future learning technologies."
                              />

                                <Work
                              startYear={"Jun 2017"}
                              endYear={"Jan 2021"}
                              companyName="New York Hall of Science, NY"
                              teamName="Digital Learning"
                              jobName="Data Mining and Visualization Research Assistant"
                              jobDescription="Deploy data-collection scripts, data mining algorithms and web-based visualizations for visitor exhibit interaction data. Conduct participatory design sessions for designing facilitator data-driven analytics based dashboard to help visitor interactions in the museum."
                              />

                              <Work
                                startYear={"Aug 2016"}
                                endYear={"Present"}
                                jobName="Teaching Assistant"
                                companyName="University of Illinois at Chicago, IL"
                                teamName="Department of Computer Science"
                                jobDescription="Develop curriculum, designing labs and homework assignments, grading, conducting labs and instructing course materials
                                "
                                />

                              <Work
                                startYear={"Jun 2018"}
                                endYear={"Aug 2018"}
                                jobName="Adjunct Professor"
                                companyName="University of Illinois at Chicago, IL"
                                teamName="Department of Computer Science"
                                jobDescription="Single-handedly design curriculum and lead classes and labs for 30 high school seniors, to pique their interest in Computer Science through an introductory course of Discovering Computer Science for the summer semester.
                                "
                                /> 
                                <Work
                              startYear={"Jul 2017"}
                              endYear={"Aug 2017"}
                              companyName="New York Hall of Science, NY"
                              jobName="Research Assistant"
                              teamName="Digital Learning"
                              jobDescription="Solely responsible for deployment and implementation of python scripts to scrape live data, design dashboard visualizations, implement data mining routines for log-files and computer vision routines to analyze video data for a museum exhibit."
                              /> 
                            <h3 className="lead"><b>Industry Experience</b></h3>
                            <Work
                              startYear={"Feb 2015"}
                              endYear={"Aug 2016"}
                              companyName="Perficient Inc., IL"
                              jobName="Technical Consultant"
                              teamName="Back-end Development team"
                              jobDescription="Responsible for design, development and testing of web application and integration
                              projects using Object Oriented technologies such as Core Java, J2EE, JSP, JDBC, Java Beans, 
                            Web Services (REST/SOAP), XML, XSLT.
                            "
                              /> 
                              <Work
                              startYear={"Jun 2013"}
                              endYear={"Dec 2013"}
                              companyName="Tarana Wireless Inc., CA"
                              jobName="Network Software Intern"
                              teamName="Software"
                              jobDescription="Designed applications to work with SNMP to get information from remote devices in python. Written test suites in python to test the working to various applications running on remote devices like ISS, SNMP etc.
                            "
                              /> 

                              <hr style={{marginLeft: '50px', marginRight: '50px',borderTop: '2px solid white'}} />
                              <h3 className="lead"><b>Skills</b></h3>
                              <Skills
                                skill="Java"
                                progress={90}
                                />
                                <Skills
                                  skill="Data Mining, Machine Learning (Python)"
                                  subtitle="(Pandas, DoWhy, Scikit Learn, OpenPose, DoWhy (Causal Inference Python package), OpenCV"
                                  progress={70}
                                  />
                                  
                                  <Skills
                                    skill="Scripting (js)"
                                    progress={50}
                                    />
                                    <Skills
                                      skill="React"
                                      progress={10}
                                      />
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume;