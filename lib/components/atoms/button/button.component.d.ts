import { ComponentSize } from '../../../model/components/component-size.type';
import { ComponentType } from '../../../model/components/component-type.type';
import { ComponentVariant } from '../../../model/components/component-variant.type';
import { ComponentPosition } from '../../../model/components/component-position.type';
import * as i0 from "@angular/core";
/**
 * This is the ButtonComponent, widely used among other components
 */
export declare class ButtonComponent {
    text?: string;
    icon?: string;
    iconPosition?: ComponentPosition | string;
    role: 'button' | 'submit' | 'reset';
    disabled: boolean;
    fullSize: boolean;
    size: ComponentSize;
    type: ComponentType;
    variant: ComponentVariant;
    get cssClassmap(): {
        [className: string]: boolean;
    };
    hasJustIcon(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "ct-button", never, { "text": { "alias": "text"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconPosition": { "alias": "iconPosition"; "required": false; }; "role": { "alias": "role"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fullSize": { "alias": "fullSize"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, never, true, never>;
}
