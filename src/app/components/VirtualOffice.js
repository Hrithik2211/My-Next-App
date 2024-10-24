import React from 'react';
import Voffice from '../svgfiles/Voffice';
import CallBack from '../svgfiles/CallBack';
import RightArrow from '../svgfiles/RightArrow';
import LeftArrow from '../svgfiles/LeftArrow';

function VirtualOffice() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-10 w-full sm:w-4/5">
      {/* First Card - Virtual Office */}
      <div className="bg-white border rounded-lg shadow-lg flex flex-col lg:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-6 lg:gap-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 relative flex justify-center">
          <Voffice />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 space-y-4 sm:h-56 text-center lg:text-left">
          <h3 className="text-lg sm:text-xl">Virtual Office</h3>
          <p className="text-sm sm:text-base">
            Visit our Virtual Office from the comfort of your home and simplify
            your study abroad journey with us.
          </p>
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">✔</span>
              Clear doubts regarding Immigration
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">✔</span>
              Best college selection
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">✔</span>
              Convenience of home
            </li>
          </ul>
        </div>

        {/* Arrow Icon - Hidden on mobile */}
        <div className="hidden lg:flex w-10 h-10 bg-blue-500 text-white rounded-full items-center justify-center lg:ml-auto">
          <span className="text-2xl">
            <RightArrow />
          </span>
        </div>
      </div>

      {/* Second Card - Request Callback */}
      <div className="bg-white border rounded-lg shadow-lg flex flex-col lg:flex-row-reverse items-center p-4 sm:p-6 gap-4 sm:gap-6 lg:gap-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 relative flex justify-center">
          <CallBack />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 space-y-4 sm:space-x-0 lg:space-x-20 text-center lg:text-left">
          <h3 className="text-lg sm:text-xl text-center lg:text-left lg:ml-20 ">
            Request Callback
          </h3>
          <p className="text-sm sm:text-base">
            Visit our Virtual Office from the comfort of your home and simplify
            your study abroad journey with us.
          </p>
          <ul className="space-y-2 text-blue-400">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">✔</span>
              Clear doubts regarding Immigration
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">✔</span>
              Best college selection
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-2">✔</span>
              Convenience of home
            </li>
          </ul>
        </div>

        {/* Arrow Icon - Hidden on mobile */}
        <div className="hidden lg:flex w-10 h-10 bg-blue-500 text-white rounded-full items-center justify-center lg:mr-6">
          <span className="text-2xl">
            <LeftArrow />
          </span>
        </div>
      </div>
    </div>
  );
}

export default VirtualOffice;
