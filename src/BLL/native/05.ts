
export type StudentsType = {
    students: Array<OneStudentType>
}

export type OneStudentType = {
    id: number
    firstName: string
    secondName: string
    isProgrammer: boolean
}

let students = [
    {id: 1, firstName: "Vitalya", secondName: 'Kozlov', isProgrammer: false},
    {id: 2, firstName: "Slava", secondName: 'Mysya', isProgrammer: false},
    {id: 3, firstName: "Kostya", secondName: 'Lol', isProgrammer: false},
    {id: 4, firstName: "Gosha", secondName: 'Kek', isProgrammer: false},
    {id: 5, firstName: "Oleg", secondName: 'Rofl', isProgrammer: false}
]

export const makeFunnyName = (students: Array<OneStudentType>, call: string) => {
    students.map( s => s.secondName = call)
}