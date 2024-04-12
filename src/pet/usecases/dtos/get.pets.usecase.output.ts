import PetResponse from "src/pet/dtos/pet.response";

export default class GetPetsUsecaseOutput{
    currentPage: number;
    totalPages: number;
    items: PetResponse[];

    constructor (data: Partial<GetPetsUsecaseOutput>){
        Object.assign(this, data);
    }


}