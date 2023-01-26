import React from 'react'
import Collapsible from 'react-collapsible';

function Course({ code, title, desc, prereqs, reqs }) {
  return (
      <Collapsible trigger=<h1>{code}</h1> transitionTime='100'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p><h4>Prerequisites: </h4>{prereqs}</p>
        <p><h4>Requirements filled: </h4>{reqs}</p>
      </Collapsible>  
  );
};

export default Course;