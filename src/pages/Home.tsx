import React from 'react';
import HomeImage from '../assets/Home.svg';

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                  AI Generated<br /> Resume and Cover Letter <span className="text-primary-color ">Generator</span>
                </h1>

                <p className="mt-3 text-gray-600">
                  Streamline your cold emailing and job applications with personalized recommendations
                </p>

                <button className="w-full px-5 py-2 mt-6 text-lg text-white transition-colors duration-300 transform bg-primary-color rounded-lg lg:w-auto hover:bg-secondary-color focus:outline-none focus:secondary-color">
                  Get Started
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-8/12">
              <img className="w-full h-full lg:max-w-7xl" src={HomeImage} alt="Image" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
