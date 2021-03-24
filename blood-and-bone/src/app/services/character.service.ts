import { Injectable } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { BaseAttribute } from "../model/base-attribute.model";
import { Character } from "../model/character.model";
import { BaseAttributeService } from "./base-attribute.service";
import { SkillService } from "./skill.service";

@Injectable()
export class CharacterService {

    constructor(
        private sanitizer: DomSanitizer,
        private baseAttributeService: BaseAttributeService,
        private skillService: SkillService,
    ){}

    async importCharacter(files: FileList): Promise<Character | null> {
        if (!files || !files.length || files[0].type !== "application/json") {
            return null;
        }
        let fileContents: string | undefined = await this.readImportedFile(files[0]);
        if (!fileContents) {
            return null;
        }
        return this.createCharacterFromImport(fileContents);
    }

    exportCharacter(character: Character): SafeUrl {
        let characterString: string = JSON.stringify(character);
        return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(characterString));
    }

    private readImportedFile(file: File): Promise<string | undefined> {
        let fileReader = new FileReader();

        return new Promise<string | undefined>((resolve, reject) => {
            fileReader.onload = (e) => {
                resolve(fileReader.result?.toString());
            }
            fileReader.readAsText(file);
        });
    }

    private createCharacterFromImport(content: string): Character {
        let data: any = JSON.parse(content);
        let character: Character = new Character(data.name);

        return character;
    }
}