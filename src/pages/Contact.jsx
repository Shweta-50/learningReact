import React from 'react'
import Wrapper from '../container/Wrapper'
import Input from '../components/Input/Input'

const Contact = () => {
  return (
    <Wrapper title="Contact" color="red">
        this is contact
        <Input name={"name"} placeHolder={"Enter your name"} onChange={()=>setName("shah")}/>
        <Input name={"email"} placeHolder={"Enter your email"} onChange={()=>setEmail("shah")}/>
    </Wrapper>
  )
}

export default Contact