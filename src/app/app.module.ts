import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { SubMainComponent } from './main/sub-main/sub-main.component';
import { MainserviceService } from './shared/mainservice.service';
import { RegisterComponent } from './main/register/register.component';
import { SearchVehicleComponent } from './main/search/search-vehicle/search-vehicle.component';
import { VehicleserviceService } from './shared/vehicleservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LearnGPLXComponent } from './main/register/learn-gplx/learn-gplx.component';
import { GivePlateVehicleComponent } from './main/register/give-plate-vehicle/give-plate-vehicle.component';
import { SearchGplxComponent } from './main/search/search-gplx/search-gplx.component';
import { SearchViolationComponent } from './main/search/search-violation/search-violation.component';
import { ComplaintComponent } from './main/complaint/complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    SubMainComponent,
    RegisterComponent,
    SearchVehicleComponent,
    LearnGPLXComponent,
    GivePlateVehicleComponent,
    SearchGplxComponent,
    SearchViolationComponent,
    ComplaintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainserviceService, VehicleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
