import React from 'react'
import Course from './Course'

export default function CourseList({ codes }) {
    
    return (
        codes.map((code) => (
            <li><Course code={code} title={"Introduction to Programming"} units="4" desc={"Basic skills and concepts of computer programming in an object-oriented approach using Java. Classes, methods and argument passing, control structures, iteration. Basic graphical user interface programming. Problem solving, class discovery and stepwise refinement. Programming and documentation style. Weekly hands-on activity."} prereqs={"Math Enrollment Category M-I, M-II, or M-III, or MATH 1"} reqs={"Major Requirement"} /></li>
        ))
    );
}
