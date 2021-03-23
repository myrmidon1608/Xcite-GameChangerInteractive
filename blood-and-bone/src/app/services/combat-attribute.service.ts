import { Injectable } from "@angular/core";
import { Attribute } from "../model/attribute.model";
import { BaseAttribute, BaseAttributeType } from "../model/base-attribute.model";
import { Character } from "../model/character.model";
import { CombatAttribute, CombatAttributeType } from "../model/combat-attribute.model";
import { AttributeService } from "./attribute.service";

@Injectable()
export class CombatAttributeService extends AttributeService<CombatAttributeType> {
    static attributeTypes: CombatAttributeType[] = Object.values(CombatAttributeType);

    setCombatAttributes(character: Character): void {
        this.setAttributes(character, CombatAttributeService.attributeTypes);
    }

    hasAttribute(character: Character, type: CombatAttributeType): boolean {
        return !!character.combatAttributes.find(it => it.type === type);
    }

    addAttribute(character: Character, type: CombatAttributeType): void {
        if (!this.hasAttribute(character, type)) {
            let actionGenerator = new combatAttributeActions(type, character);
            character.combatAttributes.push(new CombatAttribute(type, actionGenerator.action));
        }
    }
}

class combatAttributeActions {
    private _action!: Function;

    constructor(type: CombatAttributeType, character: Character) {
        switch (type) {
            case (CombatAttributeType.Vitality):
                this._action = (character: Character) => {
                    let strength: BaseAttribute | undefined = character.baseAttributes.find(it => it.type === BaseAttributeType.Strength);
                    return strength ? (strength.value + 3) - character.damage : Attribute.DEFAULT_VALUE;
                };
                break;
            case (CombatAttributeType.Evasion):
            case (CombatAttributeType.Armor):
                this._action = (character: Character) => {
                    let dexterity: BaseAttribute | undefined = character.baseAttributes.find(it => it.type === BaseAttributeType.Dexterity);
                    return dexterity ? dexterity.value + 10 : Attribute.DEFAULT_VALUE;
                };
                break;
            case (CombatAttributeType.Alacrity):
                this._action = (character: Character) => {
                    let dexterity: BaseAttribute | undefined = character.baseAttributes.find(it => it.type === BaseAttributeType.Dexterity);
                    let mind: BaseAttribute | undefined = character.baseAttributes.find(it => it.type === BaseAttributeType.Mind);
                    let total = Attribute.DEFAULT_VALUE;
                    if (dexterity) {
                        total += dexterity.value;
                    }
                    if (mind) {
                        total += mind.value;
                    }
                    return total;
                };
                break;
            case (CombatAttributeType.Tenacity):
                this._action = (character: Character) => {
                    let presence: BaseAttribute | undefined = character.baseAttributes.find(it => it.type === BaseAttributeType.Presence);
                    return presence ? presence.value + 1 : Attribute.DEFAULT_VALUE;
                };
                break;
            case (CombatAttributeType.Power):
                this._action = (character: Character) => {
                    // UNUSED
                    return Attribute.DEFAULT_VALUE;
                };
                break;
        }
    }

    get action(): Function {
        return this._action;
    }
}