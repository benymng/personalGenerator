import React, { useEffect, useState } from 'react'
import ExperienceCard from '../components/ExperienceCard'

type Props = {}

const Profile = (props: Props) => {
  const [data, setData] = useState(null);
  const placeHolder = {
    createdAt: "July 25 - September 3, 2023",
    researchExperience: "Infusion Energy",
    keyWords: "Vue, React, Graphql",
  }
  useEffect(() => {
    // fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3003/openai/getUserExperiences");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  console.log(data);

  return (
    <div>
      {/* {data ? (
        <div className="grid grid-cols-3 gap-4">
          {
            data.map(item => (
              <ExperienceCard data={item} key={item.id} />
            ))
          }
        </div>
      ) : (
        <p>Loading data...</p>
      )} */}
      <h2 className="text-2xl font-semibold text-gray-700 capitalize text-left pt-10">Work Experience</h2>
      <div className="grid grid-cols-2 gap-6 py-5">
        <ExperienceCard data={placeHolder} />
        <ExperienceCard data={placeHolder} />
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 capitalize text-left pt-10">Projects</h2>
      <div className="grid grid-cols-2 gap-6 py-5">
        <ExperienceCard data={placeHolder} />
      </div>
    </div>
  )
}

export default Profile
