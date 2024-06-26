import { GenerateColumnsDate } from "src/modules/generateColumnsDate";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('t_senders')
export class Sender extends GenerateColumnsDate {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Index('idx_libelle')
    @Column({name: 'r_libelle', nullable: true, length: 35, unique: true, update: true})
    libelle: string;
}
