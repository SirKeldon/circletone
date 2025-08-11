import * as i0 from '@angular/core';
import { Input, ChangeDetectionStrategy, Component, EventEmitter, Output, Pipe, HostListener, Directive, ContentChildren, Injectable, inject, DestroyRef, Optional, SkipSelf, ContentChild, signal, ChangeDetectorRef, forwardRef, ViewChild } from '@angular/core';
import { NgClass, AsyncPipe, NgTemplateOutlet, KeyValuePipe, DecimalPipe } from '@angular/common';
import * as i1 from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TemplatePortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent, BehaviorSubject, skip, filter, Subject } from 'rxjs';
import * as i1$1 from '@angular/cdk/overlay';
import * as i1$2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormGroupDirective, ControlContainer } from '@angular/forms';
import { distinctUntilChanged, debounceTime as debounceTime$1, map, startWith, tap } from 'rxjs/operators';

class IconComponent {
    constructor() {
        this.icon = '';
        this.fill = 'currentColor';
        this.strokeWidth = 1.5;
        this.strokeColor = 'currentColor';
        this.size = 'base';
        this.variant = 'outline';
    }
    ngOnInit() {
        this.strokeColor = this.getFormattedColor(this.strokeColor);
        this.fill = this.getFormattedColor(this.fill);
    }
    get iconPath() {
        const icon = this.variant === 'solid' ? `${this.icon}-solid` : this.icon;
        return `/assets/images/icons.svg#${icon}`;
    }
    getFormattedColor(color) {
        if (color.startsWith('--')) {
            const rgbValue = getComputedStyle(document.documentElement).getPropertyValue(color).trim();
            return `rgb(${rgbValue})`;
        }
        return color;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: IconComponent, isStandalone: true, selector: "ct-icon", inputs: { icon: "icon", fill: "fill", strokeWidth: "strokeWidth", strokeColor: "strokeColor", size: "size", variant: "variant" }, ngImport: i0, template: "<svg\n  [attr.fill]=\"variant === 'solid' ? fill : 'none'\"\n  [attr.stroke-width]=\"variant === 'outline' ? strokeWidth : 0\"\n  [attr.stroke]=\"strokeColor\"\n  class=\"flex\"\n  [class.size-3]=\"size === 'xs'\"\n  [class.size-4]=\"size === 'sm'\"\n  [class.size-5]=\"size === 'base'\"\n  [class.size-6]=\"size === 'lg'\"\n  [class.size-8]=\"size === 'xl'\"\n  [class.size-10]=\"size === '2xl'\"\n  [class.size-20]=\"size === '3xl'\">\n  <use [attr.xlink:href]=\"iconPath\"></use>\n</svg>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-icon', imports: [NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: "<svg\n  [attr.fill]=\"variant === 'solid' ? fill : 'none'\"\n  [attr.stroke-width]=\"variant === 'outline' ? strokeWidth : 0\"\n  [attr.stroke]=\"strokeColor\"\n  class=\"flex\"\n  [class.size-3]=\"size === 'xs'\"\n  [class.size-4]=\"size === 'sm'\"\n  [class.size-5]=\"size === 'base'\"\n  [class.size-6]=\"size === 'lg'\"\n  [class.size-8]=\"size === 'xl'\"\n  [class.size-10]=\"size === '2xl'\"\n  [class.size-20]=\"size === '3xl'\">\n  <use [attr.xlink:href]=\"iconPath\"></use>\n</svg>\n" }]
        }], propDecorators: { icon: [{
                type: Input
            }], fill: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], strokeColor: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });

/**
 * This is the ButtonComponent, widely used among other components
 */
class ButtonComponent {
    constructor() {
        this.iconPosition = 'left';
        this.role = 'button';
        this.disabled = false;
        this.fullSize = false;
        this.size = 'base';
        this.type = 'primary';
        this.variant = 'solid';
    }
    get cssClassmap() {
        return {
            [`text-on-${this.type} dark:text-on-${this.type}-dark`]: this.variant === 'solid' || this.variant === 'gradient' || this.variant === 'flat',
            [`text-${this.type} dark:text-${this.type}-dark hover:text-${this.type}-variant dark:hover:text-${this.type}-variant-dark`]: this.variant === 'blank' || this.variant === 'outline',
            [`bg-${this.type} dark:bg-${this.type}-dark hover:bg-${this.type}-variant hover:dark:bg-${this.type}-variant-dark`]: this.variant === 'solid',
            [`bg-${this.type}/25 dark:bg-${this.type}-dark/25 hover:bg-${this.type}-variant/25 hover:dark:bg-${this.type}-variant-dark/25`]: this.variant === 'flat',
            [`from-${this.type}-variant from-30% to-${this.type} bg-gradient-to-tl hover:bg-gradient-to-br dark:from-${this.type}-variant-dark dark:to-${this.type}-dark`]: this.variant === 'gradient',
            [`border border-2 border-${this.type} hover:border-${this.type}-variant dark:border-${this.type}-dark`]: this.variant === 'outline',
            'px-3 py-2': (this.size === 'xs' || this.size === 'sm') && !this.hasJustIcon(),
            'px-5 py-2.5': (this.size === 'base' || this.size === 'lg') && !this.hasJustIcon(),
            'px-6 py-3': this.size === 'xl' && !this.hasJustIcon(),
            'p-1': this.hasJustIcon() && this.variant !== 'blank',
            'text-xs': this.size === 'xs',
            'text-sm': this.size === 'sm' || this.size === 'base',
            'text-base': this.size === 'lg' || this.size === 'xl',
            'w-full grow': this.fullSize,
            'opacity-50 hover:none': this.disabled,
        };
    }
    hasJustIcon() {
        return this.icon !== undefined && this.text === undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: ButtonComponent, isStandalone: true, selector: "ct-button", inputs: { text: "text", icon: "icon", iconPosition: "iconPosition", role: "role", disabled: "disabled", fullSize: "fullSize", size: "size", type: "type", variant: "variant" }, ngImport: i0, template: "<button\n  [type]=\"role\"\n  class=\"flex flex-row items-center justify-center gap-1.5 rounded-md font-primary font-medium\"\n  [ngClass]=\"cssClassmap\"\n  [disabled]=\"disabled\">\n  @if (icon) {\n    <ct-icon class=\"flex\" [size]=\"size\" [icon]=\"icon\" />\n  }\n  @if (text) {\n    <span [class.order-first]=\"iconPosition === 'right'\"> {{ text }} </span>\n  }\n</button>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-button', imports: [NgClass, IconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\n  [type]=\"role\"\n  class=\"flex flex-row items-center justify-center gap-1.5 rounded-md font-primary font-medium\"\n  [ngClass]=\"cssClassmap\"\n  [disabled]=\"disabled\">\n  @if (icon) {\n    <ct-icon class=\"flex\" [size]=\"size\" [icon]=\"icon\" />\n  }\n  @if (text) {\n    <span [class.order-first]=\"iconPosition === 'right'\"> {{ text }} </span>\n  }\n</button>\n" }]
        }], propDecorators: { text: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], role: [{
                type: Input
            }], disabled: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });

/**
 * The alert component is responsible to show alerts for diverse elements. Including `FormErrorComponent` among others.
 */
class AlertComponent {
    constructor() {
        this.dismissable = false;
        this.fullSize = true;
        this.text = '';
        this.type = 'primary';
        this.variant = 'solid';
        this.size = 'base';
        this.withIcon = true;
        this.dismiss = new EventEmitter();
    }
    get icon() {
        switch (this.type) {
            case 'primary':
            case 'secondary':
            case 'neutral':
                return 'information-circle';
            case 'error':
                return 'exclamation-triangle';
            case 'warning':
                return 'exclamation-circle';
            case 'success':
                return 'check-circle';
            default:
                return '';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: AlertComponent, isStandalone: true, selector: "ct-alert", inputs: { dismissable: "dismissable", fullSize: "fullSize", text: "text", type: "type", variant: "variant", size: "size", withIcon: "withIcon" }, outputs: { dismiss: "dismiss" }, ngImport: i0, template: "<div\n  class=\"flex flex-row items-center gap-1 rounded-lg font-primary\"\n  [class.w-fit]=\"!fullSize\"\n  [class.w-full]=\"fullSize\"\n  role=\"alert\"\n  [ngClass]=\"{\n    'text-xs': size === 'xs' || size === 'sm',\n    'text-sm': size === 'base',\n    'text-base': size === 'lg' || size === 'xl',\n    'text-primary dark:text-on-primary-dark': type === 'primary' && variant !== 'solid',\n    'text-neutral dark:text-on-neutral-dark': type === 'neutral' && variant !== 'solid',\n    'text-warning dark:text-warning-variant-dark': type === 'warning' && variant !== 'solid',\n    'text-error dark:text-error-variant-dark': type === 'error' && variant !== 'solid',\n    'text-success dark:texts-success-variant-dark': type === 'success' && variant !== 'solid',\n\n    'bg-primary dark:bg-primary-dark text-on-primary dark:text-on-primary-dark':\n      type === 'primary' && variant === 'solid',\n    'bg-neutral dark:bg-neutral-dark text-on-neutral dark:text-on-neutral-dark':\n      type === 'neutral' && variant === 'solid',\n    'bg-warning dark:bg-warning-dark text-on-warning dark:text-on-warning-dark':\n      type === 'warning' && variant === 'solid',\n    'bg-error dark:bg-error-dark text-on-error dark:text-on-error-dark': type === 'error' && variant === 'solid',\n    'bg-success dark:bg-success-dark text-on-success dark:text-on-success-dark':\n      type === 'success' && variant === 'solid',\n\n    border: variant === 'outline',\n    'border-primary dark:border-primary-dark': type === 'primary' && variant === 'outline',\n    'border-warning dark:border-warning-dark': type === 'warning' && variant === 'outline',\n    'border-error dark:border-error-dark': type === 'error' && variant === 'outline',\n    'border-success dark:border-success-dark': type === 'success' && variant === 'outline',\n    'px-4 py-2': variant !== 'blank'\n  }\">\n  @if (withIcon) {\n    <ct-icon [icon]=\"this.icon\" [size]=\"size\" />\n  }\n  <span class=\"grow font-semibold\">{{ text }}</span>\n  @if (dismissable) {\n    <ct-button\n      icon=\"x-mark\"\n      size=\"sm\"\n      [variant]=\"this.variant === 'solid' ? 'solid' : 'blank'\"\n      [type]=\"type\"\n      (click)=\"dismiss.emit()\" />\n  }\n</div>\n", dependencies: [{ kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }, { kind: "component", type: ButtonComponent, selector: "ct-button", inputs: ["text", "icon", "iconPosition", "role", "disabled", "fullSize", "size", "type", "variant"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-alert', imports: [IconComponent, ButtonComponent, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex flex-row items-center gap-1 rounded-lg font-primary\"\n  [class.w-fit]=\"!fullSize\"\n  [class.w-full]=\"fullSize\"\n  role=\"alert\"\n  [ngClass]=\"{\n    'text-xs': size === 'xs' || size === 'sm',\n    'text-sm': size === 'base',\n    'text-base': size === 'lg' || size === 'xl',\n    'text-primary dark:text-on-primary-dark': type === 'primary' && variant !== 'solid',\n    'text-neutral dark:text-on-neutral-dark': type === 'neutral' && variant !== 'solid',\n    'text-warning dark:text-warning-variant-dark': type === 'warning' && variant !== 'solid',\n    'text-error dark:text-error-variant-dark': type === 'error' && variant !== 'solid',\n    'text-success dark:texts-success-variant-dark': type === 'success' && variant !== 'solid',\n\n    'bg-primary dark:bg-primary-dark text-on-primary dark:text-on-primary-dark':\n      type === 'primary' && variant === 'solid',\n    'bg-neutral dark:bg-neutral-dark text-on-neutral dark:text-on-neutral-dark':\n      type === 'neutral' && variant === 'solid',\n    'bg-warning dark:bg-warning-dark text-on-warning dark:text-on-warning-dark':\n      type === 'warning' && variant === 'solid',\n    'bg-error dark:bg-error-dark text-on-error dark:text-on-error-dark': type === 'error' && variant === 'solid',\n    'bg-success dark:bg-success-dark text-on-success dark:text-on-success-dark':\n      type === 'success' && variant === 'solid',\n\n    border: variant === 'outline',\n    'border-primary dark:border-primary-dark': type === 'primary' && variant === 'outline',\n    'border-warning dark:border-warning-dark': type === 'warning' && variant === 'outline',\n    'border-error dark:border-error-dark': type === 'error' && variant === 'outline',\n    'border-success dark:border-success-dark': type === 'success' && variant === 'outline',\n    'px-4 py-2': variant !== 'blank'\n  }\">\n  @if (withIcon) {\n    <ct-icon [icon]=\"this.icon\" [size]=\"size\" />\n  }\n  <span class=\"grow font-semibold\">{{ text }}</span>\n  @if (dismissable) {\n    <ct-button\n      icon=\"x-mark\"\n      size=\"sm\"\n      [variant]=\"this.variant === 'solid' ? 'solid' : 'blank'\"\n      [type]=\"type\"\n      (click)=\"dismiss.emit()\" />\n  }\n</div>\n" }]
        }], propDecorators: { dismissable: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], text: [{
                type: Input,
                args: [{ required: true }]
            }], type: [{
                type: Input
            }], variant: [{
                type: Input
            }], size: [{
                type: Input
            }], withIcon: [{
                type: Input
            }], dismiss: [{
                type: Output
            }] } });

class SafeImagePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type = 'image/webp') {
        const imageBase64 = `data:${type};base64,${value}`;
        return this.sanitizer.bypassSecurityTrustUrl(imageBase64);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SafeImagePipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: SafeImagePipe, isStandalone: true, name: "safeImage" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SafeImagePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safeImage',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }] });

class AvatarComponent {
    constructor() {
        this.picture = '';
        this.title = '';
        this.size = 'base';
        this.imageType = 'image/webp';
        this.titleInitials = '';
    }
    ngOnInit() {
        this.titleInitials = this.title
            ? this.title
                .split(' ')
                .map(word => word[0]?.toLocaleUpperCase())
                .splice(0, 2)
                .join('')
            : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: AvatarComponent, isStandalone: true, selector: "ct-avatar", inputs: { picture: "picture", title: "title", size: "size", imageType: "imageType" }, ngImport: i0, template: "@if (picture) {\n  @if (imageType !== 'icon') {\n    <img\n      [src]=\"picture | safeImage: imageType\"\n      alt=\"{{ title }}\"\n      [class.size-40]=\"size === '3xl'\"\n      [class.size-32]=\"size === '2xl'\"\n      [class.size-24]=\"size === 'xl'\"\n      [class.size-20]=\"size === 'lg'\"\n      [class.size-14]=\"size === 'base'\"\n      [class.size-10]=\"size === 'sm'\"\n      [class.size-6]=\"size === 'xs'\"\n      class=\"rounded-full border-2 border-primary object-cover dark:border-primary-dark\" />\n  } @else {\n    <div\n      class=\"flex flex-row items-center justify-center rounded-full bg-surface-variant text-on-primary dark:bg-surface-variant-dark dark:text-on-primary-dark\"\n      [class.size-40]=\"size === '3xl'\"\n      [class.size-32]=\"size === '2xl'\"\n      [class.size-24]=\"size === 'xl'\"\n      [class.size-20]=\"size === 'lg'\"\n      [class.size-16]=\"size === 'base'\"\n      [class.size-12]=\"size === 'sm'\"\n      [class.size-10]=\"size === 'xs'\">\n      <ct-icon [icon]=\"picture\" [size]=\"size\" />\n    </div>\n  }\n} @else {\n  <div\n    [class.size-40]=\"size === '3xl'\"\n    [class.size-32]=\"size === '2xl'\"\n    [class.size-24]=\"size === 'xl'\"\n    [class.size-20]=\"size === 'lg'\"\n    [class.size-16]=\"size === 'base'\"\n    [class.size-12]=\"size === 'sm'\"\n    [class.size-10]=\"size === 'xs'\"\n    class=\"flex items-center justify-center truncate rounded-full border border-primary bg-primary-container text-on-primary-container dark:bg-primary-container-dark dark:text-on-primary-container-dark\">\n    <span class=\"text-2xl font-medium\"> {{ titleInitials }}</span>\n  </div>\n}\n", dependencies: [{ kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }, { kind: "pipe", type: SafeImagePipe, name: "safeImage" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-avatar', imports: [IconComponent, SafeImagePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (picture) {\n  @if (imageType !== 'icon') {\n    <img\n      [src]=\"picture | safeImage: imageType\"\n      alt=\"{{ title }}\"\n      [class.size-40]=\"size === '3xl'\"\n      [class.size-32]=\"size === '2xl'\"\n      [class.size-24]=\"size === 'xl'\"\n      [class.size-20]=\"size === 'lg'\"\n      [class.size-14]=\"size === 'base'\"\n      [class.size-10]=\"size === 'sm'\"\n      [class.size-6]=\"size === 'xs'\"\n      class=\"rounded-full border-2 border-primary object-cover dark:border-primary-dark\" />\n  } @else {\n    <div\n      class=\"flex flex-row items-center justify-center rounded-full bg-surface-variant text-on-primary dark:bg-surface-variant-dark dark:text-on-primary-dark\"\n      [class.size-40]=\"size === '3xl'\"\n      [class.size-32]=\"size === '2xl'\"\n      [class.size-24]=\"size === 'xl'\"\n      [class.size-20]=\"size === 'lg'\"\n      [class.size-16]=\"size === 'base'\"\n      [class.size-12]=\"size === 'sm'\"\n      [class.size-10]=\"size === 'xs'\">\n      <ct-icon [icon]=\"picture\" [size]=\"size\" />\n    </div>\n  }\n} @else {\n  <div\n    [class.size-40]=\"size === '3xl'\"\n    [class.size-32]=\"size === '2xl'\"\n    [class.size-24]=\"size === 'xl'\"\n    [class.size-20]=\"size === 'lg'\"\n    [class.size-16]=\"size === 'base'\"\n    [class.size-12]=\"size === 'sm'\"\n    [class.size-10]=\"size === 'xs'\"\n    class=\"flex items-center justify-center truncate rounded-full border border-primary bg-primary-container text-on-primary-container dark:bg-primary-container-dark dark:text-on-primary-container-dark\">\n    <span class=\"text-2xl font-medium\"> {{ titleInitials }}</span>\n  </div>\n}\n" }]
        }], propDecorators: { picture: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], imageType: [{
                type: Input
            }] } });

