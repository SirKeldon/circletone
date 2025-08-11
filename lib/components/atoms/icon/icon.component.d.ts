import { OnInit } from '@angular/core';
import { ComponentSize } from '../../../model/components/component-size.type';
import { ComponentVariant } from '../../../model/components/component-variant.type';
import * as i0 from "@angular/core";
export declare class IconComponent implements OnInit {
    icon: string;
    fill: string;
    strokeWidth: number;
    strokeColor: string;
    size: ComponentSize;
    variant: ComponentVariant;
    ngOnInit(): void;
    get iconPath(): string;
    private getFormattedColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "ct-icon", never, { "icon": { "alias": "icon"; "required": false; }; "fill": { "alias": "fill"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; "strokeColor": { "alias": "strokeColor"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, never, true, never>;
}
