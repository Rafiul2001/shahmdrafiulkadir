import React, { useEffect, useState } from 'react'
import { RiExternalLinkLine, RiGithubFill } from 'react-icons/ri'
import { G3ArchitectsLogo, GymBaranLogo, DewillingLogo } from '../assets/index'

const works = [
    {
        key: 1,
        workImage: G3ArchitectsLogo,
        title: "G3 Architects",
        details: "A demo starting landind page. Build with HTML and CSS.",
        codeLink: "https://github.com/Rafiul2001/G3ArchitectsDemoSite",
        liveSite: "https://g3architectslp.netlify.app/",
        codeType: "Demo websites",
    },
    {
        key: 2,
        workImage: GymBaranLogo,
        title: "Gym Baran",
        details: "A demo website of a Gym. Build with React and CSS.",
        codeLink: "https://github.com/Rafiul2001/react-gym-baran",
        liveSite: "https://gym-baran-react.netlify.app/",
        codeType: "Demo websites",
    },
    {
        key: 3,
        workImage: DewillingLogo,
        title: "Dwelling",
        details: "A demo of a landing page. Build with HTML and Tailwind CSS.",
        codeLink: "https://github.com/Rafiul2001/dewilling-landing-page",
        liveSite: "https://dewilling-landing-page.netlify.app/",
        codeType: "Demo websites",
    },
]



const Portfolio = () => {

    const [navigator, setNavigators] = useState("All")
    const [selectedWorks, setSelectedWorks] = useState([])

    useEffect(() => {
        setSelectedWorks(works.filter((element) => {
            return element.codeType === navigator
        }))
    }, [navigator])

    function selectWork(selectedWorks) {
        return (
            selectedWorks.map((element) => {
                return (
                    <li key={element.key} className='flex gap-3 flex-col w-full sm:max-w-full sm:items-center sm:flex-row md:max-w-md md:flex-row xl:flex-col xl:max-w-sm scale-up-center'>
                        <div className='w-full md:w-1/2 h-64 md:h-36 xl:w-full xl:h-64 overflow-hidden rounded-lg'>
                            <img className='w-full h-auto' src={element.workImage} alt="P1" />
                        </div>
                        <div className='w-full md:w-1/2 xl:w-full'>
                            <h3 className='font-medium text-blue text-lg'>{element.title}</h3>
                            <p>{element.details}</p>
                            <ul className='flex flex-col sm:flex-row items-center gap-2 pt-4'>
                                <li className='w-full sm:w-fit'>
                                    <a className='bg-blue px-2 py-1 rounded-md text-white hover:bg-pink-700 flex justify-between items-center gap-1 cursor-pointer' href={element.codeLink} target='blank'>
                                        <span className='text-sm font-medium'>Code</span>
                                        <span><RiGithubFill /></span>
                                    </a>
                                </li>
                                <li className='w-full sm:w-fit'>
                                    <a className='bg-blue px-2 py-1 rounded-md text-white hover:bg-pink-700 flex justify-between items-center gap-1 cursor-pointer' href={element.liveSite} target='blank'>
                                        <span className='text-sm font-medium'>Live preview</span>
                                        <span><RiExternalLinkLine /></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                )
            })
        )
    }

    return (
        <div id='portfolio' className='px-3 w-full pt-28 flex flex-col gap-8'>
            <h1 className='font-semibold text-blue text-center text-5xl'>Portfolio</h1>
            <ul className='flex items-center justify-center gap-3 font-medium text-xs sm:text-lg sm:gap-8'>
                <li onClick={() => setNavigators("All")} className={navigator === "All" ? "text-pink-700": "" }><span className='cursor-pointer text-center'>All</span></li>
                <li onClick={() => setNavigators("Demo websites")} className={navigator === "Demo websites" ? "text-pink-700": ""}><span className='cursor-pointer'>Demo websites</span></li>
                <li onClick={() => setNavigators("UI/UX Designs")} className={navigator === "UI/UX Designs" ? "text-pink-700": ""}><span className='cursor-pointer'>UI/UX Designs</span></li>
                <li onClick={() => setNavigators("Mobile Apps")} className={navigator === "Mobile Apps" ? "text-pink-700": ""}><span className='cursor-pointer'>Mobile Apps</span></li>
            </ul>
            <ul className='flex flex-wrap flex-col justify-center sm:flex-row w-full gap-x-3 gap-y-16'>
                {
                    navigator === "All"? selectWork(works) : selectWork(selectedWorks)
                }
            </ul>
        </div>
    )
}

export default Portfolio