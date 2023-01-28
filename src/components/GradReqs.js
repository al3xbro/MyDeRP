import React from 'react'

let uni_req = 35;
let maj_prep = 33;
let maj_req = 38;
let maj_el = 14;
let tot_units = 120;

export function adjustUnits(cat, amt){
    switch(cat){
        case "University Requirement":
            uni_req += amt;
            break;
        case "Major Preparation":
            maj_prep += amt;
            break;
        case "Major Requirement":
            maj_req += amt;
            break;
        case "Major Elective":
            maj_el += amt;
            break;
        default:
            break;
    }
    tot_units = uni_req + maj_prep + maj_req + maj_el;
}

export default function GradReqs() {
  return (
    <>
        <h3>Unit Requirements</h3>
        <h5>University Requirements&emsp;&emsp;{uni_req}</h5>
        <h5>Major Preparation&emsp;&emsp;&emsp;&emsp;&emsp;{maj_prep}</h5>
        <h5>Major Requirements&emsp;&emsp;&emsp;&emsp;{maj_req}</h5>
        <h5>Major Electives&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;{maj_el}</h5>
        <h4>Units Remaining&emsp;&emsp;&emsp;{tot_units}</h4>
    </>
  )
}
