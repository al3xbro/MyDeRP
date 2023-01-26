import React from 'react'

function Course({ code, title, desc, prereqs, reqs}) {
  return (
    <div className='Course tile'>
        <h2>{code}</h2>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p><h4>Prerequisites: </h4>{prereqs}</p>
        <p><h4>Requirements filled: </h4>{reqs}</p>
    </div>
  )
}

export default Course;