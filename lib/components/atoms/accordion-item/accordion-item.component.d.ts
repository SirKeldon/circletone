import { AfterViewInit, QueryList, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccordionComponent } from '../../molecules/accordion/accordion.component';
import * as i0 from "@angular/core";
export declare class AccordionItemComponent implements AfterViewInit {
    private readonly destroyRef;
    id: string;
    label: string;
    isOpen: BehaviorSubject<boolean>;
    headerTemplate: TemplateRef<any>;
    accordions: QueryList<AccordionComponent>;
    ngAfterViewInit(): void;
    togglePane(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "ct-accordion-item", never, { "id": { "alias": "id"; "required": true; }; "label": { "alias": "label"; "required": false; }; }, {}, ["headerTemplate", "accordions"], ["[header]", "*"], true, never>;
}
