import { IsNotEmpty } from "class-validator";

export class CreateTokenDto {
    @IsNotEmpty({message: 'Valeur du token null'})
    access_token: string
}
