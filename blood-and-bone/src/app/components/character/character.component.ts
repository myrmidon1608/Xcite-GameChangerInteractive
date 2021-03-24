import { Component, Input, OnChanges } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BaseAttributeType } from 'src/app/model/base-attribute.model';
import { Character } from 'src/app/model/character.model';
import { BaseAttributeService } from 'src/app/services/base-attribute.service';
import { CharacterService } from 'src/app/services/character.service';
import { CombatAttributeService } from 'src/app/services/combat-attribute.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnChanges {
    @Input() character!: Character;
    private _characterDownloadUri!: SafeUrl;

    constructor(
        private characterService: CharacterService,
        private baseAttributeService: BaseAttributeService,
        private combatAttributeService: CombatAttributeService
    ) { }

    ngOnChanges(): void {
        this.baseAttributeService.setBaseAttributes(this.character);
        this.combatAttributeService.setCombatAttributes(this.character);
    }

    get characterDownloadUri(): SafeUrl {
        return this._characterDownloadUri;
    }

    addBaseAttribute(e: Event) {
        if ((e.target as HTMLSelectElement)?.value) {
            this.baseAttributeService.addAttribute(this.character, (e.target as HTMLSelectElement)?.value as BaseAttributeType);
        }
    }

    exportCharacter() {
        this._characterDownloadUri = this.characterService.exportCharacter(this.character);
    }
}
