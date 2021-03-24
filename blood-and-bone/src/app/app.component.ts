import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Character } from './model/character.model';
import { CharacterService } from './services/character.service';

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

    constructor(private characterService: CharacterService) {}

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
        this.characters = [];
    }

    selectCharacter(character: Character): void {
        this.selectedCharacter = character;
        this.characterService.exportCharacter(character);
    }

    createCharacter(): void {
        if (!this.newCharacterName.length) {
            return;
        }
        let newCharacter: Character = new Character(this.newCharacterName);
        this.addCharacter(newCharacter);
        this.newCharacterName = '';
    }

    addCharacter(character: Character): void {
        this.characters.push(character);
        this.selectedCharacter = character;
    }

    uploadCharacterFile(event: Event) {
        let files: FileList | null = (event.target as HTMLInputElement)?.files;
        if (files) {
            this.characterService.importCharacter(files).then((importedCharacter: Character | null) => {
                if (importedCharacter) {
                    this.addCharacter(importedCharacter);
                }
            });
        }
    }
}
