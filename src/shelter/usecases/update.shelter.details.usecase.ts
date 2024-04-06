import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";

import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";

@Injectable()
export default class UpdateShelterControllerDetailsUseCase implements
IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>

{
    run(input: UpdateShelterDetailsUseCaseInput):
    Promise<UpdateShelterDetailsUseCaseOutput>{
        throw new Error("Method not implemented.");
    }
}