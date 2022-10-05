import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import sna from '../img/CIRCLSsna.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
class CIRCLSPage
 extends Component {
  render() {
    return(
        <>
        <section id="openpose" className="sect-pt4 route subskill background" 
       >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Mapping emerging education al technology research through funding sources. </h3>
                          
                        </div>
                        
                        <Grid>
                            <Cell col={6}>
                            <img src={sna} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             National Science Foundation research is widely known to be of world-class quality, but researchers often need resources that inform recent developments, information about experts and expertise. We use funding information of emergent educational technology research domain to map start-of-the-art progress of the scientific work with an intention of understanding the network of collaborations and scientific research of emergent educational technology. We apply natural language processing (NLP) techniques, social network analysis and data visualization to collect, map, mine the information to highlight gaps and overlaps in the research. 
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

export default CIRCLSPage;
