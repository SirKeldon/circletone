import { ComponentDisposition } from '../../../model/components/component-disposition.enum';
import { ComponentVariant } from '../../../model/components/component-variant.type';
import { ComponentType } from '../../../model/components/component-type.type';
import * as i0 from "@angular/core";
export declare class MenuComponent {
    direction: ComponentDisposition;
    iconDirection: ComponentDisposition;
    type: ComponentType;
    variant: ComponentVariant;
    gap: number;
    fullSize: boolean;
    iconAlone: boolean;
    menusAppearVertical: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "ct-menu", never, { "direction": { "alias": "direction"; "required": false; }; "iconDirection": { "alias": "iconDirection"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "gap": { "alias": "gap"; "required": false; }; "fullSize": { "alias": "fullSize"; "required": false; }; "iconAlone": { "alias": "iconAlone"; "required": false; }; "menusAppearVertical": { "alias": "menusAppearVertical"; "required": false; }; }, {}, never, ["*"], true, never>;
}
