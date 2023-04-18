import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import cm from '../img/Closeout setup.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
import CW from '../img/CW.png'

class insituPage extends Component {
  render() {
    return(
        <>
        <section id="in-situ" className="sect-pt4 route subskill background" >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Methodology for in-situ user testing</h3>
                         </div> 
                        <div className="row" style={{marginTop:"0px"}}>
                        <div className="text-left">
                          <h5 className="title" style={{marginTop: "5px", marginBottom:"0px"}}>Connected Worlds</h5>
                        </div>
                        <div className="col-sm-12">
                              <img src={CW} alt="" className="img-fluid" />
                              <p style={{marginTop:"5px"}}>
                              My research interests focuses on understanding how learning takes place in
                              open-ended learning environments (where learners learn via exploration). 
                              My most recents projects are related to one such open-ended learning exhibit <b>Connected Worlds.</b> 
                              </p>  
                              <p style={{marginTop:"5px"}}>
                                Currently operating at the New York Hall of Science, 
                                Connected Worlds is a 250m<sup>2</sup> immersive digital 
                                exhibit that invites up to 50 simultaneous visitors 
                                into an open-ended, visitor-driven simulation of 
                                ecosystem interaction. The exhibit represents 
                                an ecosystem (as digital projections on exhibits wall) 
                                consisting of four plantable biomes, named Desert, Plains, 
                                Jungle, and Wetlands, and three sources of water in the 
                                form of reservoirs, mountain valley with an occasional 
                                stream and the 6-feet tall water fall (See image above).
                                Visitors interact 
                                with the simulated environment by taking physical actions 
                                that are captured by the exhibit's system of 12 Kinect 
                                cameras and three infrared cameras that respond in immediate 
                                environment changes. The visitors can 1) raise their hands 
                                in front of the projected biomes to cause seeds to be 
                                planted at that physical location and 2) they can move the 
                                foam "logs" (detectable by IR camera) to divert water 
                                flow  towards different biomes. Water flowing into a biome 
                                acts as source of water for
                                the plants in the biome.
                                  When a biome has access to sufficient water reserves, 
                                  the planted seeds grow and the biome flourishes to attract
                                  different animals. The plants in the biomes cause water 
                                  from the biomes to evaporate and form clouds, which can 
                                  return water to the ecosystem, thus emulating a 
                                  real-world water cycle.
                                  </p>
                          </div>
                        </div>
                        <div>
                        <h4>Methodology for testing the use of animations as formative feedback for open-ended settings with children</h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={cm} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             This work informs a set of case-studies that showcase the methodlogoes to test and understand the use of a novel formative feedback medium that are short animations based on computationally extracted fugues. This work informs the prior work that innovated a novel data-driven formative feedback extraction method, that can provide learners exploration support. My prior work termed the extracted feedback as "fugues," as defined by Reitman (1965) for musical compositions. The fugues are rhyming causal sequences (short reusable exploration paths, explaining semantics of actions), used to represent complex scientific concepts that were encountered during the interaction with Connected Worlds. These fugues were represented in short tik-tok style animated videos, wherein each short animation represents a small causal part of the phenomena, and can be connected together in varying orders to indicate different scientific phenomena like disequilibrium, unstablity, or sustainability within the complex system. This work proposes a methodlogy that can help researchers understand the value in refining the representation of these fugue based animations for clearer comprehension about complex scientific concepts. The children within their family units were asked, (post interaction with Connected Worlds) to re-arrange the shorter causal peices to create a narrative that was experienced by them. Despite a defined prompt, the children came up with multiple causal narratives displaying an understanding of different conceptual complex concepts. The case-studies expose the strengths of how animations were successful in exposing complex systems concepts that relate to distant causal connections, that are non-obvious and those that relate to both systemic and social contexts of their interactions (which has been a challenge in prior complex systems learning environments). 
                             </h6>
                             <h6>
                                 <u>Related Publication: </u>
                                 <div>
                                    <b>Mallavarapu, A.,</b> Uzzo, S., & Lyons, L. (2021). Formative Fugues: Reconceptualizing Formative Feedback for Complex Systems Learning Environments. International Journal of Complexity in Education, 2(2), 4–46. 
                                <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={"https://par.nsf.gov/servlets/purl/10355146"} target="_blank" rel="noopener noreferrer"> Link</a></div>
                          </div>
                             </h6>
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
              <SeeMore/>
            </div>
          </div>
        </section>
        </>
    )
  }
}

export default insituPage;
