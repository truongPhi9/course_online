import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch(`http://localhost:8000/user/${username}`)
            .then((res) => res.json())
            .then((resp) => {
                if(resp.email === username) {
                    if(resp.pass === password) {
                        // navigate('/');  
                        setTimeout(() => {
                            window.location.href='/'
                        }, 1000)
                        toast.success("Đăng nhập thành công");
                        localStorage.setItem('user', 'Login')
                    }else {
                        toast.error("Đăng nhập thất bại", resp.email);
                    }
                }else {
                    toast.error("Đăng nhập thất bại");
                }

                if(resp.email === 'admin@gmail.com' && resp.pass === '123') {
                    setTimeout(() => {
                        window.location.href='/admin'
                    }, 1000)
                    localStorage.setItem('user', 'Login')
                }
            })
            .catch((err) => err);
        }
    }

    const validate = () => {
        var result = true;
        // if (username === 'truongphi754@gmail.com') {
        //     result = true;
        //     // console.log('df');
        //     toast.success('Đăng nhập thành công', {
        //     });
        // }
        return result
    }

    return (
        <div className='w-full flex justify-center pt-10'>
            <ToastContainer />
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={submitLogin} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#3" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={false}>Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#2" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
