import { Injectable } from "@angular/core";
import { BaseAttributeType } from "../model/base-attribute.model";
import { Character } from "../model/character.model";
import { Skill, SkillType } from "../model/skill.model";

@Injectable()
export class SkillService {

    addSkill(character: Character, attr: BaseAttributeType, type: SkillType): void {
        let characterSkills: Skill[] | undefined = character.getSkills(attr);
        if (!characterSkills || !characterSkills.find(it => it.type === type)) {
            let newSkill: Skill = new Skill(type);
            character.setSkill(attr, newSkill);
        }
    }
}