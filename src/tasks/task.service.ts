import { Injectable, NotFoundException } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {

  private tasks = []

  getTasks() {
    return this.tasks
  }
  getTaskById(id: number) {
    const TaskFound = this.tasks.find(task => task.id === id)

    if (!TaskFound) return new NotFoundException(`Task with the id ${id}, not found`)

      return TaskFound
  }

  createTask(task: createTaskDto) {
    this.tasks.push(
      {
        id: this.tasks.length + 1,
        ...task,
      }
    )
    console.log(task)
    return task
  }

  updateTask(task: updateTaskDto) {
    return "actualizando tareas"
  }

  deteleTask() {
    return "eliminando tareas"
  }

  updateTaskStatus() {
    return "actualizando el estado de una tarea"
  }
}