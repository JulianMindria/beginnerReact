/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import logo from '../../assets/Ellipse 11.svg'
import Header from '../../component/header'
import Footer from '../../component/footer'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/reducer/user'
import { Link } from 'react-router-dom'
import useApi from '../../helper/useApi'
import { useState } from 'react'
import { Show, Container } from '../../helper/toast'



function profile() {

    const {data} = useSelector((s)=>s.users)
    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    const api = useApi() 
  

    const handleInput = (e) => {
        const data = {...form}
        data[e.target.name] = e.target.value
        setForm(data)
    }

    const updateUser= () => {
        const formData = new FormData();
        formData.append('username', form.username)
        formData.append('phone', form.phone);
        formData.append('email', form.email);
        formData.append('roles', form.roles);
        formData.append('user_id', data[0].user_id);


        api({
        method: 'PATCH',
        url: '/user',
        data: formData
        }).then(res=>{
        Show('Registration Success', 'success')
        }).catch(err=>{
        const axiosErr = err.response.data
        if (axiosErr.message !== undefined) {
            Show(axiosErr.message, 'warning')
        } else if (axiosErr.error !== undefined) {
            Show(axiosErr.error, 'error')
        }
        })
    }

  return (
    <>
    <Header/>
    <div className="py-5 bg-gray-100">
        <Container />
        <section className="mx-auto max-w-7xl p-5 gap-8 md:grid flex flex-col md:items-baseline items-center grid-cols-2 grid-flow-row grid- grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] auto">
            <div className="h-100 w-75 rounded-xlg text-center bg-white row-start-1 row-end-6 ">
            <div className="flex flex-col gap-y-3 h-96">
                <label
                className="text-base text-gray-600 flex justify-start p-5"
                htmlFor="info"
                >
                INFO
                </label>
                <img
                className="mx-auto h-44 w-auto rounded-full object-cover shadow-none"
                src={data[0].user_image}
                alt="#"
                />
                <p className="text-xl font-semibold">Bang {data[0].username}</p>
                <p className="text-sm text-gray-400">Moviegoers</p>
            </div>
            <hr className="w-100% bg-gray-50" />
            <div className="flex justify-center items-center my-4">
                <Link
                className="bg-primary px-10 py-3 items-center text-center rounded-lg text-white border border-transparent font-semibold"
                to="/home"
                onClick={()=>{dispatch(logout())}}
                href="#"
                >
                Logout
                </Link>
            </div>
            </div>
            <div className="w-100% h-auto hidden md:flex gap-x-12 rounded-mlg p-5 items-center bg-white">
            <a
                className="font-semibold underline underline-offset-26 decoration-2 decoration-primary"
                href="#"
            >
                Account Settings
            </a>
            <a className="font-semibold text-gray-400" href="#">
                Order History
            </a>
            </div>
            <div>
            <div className="w-100% h-auto flex flex-col font-mulish gap-y-6 rounded-xlg p-5 bg-white">
                <h1>Details Information</h1>
                <hr className="w-100% bg-gray-50" />
                <div className="flex lg:flex-row text-gray-600 sm:flex-col flex-col gap-y-5 gap-x-12">
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="firstname">username</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="text"
                    onChange={handleInput}
                    name="username"
                    id="fname"
                    defaultValue={data[0].username}
                    />
                </div>
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="lastname">User Roles</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="text"
                    onChange={handleInput}
                    name="roles"
                    id="fname"
                    defaultValue={data[0].roles}
                    />
                </div>
                </div>
                <div className="flex lg:flex-row text-gray-600 sm:flex-col flex-col gap-y-5 gap-x-12">
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="text"
                    onChange={handleInput}
                    name="email"
                    id="email"
                    defaultValue={data[0].email}
                    />
                </div>
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="tel"
                    onChange={handleInput}
                    name="phone"
                    id="phone"
                    defaultValue={data[0].phone}
                    />
                </div>
                </div>
            </div>
            </div>
            <button
            className="bg-primary w-64 md:w-96 md:py-3.5 py-2.5 text-white font-bold leading-7 rounded-mlg flex justify-center tracking-wider gap-y-6"
            onClick={updateUser}
            >
            Update Changes
            </button>
            <div className="pt-4">
            <div>
                <div className="w-100% h-auto flex flex-col gap-y-6 rounded-xlg p-5 bg-white">
                <h1>Account and Privacy</h1>
                <hr className="w-100% bg-gray-50" />
                <div className="flex lg:flex-row sm:flex-col flex-col gap-y-6 text-gray-600 gap-x-12">
                    <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="firstname">Password</label>
                    <input
                        className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                        type="text"
                        name="pass"
                        id="pass"
                        placeholder="New Password"
                    />
                    </div>
                    <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="lastname">Confirm Password</label>
                    <input
                        className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Confirm New Password"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
            <button
            className="bg-primary w-64 md:w-96 md:py-3.5 py-2.5 text-white font-bold leading-7 rounded-mlg flex justify-center tracking-wider gap-y-6"
            href="#"
            >
            Update Changes
            </button>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default profile