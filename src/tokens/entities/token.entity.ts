import { GenerateColumnsDate } from "src/modules/generateColumnsDate";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
@Entity('t_tokens')
export class Token extends GenerateColumnsDate{
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Index('idx_token')
    @Column({name: 'r_access_token', type: 'character varying', nullable: false, unique: true })
    access_token: string

    @Index('idx_type')
    @Column({name: 'r_type', length: 10, type: 'character varying', nullable: false, unique: true})
    type: string;
}