class IconButtonComponent {
    constructor() {
        this.icon = '';
        this.type = 'primary';
        this.variant = 'solid';
        this.size = 'base';
        this.role = 'button';
        this.disabled = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IconButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "19.2.14", type: IconButtonComponent, isStandalone: true, selector: "ct-icon-button", inputs: { icon: "icon", type: ["type", "type", (value) => value], variant: ["variant", "variant", (value) => value], size: "size", role: "role", disabled: "disabled" }, ngImport: i0, template: "<button\n  class=\"flex w-fit rounded-full bg-primary p-2 text-on-primary dark:text-on-primary-dark\"\n  [ngClass]=\"{\n    'bg-primary hover:bg-primary-variant dark:bg-primary-variant-dark hover:dark:bg-surface-dark': variant === 'solid',\n    'hover:text-primary-variant hover:dark:text-primary-variant-dark': variant === 'flat'\n  }\"\n  [type]=\"role\">\n  <ct-icon [class.opacity-50]=\"disabled\" [icon]=\"icon\" [size]=\"size\" />\n</button>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: IconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-icon-button', imports: [NgClass, IconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\n  class=\"flex w-fit rounded-full bg-primary p-2 text-on-primary dark:text-on-primary-dark\"\n  [ngClass]=\"{\n    'bg-primary hover:bg-primary-variant dark:bg-primary-variant-dark hover:dark:bg-surface-dark': variant === 'solid',\n    'hover:text-primary-variant hover:dark:text-primary-variant-dark': variant === 'flat'\n  }\"\n  [type]=\"role\">\n  <ct-icon [class.opacity-50]=\"disabled\" [icon]=\"icon\" [size]=\"size\" />\n</button>\n" }]
        }], propDecorators: { icon: [{
                type: Input,
                args: [{ required: true }]
            }], type: [{
                type: Input,
                args: [{ transform: (value) => value }]
            }], variant: [{
                type: Input,
                args: [{ transform: (value) => value }]
            }], size: [{
                type: Input
            }], role: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class HeaderComponent {
    constructor() {
        this.title = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: HeaderComponent, isStandalone: true, selector: "ct-header", inputs: { title: "title" }, ngImport: i0, template: "<div\n  class=\"flex h-14 w-full items-center justify-between bg-gradient-to-b from-surface to-primary px-4 py-2 dark:from-surface-variant-dark dark:to-primary-container-dark\">\n  <div class=\"flex grow font-logo\">{{ title }}</div>\n  <ng-content />\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-header', imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex h-14 w-full items-center justify-between bg-gradient-to-b from-surface to-primary px-4 py-2 dark:from-surface-variant-dark dark:to-primary-container-dark\">\n  <div class=\"flex grow font-logo\">{{ title }}</div>\n  <ng-content />\n</div>\n" }]
        }], propDecorators: { title: [{
                type: Input
            }] } });

class OverlayDirective {
    constructor(overlay, elementRef, viewContainerRef, destroyRef) {
        this.overlay = overlay;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.destroyRef = destroyRef;
        this.verticalPositions = {
            bottomStart: {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                panelClass: 'vertical-overlay',
            },
            topStart: {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
                panelClass: 'vertical-overlay',
            },
            bottomEnd: {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
                panelClass: 'vertical-overlay',
            },
            topEnd: {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom',
                panelClass: 'vertical-overlay',
            },
        };
        this.horizontalPositions = {
            bottomStart: {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
                offsetY: 7,
            },
            topStart: {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom',
            },
        };
        this.overlayRef = null;
        this.position = 'horizontal';
        this.closeOnClick = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
    }
    show() {
        this.openDropdown();
        this.opened.emit();
    }
    openDropdown() {
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
                positionStrategy: this.getOverlayPosition(),
            });
            this.overlayRef
                .outsidePointerEvents()
                .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100))
                .subscribe(() => {
                this.closeDropdown();
                this.closed.emit();
            });
            fromEvent(this.overlayRef.hostElement, 'click')
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                if (this.closeOnClick)
                    this.closeDropdown();
            });
        }
        if (this.contentTemplate && !this.overlayRef.hasAttached()) {
            const portal = new TemplatePortal(this.contentTemplate, this.viewContainerRef);
            this.overlayRef.attach(portal);
        }
    }
    closeDropdown() {
        if (this.overlayRef?.hasAttached()) {
            this.overlayRef.detach();
        }
    }
    getOverlayPosition() {
        const positions = this.position === 'horizontal' ? this.horizontalPositions : this.verticalPositions;
        return this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef)
            .withPositions(Object.keys(positions).map(positionKey => positions[positionKey]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: OverlayDirective, deps: [{ token: i1$1.Overlay }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.DestroyRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: OverlayDirective, isStandalone: true, selector: "[ctOverlay]", inputs: { contentTemplate: ["ctOverlay", "contentTemplate"], position: ["ctOverlayPosition", "position"], closeOnClick: ["ctOverlayCloseOnClick", "closeOnClick"] }, outputs: { opened: "opened", closed: "closed" }, host: { listeners: { "click": "show()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: OverlayDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ctOverlay]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i1$1.Overlay }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.DestroyRef }], propDecorators: { contentTemplate: [{
                type: Input,
                args: ['ctOverlay']
            }], position: [{
                type: Input,
                args: ['ctOverlayPosition']
            }], closeOnClick: [{
                type: Input,
                args: ['ctOverlayCloseOnClick']
            }], opened: [{
                type: Output
            }], closed: [{
                type: Output
            }], show: [{
                type: HostListener,
                args: ['click']
            }] } });

class MenuComponent {
    constructor() {
        this.direction = 'vertical';
        this.iconDirection = 'horizontal';
        this.type = 'primary';
        this.variant = 'solid';
        this.gap = 2;
        this.fullSize = true;
        this.iconAlone = false;
        this.menusAppearVertical = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: MenuComponent, isStandalone: true, selector: "ct-menu", inputs: { direction: "direction", iconDirection: "iconDirection", type: "type", variant: "variant", gap: "gap", fullSize: "fullSize", iconAlone: "iconAlone", menusAppearVertical: "menusAppearVertical" }, ngImport: i0, template: "<div\n  class=\"flex flex-col gap-{{ gap }} z-10 rounded-md p-2 font-primary\"\n  [ngClass]=\"{\n    'shadow-lg': variant === 'solid',\n    'bg-surface dark:bg-surface-dark': variant === 'solid'\n  }\">\n  <div\n    class=\"flex justify-around\"\n    [class.flex-col]=\"direction === 'vertical'\"\n    [class.flex-row]=\"direction === 'horizontal'\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-menu', imports: [NgClass, MenuItemComponent, OverlayDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex flex-col gap-{{ gap }} z-10 rounded-md p-2 font-primary\"\n  [ngClass]=\"{\n    'shadow-lg': variant === 'solid',\n    'bg-surface dark:bg-surface-dark': variant === 'solid'\n  }\">\n  <div\n    class=\"flex justify-around\"\n    [class.flex-col]=\"direction === 'vertical'\"\n    [class.flex-row]=\"direction === 'horizontal'\">\n    <ng-content></ng-content>\n  </div>\n</div>\n" }]
        }], propDecorators: { direction: [{
                type: Input
            }], iconDirection: [{
                type: Input
            }], type: [{
                type: Input
            }], variant: [{
                type: Input
            }], gap: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], iconAlone: [{
                type: Input
            }], menusAppearVertical: [{
                type: Input
            }] } });

