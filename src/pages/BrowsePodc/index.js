import React from 'react';
import logo from '../../assets/logo.png';
import categoriesIcon from '../../assets/categoriesIcon.png';
export default function BrowsePodc() {
  return (
    <div className="bg-gray-900">
      <div className="bg-bg-img h-screen bg-no-repeat w-full bg-center relative ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="rounded-3xl bg-slate-800 w-80 z-20 h-[700px] flex flex-col  ">
            <div className="flex items-center ml-8 mt-14 ">
              <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
              <span className="text-white font-roboto font-medium text-l">
                pcast
              </span>
            </div>
            <div className="ml-8 mt-8">
              <h1 className="font-roboto font-bold text-5xl text-white">
                Browse
              </h1>
            </div>
            <div className="mt-8 ml-8">
              <form>
                <input
                  placeholder="Search"
                  className="h-10 w-64 bg-[#010304] bg-opacity-50 rounded-2xl text-white pl-4"
                />
                <img src="" alt="searchIcon" />
              </form>
            </div>
            <div className="flex items-center justify-center ">
              <div className="rounded-full bg-[#19232F] w-14 h-14 flex flex-col items-center justify-center ">
                <img alt="categoriesIcon" src={categoriesIcon} />
                <span className="text-xs font-medium text-[#898f97] ">
                  Categories
                </span>
              </div>
              <div className="rounded-full bg-[#19232F] w-14 h-14 flex flex-col items-center justify-center ">
                <img alt="topicsIcon" src={categoriesIcon} />
                <span className="text-xs font-medium text-[#898f97] ">
                  Topics
                </span>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-y-5 mx-8 overflow-y-scroll overflow-x-hidden scrollbar">
              <h3 className="font-medium text-base text-[#898F97]  ">
                Podcasts (2)
              </h3>
              <div className="rounded-t-3xl rounded-bl-3xl bg-bg-bgPodc1 w-56 h-48">
                <p className="font-roboto font-medium text-l text-white mt-7 ml-8 ">
                  Tincidunt facilisis fermentum nec sed
                </p>
                <div>
                  <span>23.05.2019 24:15:05</span>
                  <div>
                    <div>
                      <img src="" alt="profileIcon" />
                      <p>Theresa Hawkins</p>
                    </div>
                    <div>
                      <img alt="playIcon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-t-3xl rounded-bl-3xl bg-bg-bgPodc2">
                <div className="rounded-t-3xl rounded-bl-3xl bg-bg-bgPodc1 w-56 h-48">
                  <p className="font-roboto font-medium text-l text-white mt-7 ml-8 ">
                    Nulla leo dictum pharetra ultricies
                  </p>
                  <div>
                    <span>23.05.2019 24:15:05</span>
                    <div>
                      <div>
                        <img src="" alt="profileIcon" />
                        <p>Wade Flores</p>
                      </div>
                      <div>
                        <img alt="playIcon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
