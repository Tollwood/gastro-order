import { Document } from "mongoose"

export interface Household {
  firstName: String,
  lastName: String,
  phone: String,
  guestsCount: number
}
export const Household ={
  firstName: String,
  lastName: String,
  phone: String,
  guestsCount:Number
}

export interface IVisit extends Document {
  from: Date
  end?: Date
  table: string
  households: [Household]
}


