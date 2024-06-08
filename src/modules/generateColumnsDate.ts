import { CreateDateColumn, UpdateDateColumn } from "typeorm"

export class GenerateColumnsDate {
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
