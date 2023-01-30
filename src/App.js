import './App.css';
import CourseList from './components/CourseList';
import GradReqs, { adjustUnits } from './components/GradReqs';
import React, { useReducer } from 'react';
import SearchBar from './components/SearchBar';

var courses = ["CS 146", "CS 46A", "CS 46B", "CS 47"];
var completed_courses = [];
var course_info = require('./courses.json')["courses"]

function App() {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  const draggingOver = (e) => {
    e.preventDefault();
  }

  const addCompletedCourse = (e) => {
    let transferedCourse = e.dataTransfer.getData("code")
    if (!completed_courses.includes(transferedCourse)) {
      courses.splice(courses.indexOf(transferedCourse), 1)
      completed_courses.push(transferedCourse)
      completed_courses.sort()
      adjustUnits(course_info[transferedCourse]["requirement"], -4)
    }
    forceUpdate()
  }

  const removeCompletedCourse = (e) => {
    let transferedCourse = e.dataTransfer.getData("code")
    if (!courses.includes(transferedCourse)) {
      completed_courses.splice(completed_courses.indexOf(transferedCourse), 1)
      courses.push(transferedCourse)
      courses.sort()
      adjustUnits(course_info[transferedCourse]["requirement"], 4)
    }
    forceUpdate()
  }


  return (
    <>
      <div className="flex-container">
        <div droppable onDragOver={(e) => draggingOver(e)} onDrop={(e) => removeCompletedCourse(e)} className="addExCredit">
          <div className="listName">Add Existing Credit</div>
          <SearchBar />
          <ul className="courses">
            <CourseList codes={courses} />
          </ul>
        </div>
        <div droppable onDragOver={(e) => draggingOver(e)} onDrop={(e) => addCompletedCourse(e)} className="exCredit">
          <div className="listName">Current Credits</div>
          <ul className="completedCourses">
            <CourseList codes={completed_courses} />
          </ul>
        </div>
        <div className="req">
          <div className="listName">Graduation Requirements</div>
          <GradReqs />
        </div>
      </div>
    </>
  )
}

export default App;