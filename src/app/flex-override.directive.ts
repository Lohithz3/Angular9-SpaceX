import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxFlex.sm,fxFlex.xs]`;
const inputs = ['fxFlex.sm','fxFlex.xs'];

// tslint:disable-next-line:use-input-property-decorator
@Directive({ selector, inputs })
export class CustomFlexOverrideDirective extends ShowHideDirective {
  protected inputs = inputs;
}
