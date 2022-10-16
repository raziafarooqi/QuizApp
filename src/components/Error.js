import React from 'react'

function Error({children}) {
  return (
    <div style={{backgroundColor:'red',color:'white',padding:'15px',width:'100%',margin:'10px'}}>
      {children}
    </div>
  )
}

export default Error
