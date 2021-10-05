import {filterHousesToDemolish, filterStaffCount} from "./04";

export type CoursesType = {
    courses1: Array<CourseType>
}

export type CourseType = {
    title: string
    price: number
}


test('price should be under 500', () => {

    let courses = [
        {title: "Cooking", price: 890},
        {title: "Reading", price: 479},
        {title: "Swimming", price: 390},
        {title: "Programming", price: 567},
        {title: "New Language", price: 300},
    ]

    const filterCourse = courses.filter(course => course.price < 500)

    expect(filterCourse.length).toBe(3)
    expect(filterCourse[0].title).toBe("Reading")

})

let city: CityType;

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<BuildingsType>,
    citizensNumber: number
}

export type HouseType = {
    id: number
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type BuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title:"White street"
                    }
                }},

            {
                id: 2, buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title:"Happy street"
                    }
                }},
            {
                id: 3, buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title:"Happy street"
                    }
                }}
        ],
        governmentBuildings: [
            {type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },

            {type: "FIRE-STATION",
                budget: 500000,
                staffCount: 100,
                address: {
                    street: {
                        title: "South Str"
                    }
                }}
        ],
        citizensNumber: 1000000
    }
})

test ('function should filter which houses we must demolish', ()=> {

    filterHousesToDemolish(city, 'Happy street')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
    expect(city.houses[0].address.street.title).toBe('White street')

})

test('staff count should be more than', ()=> {
    filterStaffCount(city.governmentBuildings, 500)
    expect(city.governmentBuildings.length).toBe(2)

})