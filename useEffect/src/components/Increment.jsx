import React, { useEffect, useState } from 'react'

const Increment = () => {

    const [value, setValue] = useState(0)
      const [something, setSomething] =useState(0)
    
      useEffect(() => {
        console.log("call useEffect")
        document.title = `increment $(value)`
      }, [value])


  return (
    <div>
        <h2>{value}</h2>
      <h1>{something}</h1>

      <button onClick={() => setValue(1+value)}>Click Me</button>
      <button onClick={() => setSomething(1+something)}>Click Again</button>
    </div>
  )
}

export default Increment