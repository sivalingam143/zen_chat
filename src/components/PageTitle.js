import React from 'react'
import { Buttons, Close } from './Buttons'
import { FaTimes } from "react-icons/fa";
import './PageTitle.css'
const PageTitle = ({PageTitle}) => {
 
  return (
    <div className='py-2 fw-bold'>{PageTitle}</div>
  )
}
const PageHead =({pagehead,onClick})=>{
 
  return(
    <div className='create-head' >
        <div>{pagehead}</div>
        <div className="ms-auto">
            <Close lable={<><FaTimes /></>} onClick={onClick}/>
        </div>
    </div>
  )
}
const PageBottom =()=>{
  return(
    <div className='text-end py-3 ' >
      <span className='mx-2'><Buttons lable={<>Save & New</>}/></span>
      <span className='mx-2'><Buttons lable={<>Save</>}/></span>
       
    </div>
  )
}
export {PageTitle,PageHead,PageBottom}