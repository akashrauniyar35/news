import React from 'react'
import './MainContainer.css'
import RightContent from './RightContent'
import Article from './Article'
import { newData } from '../services/data'
import LeftContent from './LeftContent'

// const newData = JSON.parse(data)
function MainContainer() {
  return (
    <div className='maincontainer'>
      {/* Left Content */}
      <LeftContent data={newData} />
      {/* RightContent */}
      <RightContent data={newData} />

    </div>
  )
}

export default MainContainer