import { Injectable } from "@angular/core";
import { BaseAttribute, BaseAttributeType } from "../model/base-attribute.model";
import { Character } from "../model/character.model";
import { AttributeService } from "./attribute.service";

@Injectable()
export class BaseAttributeService extends AttributeService<BaseAttributeType> {
    static attributeTypes: BaseAttributeType[] = Object.values(BaseAttributeType);

    setBaseAttributes(character: Character): void {
        this.setAttributes(character, BaseAttributeService.attributeTypes);
    }

    hasAttribute(character: Character, type: BaseAttributeType): boolean {
        return !!character.baseAttributes.find(it => it.type === type);
    }

    addAttribute(character: Character, type: BaseAttributeType, value?: number): void {
        if (!this.hasAttribute(character, type)) {
            character.baseAttributes.push(new BaseAttribute(type, value));
        }
    }
}