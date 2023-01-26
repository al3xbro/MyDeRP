import './App.css';
import CourseDropdown from './components/CourseDropdown';

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="addExCredit">
          <CourseDropdown />
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