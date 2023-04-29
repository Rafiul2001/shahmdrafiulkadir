import React, { useRef } from 'react'
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiInstagramFill } from 'react-icons/ri'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_85jxg9s', 'template_xzip2bt', form.current, 'DpdF5Ml6upSF5O-1u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div id='contact' className='px-3 w-full flex flex-col gap-8 pt-24'>
            <section className='flex flex-col md:flex-row gap-8'>
                <div className='flex-1 flex flex-col items-center md:items-start'>
                    <h1 className='font-semibold text-blue text-4xl'>Contact Me</h1>
                    <p className='pt-1 leading-6 text-'>Email: <span>rafiul13062001@gmail.com</span></p>
                    <ul className='flex gap-1 pt-3'>
                        <li><a href="https://web.facebook.com/rafiul2001" target='blank'><RiFacebookCircleFill color='#002863' className='hover:fill-pink-700 cursor-pointer' size={28} /></a></li>
                        <li><a href="https://www.linkedin.com/in/rafiul-kadir-7b3715248/"><RiLinkedinBoxFill color='#002863' className='hover:fill-pink-700 cursor-pointer' size={28} /></a></li>
                        <li><a href="https://www.instagram.com/rafiul13062001/"><RiInstagramFill color='#002863' className='hover:fill-pink-700 cursor-pointer' size={28} /></a></li>
                    </ul>
                </div>

                <div className='flex-1'>
                    <form ref={form} onSubmit={sendEmail} className='w-full sm:px-16 md:px-0 flex flex-col gap-6'>
                        <input className='border-solid border-blue border-2 rounded-md px-3 py-1' type="text" placeholder='Enter your name' name='user_name' required />
                        <input className='border-solid border-blue border-2 rounded-md px-3 py-1' type="email" name="user_email" placeholder='Enter your email' required />
                        <textarea className='border-solid border-blue border-2 rounded-md resize-none px-3 py-2' name="message" cols="30" rows="5" placeholder='Enter your message'></textarea>
                        <input className='w-full md:w-fit bg-blue text-white px-8 py-2 rounded-md hover:bg-pink-700 cursor-pointer' type="submit" value="Submit" />
                    </form>
                </div>
            </section>
            <h3 className='text-center py-5 text-blue font-medium'>Copyright &#169; 2023 By Shah Md. Rafiul Kadir</h3>
        </div>
    )
}

export default Contact