class MenuItemComponent {
    constructor() {
        this.text = '';
        this.link = '';
        this.type = 'internal';
        this.size = 'base';
        this.icon = '';
        this.iconSize = 'base';
        this.iconAlone = false;
        this.iconDirection = 'horizontal';
        this.hasSubmenu = false;
        this.submenuPosition = 'horizontal';
        this.isActive = false;
        this.isOpen = new BehaviorSubject(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: MenuItemComponent, isStandalone: true, selector: "ct-menu-item", inputs: { text: "text", link: "link", type: "type", size: "size", icon: "icon", iconSize: "iconSize", iconAlone: "iconAlone", iconDirection: "iconDirection", hasSubmenu: "hasSubmenu", submenuPosition: "submenuPosition", isActive: "isActive" }, queries: [{ propertyName: "menus", predicate: MenuComponent }], ngImport: i0, template: "@if (menus.length > 0) {\n  <a\n    [ctOverlay]=\"dropDown\"\n    [ctOverlayPosition]=\"submenuPosition\"\n    (closed)=\"isOpen.next(false)\"\n    (opened)=\"isOpen.next(true)\"\n    [ngClass]=\"{\n      'bg-surface-variant dark:bg-surface-variant-dark': isOpen | async\n    }\"\n    class=\"block cursor-pointer rounded-md px-4 py-2 font-medium text-on-surface hover:bg-primary-variant dark:text-on-surface-dark hover:dark:bg-primary-dark\">\n    <span\n      class=\"flex items-center gap-3\"\n      [class.flex-row]=\"iconDirection === 'horizontal'\"\n      [class.flex-col]=\"iconDirection === 'vertical'\">\n      @if (icon) {\n        <ct-icon [icon]=\"icon\" [size]=\"iconSize\" />\n      }\n      @if (text && !iconAlone) {\n        <span\n          [class.text-sm]=\"size === 'xs' || size === 'sm'\"\n          [class.text-base]=\"size === 'base' || size === 'lg'\"\n          [class.text-xl]=\"size === 'xl'\"\n          >{{ text }}</span\n        >\n      }\n      @if (!iconAlone) {\n        @if (isOpen | async) {\n          <ct-icon [icon]=\"submenuPosition === 'vertical' ? 'chevron-up' : 'chevron-left'\" variant=\"blank\" />\n        } @else {\n          <ct-icon [icon]=\"submenuPosition === 'vertical' ? 'chevron-down' : 'chevron-right'\" variant=\"blank\" />\n        }\n      }\n    </span>\n  </a>\n  <ng-template #dropDown><ng-content></ng-content></ng-template>\n} @else {\n  @if (link) {\n    <a\n      class=\"block cursor-pointer rounded-md px-4 py-2 font-medium text-on-surface hover:bg-surface-variant dark:text-on-surface-dark dark:hover:bg-surface-variant-dark\"\n      [routerLink]=\"link\"\n      [ngClass]=\"{\n        'bg-surface-variant dark:bg-surface-variant-dark': isActive\n      }\">\n      <ng-content select=\"[hint]\" />\n      <span\n        class=\"flex items-center gap-3\"\n        [class.flex-row]=\"iconDirection === 'horizontal'\"\n        [class.flex-col]=\"iconDirection === 'vertical'\">\n        @if (icon) {\n          <ct-icon [icon]=\"icon\" variant=\"solid\" [size]=\"iconSize\" />\n        }\n        @if (text && !iconAlone) {\n          <span\n            [class.text-sm]=\"size === 'xs' || size === 'sm'\"\n            [class.text-base]=\"size === 'base' || size === 'lg'\"\n            [class.text-xl]=\"size === 'xl'\"\n            >{{ text }}</span\n          >\n        }\n      </span>\n    </a>\n  } @else {\n    <span\n      class=\"block cursor-pointer rounded-md px-4 py-2 font-medium text-on-surface hover:bg-surface-variant dark:text-on-surface-dark dark:hover:bg-surface-variant-dark\"\n      [ngClass]=\"{\n        'bg-surface-variant dark:bg-surface-variant-dark': isActive\n      }\">\n      <ng-content select=\"[hint]\" />\n      <span\n        class=\"flex items-center gap-3\"\n        [class.flex-row]=\"iconDirection === 'horizontal'\"\n        [class.flex-col]=\"iconDirection === 'vertical'\">\n        @if (icon) {\n          <ct-icon [icon]=\"icon\" variant=\"solid\" [size]=\"iconSize\" />\n        }\n        @if (text && !iconAlone) {\n          <span\n            [class.text-sm]=\"size === 'xs' || size === 'sm'\"\n            [class.text-base]=\"size === 'base' || size === 'lg'\"\n            [class.text-xl]=\"size === 'xl'\"\n            >{{ text }}</span\n          >\n        }\n      </span>\n    </span>\n  }\n}\n", dependencies: [{ kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }, { kind: "directive", type: OverlayDirective, selector: "[ctOverlay]", inputs: ["ctOverlay", "ctOverlayPosition", "ctOverlayCloseOnClick"], outputs: ["opened", "closed"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-menu-item', imports: [RouterLink, NgClass, AsyncPipe, IconComponent, ButtonComponent, OverlayDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (menus.length > 0) {\n  <a\n    [ctOverlay]=\"dropDown\"\n    [ctOverlayPosition]=\"submenuPosition\"\n    (closed)=\"isOpen.next(false)\"\n    (opened)=\"isOpen.next(true)\"\n    [ngClass]=\"{\n      'bg-surface-variant dark:bg-surface-variant-dark': isOpen | async\n    }\"\n    class=\"block cursor-pointer rounded-md px-4 py-2 font-medium text-on-surface hover:bg-primary-variant dark:text-on-surface-dark hover:dark:bg-primary-dark\">\n    <span\n      class=\"flex items-center gap-3\"\n      [class.flex-row]=\"iconDirection === 'horizontal'\"\n      [class.flex-col]=\"iconDirection === 'vertical'\">\n      @if (icon) {\n        <ct-icon [icon]=\"icon\" [size]=\"iconSize\" />\n      }\n      @if (text && !iconAlone) {\n        <span\n          [class.text-sm]=\"size === 'xs' || size === 'sm'\"\n          [class.text-base]=\"size === 'base' || size === 'lg'\"\n          [class.text-xl]=\"size === 'xl'\"\n          >{{ text }}</span\n        >\n      }\n      @if (!iconAlone) {\n        @if (isOpen | async) {\n          <ct-icon [icon]=\"submenuPosition === 'vertical' ? 'chevron-up' : 'chevron-left'\" variant=\"blank\" />\n        } @else {\n          <ct-icon [icon]=\"submenuPosition === 'vertical' ? 'chevron-down' : 'chevron-right'\" variant=\"blank\" />\n        }\n      }\n    </span>\n  </a>\n  <ng-template #dropDown><ng-content></ng-content></ng-template>\n} @else {\n  @if (link) {\n    <a\n      class=\"block cursor-pointer rounded-md px-4 py-2 font-medium text-on-surface hover:bg-surface-variant dark:text-on-surface-dark dark:hover:bg-surface-variant-dark\"\n      [routerLink]=\"link\"\n      [ngClass]=\"{\n        'bg-surface-variant dark:bg-surface-variant-dark': isActive\n      }\">\n      <ng-content select=\"[hint]\" />\n      <span\n        class=\"flex items-center gap-3\"\n        [class.flex-row]=\"iconDirection === 'horizontal'\"\n        [class.flex-col]=\"iconDirection === 'vertical'\">\n        @if (icon) {\n          <ct-icon [icon]=\"icon\" variant=\"solid\" [size]=\"iconSize\" />\n        }\n        @if (text && !iconAlone) {\n          <span\n            [class.text-sm]=\"size === 'xs' || size === 'sm'\"\n            [class.text-base]=\"size === 'base' || size === 'lg'\"\n            [class.text-xl]=\"size === 'xl'\"\n            >{{ text }}</span\n          >\n        }\n      </span>\n    </a>\n  } @else {\n    <span\n      class=\"block cursor-pointer rounded-md px-4 py-2 font-medium text-on-surface hover:bg-surface-variant dark:text-on-surface-dark dark:hover:bg-surface-variant-dark\"\n      [ngClass]=\"{\n        'bg-surface-variant dark:bg-surface-variant-dark': isActive\n      }\">\n      <ng-content select=\"[hint]\" />\n      <span\n        class=\"flex items-center gap-3\"\n        [class.flex-row]=\"iconDirection === 'horizontal'\"\n        [class.flex-col]=\"iconDirection === 'vertical'\">\n        @if (icon) {\n          <ct-icon [icon]=\"icon\" variant=\"solid\" [size]=\"iconSize\" />\n        }\n        @if (text && !iconAlone) {\n          <span\n            [class.text-sm]=\"size === 'xs' || size === 'sm'\"\n            [class.text-base]=\"size === 'base' || size === 'lg'\"\n            [class.text-xl]=\"size === 'xl'\"\n            >{{ text }}</span\n          >\n        }\n      </span>\n    </span>\n  }\n}\n" }]
        }], propDecorators: { text: [{
                type: Input
            }], link: [{
                type: Input
            }], type: [{
                type: Input,
                args: [{ required: true }]
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], iconAlone: [{
                type: Input
            }], iconDirection: [{
                type: Input
            }], hasSubmenu: [{
                type: Input
            }], submenuPosition: [{
                type: Input
            }], isActive: [{
                type: Input
            }], menus: [{
                type: ContentChildren,
                args: [MenuComponent]
            }] } });

class AccordionRegistryService {
    constructor() {
        this.accordions = new Map();
    }
    register(id, element) {
        this.accordions.set(id, element);
    }
    get(id) {
        return this.accordions.get(id);
    }
    unregister(id) {
        this.accordions.delete(id);
    }
    getItem(accordionId, itemId) {
        const accordionObject = this.accordions.get(accordionId);
        return accordionObject.accordionItems.find(item => item.id === itemId);
    }
    openItem(accordionId, itemId) {
        this.getItem(accordionId, itemId)?.isOpen.next(true);
    }
    closeItem(accordionId, itemId) {
        this.getItem(accordionId, itemId)?.isOpen.next(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionRegistryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionRegistryService, providedIn: 'any' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionRegistryService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }] });

class AccordionComponent {
    constructor(parent) {
        this.parent = parent;
        this.destroyRef = inject(DestroyRef);
        this.accordionRegistryService = inject(AccordionRegistryService);
        this.label = '';
        this.policy = 'collapse';
        this.gap = 0;
    }
    ngAfterViewInit() {
        this.accordionItems.forEach(accordionItem => {
            accordionItem.isOpen
                .pipe(takeUntilDestroyed(this.destroyRef), skip(1), filter(isOpen => isOpen), debounceTime(10))
                .subscribe(() => {
                if (this.parent) {
                    this.parent?.isOpen.next(true);
                }
                if (this.policy === 'collapse') {
                    this.accordionItems.forEach(otherAccordionItem => {
                        if (accordionItem.id !== otherAccordionItem.id && otherAccordionItem.isOpen.getValue()) {
                            otherAccordionItem.isOpen.next(false);
                        }
                    });
                }
            });
        });
        this.accordionRegistryService.register(this.id, this);
    }
    ngOnDestroy() {
        this.accordionRegistryService.unregister(this.id);
    }
    closePanes() {
        this.accordionItems.forEach(accordionItem => accordionItem.isOpen.next(false));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionComponent, deps: [{ token: AccordionItemComponent, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: AccordionComponent, isStandalone: true, selector: "ct-accordion", inputs: { label: "label", id: "id", policy: "policy", gap: "gap" }, queries: [{ propertyName: "accordionItems", predicate: AccordionItemComponent }], ngImport: i0, template: "<div class=\"flex flex-col gap-{{ gap }}\">\n  <ng-content></ng-content>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-accordion', imports: [AsyncPipe, IconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-col gap-{{ gap }}\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: () => [{ type: AccordionItemComponent, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }], propDecorators: { label: [{
                type: Input
            }], id: [{
                type: Input,
                args: [{ required: true }]
            }], policy: [{
                type: Input
            }], gap: [{
                type: Input
            }], accordionItems: [{
                type: ContentChildren,
                args: [AccordionItemComponent]
            }] } });

class AccordionItemComponent {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.id = '';
        this.label = '';
        this.isOpen = new BehaviorSubject(false);
    }
    ngAfterViewInit() {
        this.isOpen
            .pipe(takeUntilDestroyed(this.destroyRef), skip(1), filter(isOpen => !isOpen))
            .subscribe(() => {
            this.accordions.forEach(accordion => {
                accordion.closePanes();
            });
        });
    }
    togglePane() {
        this.isOpen.next(!this.isOpen.getValue());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: AccordionItemComponent, isStandalone: true, selector: "ct-accordion-item", inputs: { id: "id", label: "label" }, queries: [{ propertyName: "headerTemplate", first: true, predicate: ["header"], descendants: true }, { propertyName: "accordions", predicate: AccordionComponent }], ngImport: i0, template: "<div class=\"flex flex-col\">\n  <div tabindex=\"0\" (click)=\"togglePane()\" class=\"flex cursor-pointer flex-row rounded-md\">\n    <ng-container *ngTemplateOutlet=\"headerTemplate; context: { isOpen: (isOpen | async) }\">\n      <ng-content select=\"[header]\" />\n    </ng-container>\n  </div>\n  <!-- providing a high value for max-height -->\n  <div\n    [style.max-height]=\"(isOpen | async) ? '1024px' : '0px'\"\n    class=\"overflow-hidden transition-[max-height] duration-500 ease-in-out\">\n    @if (isOpen | async) {\n      <ng-content />\n    }\n  </div>\n</div>\n", dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-accordion-item', imports: [IconComponent, AsyncPipe, NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex flex-col\">\n  <div tabindex=\"0\" (click)=\"togglePane()\" class=\"flex cursor-pointer flex-row rounded-md\">\n    <ng-container *ngTemplateOutlet=\"headerTemplate; context: { isOpen: (isOpen | async) }\">\n      <ng-content select=\"[header]\" />\n    </ng-container>\n  </div>\n  <!-- providing a high value for max-height -->\n  <div\n    [style.max-height]=\"(isOpen | async) ? '1024px' : '0px'\"\n    class=\"overflow-hidden transition-[max-height] duration-500 ease-in-out\">\n    @if (isOpen | async) {\n      <ng-content />\n    }\n  </div>\n</div>\n" }]
        }], propDecorators: { id: [{
                type: Input,
                args: [{ required: true }]
            }], label: [{
                type: Input
            }], headerTemplate: [{
                type: ContentChild,
                args: ['header']
            }], accordions: [{
                type: ContentChildren,
                args: [AccordionComponent]
            }] } });

