import React from 'react'
import {Route, 
        Switch} from 'react-router-dom'
import Intro from './intro'
import Resume from './Resume'
import Portfolio from './portfolio'
import Publications from './Publications'
import Contact from './contact'
import openposePage from '../Projects/openpose'
import snaPage from '../Projects/sna'
import causalPage from '../Projects/causal'
import dashboardPage from '../Projects/dashboard'
import miningPage from '../Projects/mining'
import Projects from '../components/projects.js'
import netlogoPage from '../Projects/netlogo'
import EcoCollagePage from '../Projects/EcoCollage'
import participatoryPage from '../Projects/particpatory'
import sequencePage from '../Projects/sequence'
import feedbackPage from '../Projects/feedback'
import gesturePage from '../Projects/gesture'
import toolPage from '../Projects/tool'
import carbonPage from '../Projects/carbon'
import About from './About'
import News from './news'
import DATA from '../Projects/DATA'
import CIRCLS from '../Projects/CIRCLS'
import MID from '../Projects/MID'
import CM from '../Projects/ComputationalModel'
import insitupage from '../Projects/in-situ'
import LLM from '../Projects/LLM'
const CustomRoute = () => {
    return (
      
          <Switch>
            <Route path="/" component={Intro} exact />
           <Route path="/home" component={Intro} />
           <Route path="/news" component={News} />
            <Route path="/page-top" component={Intro} />
            <Route path="/about" component={Intro} />
            <Route path="/myself" component={About} />
            <Route path="/work" component={Intro} />
            <Route path="/experience" component={Intro} />

            <Route path="/publications" component={Publications} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/projects" component={Projects} />
           <Route path="/contact" component={Contact} />
            {/*<Route path="/blogs" component={blogs} />*/}
            <Route path="/openpose" component={openposePage} />
            <Route path="/sna" component={snaPage} />
            <Route path="/causal" component={causalPage} />
            <Route path="/dashboard" component={dashboardPage} />
            <Route path="/mining" component={miningPage} />
            <Route path="/netlogo" component={netlogoPage} />
            <Route path="/ecocollage" component={EcoCollagePage} />
            <Route path="/sequence" component={sequencePage} />
            <Route path="/pd" component={participatoryPage} />
            <Route path="/feedback" component={feedbackPage} />
            <Route path="/gesture" component={gesturePage} />
            <Route path="/tool" component={toolPage} />
            <Route path="/carbon" component={carbonPage} />
            <Route path="/DATA" component={DATA} />
            <Route path="/CIRCLS" component={CIRCLS} />
            <Route path="/MID" component={MID} />
            <Route path="/CM" component={CM} />
            <Route path="/in-situ" component={insitupage} />
            <Route path="/llm" component={LLM} />
           {/* <Route component={NotFound}/>*/}
          </Switch> 
       
    )
}

export default CustomRoute;