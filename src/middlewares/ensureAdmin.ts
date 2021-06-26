import {Response, Request, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { UsersReposities } from "../repositories/UsersRepositories";



export async function ensureAdmin(
    request: Request, 
    response: Response, 
    next: NextFunction
    ){  
        const { user_id } = request
        
        const usersReposities = getCustomRepository(UsersReposities)

        const { admin } = await usersReposities.findOne(user_id)

        //Verificar se é admin
        
        if(admin){
            return next()

    }

    return response.status(401).json({
        error: "Não autorizado!",

    })

}