import React from 'react'
import './components.css'
import Select from 'react-select';

const courses = [
  {label: 'CS 46A - Introduction to Programming', value: 'CS 46A'},
  {label: 'CS 46B', value: 'CS 46B'},
  {label: 'CS 47', value: 'CS 47'},
  {label: 'CS 146', value: 'CS 146'},
  {label: 'CS 155', value: 'CS 155'},
]

function CourseDropdown() {

  return (
    <Select
      options={courses}
      isMulti
      onChange={opt => console.log(opt)}
    />
  )
}

export default CourseDropdown;
