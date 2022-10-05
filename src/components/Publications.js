import React from "react";
/*import myImage from "../img/myImage.png";*/
import journal1 from '../img/journal1.pdf'
import conference1 from '../img/conference1.pdf'
import conference2 from '../img/paper_250.pdf'


import "./stars.scss";

class Publications extends React.Component {
  constructor() {
    super();
    this.state = {
      bookChapters: [
        {
          id: "chapter1",
          author:
            "Mallavarapu, A.",
          otherAuthor:"Beheshti, E., Lyons, L.,",
          moreAuthor: ", Thompson, W., Wallingford, B., & Uzzo, S. (2021). ",
          title:"Co-designing Learning Dashboards for Informal Educators ",
          venue: "in H. Ba, K. McMillan Culp, and M. Honey (Eds.), Design Make Play for Equity, Inclusion, and Agency, Routledge.",
          link: "https://www.taylorfrancis.com/chapters/edit/10.4324/9780203702345-6/co-designing-learning-dashboards-informal-educators-elham-beheshti-leilah-lyons-aditi-mallavarapu-wren-thompson-betty-wallingford-stephen-uzzo"
        }, 
      ],
      journals: [
        {
          id: "journal3",
          author:
            "Mallavarapu, A.",
          otherAuthor: ",Lyons, S., & Uzzo, L. (2022).",
          moreAuthor:"",
          title:"Exploring the Utility of Social-Network-Derived Collaborative Opportunity Temperature Readings for Informing Design and Research of Large-Group Immersive Learning Environments. ",
          venue: "Journal of Learning Analytics ",
          dets: "9(1), 53–76. ",
          link: "https://doi.org/10.18608/jla.2022.7419", 
        },
        {
          id: "journal2",
          author:
            "Mallavarapu, A.",
          otherAuthor: ",Uzzo, S., & Lyons, L. (2021).",
          moreAuthor:"",
          title:"Formative Fugues: Reconceptualizing Formative Feedback for Complex Systems Learning Environments. ",
          venue: "International Journal of Complexity in Education ",
          dets: "2(2), 4-46",
          link: "https://par.nsf.gov/servlets/purl/10355146", 
        },
        {
          id: "journal4",
          otherauthor:
            "Lyons, S. &",
          author: " Mallavrapu, A. (2021).",
          moreAuthor:"",
          title:"Collective Usability: Using Simulation Tools to Explore Embodied Design Challenges in Immersive, Shared Mixed-Reality Experiences. ",
          venue: "Journal of Educational Technology & Society ",
          dets: "24(2). ",
          link: "https://www.jstor.org/stable/27004936", 
        },
        {
          id: "journal1",
          author:
            "Mallavarapu, A.",
          otherAuthor: ",Lyons, L., Slattery, B., Shelley, T., Minor, E., & Zellner, M. (2015).",
          moreAuthor:"",
          title:"Developing Computational Methods to Measure and Track Learners’ Spatial Reasoning in an Open-Ended Simulation. ",
          venue: "Journal of Educational Data Mining ",
          dets: "7(2), 49-82",
          link: journal1, 
        },
      ],
      conferences: [
        {
          id: "conference1",
          author:
            "Mallavarapu, A.",
          otherAuthor:", Lyons, L., Uzzo, S., Thompson, W., Levy-Cohen, R., & Slattery, B. (2019, April).",
          moreAuthor:"",
          title:"Connect-to-Connected Worlds: Piloting a Mobile, Data-Driven Reflection Tool for an Open-Ended Simulation at a Museum. ",
          venue: "In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems",
          dets: "(p. 7). ACM",
          link: conference1 
        },
      ],
      
      posters:[
        
        {
          id: "posters4",
          author:
            "Mallavarapu, A.,",
          otherAuthor:"Risha, Z.,",
          moreAuthor:" Rosta, F., Jaime, B., Dondal, B., & Walker, E. (2022).  ",
          title:"Proposing a Role-Based Framework for Data Literacy. ",
          venue: "In 15th International Conference on Computer-Supported Collaborative Learning – CSCL 2022. International Society of the Learning Sciences.",  
        },
        {
          id: "posters3",
          author:
            "Mallavarapu, A.,",
          otherAuthor:"Levy-Cohen, R., ",
          moreAuthor:"Lyons, L., & Uzzo, S. (2021).  ",
          title:"Studying Shared Regulation in Immersive Learning Environments. ",
          venue: "In C. Hmelo-Silver, B. de Wever, & J. Oshima (Eds.). Proceedings of 15th International Conference on Computer-Supported Collaborative Learning – CSCL 2021 (pp. 100–115). International Society of the Learning Sciences.",
        },
        {
          id: "poster5",
          author:
            "Mallavarapu, A.",
          otherAuthor:", Lyons, L. (2020, July).",
          moreAuthor:"",
          title:"Exploration Maps, Beyond Top Scores: Designing Formative Feedback for Open-Ended Problems. ",
          venue: "In Proceedings of the International Conference on Educational Data Mining (EDM). (p. 6).",
          link: conference2 
        },

        {
          id: "posters2",
          author:
            "Mallavarapu, A.,",
          otherAuthor:"Beheshti, E., Lyons, L.,  ",
          moreAuthor:"Wallingford, B., & Uzzo, S. (2020, April).  ",
          title:"Design Considerations for Data-Driven Dashboards: Supporting Facilitation Tasks for Open-Ended Learning. ",
          venue: "In Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems (pp. 1-9)",
        },
        {
          id: "posters1",
          author:
            "Mallavarapu, A.,",
          otherAuthor:"Beheshti, E., Lyons, L., ",
          moreAuthor:"Thompson, W., & Uzzo, S. (2020, Apr 17 - 21) ",
          title:"Human-in-the-Loop: Supporting Facilitators' Scaffolding of Visitor Engagement and Learning in Science Museums. ",
          venue: "[Roundtable Session]. AERA Annual Meeting San Francisco, CA (Conference Canceled)",
        },  
      ],
    };
  }

  render() {
    return (
      <section id="publications" className="sect-pt4 route subskill background" 
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h3 className="title-left">Selected Publications</h3>
                      </div>
                      <h3 className="lead"> <b>Book Chapters</b> </h3>
                      
                      {this.state.bookChapters.map(content => {
                        return (
                          <div className="lead" key={content.id}>
                            {content.otherAuthor}<b>{content.author}</b>{content.moreAuthor}{content.title}{content.venue}
                            <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={content.link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </div>
                        );
                      })}
                      <h3 className="lead"> <b>Journals</b> </h3>
                      
                      {this.state.journals.map(content => {
                        return (
                          <div className="lead" key={content.id}>
                            {content.otherAuthor}<b>{content.author}</b>{content.moreAuthor}{content.title} <i>{content.venue}</i> {content.dets}
                            <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={content.link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </div>
                        );
                      })}
                      <h3 className="lead"> <b>Conferences, Full Papers</b> </h3>
                      
                      {this.state.conferences.map(content => {
                        return (
                          <div className="lead" key={content.id}>
                            {content.otherAuthor}<b>{content.author}</b>{content.moreAuthor} {content.title} <i>{content.venue}</i> {content.dets}
                            <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={content.link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </div>
                        );
                      })}
                      
                      <h3 className="lead"> <b>Conference, Short Papers</b> </h3>
                      
                      {this.state.posters.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.otherAuthor}<b>{content.author}</b>{content.moreAuthor}{content.title} <i>{content.venue}</i> {content.dets}
                            <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={content.link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Publications;
