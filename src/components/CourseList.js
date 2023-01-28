import React from 'react'
import Course from './Course'

let course_info = require('../courses.json')["courses"]


export default function CourseList({ codes }) {
    return (
        codes.map((code) => (
            <li><Course code={code} title={course_info[code]["name"]} units={course_info[code]["units"]} desc={course_info[code]["description"]} prereqs={course_info[code]["prerequisites"]} reqs={course_info[code]["requirement"]} /></li>
        ))
    );
}
