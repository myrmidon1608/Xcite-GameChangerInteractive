import { SkillType } from "./skill.model";

export enum BaseAttributeType {
    Strength = 'Strength',
    Dexterity = 'Dexterity',
    Mind = 'Mind',
    Presence = 'Presence'
}

export class BaseAttribute {
    static DEFAULT_VALUE: number = 0;
    static SKILL_MAP: Map<BaseAttributeType, SkillType[]> = new Map<BaseAttributeType, SkillType[]>([
        [BaseAttributeType.Strength, [SkillType.Fighting]],
        [BaseAttributeType.Dexterity, [SkillType.Fighting, SkillType.Thievery, SkillType.Stealth, SkillType.Archery]],
        [BaseAttributeType.Mind, [SkillType.Learned, SkillType.Survival, SkillType.Perception, SkillType.Apothecary, SkillType.Power]],
        [BaseAttributeType.Presence, [SkillType.Intimidation, SkillType.Performance, SkillType.Manipulation, SkillType.Insight, SkillType.Power]]
    ]);

    type: BaseAttributeType;
    value: number;

    constructor(type: BaseAttributeType, value?: number) {
        this.type = type;
        this.value = value || BaseAttribute.DEFAULT_VALUE;
    }

    updateValue(value: number) {
        this.value = value > 0 ? value : BaseAttribute.DEFAULT_VALUE;
    }
}