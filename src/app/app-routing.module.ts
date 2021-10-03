import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ChooseOptionComponent } from './pages/onboarding/choose-option/choose-option.component';

const routes: Routes = [
  { 
    path: 'ob', 
    children: [
      {
        path: 'choose-option',
        component: ChooseOptionComponent
      },
    ]
  },
  { path: '', redirectTo: '/ob/choose-option', pathMatch: 'full' },
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
