import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {

    }

    getUsers() {
        return this.prisma.user.findMany()
    }

    createUser(user: createUserDto) {

        return this.prisma.user.create({ data: user })
    }

    updateUser() {
        return "Usuario actualizado"
    }

    updateUserStatus() {
        return "Estado del usuario modificado"
    }

    deleteUser() {
        return "Usuario eliminado"
    }
}
