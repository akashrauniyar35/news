import React from 'react'
import './RightContent.css'
import RightBottom from './RightBottom'

function RightContent({data}) {
  console.log(data)
  return (
    <div className='rightcontent'>
        {/* Top Content */
        }
        <div className='rightcontent_top'>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230420175947-joe-biden-041923.jpg?c=16x9&q=h_720,w_1280,c_fill"/>
            <h1>{data.articles[1].head}</h1>
            <p>{data.articles[1].byline.text}</p>
        </div>


        {/* Bottom Content */}
        <RightBottom data = {data.articles[6]}/>
        <RightBottom data = {data.articles[7]}/>
        <RightBottom data = {data.articles[8]}/>
        <RightBottom data = {data.articles[9]}/>
        <RightBottom data = {data.articles[10]}/>


        </div>

  )
}

export default RightContent