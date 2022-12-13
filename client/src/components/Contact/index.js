import React from "react";
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from "react-icons/fa";
import { TbMessage2Share } from 'react-icons/tb';

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Sent!')
        const { name, email, message } = e.target.elements
        let inputValues = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(inputValues)
    }
    return (

        <div className="contact-form">

            <h2 className="contactus-pgtitle">Contact Us</h2>
            <p className='contactus-subtitle'>Please fill in this form to send us a message.</p>

            {/* contact form */}
            <form className='contactform' onSubmit={onSubmit}>

                {/* name input */}
                <div className='input-container'>
                    {/* <label className='contactinputtitle' htmlFor="name">Name</label> */}
                    <FaUserAlt className='icon-signuppg' />
                    <input className='form-input' placeholder="Your name" type="text" id="name" required />
                </div>

                {/* email input */}
                <div className='input-container'>
                    {/* <label className='contactinputtitle' htmlFor="email">Email</label> */}
                    <AiOutlineMail size={'1.25em'} className='icon-loginpg' />
                    <input className='form-input' placeholder="Your email" type="email" id="email" required />
                </div>

                {/* message input */}
                <div className='input-container'>
                    {/* <label className='' htmlFor="message">Message</label> */}
                    <TbMessage2Share size={'1.75em'} className='icon-loginpg' />
                    <input className='form-input' placeholder="Enter your message..." id="message" required />
                </div>

                {/* submit button */}
                <button className='contactform-submit-btn' type="submit">
                    {formStatus}
                </button>

            </form>

        </div>

    )
}

export default Contact;