import './App.css';
import CourseList from './components/CourseList';
import React, { useReducer } from 'react'

var courses = ["CS 46A", "CS 46B", "CS 47", "CS 146"];
var completed_courses = [];

function App() {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
  
  const draggingOver=(e)=>{
    e.preventDefault();
  }

  const addCompletedCourse=(e)=>{
    console.log("Course added")
    let transferedCourse = e.dataTransfer.getData("code")
    if (!completed_courses.includes(transferedCourse)){
      courses.splice(courses.indexOf(transferedCourse), 1)
      completed_courses.push(transferedCourse)
    }
    forceUpdate()
  }

  const removeCompletedCourse=(e)=>{
    console.log("Course added")
    let transferedCourse = e.dataTransfer.getData("code")
    if (!courses.includes(transferedCourse)){
      completed_courses.splice(completed_courses.indexOf(transferedCourse), 1)
      courses.push(transferedCourse)
    }
    forceUpdate()
  }


  return (
    <>
      <div className="flex-container">
        <div droppable onDragOver={(e)=>draggingOver(e)} onDrop={(e)=>removeCompletedCourse(e)} className="addExCredit">
          <div className="listName">Add Existing Credit</div>
          <ul className="courses">
            <CourseList codes={courses}/>
          </ul>
        </div>
        <div droppable onDragOver={(e)=>draggingOver(e)} onDrop={(e)=>addCompletedCourse(e)} className="exCredit">
          <div className="listName">Current Credits</div>
          <ul className="completedCourses">
            <CourseList codes={completed_courses}/>
          </ul>
        </div>
        <div className="req">
          <div className="listName">Graduation Requirements</div>

        </div>
      </div>
    </>
  )
}

export default App;