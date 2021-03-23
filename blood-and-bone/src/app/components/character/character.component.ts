import { Component, Input, OnChanges } from '@angular/core';
import { BaseAttribute, BaseAttributeType } from 'src/app/model/base-attribute.model';
import { Character } from 'src/app/model/character.model';
import { Skill, SkillType } from 'src/app/model/skill.model';
import { BaseAttributeService } from 'src/app/services/base-attribute.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnChanges {
    @Input() character!: Character;

    constructor(
        private baseAttributeService: BaseAttributeService,
        private skillService: SkillService
    ) { }

    ngOnChanges (): void {
        console.log(this.character);
        this.baseAttributeService.setBaseAttributes(this.character);
    }

    get baseAttributes(): BaseAttribute[] {
        return this.character.baseAttributes;
    }

    getBaseAttributeSkills(attrType: BaseAttributeType): Skill[] | undefined {
        return this.character.getSkills(attrType);
    }

    getSkillTypesForBaseAttribute(attr: BaseAttributeType): SkillType[] | undefined {
        return BaseAttribute.SKILL_MAP.get(attr);
    }

    addBaseAttribute(e: Event) {
        if ((e.target as HTMLSelectElement)?.value) {
            this.baseAttributeService.addBaseAttribute(this.character, (e.target as HTMLSelectElement)?.value as BaseAttributeType);
        }
    }

    addSkill(event: Event, attr: BaseAttribute) {
        let type: string = (event.target as HTMLSelectElement)?.value;
        if (type as SkillType) {
            this.skillService.addSkill(this.character, attr.type, type as SkillType);
        }
    }
}
