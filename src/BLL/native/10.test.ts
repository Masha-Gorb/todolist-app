test('this should work fine', () => {

    type UserType = {
        name: string
        weight: number
    }

    let user = {
        name: 'Bob',
        weight: 85
    }

    const trainer = (user: UserType, trainings: number) => {
        user.weight = user.weight - trainings
    }

    trainer(user, 2)

    expect(user.weight).toBe(83)

})