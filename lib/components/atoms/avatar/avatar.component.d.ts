import { OnInit } from '@angular/core';
import { ComponentSize } from '../../../model/components/component-size.type';
import * as i0 from "@angular/core";
export declare class AvatarComponent implements OnInit {
    picture: string;
    title: string;
    size: ComponentSize;
    imageType: string;
    titleInitials: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "ct-avatar", never, { "picture": { "alias": "picture"; "required": false; }; "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; "imageType": { "alias": "imageType"; "required": false; }; }, {}, never, never, true, never>;
}
