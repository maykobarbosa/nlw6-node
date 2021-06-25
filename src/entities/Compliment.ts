import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments") //nome da tabela no banco
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    
    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"}) //relacionamento entre tabelas
    @ManyToOne(() => Tag)   ///relacionamento de muitos para um
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuid(); 
        }
    }

}
export { Compliment };