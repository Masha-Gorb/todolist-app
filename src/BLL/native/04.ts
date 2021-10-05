export type Courses1Type = {
    courses1: Array<CourseType>
}

export type CourseType = {
    title: string
    price: number
}

let courses1 = [
    {title: "Cooking", price: 890},
    {title: "Reading", price: 479},
    {title: "Swimming", price: 390},
    {title: "Programming", price: 567},
    {title: "New Language", price: 300},
]

export const filterCourse = (course: CourseType) => {
    courses1.filter(course => course.price < 500)
}