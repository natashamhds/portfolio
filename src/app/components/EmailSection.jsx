'use client'

import React, { useState } from 'react'
import GithubIcon from '../../../public/images/github-icon.svg'
import LinkedInIcon from '../../../public/images/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                throw new Error(`Failed to send email: ${response.status}`);
            }
            const result = await response.json();
            console.log('Success:', result);
            setStatus('Email sent successfully!');
            setEmailSubmitted(true);
            e.target.reset();
        } catch (error) {
            console.log('Error:', error);
            setStatus('Failed to send email. Please try again.');
        } finally {
            setLoading(false);
        }
    }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        {/* <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div> */}
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7E] mb-4 max-w-md'>
            {" "}
            I'm currently open to new opportunities, my inbox is always open. 
            Whether you have a question, or just want to say hello, feel free to reach out!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com/natashamhds" target="_blank">
                <Image src={GithubIcon} alt="GitHub Icon" className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/nur-natasha413/" target="_blank">
                <Image src={LinkedInIcon} alt="LinkedIn Icon" className="w-6 h-6" />
            </Link>
        </div>
        </div>
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                    <input type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className='bg-[#16191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                        placeholder='jacob@google.com'/>
                </div>

                <div className='mb-6'>
                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                        className='bg-[#16191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                        placeholder='Just say hello!'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows="4" 
                        className='bg-[#16191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                        placeholder='Leave a message here...'/>
                </div>
                <button type='submit' disabled={loading} className='bg-purple-300 hover:bg-pink-400 text-white font-medium py-2.5 px-5 rounded-lg disabled:opacity-50'>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
                {
                    emailSubmitted && <p className='mt-4 text-green-500 text-sm'>Email sent successfully!</p>
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection