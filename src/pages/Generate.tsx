import React, { useState } from 'react'

type Props = {}

const Generate = (props: Props) => {
  const [data, setData] = useState({
    researchExperience: 'full stack web development',
    userID: '00000',
  })
  const fetchData = () => {
    fetch('http://localhost:3003/openai/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(responseData => {
        // Process the response data
        console.log(responseData);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  }
  console.log(data);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 capitalize pt-10 text-left">Generate</h2>
      <section className="max-w-4xl p-6 mx-auto bg-white">

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 text-left">
            <div>
              <label className="text-gray-700 " for="username">Job Type</label>
              <input placeholder="Full stack development, data science, etc..." id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>

          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cover Letter</button>
            <button className="px-8 mx-2 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Resume</button>
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cold Email</button>
          </div>
        </form>
        {/* <button onClick={() => fetchData()}>Testing</button> */}
      </section>
      <h2 className="text-2xl font-semibold text-gray-700 capitalize pt-10 text-left">Cover Letter Templates</h2>
    </div>
  )
}

export default Generate
