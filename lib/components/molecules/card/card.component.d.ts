import { EventEmitter } from '@angular/core';
import { ComponentDisposition } from '../../../model/components/component-disposition.enum';
import * as i0 from "@angular/core";
export declare class CardComponent {
    header: string;
    subHeader: string;
    title: string;
    subTitle: string;
    avatar: string;
    image: string;
    disposition: ComponentDisposition;
    imageThumbnail: string;
    withActions: boolean;
    acceptButton: EventEmitter<void>;
    cancelButton: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "ct-card", never, { "header": { "alias": "header"; "required": false; }; "subHeader": { "alias": "subHeader"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subTitle": { "alias": "subTitle"; "required": false; }; "avatar": { "alias": "avatar"; "required": false; }; "image": { "alias": "image"; "required": false; }; "disposition": { "alias": "disposition"; "required": false; }; "imageThumbnail": { "alias": "imageThumbnail"; "required": false; }; "withActions": { "alias": "withActions"; "required": false; }; }, { "acceptButton": "acceptButton"; "cancelButton": "cancelButton"; }, never, ["[header-extra]", "[image-vertical]", "[body]", "[image-horizontal]", "[body-horizontal]", "[footer-horizontal]"], true, never>;
}
