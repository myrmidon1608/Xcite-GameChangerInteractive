import { Attribute } from "./attribute.model";

export enum CombatAttributeType {
    Vitality = 'Vitality',
    Evasion = 'Evasion',
    Armor = 'Armor',
    Alacrity = 'Alacrity',
    Tenacity = 'Tenacity',
    Power = 'Power'
}

export class CombatAttribute extends Attribute<CombatAttributeType> {

    constructor(type: CombatAttributeType) {
        super();
        this.type = type;
    }
}