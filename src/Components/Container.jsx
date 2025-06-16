import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className= {`max-w-container mx-auto overflow-x-hidden ${className} `}> {children} </div>
  )
}

export default Container