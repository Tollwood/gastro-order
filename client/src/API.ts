import axios, { AxiosResponse } from "axios"

import { Visit } from "./type"

export const getVisits = async (startDate?:Date,endDate?:Date): Promise<AxiosResponse<{content:Visit[]}>> => {
  try {
    const params:object = {startDate:startDate, endDate:endDate}
    const visits: AxiosResponse<{content:Visit[]}> = await axios.get( "/api/visits", {params: params})
    return visits
  } catch (error) {
    throw new Error(error)
  }
}

export const addVisit = async (
    visit: Visit
  ): Promise<AxiosResponse<Visit>> => {
    try {
      const savedVisit: AxiosResponse<Visit> = await axios.post("/api/visits",
        visit
      )
      return savedVisit
    } catch (error) {
      throw new Error(error)
    }
  }