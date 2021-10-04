import {StudentType} from "./03.test";
let student = {
    name: "Vasya",
    age: 23,
    tech: [
        {title: "Css"},
        {title: "HTML"},
        {title: "JS"}
    ]
}

export const addTech = (student: StudentType, tech: string) => {
    student.tech.push({title: tech})
}