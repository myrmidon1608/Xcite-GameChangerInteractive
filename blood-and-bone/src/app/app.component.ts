import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Character } from './model/character.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title: string = 'Blood and Bone';
    public characters: Character[] = [];
    public newCharacterName: string = '';

    private _selectedChracter!: Character;

    ngOnInit() {
        this.loadCharacters();
    }

    set selectedCharacter(character: Character) {
        this._selectedChracter = character;
    }

    get selectedCharacter(): Character {
        return this._selectedChracter;
    }

    private loadCharacters(): void {
        // TODO: Load characters from store
        this.characters = [new Character('Test')];
    }

    selectCharacter(character: Character): void {
        this.selectedCharacter = character;
    }

    addCharacter(): void {
        if (!this.newCharacterName.length) {
            return;
        }
        let newCharacter: Character = new Character(this.newCharacterName);
        this.characters.push(newCharacter);
        this.selectedCharacter = newCharacter;
        this.newCharacterName = '';
    }
}
