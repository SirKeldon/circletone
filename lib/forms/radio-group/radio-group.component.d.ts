import { AfterContentInit, DestroyRef, EventEmitter, QueryList } from '@angular/core';
import { FormGenericComponent } from '../../services/form-generic.abstract';
import { FormGroupDirective } from '@angular/forms';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import * as i0 from "@angular/core";
export declare class RadioGroupComponent extends FormGenericComponent implements AfterContentInit {
    private readonly destroyRef;
    protected formGroupDirective: FormGroupDirective;
    formControlName: string;
    key: string;
    label: string;
    value: any;
    helper: string;
    showError: boolean;
    selected: EventEmitter<any>;
    radios: QueryList<RadioButtonComponent>;
    constructor(destroyRef: DestroyRef, formGroupDirective: FormGroupDirective);
    ngAfterContentInit(): void;
    writeValue(value: any): void;
    setValue(value: any): void;
    private updateRadios;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupComponent, "ct-radio-group", never, { "formControlName": { "alias": "formControlName"; "required": false; }; "key": { "alias": "key"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "helper": { "alias": "helper"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; }, { "selected": "selected"; }, ["radios"], ["ct-radio-button"], true, never>;
}
