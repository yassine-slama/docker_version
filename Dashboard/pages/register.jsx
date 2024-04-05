import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function RegisterPage() {

  const toast = useRef(null);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password }),
      });

      if (response.ok) {
        toast.current.show({severity:'success', summary: 'Created !', detail:`User Created Successfully !`, life: 2000});
        setTimeout(() => {
            router.push('/login');
          }, 500);

      } else {
        const { error } = await response.json();
        setErrorMessage(error);

      }
    } catch (error) {
      setErrorMessage('Failed to register. Please try again.');
    }
  };

  return (
    <div className='min-h-full flex items-center justify-center mt-32 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Register for an account</h2>
        </div>
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
        </div>

        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <input
                type='text'
                id='fullname'
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
                autoComplete='none'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Full Name'
              />
            </div>
            <div>
              <input
                type='text'
                id='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete='none'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='@Email'
              />
            </div>
            <div>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete='none'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus;outline-none focus:ring-2 focus:ring-offset-2 bg-brand'
            >
              Register
            </button>
          </div>
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
}
