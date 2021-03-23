import { Attribute } from "./attribute.model";
import { Character } from "./character.model";

export enum CombatAttributeType {
    Vitality = 'Vitality',
    Evasion = 'Evasion',
    Armor = 'Armor',
    Alacrity = 'Alacrity',
    Tenacity = 'Tenacity',
    Power = 'Power'
}

export class CombatAttribute extends Attribute<CombatAttributeType> {
    static EDITABLE_ATTR: CombatAttributeType[] = [CombatAttributeType.Tenacity];
    private _editable: boolean = false;
    private _callback: Function | undefined;
    increment: number = 0;

    constructor(type: CombatAttributeType, callback?: Function) {
        super();
        this.type = type;
        this._callback = callback;
        if (CombatAttribute.EDITABLE_ATTR.includes(type)) {
            this._editable = true;
        }
    }

    get editable(): boolean {
         return this._editable;
    }

    get callback(): Function | undefined {
         return this._callback;
    }

    runCallback(character: Character): void {
        let callbackValue: number = Attribute.DEFAULT_VALUE;
        if (this._callback) {
            callbackValue = this._callback(character);
        }
        if (this._editable) {
            callbackValue += this.increment;
        }
        this.value = callbackValue > 0 ? callbackValue : Attribute.DEFAULT_VALUE;
    }
}