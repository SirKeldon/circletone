import { AccordionComponent } from '../components/molecules/accordion/accordion.component';
import { AccordionItemComponent } from '../components/atoms/accordion-item/accordion-item.component';
import * as i0 from "@angular/core";
export declare class AccordionRegistryService {
    private accordions;
    register(id: string, element: AccordionComponent): void;
    get(id: string): AccordionComponent | undefined;
    unregister(id: string): void;
    getItem(accordionId: string, itemId: string): AccordionItemComponent;
    openItem(accordionId: string, itemId: string): void;
    closeItem(accordionId: string, itemId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionRegistryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccordionRegistryService>;
}