class TabButtonComponent {
    constructor() {
        this.key = '';
        this.title = '';
        this.subTitle = '';
        this.variant = 'solid';
        this.clicked = new EventEmitter();
        this.isActive = signal(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TabButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: TabButtonComponent, isStandalone: true, selector: "ct-tab-button", inputs: { key: "key", title: "title", subTitle: "subTitle", variant: "variant" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<div\n  tabindex=\"0\"\n  class=\"flex w-full cursor-pointer flex-col p-1 text-center\"\n  [ngClass]=\"{\n    'rounded-md hover:bg-surface-variant dark:hover:bg-surface-variant-dark': variant === 'solid',\n    'bg-surface dark:bg-surface-dark': isActive() && variant === 'solid',\n    'border-b-4 rounded-t-md': variant === 'flat',\n    'border-surface-variant dark:border-surface-variant-dark': isActive() && variant === 'flat',\n    'border-transparent hover:border-surface dark:hover:border-surface-dark': !isActive() && variant === 'flat'\n  }\"\n  (click)=\"clicked.emit(key)\">\n  <span class=\"font-bold\">{{ title }}</span>\n  @if (subTitle) {\n    <p class=\"text-sm\">{{ subTitle }}</p>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TabButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-tab-button', imports: [NgClass, AsyncPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  tabindex=\"0\"\n  class=\"flex w-full cursor-pointer flex-col p-1 text-center\"\n  [ngClass]=\"{\n    'rounded-md hover:bg-surface-variant dark:hover:bg-surface-variant-dark': variant === 'solid',\n    'bg-surface dark:bg-surface-dark': isActive() && variant === 'solid',\n    'border-b-4 rounded-t-md': variant === 'flat',\n    'border-surface-variant dark:border-surface-variant-dark': isActive() && variant === 'flat',\n    'border-transparent hover:border-surface dark:hover:border-surface-dark': !isActive() && variant === 'flat'\n  }\"\n  (click)=\"clicked.emit(key)\">\n  <span class=\"font-bold\">{{ title }}</span>\n  @if (subTitle) {\n    <p class=\"text-sm\">{{ subTitle }}</p>\n  }\n</div>\n" }]
        }], propDecorators: { key: [{
                type: Input,
                args: [{ required: true }]
            }], title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], variant: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class ListItemComponent {
    constructor() {
        this.avatar = '';
        this.avatarSize = 'base';
        this.avatarType = 'image/webp';
        this.header = '';
        this.subHeader = '';
        this.subTitle = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ListItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: ListItemComponent, isStandalone: true, selector: "ct-list-item", inputs: { avatar: "avatar", avatarSize: "avatarSize", avatarType: "avatarType", header: "header", subHeader: "subHeader", subTitle: "subTitle" }, ngImport: i0, template: "<li\n  class=\"flex cursor-pointer flex-row items-center gap-4 px-4 py-2 hover:bg-surface-variant hover:dark:bg-surface-variant-dark\">\n  <ct-avatar class=\"flex-none\" [picture]=\"avatar\" [title]=\"header\" [size]=\"avatarSize\" [imageType]=\"avatarType\" />\n  <div class=\"flex grow flex-col overflow-hidden\">\n    @if (header) {\n      <span class=\"truncate text-lg font-medium text-on-primary dark:text-on-primary-dark\" [innerHTML]=\"header\"></span>\n    }\n    @if (subHeader) {\n      <span class=\"truncate text-sm text-on-surface dark:text-on-surface-dark\" [innerHTML]=\"subHeader\"></span>\n    }\n  </div>\n  <ng-content />\n</li>\n", dependencies: [{ kind: "component", type: AvatarComponent, selector: "ct-avatar", inputs: ["picture", "title", "size", "imageType"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ListItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-list-item', imports: [AvatarComponent, IconComponent, MenuComponent, MenuItemComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<li\n  class=\"flex cursor-pointer flex-row items-center gap-4 px-4 py-2 hover:bg-surface-variant hover:dark:bg-surface-variant-dark\">\n  <ct-avatar class=\"flex-none\" [picture]=\"avatar\" [title]=\"header\" [size]=\"avatarSize\" [imageType]=\"avatarType\" />\n  <div class=\"flex grow flex-col overflow-hidden\">\n    @if (header) {\n      <span class=\"truncate text-lg font-medium text-on-primary dark:text-on-primary-dark\" [innerHTML]=\"header\"></span>\n    }\n    @if (subHeader) {\n      <span class=\"truncate text-sm text-on-surface dark:text-on-surface-dark\" [innerHTML]=\"subHeader\"></span>\n    }\n  </div>\n  <ng-content />\n</li>\n" }]
        }], propDecorators: { avatar: [{
                type: Input
            }], avatarSize: [{
                type: Input
            }], avatarType: [{
                type: Input
            }], header: [{
                type: Input
            }], subHeader: [{
                type: Input
            }], subTitle: [{
                type: Input
            }] } });

class ListComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: ListComponent, isStandalone: true, selector: "ct-list", ngImport: i0, template: "<ul class=\"flex grow flex-col divide-y divide-primary-400 font-primary dark:divide-primary-700\">\n  <ng-content />\n</ul>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-list', imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ul class=\"flex grow flex-col divide-y divide-primary-400 font-primary dark:divide-primary-700\">\n  <ng-content />\n</ul>\n" }]
        }] });

class TabPanelDirective {
    constructor(elementRef, destroyRef, renderer) {
        this.elementRef = elementRef;
        this.destroyRef = destroyRef;
        this.renderer = renderer;
        this.ctTabPanel = '';
        this.hide = new EventEmitter();
        this.hide.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(hide => {
            this.renderer.addClass(this.elementRef.nativeElement, hide ? 'hidden' : 'flex');
            this.renderer.removeClass(this.elementRef.nativeElement, hide ? 'flex' : 'hidden');
        });
    }
    ngOnInit() {
        this.hide.next(true);
    }
    show() {
        this.renderer.addClass(this.elementRef.nativeElement, 'flex');
        this.renderer.removeClass(this.elementRef.nativeElement, 'hidden');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TabPanelDirective, deps: [{ token: i0.ElementRef }, { token: i0.DestroyRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.14", type: TabPanelDirective, isStandalone: true, selector: "[ctTabPanel]", inputs: { ctTabPanel: "ctTabPanel", hide: "hide" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TabPanelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ctTabPanel]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.DestroyRef }, { type: i0.Renderer2 }], propDecorators: { ctTabPanel: [{
                type: Input
            }], hide: [{
                type: Input
            }] } });

class TabGroupComponent {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.border = true;
        this.activeTab = '';
    }
    ngOnChanges(changes) {
        if (changes['activeTab'].previousValue !== this.activeTab) {
            this.setActiveTab(this.activeTab);
        }
    }
    ngAfterContentInit() {
        this.setActiveTab(this.activeTab);
        this.buttons.forEach(button => button.clicked.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(key => this.setActiveTab(key)));
    }
    setActiveTab(key) {
        if (this.panels && this.buttons) {
            this.panels.forEach(panel => {
                if (panel.ctTabPanel === key) {
                    panel.show();
                    this.getTabButtonTrigger(panel.ctTabPanel).isActive.set(true);
                }
                else {
                    this.getTabButtonTrigger(panel.ctTabPanel).isActive.set(false);
                    panel.hide.next(true);
                }
            });
        }
    }
    getTabButtonTrigger(key) {
        return this.buttons.find(panel => panel.key === key);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TabGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: TabGroupComponent, isStandalone: true, selector: "ct-tab-group", inputs: { border: "border", activeTab: "activeTab" }, queries: [{ propertyName: "buttons", predicate: TabButtonComponent }, { propertyName: "panels", predicate: TabPanelDirective }], usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"flex flex-row py-2 text-on-surface dark:text-on-surface-variant-dark\"\n  [ngClass]=\"{\n    'my-4 gap-2 border-y border-surface-variant dark:border-surface-variant-dark': border\n  }\">\n  <ng-content select=\"[header]\" />\n</div>\n<ng-content select=\"[body]\" />\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TabGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-tab-group', imports: [NgClass, NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex flex-row py-2 text-on-surface dark:text-on-surface-variant-dark\"\n  [ngClass]=\"{\n    'my-4 gap-2 border-y border-surface-variant dark:border-surface-variant-dark': border\n  }\">\n  <ng-content select=\"[header]\" />\n</div>\n<ng-content select=\"[body]\" />\n" }]
        }], propDecorators: { border: [{
                type: Input
            }], activeTab: [{
                type: Input
            }], buttons: [{
                type: ContentChildren,
                args: [TabButtonComponent]
            }], panels: [{
                type: ContentChildren,
                args: [TabPanelDirective]
            }] } });

