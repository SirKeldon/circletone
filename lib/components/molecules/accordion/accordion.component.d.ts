import { AfterViewInit, OnDestroy, QueryList } from '@angular/core';
import { AccordionItemComponent } from '../../atoms/accordion-item/accordion-item.component';
import * as i0 from "@angular/core";
export declare class AccordionComponent implements AfterViewInit, OnDestroy {
    protected parent: AccordionItemComponent;
    private readonly destroyRef;
    private readonly accordionRegistryService;
    label: string;
    id: string;
    policy: 'collapse' | 'open';
    gap: number;
    accordionItems: QueryList<AccordionItemComponent>;
    constructor(parent: AccordionItemComponent);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    closePanes(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, [{ optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "ct-accordion", never, { "label": { "alias": "label"; "required": false; }; "id": { "alias": "id"; "required": true; }; "policy": { "alias": "policy"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; }, {}, ["accordionItems"], ["*"], true, never>;
}
