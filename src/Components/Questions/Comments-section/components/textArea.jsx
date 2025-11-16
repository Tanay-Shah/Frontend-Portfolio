import React, { useState } from 'react'
import './textArea.css'

function Textarea({ onSubmit }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className='textBox'>
      <input 
        type="text" 
        placeholder="Write a comment..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Textarea