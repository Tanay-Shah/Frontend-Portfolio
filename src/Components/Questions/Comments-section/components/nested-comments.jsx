import React from 'react'
import commentData from '../data/data.json'
import Comment from './comment'

const NestedComments = () => {

  console.log(commentData);
  
  return (
    <div>

      <div>
        text/button
      </div>
      <Comment commentData={commentData}/>
    </div>
  )
}

export default NestedComments