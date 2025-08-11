import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeImagePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any, type?: string): SafeUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeImagePipe, "safeImage", true>;
}
