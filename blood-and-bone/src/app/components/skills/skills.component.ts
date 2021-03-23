import { Component, Input, OnInit } from '@angular/core';
import { BaseAttribute, BaseAttributeType } from 'src/app/model/base-attribute.model';
import { Skill, SkillType } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    @Input() baseAttribute!: BaseAttribute;

    constructor(private skillService: SkillService) { }

    ngOnInit(): void {
    }

    get rankLimit(): number {
        return this.baseAttribute.value < Skill.MAX_RANK ? this.baseAttribute.value : Skill.MAX_RANK;
    }

    getSkillTypesForBaseAttribute(attr: BaseAttributeType): SkillType[] | undefined {
        return BaseAttribute.SKILL_MAP.get(attr);
    }

    addSkill(event: Event) {
        let type: string = (event.target as HTMLSelectElement)?.value;
        if (type as SkillType) {
            this.skillService.addSkill(this.baseAttribute, type as SkillType);
        }
    }
}
