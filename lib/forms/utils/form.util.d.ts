import { ExistingProvider } from '@angular/core';
/**
 * Creates a value accessor provider for a form component.
 * @param component - The component that implements the NG_VALUE_ACCESSOR interface.
 * @returns An ExistingProvider object for the value accessor.
 */
export declare const provideValueAccessor: (component: unknown) => ExistingProvider;
/**
 * Creates a control container provider using FormGroupDirective.
 * @returns An ExistingProvider object for the control container.
 */
export declare const provideControlContainer: () => ExistingProvider;
