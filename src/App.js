import './App.css';
import CourseDropdown from './components/CourseDropdown';

function App() {
  return (
    <>
      <div class="flex-container">
        <div class="addExCredit">
          <CourseDropdown />
        </div>
        <div class="exCredit">
          <CourseDropdown />
        </div>
        <div class="req">
          <CourseDropdown />
        </div>
      </div>
    </>
  )
}

export default App;