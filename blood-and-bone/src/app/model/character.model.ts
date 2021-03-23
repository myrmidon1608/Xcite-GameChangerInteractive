import { BaseAttribute, BaseAttributeType } from "./base-attribute.model";
import { Skill } from "./skill.model";

export class Character {
    name: string;
    private _baseAttributes: BaseAttribute[] = [];
    private _skills: Map<BaseAttributeType, Skill[]> = new Map<BaseAttributeType, Skill[]>();

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

    getSkills(attrType: BaseAttributeType): Skill[] | undefined {
        return this._skills.get(attrType);
    }

    setSkill(attrType: BaseAttributeType, skill: Skill): void {
        let skills = this.getSkills(attrType);
        if (skills) {
            skills.push(skill);
        } else {
            this._skills.set(attrType, [skill]);
        }
    }
}
