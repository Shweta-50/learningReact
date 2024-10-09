import React from 'react'

const Wrapper = ({children,title,color}) => {
  return (
    <div className='px-10 py-10 container flex justify-center align-center'>
        {title}
        {children}
    </div>
  )
}

export default Wrapper