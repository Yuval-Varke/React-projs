import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center text-white bg-gray-700 text-2xl py-5'>
      User: {userid}
    </div>
  )
}

export default User
