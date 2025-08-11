import { QueryList } from '@angular/core';
import { ComponentSize } from '../../../model/components/component-size.type';
import { ComponentDisposition } from '../../../model/components/component-disposition.enum';
import { MenuComponent } from '../../molecules/menu/menu.component';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MenuItemComponent {
    text: string;
    link: string;
    type: string | 'internal' | 'external';
    size: ComponentSize;
    icon: string;
    iconSize: ComponentSize;
    iconAlone: boolean;
    iconDirection: ComponentDisposition;
    hasSubmenu: boolean;
    submenuPosition: ComponentDisposition;
    isActive: boolean;
    isOpen: BehaviorSubject<boolean>;
    menus: QueryList<MenuComponent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuItemComponent, "ct-menu-item", never, { "text": { "alias": "text"; "required": false; }; "link": { "alias": "link"; "required": false; }; "type": { "alias": "type"; "required": true; }; "size": { "alias": "size"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; "iconAlone": { "alias": "iconAlone"; "required": false; }; "iconDirection": { "alias": "iconDirection"; "required": false; }; "hasSubmenu": { "alias": "hasSubmenu"; "required": false; }; "submenuPosition": { "alias": "submenuPosition"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; }, {}, ["menus"], ["*", "[hint]", "[hint]"], true, never>;
}