class CardComponent {
    constructor() {
        this.header = '';
        this.subHeader = '';
        this.title = '';
        this.subTitle = '';
        this.avatar = '';
        this.image = '';
        this.disposition = 'vertical';
        this.imageThumbnail = '';
        this.withActions = false;
        this.acceptButton = new EventEmitter();
        this.cancelButton = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: CardComponent, isStandalone: true, selector: "ct-card", inputs: { header: "header", subHeader: "subHeader", title: "title", subTitle: "subTitle", avatar: "avatar", image: "image", disposition: "disposition", imageThumbnail: "imageThumbnail", withActions: "withActions" }, outputs: { acceptButton: "acceptButton", cancelButton: "cancelButton" }, ngImport: i0, template: "@if (disposition === 'vertical') {\n  <div\n    class=\"flex w-full flex-col rounded-xl bg-surface font-primary text-on-surface dark:bg-surface-dark dark:text-on-surface-dark\">\n    <div class=\"flex flex-row items-center gap-4 px-4 py-2\">\n      <ct-avatar [picture]=\"avatar\" [title]=\"title\" />\n      <div class=\"w-fit flex-1\">\n        <div class=\"flex flex-col overflow-hidden\">\n          @if (header) {\n            <span class=\"overflow-hidden text-ellipsis text-lg font-semibold\" [innerHTML]=\"header\"></span>\n          }\n          @if (subHeader) {\n            <span class=\"overflow-hidden text-ellipsis text-sm\" [innerHTML]=\"subHeader\"></span>\n          }\n        </div>\n      </div>\n      <div class=\"relative flex-none rounded-r-xl\">\n        @if (imageThumbnail) {\n          <img class=\"flex max-w-24 rounded-tr-xl object-cover\" [src]=\"imageThumbnail\" [alt]=\"title\" />\n        } @else {\n          <ng-content select=\"[header-extra]\" />\n        }\n      </div>\n    </div>\n    @if (image) {\n      <img class=\"size-full object-cover\" [src]=\"image\" [alt]=\"title\" />\n    }\n    <ng-content select=\"[image-vertical]\" />\n    @if (title || subTitle) {\n      <div class=\"flex w-full flex-col px-4 py-2\">\n        <div class=\"text-xl font-bold\" [innerHTML]=\"title\"></div>\n        <div class=\"mb-2 text-base font-semibold\" [innerHTML]=\"subTitle\"></div>\n        <div class=\"flex w-fit grow-0\"><ng-content select=\"[body]\" /></div>\n      </div>\n    }\n    @if (withActions) {\n      <div class=\"flex flex-row justify-end gap-2 px-4 py-2\">\n        <ct-button text=\"test\" variant=\"flat\" (click)=\"acceptButton.emit()\" />\n        <ct-button text=\"test\" variant=\"flat\" type=\"neutral\" (click)=\"cancelButton.emit()\" />\n      </div>\n    }\n  </div>\n} @else {\n  <div\n    class=\"flex w-full flex-row items-stretch rounded-xl bg-surface font-primary text-on-surface dark:bg-surface-dark dark:text-on-surface-dark\">\n    <div class=\"h-full w-3/4 flex-none\">\n      @if (image) {\n        <img class=\"size-full rounded-l-xl object-cover\" [src]=\"image\" [alt]=\"title\" />\n      }\n      <ng-content select=\"[image-horizontal]\" />\n    </div>\n    <div class=\"flex w-1/4 flex-col justify-between\">\n      <div class=\"flex shrink-0 flex-row items-center gap-4 px-4 py-2\">\n        <div class=\"flex-none\">\n          <ct-avatar [picture]=\"avatar\" [title]=\"title\" />\n        </div>\n        <div class=\"flex w-fit flex-1 flex-col overflow-hidden\">\n          @if (header) {\n            <span class=\"overflow-hidden text-lg font-semibold\" [innerHTML]=\"header\"></span>\n          }\n          @if (subHeader) {\n            <span class=\"overflow-hidden text-ellipsis text-sm\" [innerHTML]=\"subHeader\"></span>\n          }\n        </div>\n      </div>\n      <div class=\"flex-auto overflow-y-auto\">\n        <ng-content select=\"[body-horizontal]\" />\n      </div>\n      <article class=\"flex-none flex-col gap-2\">\n        <p class=\"text-wrap px-4 text-xl font-bold\" [innerHTML]=\"title\"></p>\n        <p class=\"mb-2 text-wrap px-4 text-base font-semibold\" [innerHTML]=\"subTitle\"></p>\n        <ng-content select=\"[footer-horizontal]\" />\n      </article>\n    </div>\n  </div>\n}\n", dependencies: [{ kind: "component", type: AvatarComponent, selector: "ct-avatar", inputs: ["picture", "title", "size", "imageType"] }, { kind: "component", type: ButtonComponent, selector: "ct-button", inputs: ["text", "icon", "iconPosition", "role", "disabled", "fullSize", "size", "type", "variant"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-card', imports: [AvatarComponent, ButtonComponent, SafeImagePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (disposition === 'vertical') {\n  <div\n    class=\"flex w-full flex-col rounded-xl bg-surface font-primary text-on-surface dark:bg-surface-dark dark:text-on-surface-dark\">\n    <div class=\"flex flex-row items-center gap-4 px-4 py-2\">\n      <ct-avatar [picture]=\"avatar\" [title]=\"title\" />\n      <div class=\"w-fit flex-1\">\n        <div class=\"flex flex-col overflow-hidden\">\n          @if (header) {\n            <span class=\"overflow-hidden text-ellipsis text-lg font-semibold\" [innerHTML]=\"header\"></span>\n          }\n          @if (subHeader) {\n            <span class=\"overflow-hidden text-ellipsis text-sm\" [innerHTML]=\"subHeader\"></span>\n          }\n        </div>\n      </div>\n      <div class=\"relative flex-none rounded-r-xl\">\n        @if (imageThumbnail) {\n          <img class=\"flex max-w-24 rounded-tr-xl object-cover\" [src]=\"imageThumbnail\" [alt]=\"title\" />\n        } @else {\n          <ng-content select=\"[header-extra]\" />\n        }\n      </div>\n    </div>\n    @if (image) {\n      <img class=\"size-full object-cover\" [src]=\"image\" [alt]=\"title\" />\n    }\n    <ng-content select=\"[image-vertical]\" />\n    @if (title || subTitle) {\n      <div class=\"flex w-full flex-col px-4 py-2\">\n        <div class=\"text-xl font-bold\" [innerHTML]=\"title\"></div>\n        <div class=\"mb-2 text-base font-semibold\" [innerHTML]=\"subTitle\"></div>\n        <div class=\"flex w-fit grow-0\"><ng-content select=\"[body]\" /></div>\n      </div>\n    }\n    @if (withActions) {\n      <div class=\"flex flex-row justify-end gap-2 px-4 py-2\">\n        <ct-button text=\"test\" variant=\"flat\" (click)=\"acceptButton.emit()\" />\n        <ct-button text=\"test\" variant=\"flat\" type=\"neutral\" (click)=\"cancelButton.emit()\" />\n      </div>\n    }\n  </div>\n} @else {\n  <div\n    class=\"flex w-full flex-row items-stretch rounded-xl bg-surface font-primary text-on-surface dark:bg-surface-dark dark:text-on-surface-dark\">\n    <div class=\"h-full w-3/4 flex-none\">\n      @if (image) {\n        <img class=\"size-full rounded-l-xl object-cover\" [src]=\"image\" [alt]=\"title\" />\n      }\n      <ng-content select=\"[image-horizontal]\" />\n    </div>\n    <div class=\"flex w-1/4 flex-col justify-between\">\n      <div class=\"flex shrink-0 flex-row items-center gap-4 px-4 py-2\">\n        <div class=\"flex-none\">\n          <ct-avatar [picture]=\"avatar\" [title]=\"title\" />\n        </div>\n        <div class=\"flex w-fit flex-1 flex-col overflow-hidden\">\n          @if (header) {\n            <span class=\"overflow-hidden text-lg font-semibold\" [innerHTML]=\"header\"></span>\n          }\n          @if (subHeader) {\n            <span class=\"overflow-hidden text-ellipsis text-sm\" [innerHTML]=\"subHeader\"></span>\n          }\n        </div>\n      </div>\n      <div class=\"flex-auto overflow-y-auto\">\n        <ng-content select=\"[body-horizontal]\" />\n      </div>\n      <article class=\"flex-none flex-col gap-2\">\n        <p class=\"text-wrap px-4 text-xl font-bold\" [innerHTML]=\"title\"></p>\n        <p class=\"mb-2 text-wrap px-4 text-base font-semibold\" [innerHTML]=\"subTitle\"></p>\n        <ng-content select=\"[footer-horizontal]\" />\n      </article>\n    </div>\n  </div>\n}\n" }]
        }], propDecorators: { header: [{
                type: Input
            }], subHeader: [{
                type: Input
            }], title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], avatar: [{
                type: Input
            }], image: [{
                type: Input
            }], disposition: [{
                type: Input
            }], imageThumbnail: [{
                type: Input
            }], withActions: [{
                type: Input
            }], acceptButton: [{
                type: Output
            }], cancelButton: [{
                type: Output
            }] } });

class FormGenericComponent {
    constructor(formGroupDirective) {
        this.formGroupDirective = formGroupDirective;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.changeDetectorRef = inject(ChangeDetectorRef);
    }
    hasErrors(formControl) {
        return (formControl && /*!formControl.pristine &&*/ formControl.touched && !!formControl.errors);
    }
    get formControl() {
        return this.formGroupDirective && this.formGroupDirective.form.get(this.formControlName);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    triggerChange(value) {
        if (value && this.formControl)
            this.formControl.markAsDirty();
        this.onChange(value);
    }
    triggerTouched() {
        this.onTouched();
    }
    triggerMarkCheck() {
        this.changeDetectorRef.markForCheck();
    }
    triggerChangeDetection() {
        this.changeDetectorRef.detectChanges();
    }
}

class FormErrorComponent {
    constructor() {
        this.size = 'base';
        this.hasErrors = false;
        this.fullSize = false;
        this.helper = '';
        this.errorMessages = {};
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: FormErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: FormErrorComponent, isStandalone: true, selector: "ct-form-alert", inputs: { errors: "errors", size: "size", hasErrors: "hasErrors", fullSize: "fullSize", helper: "helper", errorMessages: "errorMessages" }, ngImport: i0, template: "<div\n  class=\"flex min-h-4 flex-col justify-between gap-1 font-primary text-xs transition-opacity duration-500 ease-in-out sm:flex-row sm:items-center\"\n  [class.w-full]=\"fullSize\"\n  [class.w-fit]=\"!fullSize\"\n  [class.opacity-0]=\"!hasErrors\"\n  [class.opacity-100]=\"hasErrors\">\n  @if (hasErrors) {\n    <div class=\"flex flex-row items-center gap-1 text-error dark:text-error-variant-dark\">\n      <ct-icon icon=\"exclamation-triangle\" size=\"sm\" />\n      @for (error of errors | keyvalue; track error; let isLast = $last) {\n        <span class=\"after:mx-1 after:inline-block after:content-[','] last:after:content-none\">{{\n          errorMessages[error.key] ? errorMessages[error.key] : error.key\n        }}</span>\n      }\n    </div>\n    @if (helper) {\n      <span>{{ helper }}</span>\n    }\n  }\n</div>\n", dependencies: [{ kind: "pipe", type: KeyValuePipe, name: "keyvalue" }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: FormErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-form-alert', imports: [AlertComponent, KeyValuePipe, IconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex min-h-4 flex-col justify-between gap-1 font-primary text-xs transition-opacity duration-500 ease-in-out sm:flex-row sm:items-center\"\n  [class.w-full]=\"fullSize\"\n  [class.w-fit]=\"!fullSize\"\n  [class.opacity-0]=\"!hasErrors\"\n  [class.opacity-100]=\"hasErrors\">\n  @if (hasErrors) {\n    <div class=\"flex flex-row items-center gap-1 text-error dark:text-error-variant-dark\">\n      <ct-icon icon=\"exclamation-triangle\" size=\"sm\" />\n      @for (error of errors | keyvalue; track error; let isLast = $last) {\n        <span class=\"after:mx-1 after:inline-block after:content-[','] last:after:content-none\">{{\n          errorMessages[error.key] ? errorMessages[error.key] : error.key\n        }}</span>\n      }\n    </div>\n    @if (helper) {\n      <span>{{ helper }}</span>\n    }\n  }\n</div>\n" }]
        }], propDecorators: { errors: [{
                type: Input,
                args: [{ required: true }]
            }], size: [{
                type: Input
            }], hasErrors: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], helper: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }] } });

class LabelComponent {
    constructor() {
        this.text = '';
        this.type = 'primary';
        this.formControlName = '';
        this.hasError = false;
        this.showError = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: LabelComponent, isStandalone: true, selector: "ct-form-label", inputs: { text: "text", type: "type", formControlName: "formControlName", hasError: "hasError", showError: "showError" }, ngImport: i0, template: "<label\n  class=\"flex font-primary text-sm font-medium\"\n  [ngClass]=\"{\n    'text-on-primary dark:text-on-primary-dark': !hasError,\n    'text-error dark:text-error-variant-dark': type === 'error' || (hasError && showError),\n    'text-warning dark:text-warning-variant-dark': type === 'warning'\n  }\"\n  [for]=\"formControlName\"\n  >{{ text }}</label\n>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-form-label', imports: [NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: "<label\n  class=\"flex font-primary text-sm font-medium\"\n  [ngClass]=\"{\n    'text-on-primary dark:text-on-primary-dark': !hasError,\n    'text-error dark:text-error-variant-dark': type === 'error' || (hasError && showError),\n    'text-warning dark:text-warning-variant-dark': type === 'warning'\n  }\"\n  [for]=\"formControlName\"\n  >{{ text }}</label\n>\n" }]
        }], propDecorators: { text: [{
                type: Input,
                args: [{ required: true }]
            }], type: [{
                type: Input
            }], formControlName: [{
                type: Input
            }], hasError: [{
                type: Input
            }], showError: [{
                type: Input
            }] } });

class OptionComponent {
    constructor() {
        this.label = '';
        this.icon = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: OptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: OptionComponent, isStandalone: true, selector: "ct-option", inputs: { label: "label", icon: "icon" }, ngImport: i0, template: "<div\n  class=\"flex cursor-pointer flex-row rounded-md px-4 py-2 text-sm hover:bg-surface-variant dark:hover:bg-surface-variant-dark\">\n  @if (icon) {\n    <ct-icon [icon]=\"icon\" />\n  }\n  {{ label }}\n</div>\n", dependencies: [{ kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: OptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-option', imports: [IconComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex cursor-pointer flex-row rounded-md px-4 py-2 text-sm hover:bg-surface-variant dark:hover:bg-surface-variant-dark\">\n  @if (icon) {\n    <ct-icon [icon]=\"icon\" />\n  }\n  {{ label }}\n</div>\n" }]
        }], propDecorators: { label: [{
                type: Input,
                args: [{ required: true }]
            }], icon: [{
                type: Input
            }] } });

/**
 * Creates a value accessor provider for a form component.
 * @param component - The component that implements the NG_VALUE_ACCESSOR interface.
 * @returns An ExistingProvider object for the value accessor.
 */
const provideValueAccessor = (component) => ({
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true,
});
/**
 * Creates a control container provider using FormGroupDirective.
 * @returns An ExistingProvider object for the control container.
 */
const provideControlContainer = () => ({
    provide: ControlContainer,
    useExisting: FormGroupDirective,
});

