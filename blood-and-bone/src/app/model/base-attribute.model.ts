import { Attribute } from "./attribute.model";
import { Skill, SkillType } from "./skill.model";

export enum BaseAttributeType {
    Strength = 'Strength',
    Dexterity = 'Dexterity',
    Mind = 'Mind',
    Presence = 'Presence'
}

export class BaseAttribute extends Attribute<BaseAttributeType> {
    static SKILL_MAP: Map<BaseAttributeType, SkillType[]> = new Map<BaseAttributeType, SkillType[]>([
        [BaseAttributeType.Strength, [SkillType.Fighting]],
        [BaseAttributeType.Dexterity, [SkillType.Fighting, SkillType.Thievery, SkillType.Stealth, SkillType.Archery]],
        [BaseAttributeType.Mind, [SkillType.Learned, SkillType.Survival, SkillType.Perception, SkillType.Apothecary, SkillType.Power]],
        [BaseAttributeType.Presence, [SkillType.Intimidation, SkillType.Performance, SkillType.Manipulation, SkillType.Insight, SkillType.Power]]
    ]);

    private _skills: Skill[] = [];

    constructor(type: BaseAttributeType, value?: number) {
        super();
        this.type = type;
        this.value = value || Attribute.DEFAULT_VALUE;
    }
    

    get skills(): Skill[] {
        return this._skills;
    }

    setSkill(skill: Skill): void {
        this._skills.push(skill);
    }
}