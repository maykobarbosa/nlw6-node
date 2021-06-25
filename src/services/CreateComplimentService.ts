import { getCustomRepository } from "typeorm";
import { ComplimentsReposities } from "../repositories/ComplimentsRepositories";
import { UsersReposities } from "../repositories/UsersRepositories";


interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){
        const complimentsReposities = getCustomRepository(ComplimentsReposities);
        const usersReposities = getCustomRepository(UsersReposities);

        if(user_sender === user_receiver){
            throw new Error("Receptor incorreto!");
        }

        const userReceiverExists = await usersReposities.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("O receptor do usuário não existe!");
        }
        
        const  compliment = complimentsReposities.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsReposities.save(compliment)

        return compliment;


    }
}

export { CreateComplimentService }