class InputComponent extends FormGenericComponent {
    onFocusOut() {
        this.triggerTouched();
    }
    constructor(formGroupDirective) {
        super(formGroupDirective);
        this.formGroupDirective = formGroupDirective;
        this.key = '';
        this.type = 'text';
        this.value = '';
        this.label = '';
        this.icon = '';
        this.helper = '';
        this.placeholder = '';
        this.symbol = '';
        this.canDelete = false;
        this.fullSize = true;
        this.showError = false;
        this.iconPosition = 'left';
        this.disposition = 'vertical';
        this.typed = new EventEmitter();
        this.showDelete$ = new BehaviorSubject(false);
    }
    input(event) {
        const value = event.target.value;
        if (this.canDelete) {
            this.showDelete$.next(!!value);
        }
        this.setValue(value);
    }
    clearValue() {
        this.showDelete$.next(false);
        this.triggerTouched();
        this.setValue(null);
    }
    setValue(value, propagate = true) {
        this.value = value;
        if (propagate) {
            this.triggerChange(value);
            this.typed.emit(value);
        }
    }
    writeValue(value) {
        if (value && this.canDelete)
            this.showDelete$.next(true);
        this.triggerMarkCheck();
        this.setValue(value, false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: InputComponent, deps: [{ token: i1$2.FormGroupDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: InputComponent, isStandalone: true, selector: "ct-input", inputs: { formControlName: "formControlName", key: "key", type: "type", value: "value", label: "label", icon: "icon", helper: "helper", placeholder: "placeholder", symbol: "symbol", canDelete: "canDelete", fullSize: "fullSize", showError: "showError", min: "min", max: "max", iconPosition: "iconPosition", disposition: "disposition" }, outputs: { typed: "typed" }, host: { listeners: { "focusout": "onFocusOut()" } }, providers: [provideValueAccessor(forwardRef(() => InputComponent))], usesInheritance: true, ngImport: i0, template: "<div\n  class=\"flex\"\n  [class.w-fit]=\"!fullSize\"\n  [class.w-full]=\"fullSize\"\n  [ngClass]=\"{\n    'items-center gap-4': disposition === 'horizontal',\n    'flex-col gap-0.5 items-start': disposition === 'vertical'\n  }\">\n  @if (label) {\n    <ct-form-label [text]=\"label\" [hasError]=\"hasErrors(formControl)\" [showError]=\"showError\" />\n  }\n  <div\n    class=\"relative inline-block rounded-md text-on-surface dark:text-on-surface-dark\"\n    [class.w-fit]=\"!fullSize\"\n    [class.w-full]=\"fullSize\">\n    <input\n      tabindex=\"0\"\n      [type]=\"type\"\n      [min]=\"min\"\n      [max]=\"max\"\n      class=\"h-9 rounded-md border bg-primary-50 font-primary text-sm outline-primary hover:border-neutral-600 dark:bg-primary-950 dark:outline-primary-dark focus:dark:border-primary-dark\"\n      [class.px-4]=\"!icon || !symbol\"\n      [ngClass]=\"{\n        'px-4': !icon,\n        'pr-4 pl-10': icon && iconPosition === 'left',\n        'pl-4 pr-10': (icon && iconPosition === 'right') || symbol || canDelete\n      }\"\n      [class.w-fit]=\"!fullSize\"\n      [class.w-full]=\"fullSize\"\n      [class.border-neutral-300]=\"!hasErrors(formControl) || !showError\"\n      [class.border-error]=\"hasErrors(formControl) && showError\"\n      [class.border-success]=\"formControl && formControl.valid && showError\"\n      [value]=\"value\"\n      [placeholder]=\"placeholder\"\n      (input)=\"input($event)\" />\n    @if (icon) {\n      <ct-icon\n        class=\"absolute top-2\"\n        [class.left-3]=\"iconPosition === 'left'\"\n        [class.right-3]=\"iconPosition === 'right'\"\n        [icon]=\"icon\" />\n    }\n    @if (symbol) {\n      <span class=\"absolute right-3 top-2.5 text-xs text-neutral-600 dark:text-neutral-300\">{{ symbol }}</span>\n    }\n    @if (showDelete$ | async) {\n      <ct-icon class=\"absolute right-3 top-2.5 cursor-pointer\" icon=\"x-mark\" size=\"sm\" (click)=\"clearValue()\" />\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [fullSize]=\"fullSize\"\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LabelComponent, selector: "ct-form-label", inputs: ["text", "type", "formControlName", "hasError", "showError"] }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }, { kind: "component", type: FormErrorComponent, selector: "ct-form-alert", inputs: ["errors", "size", "hasErrors", "fullSize", "helper", "errorMessages"] }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-input', imports: [NgClass, AsyncPipe, LabelComponent, IconComponent, FormErrorComponent], providers: [provideValueAccessor(forwardRef(() => InputComponent))], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex\"\n  [class.w-fit]=\"!fullSize\"\n  [class.w-full]=\"fullSize\"\n  [ngClass]=\"{\n    'items-center gap-4': disposition === 'horizontal',\n    'flex-col gap-0.5 items-start': disposition === 'vertical'\n  }\">\n  @if (label) {\n    <ct-form-label [text]=\"label\" [hasError]=\"hasErrors(formControl)\" [showError]=\"showError\" />\n  }\n  <div\n    class=\"relative inline-block rounded-md text-on-surface dark:text-on-surface-dark\"\n    [class.w-fit]=\"!fullSize\"\n    [class.w-full]=\"fullSize\">\n    <input\n      tabindex=\"0\"\n      [type]=\"type\"\n      [min]=\"min\"\n      [max]=\"max\"\n      class=\"h-9 rounded-md border bg-primary-50 font-primary text-sm outline-primary hover:border-neutral-600 dark:bg-primary-950 dark:outline-primary-dark focus:dark:border-primary-dark\"\n      [class.px-4]=\"!icon || !symbol\"\n      [ngClass]=\"{\n        'px-4': !icon,\n        'pr-4 pl-10': icon && iconPosition === 'left',\n        'pl-4 pr-10': (icon && iconPosition === 'right') || symbol || canDelete\n      }\"\n      [class.w-fit]=\"!fullSize\"\n      [class.w-full]=\"fullSize\"\n      [class.border-neutral-300]=\"!hasErrors(formControl) || !showError\"\n      [class.border-error]=\"hasErrors(formControl) && showError\"\n      [class.border-success]=\"formControl && formControl.valid && showError\"\n      [value]=\"value\"\n      [placeholder]=\"placeholder\"\n      (input)=\"input($event)\" />\n    @if (icon) {\n      <ct-icon\n        class=\"absolute top-2\"\n        [class.left-3]=\"iconPosition === 'left'\"\n        [class.right-3]=\"iconPosition === 'right'\"\n        [icon]=\"icon\" />\n    }\n    @if (symbol) {\n      <span class=\"absolute right-3 top-2.5 text-xs text-neutral-600 dark:text-neutral-300\">{{ symbol }}</span>\n    }\n    @if (showDelete$ | async) {\n      <ct-icon class=\"absolute right-3 top-2.5 cursor-pointer\" icon=\"x-mark\" size=\"sm\" (click)=\"clearValue()\" />\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [fullSize]=\"fullSize\"\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }], propDecorators: { formControlName: [{
                type: Input
            }], key: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], helper: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], symbol: [{
                type: Input
            }], canDelete: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], showError: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], disposition: [{
                type: Input
            }], typed: [{
                type: Output
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }] } });

class AutocompleteComponent extends FormGenericComponent {
    constructor(formGroupDirective) {
        super(formGroupDirective);
        this.destroyRef = inject(DestroyRef);
        this.key = '';
        this.options = [];
        this.label = '';
        this.icon = '';
        this.helper = '';
        this.placeholder = '';
        this.value = '';
        this.inputValue = '';
        this.iconPosition = 'left';
        this.disposition = 'vertical';
        this.fullSize = true;
        this.multiple = false;
        this.showError = false;
        this.typed = new EventEmitter();
        this.selected = new EventEmitter();
        this.focusOut$ = new Subject();
        this.inputValue$ = new BehaviorSubject('');
        this.focusOut$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(150)).subscribe(() => {
            this.options = [];
            this.triggerTouched();
            this.triggerMarkCheck();
        });
    }
    input(value) {
        if (!value)
            this.options = [];
        if (this.value && !this.multiple) {
            this.setValue(null);
            this.inputValue$.next('');
            return;
        }
        if (this.multiple) {
            this.inputValue$.next(value);
        }
        this.typed.emit(value);
    }
    setValue(value, propagate = true) {
        this.value = value;
        if (propagate) {
            this.triggerChange(value);
            this.selected.emit(value);
        }
        if (value) {
            const selectedOption = this.options.find(option => option.key === value);
            if (!this.multiple)
                this.inputValue$.next(selectedOption ? selectedOption.label : this.placeholder);
            else {
                const currentWords = this.inputValue$.getValue().split(' ');
                // replacing the last word with the current 'label' value
                currentWords[currentWords.length - 1] = selectedOption ? selectedOption.label : this.placeholder;
                this.inputValue$.next(currentWords.join(' '));
            }
        }
    }
    writeValue(value) {
        this.triggerMarkCheck();
        this.setValue(value, false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AutocompleteComponent, deps: [{ token: i1$2.FormGroupDirective }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: AutocompleteComponent, isStandalone: true, selector: "ct-autocomplete", inputs: { formControlName: "formControlName", key: "key", options: "options", label: "label", icon: "icon", helper: "helper", placeholder: "placeholder", value: "value", inputValue: "inputValue", iconPosition: "iconPosition", disposition: "disposition", fullSize: "fullSize", multiple: "multiple", showError: "showError" }, outputs: { typed: "typed", selected: "selected" }, providers: [provideValueAccessor(forwardRef(() => AutocompleteComponent))], usesInheritance: true, ngImport: i0, template: "<div class=\"flex gap-1 font-primary\" [class.flex-col]=\"disposition === 'vertical'\">\n  @if (label) {\n    <ct-form-label\n      [text]=\"label\"\n      [hasError]=\"hasErrors(formControl)\"\n      [showError]=\"showError\"\n      [formControlName]=\"formControlName\" />\n  }\n  <div class=\"flex flex-col\" [class.w-full]=\"fullSize\" [class.w-fit]=\"!fullSize\">\n    <ct-input\n      key=\"autocomplete\"\n      [canDelete]=\"true\"\n      [helper]=\"helper\"\n      [value]=\"inputValue$ | async\"\n      [placeholder]=\"placeholder\"\n      (typed)=\"input($event)\"\n      (focusout)=\"focusOut$.next($event)\" />\n    @if (options && options.length > 0) {\n      <div class=\"relative flex flex-col\">\n        <div\n          [class.w-full]=\"fullSize\"\n          [class.w-fit]=\"!fullSize\"\n          class=\"absolute top-0.5 z-10 flex max-h-72 flex-col overflow-y-auto rounded-md border border-neutral-400 bg-surface text-on-surface shadow-lg dark:bg-surface-dark dark:text-on-surface-dark\">\n          @for (option of options; track option) {\n            <ct-option (click)=\"setValue(option.key)\" [label]=\"option.label\" [icon]=\"option.icon!\" />\n          }\n        </div>\n      </div>\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n", dependencies: [{ kind: "component", type: FormErrorComponent, selector: "ct-form-alert", inputs: ["errors", "size", "hasErrors", "fullSize", "helper", "errorMessages"] }, { kind: "component", type: LabelComponent, selector: "ct-form-label", inputs: ["text", "type", "formControlName", "hasError", "showError"] }, { kind: "component", type: OptionComponent, selector: "ct-option", inputs: ["label", "icon"] }, { kind: "component", type: InputComponent, selector: "ct-input", inputs: ["formControlName", "key", "type", "value", "label", "icon", "helper", "placeholder", "symbol", "canDelete", "fullSize", "showError", "min", "max", "iconPosition", "disposition"], outputs: ["typed"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-autocomplete', imports: [IconComponent, FormErrorComponent, LabelComponent, OptionComponent, InputComponent, NgClass, AsyncPipe], providers: [provideValueAccessor(forwardRef(() => AutocompleteComponent))], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex gap-1 font-primary\" [class.flex-col]=\"disposition === 'vertical'\">\n  @if (label) {\n    <ct-form-label\n      [text]=\"label\"\n      [hasError]=\"hasErrors(formControl)\"\n      [showError]=\"showError\"\n      [formControlName]=\"formControlName\" />\n  }\n  <div class=\"flex flex-col\" [class.w-full]=\"fullSize\" [class.w-fit]=\"!fullSize\">\n    <ct-input\n      key=\"autocomplete\"\n      [canDelete]=\"true\"\n      [helper]=\"helper\"\n      [value]=\"inputValue$ | async\"\n      [placeholder]=\"placeholder\"\n      (typed)=\"input($event)\"\n      (focusout)=\"focusOut$.next($event)\" />\n    @if (options && options.length > 0) {\n      <div class=\"relative flex flex-col\">\n        <div\n          [class.w-full]=\"fullSize\"\n          [class.w-fit]=\"!fullSize\"\n          class=\"absolute top-0.5 z-10 flex max-h-72 flex-col overflow-y-auto rounded-md border border-neutral-400 bg-surface text-on-surface shadow-lg dark:bg-surface-dark dark:text-on-surface-dark\">\n          @for (option of options; track option) {\n            <ct-option (click)=\"setValue(option.key)\" [label]=\"option.label\" [icon]=\"option.icon!\" />\n          }\n        </div>\n      </div>\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$2.FormGroupDirective }], propDecorators: { formControlName: [{
                type: Input
            }], key: [{
                type: Input,
                args: [{ required: true }]
            }], options: [{
                type: Input,
                args: [{ required: true }]
            }], label: [{
                type: Input
            }], icon: [{
                type: Input
            }], helper: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], inputValue: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }], disposition: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], multiple: [{
                type: Input
            }], showError: [{
                type: Input
            }], typed: [{
                type: Output
            }], selected: [{
                type: Output
            }] } });

