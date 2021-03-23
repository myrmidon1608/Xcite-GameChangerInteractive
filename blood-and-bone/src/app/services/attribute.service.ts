import { Character } from "../model/character.model";

export abstract class AttributeService<T> {
    
    setAttributes(character: Character, attributeTypes: T[]): void {
        for (let idx in attributeTypes) {
            let type: T = attributeTypes[idx];
            if (!this.hasAttribute(character, type)) {
                this.addAttribute(character, type);
            }
        }
    }

    abstract hasAttribute(character: Character, type: T): boolean;

    abstract addAttribute(character: Character, type: T, value?: number): void;
}