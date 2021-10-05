import {CityType} from "./04.test";

export function filterHousesToDemolish(city: CityType, street: string) {
    city.houses = city.houses.filter(h => street !== h.address.street.title)
}