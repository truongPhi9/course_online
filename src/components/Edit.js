import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';

export default function From() {
    const {id} = useParams();
    // const [inputData, setInputData] = useState({ title: '', img: '' });
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/Course/' + id)
        .then(res => setData(res.data))
        .catch(err => err)
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/Course/' + id, data)
            .then(res => {
                toast.success("Sửa thành công");
                setTimeout(() => {
                    window.location.href = '/admin'
                }, 1500);
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <ToastContainer />
            <h3>Chỉnh sửa</h3>
            <form className='w-1/2' onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên khóa học</label>
                    <input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Tên khóa học" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình</label>
                    <img src={data.img} alt='' className='mb-5 w-56 rounded-lg' />
                    <input value={data.img} onChange={e => setData({ ...data, img: e.target.value })} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="flex items-start mb-6">
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
        </>
    )
}
