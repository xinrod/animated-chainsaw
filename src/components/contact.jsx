import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
      return (
       <footer className="footer_wrapper" id="contact">
          <div className="container">
            <section className="page_section contact" id="contact">
              <div className="contact_section">
                <h2>Get In Touch</h2>
                <h6>WORK IN PROGRESS</h6>
              </div>
              <div className="row">
                <div className="col-lg-4 wow fadeInLeft">	
                  <div className="contact_info">
                    <div className="detail">
                      <h4>Call me</h4>
                      <p>+1 919 8860874</p>
                    </div>
                    <div className="detail">
                      <h4>Email me</h4>
                      <p>xinrod@gmail.com</p>
                    </div> 
                  </div>
                 
                </div>
                <div className="col-lg-8 wow fadeInLeft delay-06s">
                  {/*NOTE: Update your email Id in "contact_me.php" file in order to receive emails from your contact form*/}
                  <form name="sentMessage" id="contactForm" noValidate> 
                    <div className="control-group">
                      <div className="controls">
                        <input type="text" className="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                        <p className="help-block" />
                      </div>
                    </div> 	
                    <div className="control-group">
                      <div className="controls">
                        <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
                      </div>
                    </div> 	
                    <div className="control-group">
                      <div className="controls">
                        <textarea rows={10} cols={100} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
                      </div>
                    </div> 		 
                    <div id="success"> </div> {/* For success/fail messages */}
                    <button type="submit" className="btn btn-primary pull-right">Send</button><br />
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className="container">
            <div className="footer_bottom"><span>Copyright © 2017,    Template by <a href="https://webthemez.com/free-bootstrap-templates/">WebThemez.com</a>. </span> </div>
          </div>
        </footer>
      )
    }
  };