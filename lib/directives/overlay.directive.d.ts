import { DestroyRef, ElementRef, EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentDisposition } from '../model/components/component-disposition.enum';
import * as i0 from "@angular/core";
export declare class OverlayDirective {
    private overlay;
    private elementRef;
    private viewContainerRef;
    private readonly destroyRef;
    private verticalPositions;
    private horizontalPositions;
    private overlayRef;
    contentTemplate: TemplateRef<any>;
    position: ComponentDisposition;
    closeOnClick: boolean;
    opened: EventEmitter<void>;
    closed: EventEmitter<void>;
    constructor(overlay: Overlay, elementRef: ElementRef, viewContainerRef: ViewContainerRef, destroyRef: DestroyRef);
    show(): void;
    private openDropdown;
    private closeDropdown;
    private getOverlayPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OverlayDirective, "[ctOverlay]", never, { "contentTemplate": { "alias": "ctOverlay"; "required": false; }; "position": { "alias": "ctOverlayPosition"; "required": false; }; "closeOnClick": { "alias": "ctOverlayCloseOnClick"; "required": false; }; }, { "opened": "opened"; "closed": "closed"; }, never, never, true, never>;
}
