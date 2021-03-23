export enum BaseAttributeType {
    Strength = 'Strength',
    Dexterity = 'Dexterity',
    Mind = 'Mind',
    Presence = 'Presence'
}

export class BaseAttribute {
    static DEFAULT_VALUE: number = 0;

    type: BaseAttributeType;
    value: number;

    constructor(type: BaseAttributeType, value?: number) {
        this.type = type;
        this.value = value || BaseAttribute.DEFAULT_VALUE;
    }

    updateValue(value: number) {
        this.value = value > 0 ? value : BaseAttribute.DEFAULT_VALUE;
    }
}