/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import bg from '../../assets/Group 10.svg'
import logo from '../../assets/tickitz 1.svg'
import { useNavigate } from 'react-router-dom'
import useApi from '../../helper/useApi'
import { Container, Show } from '../../helper/toast'
import { Link } from 'react-router-dom'


function formsignup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState({})

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const api = useApi() 
  
  const navigate = useNavigate()

  const handleInput = (e) => {
    const data = {...form}
    data[e.target.name] = e.target.value
    setForm(data)
  }

  const register = () => {
    api({
      method: 'POST',
      url: '/user',
      data: form
    }).then(res=>{
      Show('Registration Success', 'success')
      setTimeout(() => {
        navigate('/signin')
      }, 3000);
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
    <div className="h-screen w-full flex items-start">
      <Container />
  <section className="relative w-1/2 h-full md:flex hidden flex-col">
    <img
      className="h-full w-full object-cover"
      src={bg}
      alt=""
    />
    <div className="absolute flex flex-col w-full h-full items-center justify-center">
      <img className="w-1/2" src={logo} alt="" />
      <p className="text-white">wait, watch, wow!</p>
    </div>
  </section>
  <section className="relative md:w-1/2 w-full h-full flex flex-col font-inter">
    <div className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-5xl">Sign Up</h1>
        <h2 className="text-xl text-gray-400">Fill your additional details</h2>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col font-mulish">
          <label htmlFor="username" className="text-gray-600 py-2">
            Username
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="username"
            placeholder="Write your username"
            required=""
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label htmlFor="phone" className="text-gray-600 py-2">
            Phone Number
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="tel"
            name="phone"
            placeholder="Write your phone number"
            required=""
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label htmlFor="Email" className="text-gray-600 py-2">
            Email
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="email"
            placeholder="Write your email"
            required=""
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label htmlFor="Password" className="text-gray-600 py-2">
            Password
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="password"
            name="password"
            placeholder="Password"
            required=""
            onChange={handleInput}
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={register}
        className="bg-primary h-16 rounded-lg text-white font-bold"
      >
        Sign Up
      </button>
      <div className="flex flex-col gap-y-2 text-center">
        <p className="text-gray-400">
          Already have account ?{" "}
          <Link className="text-primary underline" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </section>
</div>

  )
}

export default formsignup