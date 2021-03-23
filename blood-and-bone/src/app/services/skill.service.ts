import { Injectable } from "@angular/core";
import { BaseAttribute } from "../model/base-attribute.model";
import { Skill, SkillType } from "../model/skill.model";

@Injectable()
export class SkillService {

    addSkill(attr: BaseAttribute, type: SkillType): void {
        let characterSkills: Skill[] | undefined = attr.skills;
        if (!characterSkills || !characterSkills.find(it => it.type === type)) {
            let newSkill: Skill = new Skill(type);
            attr.setSkill(newSkill);
        }
    }
}