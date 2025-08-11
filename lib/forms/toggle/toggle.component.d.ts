import { DestroyRef, EventEmitter } from '@angular/core';
import { FormGenericComponent } from '../../services/form-generic.abstract';
import { FormGroupDirective } from '@angular/forms';
import { ComponentDisposition } from '../../model/components/component-disposition.enum';
import * as i0 from "@angular/core";
export declare class ToggleComponent extends FormGenericComponent {
    protected formGroupDirective: FormGroupDirective;
    private readonly destroyRef;
    formControlName: string;
    checked: boolean;
    label: string;
    key: string;
    value: string;
    showError: boolean;
    disposition: ComponentDisposition | string;
    wasChecked: EventEmitter<boolean>;
    constructor(formGroupDirective: FormGroupDirective, destroyRef: DestroyRef);
    toggle(): void;
    writeValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleComponent, "ct-toggle", never, { "formControlName": { "alias": "formControlName"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "label": { "alias": "label"; "required": false; }; "key": { "alias": "key"; "required": false; }; "value": { "alias": "value"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; "disposition": { "alias": "disposition"; "required": false; }; }, { "wasChecked": "wasChecked"; }, never, never, true, never>;
}
