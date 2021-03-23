import { Injectable } from "@angular/core";
import { BaseAttributeType } from "../model/base-attribute.model";
import { Character } from "../model/character.model";

@Injectable()
export class BaseAttributeService {
    static baseAttributeTypes: BaseAttributeType[] = Object.values(BaseAttributeType);
    
    setBaseAttributes(character: Character): void {
        for (let idx in BaseAttributeService.baseAttributeTypes) {
            let type: BaseAttributeType = BaseAttributeService.baseAttributeTypes[idx];
            if (!this.hasBaseAttribute(character, type)) {
                this.addBaseAttribute(character, type);
            }
        }
    }

    hasBaseAttribute(character: Character, type: BaseAttributeType): boolean {
        return !!character.getBaseAttribute(type);
    }

    addBaseAttribute(character: Character, type: BaseAttributeType, value?: number): void {
        if (!this.hasBaseAttribute(character, type)) {
            character.addBaseAttribute(type, value);
        }
    }

    updateBaseAttribute(character: Character, type: BaseAttributeType, value: number): void {
        let attribute = character.getBaseAttribute(type);
        if (attribute) {
            attribute.updateValue(value);
        }
    }
}