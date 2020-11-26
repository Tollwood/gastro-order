import axios, { AxiosResponse } from "axios"

import { Visit } from "./type"

export const getVisits = async (): Promise<AxiosResponse<{content:Visit[]}>> => {
  try {
    const visits: AxiosResponse<{content:Visit[]}> = await axios.get( "/api/visits")
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

  // export const updateTodo = async (
  //   todo: ITodo
  // ): Promise<AxiosResponse<ApiDataType>> => {
  //   try {
  //     const todoUpdate: Pick<ITodo, "status"> = {
  //       status: true,
  //     }
  //     const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
  //       `/api/edit-todo/${todo._id}`,
  //       todoUpdate
  //     )
  //     return updatedTodo
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  // export const deleteTodo = async (
  //   _id: string
  // ): Promise<AxiosResponse<ApiDataType>> => {
  //   try {
  //     const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
  //       `/api/delete-todo/${_id}`
  //     )
  //     return deletedTodo
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }