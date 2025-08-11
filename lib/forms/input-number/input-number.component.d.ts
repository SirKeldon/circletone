import { AfterViewInit, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import * as i0 from "@angular/core";
export declare class InputNumberComponent extends InputComponent implements OnInit, AfterViewInit {
    protected formGroupDirective: FormGroupDirective;
    private readonly decimalPipe;
    private rawValue;
    validate: 'integer' | 'credit-card';
    constructor(formGroupDirective: FormGroupDirective);
    onFocusOut(): void;
    onFocusIn(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    formatNumber(): void;
    reverseFormatNumber(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputNumberComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputNumberComponent, "ct-input-number", never, { "validate": { "alias": "validate"; "required": false; }; }, {}, never, never, true, never>;
}
