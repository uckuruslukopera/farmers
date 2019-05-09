import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department/department.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
