import { GenerateColumnsDate } from "src/modules/generateColumnsDate";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('t_messages')
export class Message extends GenerateColumnsDate {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column("text",)
    message: string;

    @Column({name: 'r_status', type: 'character varying', length: 10, nullable: false, default: 'await'})
    status: string;
}
