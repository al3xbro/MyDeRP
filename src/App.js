import './App.css';
import CourseDropdown from './components/CourseDropdown';
import Course from './components/Course';

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="addExCredit">
          <ul>
            <li><Course code={"CS 46A"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46B"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46A"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46B"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46A"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46B"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46A"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
            <li><Course code={"CS 46B"} title={"intro to nba"} desc={"learn to dunk"} prereqs={"get drafted"} reqs={"high school basketball"} /></li>
          </ul>
        </div>
        <div className="exCredit">
          <CourseDropdown />
        </div>
        <div className="req">
          <CourseDropdown />
        </div>
      </div>
    </>
  )
}

export default App;