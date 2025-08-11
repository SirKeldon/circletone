import { ComponentType } from '../../model/components/component-type.type';
import * as i0 from "@angular/core";
export declare class LabelComponent {
    text: string;
    type: ComponentType;
    formControlName: string;
    hasError: boolean;
    showError: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "ct-form-label", never, { "text": { "alias": "text"; "required": true; }; "type": { "alias": "type"; "required": false; }; "formControlName": { "alias": "formControlName"; "required": false; }; "hasError": { "alias": "hasError"; "required": false; }; "showError": { "alias": "showError"; "required": false; }; }, {}, never, never, true, never>;
}
