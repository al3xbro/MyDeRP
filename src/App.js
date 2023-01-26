import './App.css';
import CourseDropdown from './components/CourseDropdown';
import Course from './components/Course';

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="addExCredit">
          <div className="listName">Add Existing Credit</div>
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
          <div className="listName">Current Credits</div>
          <CourseDropdown />
        </div>
        <div className="req">
          <div className="listName">Graduation Requirements</div>
          <CourseDropdown />
        </div>
      </div>
    </>
  )
}

export default App;