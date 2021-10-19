test('this should work fine', () => {

    type UserType = {
        name: string
        weight: number
    }

    let user = {
        name: 'Slava',
        weight: 85
    }

    const trainer = (user: UserType, trainings: number) => {
        const copyUser = {
            ...user,
            weight: user.weight - trainings
        }
        return copyUser.weight
    }

    trainer(user, 10)

    expect(user.weight).toBe(75)
    expect(copyUser.weight).toBe(75)

})