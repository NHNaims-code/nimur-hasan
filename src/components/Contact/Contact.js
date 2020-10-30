import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('12345678naim', 'template_npnghdp', e.target, 'user_CXj1Vhccy5YmclIiK99BT')
      .then((result) => {
          console.log(result.text);
          alert('Congrats! your message sent successful')
      }, (error) => {
          console.log(error.text);
          alert('Something went wrong')
      });

      e.target.reset();

    }
    return (
        <div className="container shadow p-5 my-5">
            <form onSubmit={handleEmail}>
                <h2>Contact Form</h2>
                <input type="text" className="form-control my-4" name="name" placeholder="Your Name"/>
                <input type="email" className="form-control my-4" name="email" placeholder="Your Email"/>
                <textarea name="message" className="form-control" rows="5" placeholder="Type Your Message..."></textarea>
                <button type="submit" className="btn btn-danger text-center w-100 mt-3">Send</button>
            </form>
        </div>
    );
};

export default Contact;