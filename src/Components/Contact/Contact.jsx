import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
   <>
    
 <section className="contact-section" id="contact">
<div className="container">
  <h2 className="contact-heading text-center text-uppercase">contact me</h2>
  <div className="divider-custom divider-light">
    <div className="divider-custom-line-contact"></div>
    <div className="divider-custom-icon-contact">
      <svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
    </div>
    <div className="divider-custom-line-contact"></div>
  </div>
  <div className="row justify-content-center">
    <div className="col-lg-8 col-xl-7">
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            
            <div className="form-floating mb-3">
                <input className="form-control is-invalid" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" data-sb-can-submit="no"/>
                <label htmlFor='name'>Full name</label>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            
            <div className="form-floating mb-3">
                <input className="form-control is-invalid" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" data-sb-can-submit="no"/>
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            
            <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" data-sb-can-submit="no"/>
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
            
            <div className="form-floating mb-3">
                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style= {{height:'10rem'}} data-sb-validations="required" data-sb-can-submit="no"></textarea>
                <label  htmlFor="message">Message</label>
                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
            
            <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    
                    <br/>
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div> 
            
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
            
            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
        </form>
    </div>
</div>
</div>
 </section>
 
   </>
    )
  }
}
