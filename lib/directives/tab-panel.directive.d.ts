import { DestroyRef, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TabPanelDirective implements OnInit {
    private elementRef;
    private readonly destroyRef;
    private readonly renderer;
    ctTabPanel: string;
    hide: EventEmitter<boolean>;
    constructor(elementRef: ElementRef, destroyRef: DestroyRef, renderer: Renderer2);
    ngOnInit(): void;
    show(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabPanelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabPanelDirective, "[ctTabPanel]", never, { "ctTabPanel": { "alias": "ctTabPanel"; "required": false; }; "hide": { "alias": "hide"; "required": false; }; }, {}, never, never, true, never>;
}
