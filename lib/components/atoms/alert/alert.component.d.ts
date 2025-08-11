import { EventEmitter } from '@angular/core';
import { ComponentType } from '../../../model/components/component-type.type';
import { ComponentVariant } from '../../../model/components/component-variant.type';
import { ComponentSize } from '../../../model/components/component-size.type';
import * as i0 from "@angular/core";
/**
 * The alert component is responsible to show alerts for diverse elements. Including `FormErrorComponent` among others.
 */
export declare class AlertComponent {
    dismissable: boolean;
    fullSize: boolean;
    text: string;
    type: ComponentType;
    variant: ComponentVariant;
    size: ComponentSize;
    withIcon: boolean;
    dismiss: EventEmitter<void>;
    get icon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "ct-alert", never, { "dismissable": { "alias": "dismissable"; "required": false; }; "fullSize": { "alias": "fullSize"; "required": false; }; "text": { "alias": "text"; "required": true; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "withIcon": { "alias": "withIcon"; "required": false; }; }, { "dismiss": "dismiss"; }, never, never, true, never>;
}
