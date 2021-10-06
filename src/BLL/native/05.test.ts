import {makeFunnyName, makeProgrammer} from "./05";

export type StudentsType = {
    students: Array<OneStudentType>
}

export type OneStudentType = {
    id: number
    firstName: string
    lastName: string
    isProgrammer: boolean
}

test('all lastName should be as i want', () => {
    let a = [
        {id: 1, firstName: "Vitalya", secondName: 'Kozlov', isProgrammer: false},
        {id: 2, firstName: "Slava", secondName: 'Mysya', isProgrammer: false},
        {id: 3, firstName: "Kostya", secondName: 'Lol', isProgrammer: false},
        {id: 4, firstName: "Gosha", secondName: 'Kek', isProgrammer: false},
        {id: 5, firstName: "Oleg", secondName: 'Rofl', isProgrammer: false}
    ]
    makeFunnyName(a, 'yebanov')
    makeProgrammer(a, true)
    expect(a[4].secondName).toBe('yebanov')
    expect(a[2].isProgrammer).toBe(true)
})



