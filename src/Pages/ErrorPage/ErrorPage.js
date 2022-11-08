import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className='flex flex-col gap-5 min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        {error && (
          <div className='flex font-semibold text-xl gap-2'>
            <p>{error.status}</p>
            <p className='text-red-500'>{error.statusText || error.message}</p> 
          </div>
        )}
        <Link to='/' className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>Back to homepage</Link>
      </div>
    </>
  )
}

export default ErrorPage;