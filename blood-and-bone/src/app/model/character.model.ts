import { BaseAttribute } from "./baseAttribute.model";

export class Character {
    name: string;
    baseAttributes: BaseAttribute[] = [];

    constructor(name: string) {
        this.name = name;
    }
}
