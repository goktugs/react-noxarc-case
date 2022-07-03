import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import hardCoded from '../../hardCoded.json';

export default function Login() {
  console.log(hardCoded.info);

  return (
    <div className="bg-gray-900">
      <div className="bg-bg-img h-screen bg-no-repeat w-full bg-center relative ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="rounded-3xl bg-slate-800 w-80 z-20 h-[700px] flex flex-col  ">
            <div className="flex items-center mt-12 ml-8">
              <img src={logo} alt="logo" className="w-20 h-20 mr-3" />
              <span className="text-white font-roboto font-bold text-xl">
                pcast
              </span>
            </div>
            <div className="mt-12 ml-8">
              <p className="text-white font-roboto font-medium text-2xl ">
                Episodic series of <br /> digital audio.
              </p>
            </div>
            <div className="mt-20  ">
              <form className="flex gap-y-7 items-center justify-center flex-col  ">
                <input
                  placeholder="E-mail address"
                  type="email"
                  className="w-64 h-14 bg-[#09121C] border border-solid border-opacity-20 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-white pl-6"
                />
                <input
                  placeholder="Password"
                  type="password"
                  className="w-64 h-14 bg-[#09121C] border border-solid border-opacity-20  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-white pl-6"
                />
                <Link to="/browsepodc">
                  <button className="bg-[#3369FF] rounded-full w-72 shadow-button-shadow h-12">
                    <span className="text-white font-medium text-base ">
                      Login
                    </span>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
