import { Household } from "./components/HouseholdRegistration";

declare interface Visit {
    _id?: string
    from: Date
    to?: Date
    table: string
    households: Household[]
    createdAt?: string
    updatedAt?: string
  }
  
  declare interface Household {
    firstName: string,
    lastName: string,
    phone:string,
    guestsCount: number,
  }
  