import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';


import { CustomBreakPointsProvider, CUSTOM_HEIGHT_BREAKPOINTS } from './breakpoints';

import { CustomFlexOverrideDirective } from './flex-override.directive';
@NgModule({
  declarations: [
    AppComponent,
    CustomFlexOverrideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    BlockUIModule.forRoot(),
    FlexLayoutModule.withConfig({}, CUSTOM_HEIGHT_BREAKPOINTS ) 
  ],
  exports:[CustomFlexOverrideDirective],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
