import { Attribute } from "./attribute.model";
import { BaseAttribute, BaseAttributeType } from "./base-attribute.model";
import { CombatAttribute } from "./combat-attribute.model";

export class Character {
    name: string;
    private _baseAttributes: BaseAttribute[] = [];
    private _combatAttributes: CombatAttribute[] = [];

    constructor(name: string) {
        this.name = name;
    }

    get baseAttributes(): BaseAttribute[] {
        return this._baseAttributes;
    }

    get combatAttributes(): CombatAttribute[] {
        return this._combatAttributes;
    }
}
