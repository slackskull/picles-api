import { Model } from "mongoose";
import { Shelter } from "./schemas/shelter.schema";
import { InjectModel } from "@nestjs/mongoose";
import IshelterRepository from "./interfaces/shelter.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShelterRepository implements IshelterRepository {
    constructor(
        @InjectModel(Shelter.name)
        private readonly shelterModel: Model<Shelter>
    ){}


    async get(): Promise<Shelter>{
        return await this.shelterModel.findOne();
    }
    
    async update(data: Partial<Shelter>): Promise<void> {
        const teste = await this.shelterModel.updateOne(null, {
            ...data,
            updateAt: new Date()
        })
    }
}