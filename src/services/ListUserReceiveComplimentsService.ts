import { getCustomRepository } from "typeorm";
import { ComplimentsReposities } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService{
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsReposities)

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            }
        })
        return compliments;
    }
}

export {ListUserReceiveComplimentsService}