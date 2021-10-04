import {BuildingsType, CityType, HouseType} from "./03.test";

export const addMoneyToBudget = (building: BuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
   house.repaired = true
}

export const toFireStaff = (buildings: BuildingsType, staff: number) => {
    buildings.staffCount -= staff
}