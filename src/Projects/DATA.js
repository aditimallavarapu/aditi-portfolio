import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import data from '../img/data.jpg'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'
class DATAPage
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
                          <h3 className="title-left">Co-designing data advocacy toolkit with youth as design partners. </h3>
                          
                        </div>
                        
                        <Grid>
                            <Cell col={6}>
                            <img src={data} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Engaging youth from underserved communities with data advocacy in informal settings requires special affordances to motivate the youth to adopt the data-based tools for advocacy, post design. This includes supporting the youth in critically thinking with and about the data to craft advocacy initiatives. We position the youth as equal partners in the design process to explore the affordances that are appealing to them, using card based participatory design approach we identified disciplinary and collaborative affordances for data literacy and advocacy curriculum design.  The participants identified 4 disciplinary roles (data scientist, data detective, data artist, and data journalist) and multiple tasks for each role for a data-based advocacy project. 
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
