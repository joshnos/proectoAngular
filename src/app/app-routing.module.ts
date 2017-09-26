import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from 'app/components/demo/demo.component';
import { CompComponent } from 'app/components/comp/comp.component';
import { Comp1Component } from 'app/components/comp1/comp1.component';

const routes: Routes = [
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: 'comp', component: CompComponent
  },
  {
    path: 'comp1', component: Comp1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
