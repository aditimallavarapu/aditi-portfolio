import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../img/profile-pic.jpg'
import '../components/stars.scss'
import GoHome from './GoHome'


class About extends Component {
  render() {
    return(
        <>
        <section id="myself" className="sect-pt4 route subskill background" >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Hello! I'm Aditi Mallavarapu.</h3>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={profile} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                            <p>
                            Aditi Mallavarapu is working as a post doctoral learning sciences and technology researcher at Digital Promise. 
                            She is a fifth year PhD student at University of Illinois at Chicago. Her research projects all have the shared 
                            goal of building computational methods and tools to understand, highlight, support and improve exploration-based 
                            learning in open-ended learning environments. She draws upon the theoretical perspectives offered by the learning 
                            sciences and technical perspectives offered by the machine learning and data mining algorithms merging them with 
                            human-centered techniques to develop and deploy analytics embedded within digital learning systems. Her research 
                            interests are to employ technical computational techniques and data-driven methods to improve the phenomenon of 
                            learning STEM concepts in non-traditional learning environments like museum exhibits, games, and other 
                            non-conventional learning media.
 </p>
                            <p> The spark towards research was ignited by her decision to take a more difficult route of a Master's thesis during her 
                              graduate school, where she set out to design and support digital educational experiences. She describes the experience 
                              to be more than just creating an artifact using computers, a creative process of ideating a tool, a tool made purely out 
                              of data, by uncovering patterns that lay beneath the surface of the data. Her first research experience gave her a sense 
                              of responsibility to use the uncovered information to inform and support the student learning processes.
                              </p>
                              <p>
                              
                              In previous life, Aditi was a software developer working as a technical consultant for a huge health-care provider 
                              developing and improving the health-care administrative infrastructure, acquiring developmental, 
                              organizational and logistical skills by working individually as well as in team-oriented settings during this time.
                              </p>
                              </Cell>
                              <Cell col = {12}>
                              <p>
                              She went back to graduate school for a Doctorate degree in Computer Science to pursue education based research. Since then, 
                              she has worn many hats working as a software developer, teaching assistant, adjunct professor, mentor, designer and a researcher
                               and most importantly a student. As a graduate student, she works as a Teaching Assistant on-campus connecting to students understanding 
                               their issues and challenges, helping them pique interests in Computer Science, seeing them put their knowledge to use; Being an immigrant
                                women in computer science, she understands the stereotypical resistances imposed by society and she wanted to share her interests and 
                                joy of learning CS with her fellow underserved students. This led her to work with underrepresented minorities mitigating their qualms,
                                 allowing them to realize their potentials through CS, as a Saturday school instructor and an adjunct professor for high school seniors.
                                  She was part of Girls who Code initiative, mentoring and tutoring middle schools girls to design and build applications for social good.
                                   She thoroughly enjoys the gratitude that complements the teaching positions.
                                   </p>
                                   <p>
                                She makes use of her industry experience and software development skills in her research work, 
                                for navigating the pragmatics of experimental design, software design, large-scale data collection and analysis of 
                                data from museum exhibits and other educational settings. Her dissertation work is an outgrowth of her position as a Research 
                                Assistant at the New York Hall of Science, a metropolitan science museum, where she has worked during the summers since 2017, 
                                analyzing and evaluating data from a digital museum exhibit. She is responsible for  coordinating research work with practitioners, 
                                designing and evaluating support tools that work within institutional procedures and regulations.
                                She wishes to employ her scientific rigor, technical skills, and drive to use data-driven methods to improve the phenomenon
                                 of learning in non-traditional learning environments like museum exhibits, games, and other non-conventional learning media 
                                 through her upcoming career decisions.  
                              </p>

                            </Cell>

                        </Grid>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row load-more">
          <div className="col-12">
            <GoHome /> 
          </div>
        </div>
        </section>
        </>
    )
  }
}

export default About;