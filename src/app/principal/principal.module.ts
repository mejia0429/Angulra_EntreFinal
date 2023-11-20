import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { FormsModule } from '@angular/forms';
import { ApirickComponent } from './components/apirick/apirick.component';
import { HttpClientModule } from '@angular/common/http';
import { ApirickService } from './services/apirick.service';
import { MaterialModule } from '../material/material.module';
import { DialogoComponent } from './components/dialogo/dialogo.component';


@NgModule({
  declarations: [
    ApirickComponent,
    DialogoComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ApirickService]
})
export class PrincipalModule { }
