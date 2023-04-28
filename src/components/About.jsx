import React from 'react'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { HtmlLogo, CSSLogo, JavaScriptLogo, ReactLogo, TailwindCSSLogo, NodeJSLogo } from "../assets/index"

const About = () => {
    return (
        <div id='about' className='px-3 w-full flex flex-col gap-16 pt-24'>
            <div className='flex flex-col gap-8'>
                <h1 className='font-semibold text-blue
                text-center text-5xl'>About Me</h1>
                <p className='text-center'>My name is Shah Md. Rafiul Kadir. I am a Frontend developer. I am a fast learner. Learning new thing is my hobby. I try my level best to complete what I start. Currently studying CSE from Notre Dame University Bangladesh. Also developing my skills.</p>
            </div>

            <div className='flex flex-col gap-8'>
                <h1 className='font-medium text-blue text-center text-4xl'>Skills</h1>
                <div className='flex flex-wrap items-center gap-8 justify-center'>
                    <img className='h-20' src={HtmlLogo} alt="HTML" />
                    <img className='h-20' src={CSSLogo} alt="CSS" />
                    <img className='h-16' src={JavaScriptLogo} alt="JS" />
                    <img className='h-10' src={NodeJSLogo} alt="NodeJS" />
                    <img className='h-16' src={ReactLogo} alt="ReactJS" />
                    <img className='h-10' src={TailwindCSSLogo} alt="TailwindCSS" />
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <h1 className='font-medium text-blue
                text-center text-4xl'>Education</h1>
                <ul className='flex flex-col justify-center items-center gap-6'>

                    <li className='flex w-full gap-10 items-center'>
                        <span className='flex-1 text-right'>Secondary School Certificate (SSC)</span>
                        <div className='flex items-center justify-center'>
                            <div className='w-[2px] rounded-md h-12 bg-black opacity-30'></div>
                        </div>
                        <span className='flex-1'>2018</span>
                    </li>

                    <li><RiCheckboxBlankCircleLine size={32} color='#b3b59f' /></li>

                    <li className='flex w-full gap-10 items-center'>
                        <span className='flex-1 text-right'>2020</span>
                        <div className='flex items-center justify-center'>
                            <div className='w-[2px] rounded-md h-12 bg-black opacity-30'></div>
                        </div>
                        <span className='flex-1'>Higher Secondary Certificate (HSC)</span>
                    </li>

                    <li><RiCheckboxBlankCircleLine size={32} color='#b3b59f' /></li>

                    <li className='flex w-full gap-10 items-center'>
                        <span className='flex-1 text-right'>Bachelor of Science in <br />
Computer Science & Engineering (BSc in CSE)</span>
                        <div className='flex items-center justify-center'>
                            <div className='w-[2px] rounded-md h-12 bg-black opacity-30'></div>
                        </div>
                        <span className='flex-1'>2025</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About