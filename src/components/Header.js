import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Dropdown } from 'flowbite-react';
import { useState } from 'react'
import logo from '../logo.png'
import DropDown from './DropDown'

const listDropDownUser = [
    { id: 1, title: "Trang cá nhân", router: 'profile' },
    { id: 2, title: "Viết blog", router: 'blogging' },
    { id: 3, title: "Bài viết của tôi", router: 'article' },
    { id: 4, title: "Cài đặt", router: 'setting' },
    { id: 5, title: "Đăng xuất", router: '/' },
]

export default function Header({ checkAdmin }) {
    const [action, setAction] = useState(false);

    const imgRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!imgRef.current.contains(e.target)) {
                setAction(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <header className='w-full sticky top-0 z-40 bg-white px-10 py-3 grid grid-cols-4 content-center shadow-sm'>
            <div className='col-span-1 flex items-center gap-2'>
                <Link to={checkAdmin ? '/admin' : '/'}>
                    <img src={logo} alt={logo} />
                </Link>
            </div>
            <div className='col-span-2 w-full flex bg-gray-100 px-5 py-2 rounded-full'>
                <input className='bg-gray-100 border-none outline-none w-full text-lg text-slate-500' placeholder='Tìm kiếm khóa học, bài học...' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <div className='flex justify-end gap-4 items-center'>
                {!checkAdmin ? 
                    <div className='bg-blue-200 px-5 py-2 rounded-lg'>
                        <button className='text-blue-600 font-semibold'>Khóa học của tôi</button>
                    </div> : 
                    <div className='bg-blue-200 px-5 py-2 rounded-lg'>
                        <Link to='/admin/them' className='text-blue-600 font-semibold'>Thêm khóa học</Link>
                    </div>
                }
                <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </div>
                <button className='cursor-pointer z-10' onClick={() => setAction(!action)}>
                    <svg ref={imgRef} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <div ref={imgRef} className={`${action ? "block" : 'hidden'} absolute right-0 bottom-2`}>
                    <DropDown Bgcolor={'white'} listMenu={listDropDownUser} />
                </div>
            </div>
        </header>
    )
}
