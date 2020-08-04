import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
      return (
  
        <section id="aboutUs">{/*Aboutus*/}
          <div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
            <div className="container">
              <h2>About Me</h2>
              <h6>My anticipated graduation date is May 2023. 
                This section highlights my coursework and skills.</h6>
              <div className="inner_section"> 
                <div className="row">
                  <div className="col-lg-12 about-us">
                    <div className="row">
                      <div className="col-md-6">
                        <h3>Major Related Coursework</h3>
                        <ul className="about-us-list">
                          <li className="points">COMP 401 - Foundations of Programming</li>
                          <li className="points">COMP 211 - System Fundamentals </li>
                          <li className="points">MATH 381 - Discrete Mathematics</li>
                          <li className="points">MATH 347 - Linear Algebra</li>
                          <li className="points">MATH 233 - Multivariable Calculus I</li>
                            <h3>Fall 2020</h3>
                            <li className="points">COMP 455 - Models of Languages and Computation</li>
                          <li className="points">COMP 410 - Data Structures </li>
                          <li className="points">COMP 311 - Computer Organization</li>
                        </ul>{/* /.about-us-list */}
                      </div>{/* /.col-md-6 */}
                      <div className="col-md-6"> <br />
                        <h3>
                          Skills
                        </h3><br /><br />
                        <div className="barWrapper">
                          <span className="progressText"><b>Java</b></span>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>   
                              <span className="popOver" data-toggle="tooltip" data-placement="top" title="60%"> </span>     
                            </div>
                          </div>
                          <div className="barWrapper">
                            <span className="progressText"><b>C</b></span>
                            <div className="progress ">
                              <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="10" aria-valuemax="100" style={{width: '55%'}}>
                                <span className="popOver" data-toggle="tooltip" data-placement="top" title="45%"> </span>  
                              </div>
                            </div>
                          </div>
                          <div className="barWrapper">
                            <span className="progressText"><b>HTML/CSS</b></span>
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax= "100" style={{width: '15%'}}>
                                <span className="popOver" data-toggle="tooltip" data-placement="top" title="15%"> </span>  
                              </div>
                            </div>
                          </div>
                          <div className="barWrapper">
                            <span className="progressText"><b>JavaScript</b></span>
                            <div className="progress">
                              <div className="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: '15%'}}>
                                <span className="popOver" data-toggle="tooltip" data-placement="top" title="15%"> </span>  
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>{/* /.col-md-6 */}
                    </div>{/* /.row */}	
                  </div>{/* /.col-lg-12 */}
                </div>
              </div>
            </div> 
          </div>
        </section>
      );
    }
  };