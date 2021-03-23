import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character.model';
import { CombatAttribute } from 'src/app/model/combat-attribute.model';

@Component({
    selector: 'app-combat-attributes',
    templateUrl: './combat-attributes.component.html',
    styleUrls: ['./combat-attributes.component.scss']
})
export class CombatAttributesComponent implements OnInit {
    @Input() character!: Character;

    constructor() { }

    ngOnInit(): void {
    }

    getAttributeValue(attr: CombatAttribute): number {
        attr.runCallback(this.character);
        return attr.value;
    }
}
