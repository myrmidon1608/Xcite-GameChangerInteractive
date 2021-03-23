import { Injectable } from "@angular/core";
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
            character.combatAttributes.push(new CombatAttribute(type));
        }
    }
}