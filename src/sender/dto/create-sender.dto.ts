import { IsEmpty, IsNotEmpty, Length } from "class-validator";

export class CreateSenderDto {

    @Length(5,35, {message: 'Veuillez saisir un sender valide'})
    @IsNotEmpty({message: 'le sender est réquis'})
    libelle: string;

}
