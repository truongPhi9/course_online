import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import '../App.css'

export default function LessonContent({ title, arrayTitleVideo }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const handleClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className='snap-y'>
            <div 
                className='flex justify-between items-center px-5 py-3 bg-gray-200 border-b-2 border-b-gray-300 cursor-pointer'
                onClick={handleClick}
            >
                <h3 className='text-lg'>{title}</h3>
                <FontAwesomeIcon className={`${isDropdownOpen ? 'rotate' : 'rotate-180'}`} icon={faChevronDown} />
            </div>
            <div className={`${isDropdownOpen ? 'hidden' : 'block'}`}>
                {arrayTitleVideo.map(e => (
                    <div key={e.LessonTitle} className='flex gap-3 items-center py-5 px-3 text-base cursor-pointer hover:bg-slate-300'>
                        <FontAwesomeIcon icon={faCirclePlay} color="rgb(37 99 235" />
                        <p>{e.LessonTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
