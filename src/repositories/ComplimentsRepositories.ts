import {EntityRepository, Repository} from "typeorm"
import { Compliment } from "../entities/Compliment"


@EntityRepository(Compliment)
class ComplimentsReposities extends Repository<Compliment> {

}

export {ComplimentsReposities}
