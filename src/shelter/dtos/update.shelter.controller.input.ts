import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator"

export default class UpdateShelterControllerInput {
    //Nome
    @IsString()
    @IsNotEmpty()
    name: string
    //Whatsaap
    @IsString()
    @IsNotEmpty()
    @Length(10, 11)
    whatsapp: string
    //Telefone
    @IsNumberString()
    @IsString()
    @Length(10, 11)
    @IsNotEmpty()
    phone: string
    //Email
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
    
}