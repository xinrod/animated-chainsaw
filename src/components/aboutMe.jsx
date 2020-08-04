import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
      return (
  
        <section id="hero_section" className="top_cont_outer">
        <div className="hero_wrapper">
          <div className="card hovercard">
            <div className="cardheader">
            </div>
            <div className="avatar">
              <img alt="" src="img/profile-pic.jpeg" />
            </div>
            <div className="info">
              <div className="title"><b>Roderick</b>
              </div>
              <div className="desc"><b>Student at UNC-Chapel Hill</b></div>
              <div className="desc">
                <p>
                  I am a rising sophomore studying computer science. I am seeking an internship to grow as a developer.</p>
              </div>
              
            </div>
            <div className="bottom">
              <div className="underline" />             
              <ul className="social_links">
                <li className="linkedin animated bounceIn wow delay-02s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://www.linkedin.com/in/roderick-liu-85325a1a2/"><i className="fa fa-linkedIn" /></a></li>
                <li className="GitHub animated bounceIn wow delay-03s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://github.com/xinrod"><i className="fa fa-gitHub" /></a></li>
              </ul> 
            </div>
          </div>
          <div className="container" style={{display: 'none'}}>
            <div className="hero_section">
              <div className="row">
                <div className="col-md-12">
                  <div className="top_left_cont intro zoomIn wow animated"> 
                    <p> 
                    </p>
                    <div className="underline" />             
                    <ul className="social_links">
                      <li className="linkedin animated bounceIn wow delay-02s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://www.linkedin.com/in/roderick-liu-85325a1a2/"><img alt="" src="img/linkedin-icon.svg" width="176" height="46"/><i className="fa fa-linkedIn" /></a></li>
                      <li className="GitHub animated bounceIn wow delay-03s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://github.com/xinrod"><img alt="" src="img/github-mark.png" width="176" height="46"/><i className="fa fa-gitHub" /></a></li>
                    </ul> </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    }
  };