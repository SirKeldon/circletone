export interface FormOptionBase {
    key: any;
    label: string;
    icon?: string;
}
export declare class FormBase<T> {
    value: T | undefined;
    key: any;
    label: string;
    icon: string;
    placeholder: string;
    required: boolean;
    controlType: string;
    options: FormOptionBase[];
    constructor(options?: {
        value?: T;
        key?: any;
        label?: string;
        icon?: string;
        required?: boolean;
        placeholder?: string;
        controlType?: string;
        options?: FormOptionBase[];
    });
}
