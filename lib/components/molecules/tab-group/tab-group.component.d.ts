import { AfterContentInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { TabButtonComponent } from '../../atoms/tab-button/tab-button.component';
import { TabPanelDirective } from '../../../directives/tab-panel.directive';
import * as i0 from "@angular/core";
export declare class TabGroupComponent implements AfterContentInit, OnChanges {
    private destroyRef;
    border: boolean;
    activeTab: string;
    buttons: QueryList<TabButtonComponent>;
    panels: QueryList<TabPanelDirective>;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    setActiveTab(key: string): void;
    private getTabButtonTrigger;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabGroupComponent, "ct-tab-group", never, { "border": { "alias": "border"; "required": false; }; "activeTab": { "alias": "activeTab"; "required": false; }; }, {}, ["buttons", "panels"], ["[header]", "[body]"], true, never>;
}
