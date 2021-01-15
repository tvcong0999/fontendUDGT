import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { SubMainComponent } from './main/sub-main/sub-main.component';
import { SearchVehicleComponent } from './main/search/search-vehicle/search-vehicle.component';
import { RegisterComponent } from './main/register/register.component';
import { LearnGPLXComponent } from './main/register/learn-gplx/learn-gplx.component';
import { GivePlateVehicleComponent } from './main/register/give-plate-vehicle/give-plate-vehicle.component';
import { SearchGplxComponent } from './main/search/search-gplx/search-gplx.component';
import { SearchViolationComponent } from './main/search/search-violation/search-violation.component';
import { ComplaintComponent } from './main/complaint/complaint.component';
import { RetractComponent }from'./main/retract/retract.component';

const routes: Routes = [
    {path: '', component: SubMainComponent},
  {path: 'search', component: SearchComponent, children:[{path: '1', component: SearchVehicleComponent},{path: '2', component: SearchGplxComponent},{path: '3', component: SearchViolationComponent}]},
  {path: 'register', component: RegisterComponent, children:[{path: '1', component: LearnGPLXComponent},{path: '2', component: GivePlateVehicleComponent}]},
  {path: 'complaint', component: ComplaintComponent},
  {path:'retract',component:RetractComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
