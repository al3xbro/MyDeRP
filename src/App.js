import './App.css';
import Course from './components/Course';

var completed_courses = [];

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="addExCredit">
          <div className="listName">Add Existing Credit</div>
          <ul>
            <li><Course code={"CS 46A"} title={"Introduction to Programming"} units="4" desc={"Basic skills and concepts of computer programming in an object-oriented approach using Java. Classes, methods and argument passing, control structures, iteration. Basic graphical user interface programming. Problem solving, class discovery and stepwise refinement. Programming and documentation style. Weekly hands-on activity."} prereqs={"Math Enrollment Category M-I, M-II, or M-III, or MATH 1"} reqs={"Major Requirement"} /></li>
            <li><Course code={"CS 46B"} title={"Introduction to Data Structures"} units="4" desc={"Stacks and queues, recursion, lists, dynamic arrays, binary search trees. Iteration over collections. Hashing. Searching, elementary sorting. Big-O notation. Standard collection classes. Weekly hands-on activity."} prereqs={"CS 46A or CS 49J. Math Enrollment Category M-I or M-II and Precalculus Proficiency Assessment (70 or higher), or MATH 19, or MATH 18A and MATH 18B."} reqs={"Major Requirement"} /></li>
            <li><Course code={"CS 47"} title={"Introduction to Computer Systems"} units="3" desc={"Instruction sets, assembly language and assemblers, linkers and loaders, data representation and manipulation, interrupts, pointers, function calls, argument passing, and basic gate-level digital logic design."} prereqs = {"CS 42 / MATH 42 or CS 42X / MATH 42X, and CS 46B"} reqs={"Major Requirement"} /></li>
            <li><Course code={"CS 146"} title={"Data Structures and Algorithms"} units="3" desc={"Implementations of advanced tree structures, priority queues, heaps, directed and undirected graphs. Advanced searching and sorting (radix sort, heapsort, mergesort, and quicksort). Design and analysis of data structures and algorithms. Divide-and-conquer, greedy, and dynamic programming algorithm design techniques."} prereqs={"MATH 30, MATH 42, CS 49J, and CS 46B"} reqs={"Major Requirement"}/></li>
          </ul>
        </div>
        <div className="exCredit">
          <div className="listName">Current Credits</div>

        </div>
        <div className="req">
          <div className="listName">Graduation Requirements</div>

        </div>
      </div>
    </>
  )
}

export default App;