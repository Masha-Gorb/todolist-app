import {addMoneyToBudget, repairHouse, toFireStaff} from "./03";

let city: CityType;

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<BuildingsType>,
    citizensNumber: number
}

export type HouseType = {
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
            {buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title:"White street"
                    }
                }},

            {buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title:"Happy street"
                    }
                }},
            {buildedAt: 2020,
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
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }}
        ],
        citizensNumber: 1000000
    }
})

// 01. создайте в отдельном файле функцию, чтобы тесты прошли:
test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
});

// 01. Тесты должны пройти
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
});

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("House should be repaired", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
});

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test("staff should be decreased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test.skip("staff should be increased", () => {
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 100);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
});

test.skip("Greeting message should be correct for the city", () => {
    let message = createMessage(city);

    expect(message).toBe("Hello New York citizens! All of 1000000 people.");
});