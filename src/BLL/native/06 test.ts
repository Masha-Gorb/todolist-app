
test('testing github actually', () => {
    type LessonsType = {
        id: number
        title: string
    }

    type StudentType = {
        name: string
        age: number
        lessons: Array<LessonsType>
    }

    let student = {
        name: 'Lol',
        age: 44,
        lessons: [
            {id: 1, title: 'JS'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'HTML'}
        ]
    }

    const {name, age} = student

    expect(age).toBe(44)

})