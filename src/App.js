import React, { Component } from 'react';
import './App.css';
import Skills from './components/skills'
import AboutMe from './components/aboutMe'
import PersonalProjects from './components/projects'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<div id="colorlib-main">
			<AboutMe></AboutMe>
			<Skills></Skills>
			<PersonalProjects></PersonalProjects>
			{/*<Contact></Contact>*/}
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;