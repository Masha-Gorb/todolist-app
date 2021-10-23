
type SlavaType = {
    name: string
    shirt: string
    age: number
    isNice: boolean
}

let user = {
    name: 'Slava',
    shirt: 'white',
    age: 33,
    isNice: true
}

const incrementAge = (user: SlavaType, ageCount: number) => {

   return user.age = user.age + ageCount
}

test('Slavas current age', () => {
    incrementAge(user, 10)
    expect(user.age).toBe(43)
})
