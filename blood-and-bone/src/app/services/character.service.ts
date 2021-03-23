import { Injectable } from "@angular/core";
import { BaseAttribute, BaseAttributeType } from "../model/baseAttribute.model";
import { Character } from "../model/character.model";

@Injectable()
export class CharacterService {
    static baseAttributeTypes: BaseAttributeType[] = Object.values(BaseAttributeType);

    setBaseAttributes(character: Character): void {
        for (let idx in CharacterService.baseAttributeTypes) {
            let type: BaseAttributeType = CharacterService.baseAttributeTypes[idx];
            if (!this.hasBaseAttribute(character, type)) {
                this.addBaseAttribute(character, type);
            }
        }
    }

    // Could use some optimization...
    getBaseAttribute(character: Character, type: BaseAttributeType): BaseAttribute | undefined {
        return character.baseAttributes.find(it => it.type === type);
    }

    hasBaseAttribute(character: Character, type: BaseAttributeType): boolean {
        return !!this.getBaseAttribute(character, type);
    }

    addBaseAttribute(character: Character, type: BaseAttributeType, value?: number): void {
        if (!this.hasBaseAttribute(character, type)) {
            character.baseAttributes.push(new BaseAttribute(type, value));
        }
    }

    updateBaseAttribute(character: Character, type: BaseAttributeType, value: number): void {
        let attribute = this.getBaseAttribute(character, type);
        if (attribute) {
            attribute.updateValue(value);
        }
    }
}