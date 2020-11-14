import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/api/todos", getTodos)

router.post("/api/add-todo", addTodo)

router.put("/api/edit-todo/:id", updateTodo)

router.delete("/api/delete-todo/:id", deleteTodo)

export default router