import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([])


    useEffect(() => {
      fetch('https://api.github.com/users/Yuval-Varke')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
    }, [])
    


  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl flex items-center justify-center flex-col gap-10 pt-10'>
      Github Username: {data.login}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github
