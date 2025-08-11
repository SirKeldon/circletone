import { DestroyRef, EventEmitter } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { FormGenericComponent } from '../../services/form-generic.abstract';
import * as i0 from "@angular/core";
export declare class RadioButtonComponent extends FormGenericComponent {
    private readonly destroyRef;
    protected formGroupDirective: FormGroupDirective;
    key: string;
    label: string;
    value: any;
    checked: boolean;
    formControlName: string;
    valueChange: EventEmitter<any>;
    constructor(destroyRef: DestroyRef, formGroupDirective: FormGroupDirective);
    writeValue(value: boolean): void;
    onValueChange(): void;
    private setValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioButtonComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioButtonComponent, "ct-radio-button", never, { "key": { "alias": "key"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "formControlName": { "alias": "formControlName"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
