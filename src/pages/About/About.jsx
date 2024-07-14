import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const { presentation } = useParams()
  return (
    <div
      className='flex-direction'
      style={{ backgroundColor: '#234252', height: '100%' }}
    >
      <h1 style={{ marginRight: '20px' }}>{presentation}</h1>
      <h4>About</h4>
    </div>
  )
}

export default About
