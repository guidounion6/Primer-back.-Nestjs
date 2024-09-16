import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes } from "@nestjs/common"
import { TaskService } from "./task.service";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";


@Controller("/task")
export class TaskController {

    constructor(private TaskService: TaskService) { }

    @ApiTags("tasks")
    @ApiOperation({ summary: "Get all tasks"})
    @ApiResponse({status: 200, description: "Return all tasks"})
    @ApiResponse({status: 403, description: "Forbidden"})
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.TaskService.getTasks();
    }

    @ApiTags("tasks")
    @ApiOperation({ summary: "Get task by id"})
    @Get("/:id")
    getTask(@Param("id") id: string) {
        return this.TaskService.getTaskById(parseInt(id));
    }

    @ApiTags("tasks")
    @ApiOperation({ summary: "Create a new task"})
    @Post()
    createTasks(@Body() task: createTaskDto) {
        return this.TaskService.createTask(task);
    }

    @ApiTags("tasks")
    @ApiOperation({ summary: "Update task"})
    @Put()
    updateTasks(@Body() task: updateTaskDto) {
        return this.TaskService.updateTask(task);
    }

    @ApiTags("tasks")
    @ApiOperation({ summary: "Update task status"})
    @Patch()
    updateTasktatus() {
        return this.TaskService.updateTaskStatus();
    }

    @ApiTags("tasks")
    @ApiOperation({ summary: "Hard delete a task"})
    @Delete()
    deleteTasks() {
        return this.TaskService.deteleTask();
    }

}