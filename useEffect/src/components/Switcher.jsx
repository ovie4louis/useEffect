
import React, { useState } from 'react'

const Switcher = () => {
  const [sw, setSw] = useState(false)

  return (
    <div
      style={{
        backgroundColor: sw ? '#242424' : '#f4f4f4',
        color: sw ? '#ffffff' : '#222222',
        padding: '20px',
        textAlign: 'center',
        minHeight: '150px'
      }}
    >
      <h2>{sw ? 'Dark Mode' : 'Light Mode'}</h2>

      <input
        type="text"
        placeholder="Type something..."
      />

      <br />
      <br />

      <button onClick={() => setSw((s) => !s)}>
        Switch to {sw ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}

export default Switcher
