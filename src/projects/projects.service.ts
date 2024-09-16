import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {

    getProjects( ) {
        return ["Project1", "Project2", "project3"]
    }

    createProject() {

        return "Proyecto creado"
    }

    updateProject(){
        return "Proyecto actualizado"
    }

    updateProjectStatus() {
        return "Estatus del proyecto modificado"
    }

    deleteProject() {
        return "Proyecto eliminado"
    }
}
