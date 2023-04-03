import { Card, Label, TextInput, Button, Alert } from 'flowbite-react'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function SignIn() {
  const email = useRef();
  const password = useRef();
  const {handleSignInUser} = userAuth();
  const [error, setError] = userAuth().error;

  function handleSubmit(e) {
    e.preventDefault();
    handleSignInUser(email.current.value, password.current.value);
  }

  return (
    <Card className='sm:w-[500px]'>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className='text-center text-4xl font-semibold mb-5'>Sign In</h2>
        {error && 
          <Alert 
            color="failure"
          >
            <span className='font-semibold'>{error}</span>
          </Alert>
        }
        <h3 className='text-blue-500 font-semibold'><Link to={'/signup'}>Sign Up?</Link></h3>
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
              value="Password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
            ref={password}
          />
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default SignIn
