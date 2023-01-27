import React from 'react'
import Collapsible from 'react-collapsible';

function Course({ code, title, desc, prereqs, reqs }) {
  return (
    <Collapsible trigger=<div className="courseCode">{code}</div> transitionTime='300' easing="ease">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p><h4>Prerequisites: </h4>{prereqs}</p>
      <p><h4>Requirements filled: </h4>{reqs}</p>
    </Collapsible>
  );
};

export default Course;