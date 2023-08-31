import React from 'react'
import Course from '../components/Course';
import { NavLink } from 'react-router-dom'

export default function ListElement({ title, dataElement, router }) {
    return (
        <div className='w-full mt-0 px-11 pb-20'>
            <div className='mb-5'>
                <h2 className='text-neutral-800 text-2xl font-extrabold'>{title}</h2>
            </div>
            <div className='grid grid-cols-4 gap-7'>
                {dataElement.map(items => (
                    <div key={items.id} className='col-span-1'>
                        <NavLink to={`${router}/${items.id}`}>
                            <Course title={items.title} imgCourse={items.img} />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}