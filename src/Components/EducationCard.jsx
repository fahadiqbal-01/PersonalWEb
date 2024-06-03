import React from 'react'

const EducationCard = ({institute, field, status, certification, grade, className}) => {
  return (
    <div className={className}>
    <h2 className=' text-[18px] font-primary text-white font-medium '> <span className=' font-light text-orange '>Instutite</span> - {institute}</h2>
    <h4 className='text-[16px] font-primary text-white font-thin mt-[5px] '> {field} </h4>
    <h4 className='text-[16px] font-primary text-white font-thin mt-[5px] '> {status} </h4>
    <h4 className='text-[16px] font-primary text-white font-thin mt-[5px] '> {certification} </h4>
    <h4 className='text-[16px] font-primary text-white font-thin mt-[5px] '> {grade} </h4>
    </div>
  )
}

export default EducationCard