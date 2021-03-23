export class Attribute<T> {
    static DEFAULT_VALUE: number = 0;
    type!: T;
    value!: number;

    updateValue(value: number) {
        this.value = value > 0 ? value : Attribute.DEFAULT_VALUE;
    }
}