import React from "react";

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

        <div className="contact-container">

            <h2 className="contactus-pgtitle">Contact Us</h2>

            {/* contact form */}
            <form className='contactform' onSubmit={onSubmit}>
                {/* name input */}
                <div>
                    <label className='contactinputtitle' htmlFor="name">Name</label>
                    <input className='nameinput' type="text" id="name" required />
                </div>
                {/* email input */}
                <div>
                    <label className='contactinputtitle' htmlFor="email">Email</label>
                    <input className='emailinput' type="email" id="email" required />
                </div>
                {/* message input */}
                <div>
                    <label className='contactinputtitle' htmlFor="message">Message</label>
                    <textarea className='messageinput' id="message" required />
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