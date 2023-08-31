import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom';

export default function Admin() {
    const [data, setData] = useState([]);
    const [dataBlog, setDataBlog] = useState([]);

    const urlCourse = "http://localhost:8000/Course";
    const urlBlog = "http://localhost:8000/Blog";
    const urlUser = "http://localhost:8000/user";

    useEffect(() => {
        fetch(urlCourse)
            .then(response => response.json())
            .then(json => {
                setData(json);
            })

        fetch(urlBlog)
            .then(response => response.json())
            .then(json => {
                setDataBlog(json);
            })

        fetch(urlBlog)
            .then(response => response.json())
            .then(json => {
                setDataBlog(json);
            })
            .catch(e => console.log("Error: ", e))
    }, [])

    const handleDelete = (id) => {
        const confim = window.confirm("Bạn có muốn xóa ?");
        if (confim) {
            axios.delete('http://localhost:8000/Course/' + id)
                .then(res => {
                    setTimeout(() => {
                        window.location.href = '/admin'
                    }, 1000);
                    toast.success("Đã xóa thành Công");
                })
                .catch(err => err)
        }
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <ToastContainer />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Our products
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Khóa học
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hình
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-xl text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </th>
                            <td className="px-6 py-4 w-1/4 rounded-lg">
                                <img src={item.img} alt='' className='w-full h-full rounded-lg' />
                            </td>
                            <td className="px-6 py-4 text-right">
                                <Link to={`/admin/edit/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xl">Sửa</Link>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={(e) => handleDelete(item.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline text-xl">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
