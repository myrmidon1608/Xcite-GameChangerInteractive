import { Component, Input, OnChanges } from '@angular/core';
import { BaseAttribute, BaseAttributeType } from 'src/app/model/base-attribute.model';
import { Character } from 'src/app/model/character.model';
import { Skill, SkillType } from 'src/app/model/skill.model';
import { BaseAttributeService } from 'src/app/services/base-attribute.service';
import { CombatAttributeService } from 'src/app/services/combat-attribute.service';
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
        private combatAttributeService: CombatAttributeService
    ) { }

    ngOnChanges (): void {
        console.log(this.character);
        this.baseAttributeService.setBaseAttributes(this.character);
        this.combatAttributeService.setCombatAttributes(this.character);
    }

    addBaseAttribute(e: Event) {
        if ((e.target as HTMLSelectElement)?.value) {
            this.baseAttributeService.addAttribute(this.character, (e.target as HTMLSelectElement)?.value as BaseAttributeType);
        }
    }
}
