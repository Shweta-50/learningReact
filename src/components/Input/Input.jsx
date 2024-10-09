import React from 'react'

const Input = ({name,placeHolder,onChange}) => {
  return (
    <div>
        <input name={name} placeholder={placeHolder} onChange={onChange} className='px-4 py-2 border-1 border-red-500'/>
      
    </div>
  )
}

export default Input