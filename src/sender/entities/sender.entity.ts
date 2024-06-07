import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('t_senders')
export class Sender {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Index('idx_libelle')
    @Column({name: 'r_libelle', nullable: true, length: 35, unique: true, update: true})
    libelle: string;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
