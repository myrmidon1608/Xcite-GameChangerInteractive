import { Component, Input, OnChanges } from '@angular/core';
import { BaseAttribute, BaseAttributeType } from 'src/app/model/baseAttribute.model';
import { Character } from 'src/app/model/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnChanges {
    @Input() character!: Character;

    constructor(private characterService: CharacterService) { }

    ngOnChanges (): void {
        this.characterService.setBaseAttributes(this.character);
    }

    get baseAttributes(): BaseAttribute[] {
        return this.character.baseAttributes;
    }

    addBaseAttribute(e: Event) {
        if ((e.target as HTMLSelectElement)?.value) {
            this.characterService.addBaseAttribute(this.character, (e.target as HTMLSelectElement)?.value as BaseAttributeType);
        }
    }

}
