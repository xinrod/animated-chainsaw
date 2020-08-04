import React, { Component } from 'react'

export default class PersonalProjects extends Component {
    render() {
      return (
  
        <section id="Portfolio" className="content"> 
          {/* Container */}
          <div className="container portfolio_title"> 
            {/* Title */}
            <div className="section-title">
              <h2>Projects</h2>
              
            </div>
            {/*/Title */} 
          </div>
          {/* Container */}
          <div className="portfolio-top" />
          {/* Portfolio Filters */}
          <div className="portfolio"> 
            <div id="filters" className="sixteen columns">
              <ul className="clearfix">
                <li><a className href="https://github.com/xinrod/a8-xinrod" data-filter=".prototype">
                    <h5>MVC/Basic UI demonstration</h5>
                  </a></li>
                <li><a className href="https://github.com/xinrod/pronounce.it" data-filter=".android">
                    <h5>Pronounce.it</h5>
                  </a></li>
              </ul>
            </div>
            {/*/Portfolio Filters */} 
            {/* Portfolio Wrapper */}
            </div>
            {/*/Portfolio Wrapper */} 
          
          {/*/Portfolio Filters */}
          <div className="portfolio_btm" />
          <div id="project_container">
            <div className="clear" />
            <div id="project_data" />
          </div>
        </section>
      );
    }
  };