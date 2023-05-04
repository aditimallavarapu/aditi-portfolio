import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import data from '../img/llm.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
class DATAPage
 extends Component {
  render() {
    return(
        <>
        <section id="DATA" className="sect-pt4 route subskill background" 
       >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Providing Natural Langugage to visualization support for data advocacy</h3>
                          
                        </div>
                        
                        <Grid>
                            <Cell col={6}>
                            <img src={data} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             This project examined the potential of pre-trained generative AI models in augmenting critical data literacy for Black youth. We used generative AI to augment data literacy experiences by creating exploratory visualizations from questions youth pose while exploring the data and determine the extent to which Black youth find the AI technology useful for learning to think critically and engage in data advocacy. The work identified guidelines for using such pre-trained models in educational environments in general safeguarding the youth learning experiences, and specifically to motivate critical thinking and data advocacy for social good. The research has important implications for data literacy and future of human-AI collaboration in critical and civics oriented applications.

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

export default DATAPage;
