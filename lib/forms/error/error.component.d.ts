import { ValidationErrors } from '@angular/forms';
import { ComponentSize } from '../../model/components/component-size.type';
import * as i0 from "@angular/core";
export declare class FormErrorComponent {
    errors: ValidationErrors;
    size: ComponentSize;
    hasErrors: boolean;
    fullSize: boolean;
    helper: string;
    errorMessages: {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FormErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormErrorComponent, "ct-form-alert", never, { "errors": { "alias": "errors"; "required": true; }; "size": { "alias": "size"; "required": false; }; "hasErrors": { "alias": "hasErrors"; "required": false; }; "fullSize": { "alias": "fullSize"; "required": false; }; "helper": { "alias": "helper"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; }, {}, never, never, true, never>;
}
