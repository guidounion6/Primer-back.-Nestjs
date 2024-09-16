import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/projects')
export class ProjectsController {
    constructor (private projectService: ProjectsService) {}

    @ApiTags("projects")
    @Get()
    getProjects() {
       return this.projectService.getProjects()
    }
    
    @ApiTags("projects")
    @Post()
    createProjects() {
       return this.projectService.createProject()
    }

    @ApiTags("projects")
    @Put()
    updateProjects() {
       return this.projectService.updateProject
    }

    @ApiTags("projects")
    @Patch()
    updatePprojectStatus() {
       return this.projectService.updateProjectStatus
    }

    @ApiTags("projects")
    @Delete()
    deleteProject() {
       return this.projectService.deleteProject
    }
}
