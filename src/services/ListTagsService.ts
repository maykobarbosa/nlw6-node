import { getCustomRepository } from "typeorm";
import { TagsReposities } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer"

class ListTagsService{
    async execute(){
        const tagsReposities = getCustomRepository(TagsReposities)

        const tags = await tagsReposities.find()

        
        return classToPlain(tags);
    }
}

export {ListTagsService}