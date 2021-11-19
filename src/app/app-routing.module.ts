import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ChooseOptionComponent } from './pages/onboarding/choose-option/choose-option.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { 
    path: 'ob', 
    children: [
      {
        path: 'choose-option',
        component: ChooseOptionComponent
      },
    ]
  },
  // { path: '', redirectTo: '/ob/choose-option', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
