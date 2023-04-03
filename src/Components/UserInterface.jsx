import {Card} from 'flowbite-react'
import { Link } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function UserInterface() {
  const {user, handleLogout} = userAuth();

  return (
    <Card className='h-96 mx-6'>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`Welcome ${user}`}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Navigate and found what you want.
      </p>
      <p 
        className='text-center mt-16 text-blue-700 font-bold cursor-pointer' 
        onClick={() => handleLogout()}
      >
        Logout
      </p>
    </Card>
  )
}

export default UserInterface
