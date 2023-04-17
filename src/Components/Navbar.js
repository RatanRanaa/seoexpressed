import React, { useState } from 'react'
import Model from 'react-modal'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [isopenModel, setIsopenModel] = useState(false)
  return (
    <>
      <nav className=" w-screen bg-white md:block xl:block hidden">
        <div className=" flex items-center justify-between">
          <div className=" flex">
            <Link className=" flex" to="/">
              <img src="/images/_Downloader.webp" alt="logo" width={80} />
              <h1 className=" pt-5 font-bold text-2xl text-gray-400">
              EXPRESSED
              </h1>
            </Link>
          </div>
          <div>
            <ul className=" flex">
              <NavLink
                to="/"
                className=" mx-2 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]"
                activeclassname="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/plans"
                className=" mx-2 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]"
                activeclassname="active"
              >
                Plans & Pricing
              </NavLink>
              <NavLink
                to="/blog"
                className=" mx-2 font-semibold text-[18px] cursor-pointer hover:text-[#9e3ffd]"
                activeclassname="active"
              >
                Blog
              </NavLink>
            </ul>
          </div>
          <div>
            <button
              onClick={() => setIsopenModel(true)}
              className=" mx-4 py-3 px-4 z-20"
            >
              <i className="fa-solid fa-user mr- bg-blue-600 text-white rounded-full text-[16px] p-[8px]"></i>{' '}
              Log IN
            </button>
            <Model
              isOpen={isopenModel}
              onRequestClose={() => setIsopenModel(false)}
              style={{
                overlay: {
                  background: 'gray',
                  zIndex: '21',
                },
                content: {
                  color: 'orang',
                },
              }}
            >
              <h1 className=" text-6xl flex items-center justify-center font-extrabold">
                Sign Up
              </h1>
              <h1 className=" font-bold flex items-center justify-center py-8">
                Already a member?{' '}
                <span className=" text-[18px] text-[#9e3ffd]"> <NavLink to="/login">LogIN</NavLink> </span>{' '}
              </h1>
              <div className=" mx-auto items-center justify-center flex my-6 flex-col ">
                <img className="" src="" alt="" />
                <button
                  className="  flex items-center justify-center px-20 border my-4 py-2 bg-[#4e69a2]  text-white"
                  onClick={() => setIsopenModel(false)}
                >
                  {' '}
                  <i className=" px-6 text-4xl fa-brands fa-facebook"></i> Sign up
                  With Facebook
                </button>
                <button
                  className="  flex items-center justify-center px-20 border my-4 py-2  bg-[#5591f5] text-white "
                  onClick={() => setIsopenModel(false)}
                >
                  {' '}
                  <i className=" px-6 text-4xl fa-brands fa-google"></i> Sign up
                  With Google
                </button>
              </div>
              <div className=" flex items-center justify-center">
                <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                  <br />
                </h1>
                <span className=" flex items-center justify-center">or</span>
                <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                  <br />
                </h1>
              </div>
              <button className=" flex items-center justify-center mx-auto mt-7 border px-24 border-black text-2xl py-2">
                {' '}
                Sign up with email
              </button>
              <p className=" flex items-center justify-center mt-10">
                Sign up to this site with a public profile.{' '}
                <span className=" underline ml-2"> Read more </span>
              </p>
              <button
                className=" mx-auto items-center justify-center flex border px-2 py-2 mt-4 border-black font-medium "
                onClick={() => setIsopenModel(false)}
              >
                Close Model
              </button>
            </Model>
            <button className=" border py-3 px-4 mr-5 bg-[#8d57f7] font-medium text-white text-[18px] rounded-3xl">
              
              <a href="https://accounts.google.com/" target="_main">
              {/* https://mail.google.com */}
              {/* mailto:your_email_address@gmail.com */}
                Contact Now
              </a>
            </button>
          </div>
        </div>
      </nav>

      <nav className="w-screen  bg-white sm:block md:hidden lg:hidden xl:hidden relative z-20">
        <div className="flex h-full justify-between mx-10">
          <div>
            <Link to="/">
              <img
                onClick={() => setShow(!show)}
                src="/images/_Downloader.webp"
                width={100}
                className=" mt-4"
                alt="logo"
              />
            </Link>
            <div className={show ? 'block' : 'hidden'}>
              <ul className="flex justify-center font-bold flex-col">
                <NavLink
                  activeclassname="active"
                  onClick={() => setShow(!show)}
                  to="/"
                  className=" mt-10 cursor-pointer"
                >
                  Home
                </NavLink>
                <NavLink
                  activeclassname="active"
                  onClick={() => setShow(!show)}
                  to="/plans"
                  className=" mt-10 cursor-pointer"
                >
                  Plans & Pricing
                </NavLink>
                <NavLink
                  activeclassname="active"
                  onClick={() => setShow(!show)}
                  to="/blog"
                  className=" mt-10 cursor-pointer"
                >
                  Blog
                </NavLink>
                <NavLink
                  activeclassname="active"
                  onClick={() => setShow(!show)}
                  to="/login"
                  className=" mt-10 cursor-pointer"
                >
                  .
                </NavLink>
              </ul>
              <div className=" flex items-center justify-between mt-52">
                <div onClick={() => setShow(!show)}>
                <button
                  onClick={() => setIsopenModel(true)}
                  className=" bottom-0 mb-10 left-0 right-0 p-4 font-bold text-white bg-blue-500 hover:bg-blue-600"
                >
                  LogIn
                </button>
                </div>
                <Model
                  isOpen={isopenModel}
                  onRequestClose={() => setIsopenModel(false)}
                  style={{
                    overlay: {
                      background: 'gray',
                      zIndex: '21',
                    },
                    content: {
                      color: 'orang',
                    },
                  }}
                >
                  <h1 className=" text-6xl flex items-center justify-center font-extrabold">
                    Sign Up
                  </h1>
                  <h1 className=" font-bold flex items-center justify-center py-8">
                    Already a member?{' '}
                    <span onClick={() => setShow(show)} className=" text-[18px] text-[#9e3ffd] cursor-pointer">
                      <NavLink onClick={() => setIsopenModel(false)} to="/login">LogIn</NavLink>
                    </span>{' '}
                  </h1>
                  <div className=" mx-auto items-center justify-center flex my-6 flex-col ">
                    <img className="" src="" alt="" />
                    <button className=" flex items-center justify-center px-10 border my-4 py-2 bg-[#4e69a2]  text-white">
                      {' '}
                      <a
                        className="flex items-center justify-center"
                        href="https://www.facebook.com"
                      >
                        {' '}
                        <i className=" px-2 text-4xl fa-brands fa-facebook"></i>{' '}
                        Sign up with Facebook
                      </a>
                    </button>
                    <button className=" flex items-center justify-center px-10 border my-4 py-2  bg-[#5591f5] text-white">
                      {' '}
                      <a
                        className="flex items-center justify-center"
                        target="_main"
                        href="https://mail.google.com"
                      >
                        {' '}
                        <i className=" px-4 text-4xl fa-brands fa-google"></i> Sign
                        up with email
                      </a>
                    </button>
                  </div>
                  <div className=" flex items-center justify-center">
                    <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                      <br />
                    </h1>
                    <span className=" flex items-center justify-center">
                      or
                    </span>
                    <h1 className=" border-b w-44 flex items-center justify-center mx-4">
                      <br />
                    </h1>
                  </div>
                  <button className=" flex items-center justify-center mx-auto mt-7 border px-4 border-black text-2xl py-2">
                    {' '}
                    <a href="https://mail.google.com">Sign up with email</a>
                  </button>
                  <p className=" flex items-center justify-center mt-10">
                    Sign up with a public profile.{' '}
                    <span className=" underline ml-2 cursor-pointer">
                      {' '}
                      <NavLink onClick={() => setIsopenModel(false)} to="/blog"> <a href="/blog">Read More</a></NavLink> {' '}
                    </span>
                  </p>
                  <button
                    className=" mx-auto items-center justify-center flex border px-2 py-2 mt-4  border-black font-medium "
                    onClick={() => setIsopenModel(false)}
                  >
                    Close Model
                  </button>
                </Model>
                <button
                  onClick={() => setShow(!show)}
                  target="_main"
                  className=" mb-10 bottom-0 left-0 right-0 p-4 text-white bg-blue-500 hover:bg-blue-600 ml-4 font-bold"
                >
                  <a href="mailto:your_email_address@gmail.com">Contact Now</a> 
                </button>
              </div>
            </div>
          </div>
          <div
            className=" mt-8 text-2xl cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
