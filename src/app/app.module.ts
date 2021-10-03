import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChooseOptionComponent } from './pages/onboarding/choose-option/choose-option.component';
import { BrandLogoComponent } from './components/onboarding/brand-logo/brand-logo.component';
import { StepsTimelineComponent } from './components/onboarding/steps-timeline/steps-timeline.component';
import { StepsTitleComponent } from './components/onboarding/steps-title/steps-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseOptionComponent,
    BrandLogoComponent,
    StepsTimelineComponent,
    StepsTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
