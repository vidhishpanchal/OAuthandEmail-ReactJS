import React from 'react'
import emailjs from 'emailjs-com';

function SendEmail() {
    const USER_ID = process.env.REACT_APP_USER_ID;
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_kssr7nc', e.target, USER_ID)
          .then((result) => {
              console.log(result.text);
              window.alert("Email sent Successfully.")
          }, (error) => {
              console.log(error.text);
              if (error.status===413) {
                  window.alert("Attachment size is too large.");
                  console.log("Attachment size is too large.");
              }
          });
          e.target.reset();
      }
  
    return (
        <div className="email_div">
            <h1 style={{marginTop:"15px",marginLeft: "30px"}}>Send Email</h1>
            <form className="contact-form email_form" onSubmit={sendEmail}>
            <label>Sender's Name:</label>
            <br />
            <input type="text" name="name" placeholder="Name" class="form-control form-control-sm" />
            

            <label>Recipient Email:</label>
            <input type="text" name="email" placeholder="Email" class="form-control form-control-sm">
           
            
            </input>
           
           
            <label>Subject:</label>
            <br />
            <input type="text" name="subject" placeholder="Subject" class="form-control form-control-sm" />
            <label>Body:</label>
            <br />
            <textarea name="message" placeholder="Body" class="form-control form-control-sm" />
            <br />
            <label>Attach file:</label>
            <input type="file" name="my_file" /> 
            <br />
            <button style={{marginBottom:"10px", marginTop:"5px"}} className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendEmail
