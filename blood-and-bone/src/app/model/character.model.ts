import { BaseAttribute, BaseAttributeType } from "./base-attribute.model";

export class Character {
    name: string;
    private _baseAttributes: BaseAttribute[] = [];

    constructor(name: string) {
        this.name = name;
    }

    get baseAttributes(): BaseAttribute[] {
        return this._baseAttributes;
    }
    
    getBaseAttribute(type: BaseAttributeType): BaseAttribute | undefined {
        return this._baseAttributes.find(it => it.type === type);
    }

    addBaseAttribute(type: BaseAttributeType, value?: number): void {
        this._baseAttributes.push(new BaseAttribute(type, value));
    }
}
