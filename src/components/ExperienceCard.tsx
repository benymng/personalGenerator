import React from 'react';

type Props = {
  data: {
    createdAt: string;
    researchExperience: string;
    keyWords: string;
  };
};

const ExperienceCard: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="max-w-2xl px-8 py-10 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600">{data.createdAt}</span>
          {/* <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex={0} role="button">Design</a> */}
        </div>

        <div className="mt-2">
          <a href="#" className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline" tabIndex={0} role="link">{data.researchExperience}</a>
          <p className="mt-2 text-gray-600">{data.keyWords}</p>
        </div>

      </div>
    </div>
  );
};

export default ExperienceCard;