class SelectComponent extends FormGenericComponent {
    constructor(formGroupDirective, destroyRef) {
        super(formGroupDirective);
        this.formGroupDirective = formGroupDirective;
        this.destroyRef = destroyRef;
        this.focusOut$ = new Subject();
        this.isOpen = false;
        this.option = '';
        this.key = '';
        this.options = [];
        this.label = '';
        this.helper = '';
        this.placeholder = '';
        this.value = '';
        this.disposition = 'vertical';
        this.fullSize = true;
        this.showError = false;
        this.selected = new EventEmitter();
    }
    ngOnInit() {
        this.selectOption(this.value, false);
        this.focusOut$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200)).subscribe(() => {
            this.triggerMarkCheck();
            this.close();
        });
    }
    ngOnChanges(changes) {
        if (changes['options'])
            this.selectOption(this.value, false);
    }
    toggle() {
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            this.triggerTouched();
        }
    }
    close() {
        this.isOpen = false;
        this.triggerTouched();
    }
    selectOption(key, propagate = true) {
        const selectedOption = this.options.find(option => option.key === key);
        this.option = key === null ? this.placeholder : selectedOption?.label;
        if (propagate) {
            this.selected.emit(key);
            this.triggerChange(selectedOption?.key ?? null);
            this.close();
        }
    }
    writeValue(value) {
        this.triggerMarkCheck();
        this.selectOption(value, false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SelectComponent, deps: [{ token: i1$2.FormGroupDirective, optional: true }, { token: i0.DestroyRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: SelectComponent, isStandalone: true, selector: "ct-select", inputs: { formControlName: "formControlName", key: "key", options: "options", label: "label", helper: "helper", placeholder: "placeholder", value: "value", disposition: "disposition", fullSize: "fullSize", showError: "showError" }, outputs: { selected: "selected" }, providers: [provideValueAccessor(forwardRef(() => SelectComponent))], viewQueries: [{ propertyName: "trigger", first: true, predicate: ["triggerElement"], descendants: true }, { propertyName: "panel", first: true, predicate: ["optionsPanel"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div\n  class=\"flex gap-1 font-primary\"\n  [class.items-start]=\"disposition === 'vertical'\"\n  [class.flex-col]=\"disposition === 'vertical'\">\n  @if (label) {\n    <ct-form-label\n      [class.grow]=\"disposition === 'horizontal'\"\n      [text]=\"label\"\n      [hasError]=\"hasErrors(formControl)\"\n      [showError]=\"showError\" />\n  }\n  <div class=\"flex flex-col\" [class.w-full]=\"fullSize\" [class.w-fit]=\"!fullSize\">\n    <div\n      tabindex=\"0\"\n      class=\"flex cursor-pointer flex-row items-center justify-between rounded-md border bg-surface px-4 py-2 text-sm text-on-surface dark:bg-surface-dark dark:text-on-surface-dark\"\n      [class.border-error]=\"hasErrors(formControl) && showError\"\n      [class.border-neutral-300]=\"!hasErrors(formControl) || !showError\"\n      [class.text-on-surface]=\"option !== placeholder\"\n      (focusout)=\"focusOut$.next($event)\"\n      (click)=\"toggle()\">\n      <span [class.text-neutral-500]=\"option === placeholder\">{{ option }}</span>\n      <ct-icon class=\"flex\" [size]=\"'sm'\" [icon]=\"isOpen ? 'chevron-up' : 'chevron-down'\" />\n    </div>\n    <!-- [ctOverlay]=\"dropDown\"\n    [ctOverlayCloseOnClick]=\"true\"\n    ctOverlayPosition=\"vertical\"\n    <ng-template #dropDown>\n      <div\n        [class.w-full]=\"fullSize\"\n        [class.w-fit]=\"!fullSize\"\n        class=\"flex max-h-72 flex-col overflow-y-auto rounded-md border border-neutral-400 bg-surface text-on-surface shadow-lg dark:bg-surface-dark dark:text-on-surface-dark\">\n        @if (placeholder) {\n          <ct-option (click)=\"selectOption(null)\" [label]=\"placeholder\" />\n        }\n        @for (option of options; track option) {\n          <ct-option (click)=\"selectOption(option.key)\" [label]=\"option.label\" [icon]=\"option.icon!\" />\n        }\n      </div>\n    </ng-template> -->\n    @if (isOpen) {\n      <div class=\"relative flex flex-col\">\n        <div\n          [class.w-full]=\"fullSize\"\n          [class.w-fit]=\"!fullSize\"\n          class=\"absolute top-0.5 z-10 flex max-h-72 flex-col overflow-y-auto rounded-md border border-neutral-400 bg-surface text-on-surface shadow-lg dark:bg-surface-dark dark:text-on-surface-dark\">\n          @if (placeholder) {\n            <ct-option (click)=\"selectOption(null)\" [label]=\"placeholder\" />\n          }\n          @for (option of options; track option) {\n            <ct-option (click)=\"selectOption(option.key)\" [label]=\"option.label\" [icon]=\"option.icon!\" />\n          }\n        </div>\n      </div>\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n", styles: ["vertical-overlay{width:100%}\n"], dependencies: [{ kind: "component", type: OptionComponent, selector: "ct-option", inputs: ["label", "icon"] }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }, { kind: "component", type: LabelComponent, selector: "ct-form-label", inputs: ["text", "type", "formControlName", "hasError", "showError"] }, { kind: "component", type: FormErrorComponent, selector: "ct-form-alert", inputs: ["errors", "size", "hasErrors", "fullSize", "helper", "errorMessages"] }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-select', imports: [
                        OptionComponent,
                        ButtonComponent,
                        IconComponent,
                        LabelComponent,
                        AlertComponent,
                        FormErrorComponent,
                        OverlayDirective,
                    ], providers: [provideValueAccessor(forwardRef(() => SelectComponent))], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex gap-1 font-primary\"\n  [class.items-start]=\"disposition === 'vertical'\"\n  [class.flex-col]=\"disposition === 'vertical'\">\n  @if (label) {\n    <ct-form-label\n      [class.grow]=\"disposition === 'horizontal'\"\n      [text]=\"label\"\n      [hasError]=\"hasErrors(formControl)\"\n      [showError]=\"showError\" />\n  }\n  <div class=\"flex flex-col\" [class.w-full]=\"fullSize\" [class.w-fit]=\"!fullSize\">\n    <div\n      tabindex=\"0\"\n      class=\"flex cursor-pointer flex-row items-center justify-between rounded-md border bg-surface px-4 py-2 text-sm text-on-surface dark:bg-surface-dark dark:text-on-surface-dark\"\n      [class.border-error]=\"hasErrors(formControl) && showError\"\n      [class.border-neutral-300]=\"!hasErrors(formControl) || !showError\"\n      [class.text-on-surface]=\"option !== placeholder\"\n      (focusout)=\"focusOut$.next($event)\"\n      (click)=\"toggle()\">\n      <span [class.text-neutral-500]=\"option === placeholder\">{{ option }}</span>\n      <ct-icon class=\"flex\" [size]=\"'sm'\" [icon]=\"isOpen ? 'chevron-up' : 'chevron-down'\" />\n    </div>\n    <!-- [ctOverlay]=\"dropDown\"\n    [ctOverlayCloseOnClick]=\"true\"\n    ctOverlayPosition=\"vertical\"\n    <ng-template #dropDown>\n      <div\n        [class.w-full]=\"fullSize\"\n        [class.w-fit]=\"!fullSize\"\n        class=\"flex max-h-72 flex-col overflow-y-auto rounded-md border border-neutral-400 bg-surface text-on-surface shadow-lg dark:bg-surface-dark dark:text-on-surface-dark\">\n        @if (placeholder) {\n          <ct-option (click)=\"selectOption(null)\" [label]=\"placeholder\" />\n        }\n        @for (option of options; track option) {\n          <ct-option (click)=\"selectOption(option.key)\" [label]=\"option.label\" [icon]=\"option.icon!\" />\n        }\n      </div>\n    </ng-template> -->\n    @if (isOpen) {\n      <div class=\"relative flex flex-col\">\n        <div\n          [class.w-full]=\"fullSize\"\n          [class.w-fit]=\"!fullSize\"\n          class=\"absolute top-0.5 z-10 flex max-h-72 flex-col overflow-y-auto rounded-md border border-neutral-400 bg-surface text-on-surface shadow-lg dark:bg-surface-dark dark:text-on-surface-dark\">\n          @if (placeholder) {\n            <ct-option (click)=\"selectOption(null)\" [label]=\"placeholder\" />\n          }\n          @for (option of options; track option) {\n            <ct-option (click)=\"selectOption(option.key)\" [label]=\"option.label\" [icon]=\"option.icon!\" />\n          }\n        </div>\n      </div>\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n", styles: ["vertical-overlay{width:100%}\n"] }]
        }], ctorParameters: () => [{ type: i1$2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }, { type: i0.DestroyRef }], propDecorators: { formControlName: [{
                type: Input
            }], key: [{
                type: Input
            }], options: [{
                type: Input,
                args: [{ required: true }]
            }], label: [{
                type: Input
            }], helper: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], disposition: [{
                type: Input
            }], fullSize: [{
                type: Input
            }], showError: [{
                type: Input
            }], selected: [{
                type: Output
            }], trigger: [{
                type: ViewChild,
                args: ['triggerElement']
            }], panel: [{
                type: ViewChild,
                args: ['optionsPanel']
            }] } });

function integerValidator() {
    return (control) => {
        if (control.value !== null && !Number.isInteger(Number(control.value))) {
            return { notInteger: true };
        }
        return null;
    };
}

class InputNumberComponent extends InputComponent {
    constructor(formGroupDirective) {
        super(formGroupDirective);
        this.formGroupDirective = formGroupDirective;
        this.decimalPipe = inject(DecimalPipe);
        this.validate = 'integer';
    }
    onFocusOut() {
        this.formatNumber();
        this.triggerTouched();
    }
    onFocusIn() {
        this.reverseFormatNumber();
    }
    ngOnInit() {
        if (this.formControl && this.validate === 'integer')
            this.formControl.addValidators(integerValidator());
    }
    ngAfterViewInit() {
        this.formatNumber();
        this.triggerChangeDetection();
    }
    formatNumber() {
        try {
            this.value = this.decimalPipe.transform(this.value, '1.0-2') || '';
        }
        catch (_error) {
            return;
        }
    }
    reverseFormatNumber() {
        this.value = !isNaN(parseFloat(this.value.replace(/[^0-9.-]/g, '')))
            ? parseFloat(this.value.replace(/[^0-9.-]/g, ''))
            : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: InputNumberComponent, deps: [{ token: i1$2.FormGroupDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: InputNumberComponent, isStandalone: true, selector: "ct-input-number", inputs: { validate: "validate" }, host: { listeners: { "focusout": "onFocusOut()", "focusin": "onFocusIn()" } }, providers: [provideValueAccessor(forwardRef(() => InputNumberComponent)), DecimalPipe], usesInheritance: true, ngImport: i0, template: "<div\n  class=\"flex\"\n  [class.w-fit]=\"!fullSize\"\n  [class.w-full]=\"fullSize\"\n  [ngClass]=\"{\n    'items-center gap-4': disposition === 'horizontal',\n    'flex-col gap-0.5 items-start': disposition === 'vertical'\n  }\">\n  @if (label) {\n    <ct-form-label [text]=\"label\" [hasError]=\"hasErrors(formControl)\" [showError]=\"showError\" />\n  }\n  <div\n    class=\"relative inline-block rounded-md text-on-surface dark:text-on-surface-dark\"\n    [class.w-fit]=\"!fullSize\"\n    [class.w-full]=\"fullSize\">\n    <input\n      tabindex=\"0\"\n      [type]=\"type\"\n      [min]=\"min\"\n      [max]=\"max\"\n      class=\"h-9 rounded-md border bg-primary-50 font-primary text-sm outline-primary hover:border-neutral-600 dark:bg-primary-950 dark:outline-primary-dark focus:dark:border-primary-dark\"\n      [class.px-4]=\"!icon || !symbol\"\n      [ngClass]=\"{\n        'px-4': !icon,\n        'pr-4 pl-10': icon && iconPosition === 'left',\n        'pl-4 pr-10': (icon && iconPosition === 'right') || symbol || canDelete\n      }\"\n      [class.w-fit]=\"!fullSize\"\n      [class.w-full]=\"fullSize\"\n      [class.border-neutral-300]=\"!hasErrors(formControl) || !showError\"\n      [class.border-error]=\"hasErrors(formControl) && showError\"\n      [class.border-success]=\"formControl && formControl.valid && showError\"\n      [value]=\"value\"\n      [placeholder]=\"placeholder\"\n      (input)=\"input($event)\" />\n    @if (icon) {\n      <ct-icon\n        class=\"absolute top-2\"\n        [class.left-3]=\"iconPosition === 'left'\"\n        [class.right-3]=\"iconPosition === 'right'\"\n        [icon]=\"icon\" />\n    }\n    @if (symbol) {\n      <span class=\"absolute right-3 top-2.5 text-xs text-neutral-600 dark:text-neutral-300\">{{ symbol }}</span>\n    }\n    @if (showDelete$ | async) {\n      <ct-icon class=\"absolute right-3 top-2.5 cursor-pointer\" icon=\"x-mark\" size=\"sm\" (click)=\"clearValue()\" />\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [fullSize]=\"fullSize\"\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LabelComponent, selector: "ct-form-label", inputs: ["text", "type", "formControlName", "hasError", "showError"] }, { kind: "component", type: IconComponent, selector: "ct-icon", inputs: ["icon", "fill", "strokeWidth", "strokeColor", "size", "variant"] }, { kind: "component", type: FormErrorComponent, selector: "ct-form-alert", inputs: ["errors", "size", "hasErrors", "fullSize", "helper", "errorMessages"] }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: InputNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-input-number', imports: [NgClass, AsyncPipe, LabelComponent, IconComponent, FormErrorComponent], providers: [provideValueAccessor(forwardRef(() => InputNumberComponent)), DecimalPipe], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex\"\n  [class.w-fit]=\"!fullSize\"\n  [class.w-full]=\"fullSize\"\n  [ngClass]=\"{\n    'items-center gap-4': disposition === 'horizontal',\n    'flex-col gap-0.5 items-start': disposition === 'vertical'\n  }\">\n  @if (label) {\n    <ct-form-label [text]=\"label\" [hasError]=\"hasErrors(formControl)\" [showError]=\"showError\" />\n  }\n  <div\n    class=\"relative inline-block rounded-md text-on-surface dark:text-on-surface-dark\"\n    [class.w-fit]=\"!fullSize\"\n    [class.w-full]=\"fullSize\">\n    <input\n      tabindex=\"0\"\n      [type]=\"type\"\n      [min]=\"min\"\n      [max]=\"max\"\n      class=\"h-9 rounded-md border bg-primary-50 font-primary text-sm outline-primary hover:border-neutral-600 dark:bg-primary-950 dark:outline-primary-dark focus:dark:border-primary-dark\"\n      [class.px-4]=\"!icon || !symbol\"\n      [ngClass]=\"{\n        'px-4': !icon,\n        'pr-4 pl-10': icon && iconPosition === 'left',\n        'pl-4 pr-10': (icon && iconPosition === 'right') || symbol || canDelete\n      }\"\n      [class.w-fit]=\"!fullSize\"\n      [class.w-full]=\"fullSize\"\n      [class.border-neutral-300]=\"!hasErrors(formControl) || !showError\"\n      [class.border-error]=\"hasErrors(formControl) && showError\"\n      [class.border-success]=\"formControl && formControl.valid && showError\"\n      [value]=\"value\"\n      [placeholder]=\"placeholder\"\n      (input)=\"input($event)\" />\n    @if (icon) {\n      <ct-icon\n        class=\"absolute top-2\"\n        [class.left-3]=\"iconPosition === 'left'\"\n        [class.right-3]=\"iconPosition === 'right'\"\n        [icon]=\"icon\" />\n    }\n    @if (symbol) {\n      <span class=\"absolute right-3 top-2.5 text-xs text-neutral-600 dark:text-neutral-300\">{{ symbol }}</span>\n    }\n    @if (showDelete$ | async) {\n      <ct-icon class=\"absolute right-3 top-2.5 cursor-pointer\" icon=\"x-mark\" size=\"sm\" (click)=\"clearValue()\" />\n    }\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [fullSize]=\"fullSize\"\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }], propDecorators: { validate: [{
                type: Input
            }], onFocusOut: [{
                type: HostListener,
                args: ['focusout']
            }], onFocusIn: [{
                type: HostListener,
                args: ['focusin']
            }] } });

