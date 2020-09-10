import { Directive } from '@angular/core';
import { ShowHideDirective } from '@angular/flex-layout';

const selector = `[fxFlex.sm,fxFlex.xs]`;
const inputs = ['fxFlex.sm','fxFlex.xs'];

@Directive({ selector, inputs })
export class CustomFlexOverrideDirective extends ShowHideDirective {
  protected inputs = inputs;
}
