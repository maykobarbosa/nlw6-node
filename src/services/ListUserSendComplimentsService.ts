import { getCustomRepository } from "typeorm";
import { ComplimentsReposities } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService{
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsReposities)

        const compliments = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            },
            relations: [ "userSender", "userReceiver", "tag"]
        })
        return compliments;
    }
}

export {ListUserSendComplimentsService}