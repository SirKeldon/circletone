import { ControlValueAccessor, FormControl, FormGroupDirective } from '@angular/forms';
export declare abstract class FormGenericComponent implements ControlValueAccessor {
    protected formGroupDirective: FormGroupDirective;
    private onChange;
    private onTouched;
    private readonly changeDetectorRef;
    abstract formControlName: string;
    constructor(formGroupDirective: FormGroupDirective);
    hasErrors(formControl: FormControl): boolean;
    get formControl(): FormControl<any>;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    protected triggerChange(value: any): void;
    protected triggerTouched(): void;
    protected triggerMarkCheck(): void;
    protected triggerChangeDetection(): void;
    abstract writeValue(value: any): void;
}
