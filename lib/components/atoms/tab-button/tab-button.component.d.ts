import { EventEmitter } from '@angular/core';
import { ComponentVariant } from '../../../model/components/component-variant.type';
import * as i0 from "@angular/core";
export declare class TabButtonComponent {
    key: string;
    title: string;
    subTitle: string;
    variant: ComponentVariant;
    clicked: EventEmitter<string>;
    isActive: import("@angular/core").WritableSignal<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabButtonComponent, "ct-tab-button", never, { "key": { "alias": "key"; "required": true; }; "title": { "alias": "title"; "required": false; }; "subTitle": { "alias": "subTitle"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, { "clicked": "clicked"; }, never, never, true, never>;
}
