import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from 'app/components/demo/demo.component';
import { CompComponent } from 'app/components/comp/comp.component';

const routes: Routes = [
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: 'comp', component: CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
