import { Shelter } from "../schemas/shelter.schema";

export default interface IshelterRepository{
    get(): Promise<Shelter>;
}