import {addTech} from "./03";

let student: StudentType;

export type StudentType = {
    name: string
    age: number
    tech: Array<TechType>
}

export type TechType = {
    title: string
}

beforeEach(() => {
    student = {
        name: "Vasya",
        age: 23,
        tech: [
            {title: "Css"},
            {title: "HTML"},
            {title: "JS"}
        ]
    }
})

test('function should add skill to student', () => {

    addTech(student, 'React')
    expect(student.tech.length).toBe(4)
    expect(student.tech[3].title).toBe('React')

})