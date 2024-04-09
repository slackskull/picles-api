import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";

import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";
import ShelterTokens from "../shelter.tokens";
import IshelterRepository from "../interfaces/shelter.repository.interface";

@Injectable()
export default class UpdateShelterDetailsUseCase implements
IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly ShelterRepository : IshelterRepository
    ){ }


    async run(input: UpdateShelterDetailsUseCaseInput):
    Promise<UpdateShelterDetailsUseCaseOutput>{
        await this.ShelterRepository.update(input)

        const shelter = await this.ShelterRepository.get()

        return new UpdateShelterDetailsUseCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsApp: shelter.whatsApp,
            email: shelter.email,
            updateAt: shelter.updateAt,
            createdAt: shelter.createdAt
        })
    }
}