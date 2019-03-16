import React from 'react'

export default () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '150px' }}
    >
      <img
        style={{ position: 'absolute', width: '70px' }}
        src='/spinner.gif'
        alt="spinner"
      />
    </div>
  )
}