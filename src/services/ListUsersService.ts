import { getCustomRepository } from "typeorm";
import { UsersReposities } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer"

class ListUsersService{
    async execute(){
        const usersReposities = getCustomRepository(UsersReposities)

        const users = await usersReposities.find()

        
        return classToPlain(users);
    }
}

export {ListUsersService}