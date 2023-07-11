import React from 'react'
import logo from '../../assets/Ellipse 11.svg'
import Header from '../../component/header'
import Footer from '../../component/footer'
function profile() {
  return (
    <>
    <Header/>
    <div className="py-5 bg-gray-100">
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
                className="mx-auto h-36 w-auto shadow-none"
                src={logo}
                alt="#"
                />
                <p className="text-xl font-semibold">Jonathan El Rodriguez</p>
                <p className="text-sm text-gray-400">Moviegoers</p>
            </div>
            <hr className="w-100% bg-gray-50" />
            <div className="flex justify-center items-center my-4">
                <a
                className="bg-primary px-10 py-3 items-center text-center rounded-lg text-white border border-transparent font-semibold"
                href="#"
                >
                Logout
                </a>
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
                    <label htmlFor="firstname">First Name</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="text"
                    name="firstname"
                    id="fname"
                    placeholder="Jonas"
                    />
                </div>
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="text"
                    name="lastname"
                    id="fname"
                    placeholder="El Rodriguez"
                    />
                </div>
                </div>
                <div className="flex lg:flex-row text-gray-600 sm:flex-col flex-col gap-y-5 gap-x-12">
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="jonasrodrigu123@gmail.com"
                    />
                </div>
                <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+62  |  81445687121"
                    />
                </div>
                </div>
            </div>
            </div>
            <a
            className="bg-primary w-64 md:w-96 md:py-3.5 py-2.5 text-white font-bold leading-7 rounded-mlg flex justify-center tracking-wider gap-y-6"
            href="#"
            >
            Update Changes
            </a>
            <div className="pt-4">
            <div>
                <div className="w-100% h-auto flex flex-col gap-y-6 rounded-xlg p-5 bg-white">
                <h1>Details Information</h1>
                <hr className="w-100% bg-gray-50" />
                <div className="flex lg:flex-row sm:flex-col flex-col gap-y-6 text-gray-600 gap-x-12">
                    <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                        type="text"
                        name="firstname"
                        id="fname"
                        placeholder="Jonas"
                    />
                    </div>
                    <div className="relative flex flex-col gap-y-2">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        className="border border-gray-300 pl-5 xl:w-96 lg:w-80 w-72 h-16 rounded-mlg"
                        type="text"
                        name="lastname"
                        id="fname"
                        placeholder="El Rodriguez"
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
            <a
            className="bg-primary w-64 md:w-96 md:py-3.5 py-2.5 text-white font-bold leading-7 rounded-mlg flex justify-center tracking-wider gap-y-6"
            href="#"
            >
            Update Changes
            </a>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default profile