import { ComponentType } from '../../../model/components/component-type.type';
import { ComponentVariant } from '../../../model/components/component-variant.type';
import { ComponentSize } from '../../../model/components/component-size.type';
import * as i0 from "@angular/core";
export declare class IconButtonComponent {
    icon: string;
    type: ComponentType;
    variant: ComponentVariant;
    size: ComponentSize;
    role: 'button' | 'submit' | 'reset';
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconButtonComponent, "ct-icon-button", never, { "icon": { "alias": "icon"; "required": true; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "role": { "alias": "role"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_type: string;
    static ngAcceptInputType_variant: string;
}
