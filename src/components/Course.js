import React from 'react'
import Collapsible from 'react-collapsible';
import './components.css'



function Course({ code, title, units, desc, prereqs, reqs }) {

  const dragStarted = (e, course_code) => {
    console.log("drag started")
    e.dataTransfer.setData("code", course_code)
  } 

  return (
    <div draggable onDragStart={(e) => dragStarted(e, code)}>
      <Collapsible trigger=<div className="courseCode">{code}</div> transitionTime='200' easing="ease">
        <p><h3>{title}</h3> {units} unit(s)</p>
        <p>{desc}</p>
        <p><h4>Prerequisites: </h4>{prereqs}</p>
        <p><h4>Requirements filled: </h4>{reqs}</p>
      </Collapsible>
    </div>
  );
};

export default Course;