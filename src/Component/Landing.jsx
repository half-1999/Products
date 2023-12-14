import React from 'react'
import Banner from './Banner/Banner'
import Freelance from './Freelance/Freelance'
import Story from './Story/Story'
import Blogs from './Blogs/Blogs'
import Details from './Details'
import Technology from './Technology/Technology'

const Landing = () => {
  return (
    <div>
        <Banner/>
        <Freelance/>
        <Story/>
        <Details/>
        <Blogs/>
        <Technology/>
    </div>
  )
}

export default Landing