import React from 'react'

function Contact() {
  return (
    <div>
        <div class="contact-form">
        <h2 class="contact">Contact<span>Me</span></h2>
        <form>

            <div class="input-box">
                <input type="text" name="name" id="name" placeholder="Full Name"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
            </div>
            <div class="input-box">
                <input type="number" name="name" id="name" placeholder="Phone Number"/>
                <input type="text" name="email" id="email" placeholder="subject"/>
            </div>
            <textarea name="" id="" placeholder="Your message" cols="5px" rows="5px"></textarea>
            <button type="submit">Send Message</button>
        </form>
        </div>
    </div>
  )
}

export default Contact