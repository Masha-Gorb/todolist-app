import {filterCourse} from "./04";

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