class ToggleComponent extends FormGenericComponent {
    constructor(formGroupDirective, destroyRef) {
        super(formGroupDirective);
        this.formGroupDirective = formGroupDirective;
        this.destroyRef = destroyRef;
        this.formControlName = '';
        this.checked = false;
        this.label = '';
        this.key = '';
        this.value = '';
        this.showError = false;
        this.disposition = 'horizontal';
        this.wasChecked = new EventEmitter();
    }
    toggle() {
        this.checked = !this.checked;
        this.triggerChange(this.checked);
        this.wasChecked.emit(this.checked);
    }
    writeValue(value) {
        this.triggerMarkCheck();
        this.checked = value === this.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ToggleComponent, deps: [{ token: i1$2.FormGroupDirective, optional: true }, { token: i0.DestroyRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: ToggleComponent, isStandalone: true, selector: "ct-toggle", inputs: { formControlName: "formControlName", checked: "checked", label: "label", key: "key", value: "value", showError: "showError", disposition: "disposition" }, outputs: { wasChecked: "wasChecked" }, providers: [provideValueAccessor(forwardRef(() => ToggleComponent))], usesInheritance: true, ngImport: i0, template: "<div\n  class=\"flex flex-row gap-4\"\n  [class.items-center]=\"disposition === 'horizontal'\"\n  [class.flex-col]=\"disposition === 'vertical'\">\n  <ct-form-label class=\"w-full\" [text]=\"label\" [hasError]=\"hasErrors(formControl) && showError\" />\n  <label class=\"inline-flex cursor-pointer\">\n    <input type=\"checkbox\" [value]=\"value\" [checked]=\"checked\" class=\"peer sr-only\" (change)=\"toggle()\" />\n    <div\n      tabindex=\"0\"\n      class=\"peer relative h-6 w-11 rounded-full bg-surface-variant after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-transparent after:bg-neutral-50 after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full dark:bg-surface-variant-dark dark:after:bg-neutral-400 dark:peer-checked:bg-primary-dark\"></div>\n  </label>\n</div>\n", dependencies: [{ kind: "component", type: LabelComponent, selector: "ct-form-label", inputs: ["text", "type", "formControlName", "hasError", "showError"] }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-toggle', imports: [LabelComponent], providers: [provideValueAccessor(forwardRef(() => ToggleComponent))], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"flex flex-row gap-4\"\n  [class.items-center]=\"disposition === 'horizontal'\"\n  [class.flex-col]=\"disposition === 'vertical'\">\n  <ct-form-label class=\"w-full\" [text]=\"label\" [hasError]=\"hasErrors(formControl) && showError\" />\n  <label class=\"inline-flex cursor-pointer\">\n    <input type=\"checkbox\" [value]=\"value\" [checked]=\"checked\" class=\"peer sr-only\" (change)=\"toggle()\" />\n    <div\n      tabindex=\"0\"\n      class=\"peer relative h-6 w-11 rounded-full bg-surface-variant after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-transparent after:bg-neutral-50 after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full dark:bg-surface-variant-dark dark:after:bg-neutral-400 dark:peer-checked:bg-primary-dark\"></div>\n  </label>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }, { type: i0.DestroyRef }], propDecorators: { formControlName: [{
                type: Input
            }], checked: [{
                type: Input
            }], label: [{
                type: Input
            }], key: [{
                type: Input
            }], value: [{
                type: Input
            }], showError: [{
                type: Input
            }], disposition: [{
                type: Input
            }], wasChecked: [{
                type: Output
            }] } });

class RadioButtonComponent extends FormGenericComponent {
    constructor(destroyRef, formGroupDirective) {
        super(formGroupDirective);
        this.destroyRef = destroyRef;
        this.formGroupDirective = formGroupDirective;
        this.key = '';
        this.label = '';
        this.checked = false;
        this.formControlName = '';
        this.valueChange = new EventEmitter();
    }
    writeValue(value) {
        this.checked = value;
        this.triggerMarkCheck();
    }
    onValueChange() {
        // this.checked = true;
        this.setValue(this.value);
        this.valueChange.emit(this.value);
    }
    setValue(value) {
        this.triggerChange(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: RadioButtonComponent, deps: [{ token: i0.DestroyRef }, { token: i1$2.FormGroupDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.14", type: RadioButtonComponent, isStandalone: true, selector: "ct-radio-button", inputs: { key: "key", label: "label", value: "value", checked: "checked", formControlName: "formControlName" }, outputs: { valueChange: "valueChange" }, providers: [provideValueAccessor(forwardRef(() => RadioButtonComponent))], usesInheritance: true, ngImport: i0, template: "<input\n  [id]=\"value\"\n  class=\"hidden\"\n  type=\"radio\"\n  [name]=\"key\"\n  [value]=\"value\"\n  [checked]=\"checked\"\n  (change)=\"onValueChange()\" />\n<label class=\"w-full grow cursor-pointer\" [for]=\"value\">\n  <ct-button [text]=\"label\" [type]=\"checked ? 'secondary' : 'primary'\" [fullSize]=\"true\" (click)=\"onValueChange()\" />\n</label>\n", dependencies: [{ kind: "component", type: ButtonComponent, selector: "ct-button", inputs: ["text", "icon", "iconPosition", "role", "disabled", "fullSize", "size", "type", "variant"] }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: RadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-radio-button', imports: [ButtonComponent], providers: [provideValueAccessor(forwardRef(() => RadioButtonComponent))], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<input\n  [id]=\"value\"\n  class=\"hidden\"\n  type=\"radio\"\n  [name]=\"key\"\n  [value]=\"value\"\n  [checked]=\"checked\"\n  (change)=\"onValueChange()\" />\n<label class=\"w-full grow cursor-pointer\" [for]=\"value\">\n  <ct-button [text]=\"label\" [type]=\"checked ? 'secondary' : 'primary'\" [fullSize]=\"true\" (click)=\"onValueChange()\" />\n</label>\n" }]
        }], ctorParameters: () => [{ type: i0.DestroyRef }, { type: i1$2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }], propDecorators: { key: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], checked: [{
                type: Input
            }], formControlName: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class RadioGroupComponent extends FormGenericComponent {
    constructor(destroyRef, formGroupDirective) {
        super(formGroupDirective);
        this.destroyRef = destroyRef;
        this.formGroupDirective = formGroupDirective;
        this.formControlName = '';
        this.key = '';
        this.label = '';
        this.value = '';
        this.helper = '';
        this.showError = false;
        this.selected = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.value)
            this.writeValue(this.value);
        this.radios.forEach(radio => radio.valueChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => this.setValue(value)));
    }
    writeValue(value) {
        this.value = value;
        if (this.radios)
            this.updateRadios(value);
    }
    setValue(value) {
        this.value = value;
        this.updateRadios(value);
        this.triggerChange(value);
        this.selected.emit(value);
    }
    updateRadios(value) {
        this.radios.forEach(radio => {
            radio.writeValue(radio.value === value);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: RadioGroupComponent, deps: [{ token: i0.DestroyRef }, { token: i1$2.FormGroupDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: RadioGroupComponent, isStandalone: true, selector: "ct-radio-group", inputs: { formControlName: "formControlName", key: "key", label: "label", value: "value", helper: "helper", showError: "showError" }, outputs: { selected: "selected" }, providers: [provideValueAccessor(forwardRef(() => RadioGroupComponent))], queries: [{ propertyName: "radios", predicate: RadioButtonComponent }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex w-full flex-col gap-4\">\n  @if (label) {\n    <ct-form-label [text]=\"label\" [hasError]=\"hasErrors(formControl)\" [showError]=\"showError\" />\n  }\n  <div class=\"flex w-full flex-col justify-between gap-4 md:flex-row\">\n    <ng-content select=\"ct-radio-button\" />\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n", dependencies: [{ kind: "component", type: LabelComponent, selector: "ct-form-label", inputs: ["text", "type", "formControlName", "hasError", "showError"] }, { kind: "component", type: FormErrorComponent, selector: "ct-form-alert", inputs: ["errors", "size", "hasErrors", "fullSize", "helper", "errorMessages"] }], viewProviders: [provideControlContainer()], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: RadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ct-radio-group', imports: [LabelComponent, FormErrorComponent], providers: [provideValueAccessor(forwardRef(() => RadioGroupComponent))], viewProviders: [provideControlContainer()], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"flex w-full flex-col gap-4\">\n  @if (label) {\n    <ct-form-label [text]=\"label\" [hasError]=\"hasErrors(formControl)\" [showError]=\"showError\" />\n  }\n  <div class=\"flex w-full flex-col justify-between gap-4 md:flex-row\">\n    <ng-content select=\"ct-radio-button\" />\n  </div>\n  @if (formControl) {\n    <ct-form-alert\n      [hasErrors]=\"hasErrors(formControl)\"\n      [helper]=\"helper\"\n      [errors]=\"formControl.errors ?? {}\"\n      size=\"xs\" />\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.DestroyRef }, { type: i1$2.FormGroupDirective, decorators: [{
                    type: Optional
                }] }], propDecorators: { formControlName: [{
                type: Input
            }], key: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], helper: [{
                type: Input
            }], showError: [{
                type: Input
            }], selected: [{
                type: Output
            }], radios: [{
                type: ContentChildren,
                args: [RadioButtonComponent]
            }] } });

class FormBase {
    constructor(options = {}) {
        this.value = options.value;
        this.key = options.key || undefined;
        this.label = options.label || '';
        this.placeholder = options.placeholder || '';
        this.required = !!options.required;
        this.controlType = options.controlType || '';
        this.options = options.options || [];
        this.icon = options.icon || '';
    }
}

class SelectFormBase extends FormBase {
    constructor() {
        super(...arguments);
        this.controlType = 'select';
    }
}

class InputFormBase extends FormBase {
    constructor() {
        super(...arguments);
        this.controlType = 'input';
    }
}

class ScreenSizeService {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.screenSizeSubject = new BehaviorSubject(this.getScreenSize());
        this.screenSize$ = this.screenSizeSubject.asObservable();
        fromEvent(window, 'resize')
            .pipe(distinctUntilChanged(), debounceTime$1(200), map(() => this.getScreenSize()), startWith(this.getScreenSize()), tap(() => console.log('test updated')), takeUntilDestroyed(this.destroyRef))
            .subscribe(this.screenSizeSubject);
    }
    getScreenSize() {
        const width = window.innerWidth;
        if (width < 640)
            return 'xs';
        if (width >= 640 && width < 768)
            return 'sm';
        if (width >= 768 && width < 1024)
            return 'md';
        if (width >= 1024 && width < 1280)
            return 'lg';
        if (width >= 1280 && width < 1536)
            return 'xl';
        return '2xl';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ScreenSizeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ScreenSizeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ScreenSizeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of circletone
 */
// Atoms

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionItemComponent, AccordionRegistryService, AlertComponent, AutocompleteComponent, AvatarComponent, ButtonComponent, CardComponent, FormBase, HeaderComponent, IconButtonComponent, IconComponent, InputComponent, InputFormBase, InputNumberComponent, ListComponent, ListItemComponent, MenuComponent, MenuItemComponent, OverlayDirective, RadioButtonComponent, RadioGroupComponent, SafeImagePipe, ScreenSizeService, SelectComponent, SelectFormBase, TabButtonComponent, TabGroupComponent, TabPanelDirective, ToggleComponent, integerValidator };
//# sourceMappingURL=circletone.mjs.map
