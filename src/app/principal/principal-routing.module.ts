import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApirickComponent } from './components/apirick/apirick.component';

const routes: Routes = [

  {
    path:'',
    component: ApirickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
