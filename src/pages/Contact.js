import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail  (e)  {
   e.preventDefault();

    emailjs.sendForm('service_b30w8r4', 'template_0pwmi2e',e.target , 'uY5dPfr0ywmFRrfkm')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });
  }
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Get IN Touch With Me!!</h1>
          <p class="py-6">Interested in working together? Fill the form with some info about your project and i will get back to you as soon as I can.Please allow a couple days for me to respond.  </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div onClick={sendEmail} class="form-control">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input type="text"  name='name' placeholder="Name" class="input input-bordered" />
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea type="text" name='message' placeholder="Your Message" class="input input-bordered" />

            </div>
            <div class="form-control mt-6">
              <button  class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;