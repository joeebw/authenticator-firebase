import { Card, Label, TextInput, Button, Alert } from 'flowbite-react'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function SignUp() {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const {handleCreateUser} = userAuth();
  const [error, setError] = userAuth().error;
  

  function handleSubmit(e) {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      return setError('Do not match passwords')
    }
    handleCreateUser(email.current.value, password.current.value);
  }

  return (
    <Card className='sm:w-[500px]'>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className='text-center text-4xl font-semibold mb-5'>Sign Up</h2>
        {error && 
          <Alert 
            color="failure"
          >
            <span className='font-semibold'>{error}</span>
          </Alert>}
        <h3 className='text-blue-500 font-semibold'><Link to={'/'}>Sign In?</Link></h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@gmail.com"
            required={true}
            ref={email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Write a password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
            ref={password}
          />
        </div>
        <div className='mb-4'>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Repeat your password"
          />
        </div>
        <TextInput
          id="password2"
          type="password"
          required={true}
          ref={confirmPassword}
        />
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  </Card>
  )
}

export default SignUp
