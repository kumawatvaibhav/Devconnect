import React from 'react';
import arrow from "../../public/rightarrow.svg"
import Image from 'next/image';

const FeaturedSection = () => {
  return (
    <div className="py-24 bg-white">
      {/* Featured On Section */}
      {/* <div className="text-center mb-12">
        <p className="text-gray-600 font-medium">Featured on</p>
        <div className="flex justify-center space-x-8 mt-4">
          <img src={arrow} alt="Product Hunt" className="w-8 h-8" />
          <img src="/path/to/logo2.png" alt="Y Combinator" className="w-8 h-8" />
          <img src="/path/to/logo3.png" alt="X" className="w-8 h-8" />
          <img src="/path/to/logo4.png" alt="Reddit" className="w-8 h-8" />
        </div>
      </div> */}

      {/* Problem Statement Section */}
      <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl text-black font-bold">
              Finding the Right Collaborators is Hard
            </h2>
            <div className="mt-4 md:mt-8 lg:mt-12 flex justify-center space-x-12">
              {/* Problem 1 */}
              <div className="flex flex-col items-center">
                <span className="text-5xl mb-4">😩</span>
                <p className="text-center text-lg font-medium text-gray-700">
                  Struggling to find the right collaborators?
                </p>
              </div>
              <span className="text-3xl">
                <Image src={arrow} alt="arrow" height={100} width={100} />
              </span>
              {/* Problem 2 */}
              <div className="flex flex-col items-center">
                <span className="text-5xl mb-4">⏳</span>
                <p className="text-lg font-medium text-gray-700">
                  Wasting time on recruitment?
                </p>
              </div>
              <span className="text-3xl">
                <Image src={arrow} alt="arrow" height={100} width={100} />
              </span>
              {/* Problem 3 */}
              <div className="flex flex-col items-center">
                <span className="text-5xl mb-4">🤔</span>
                <p className="text-lg font-medium text-gray-700">
                  Need a supportive community?
                </p>
              </div>
            </div>
            <p className="text-gray-600 mt-12">↓ There is an easier way</p>
          </div>
    </div>
  );
};

export default FeaturedSection;
