import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle.model';
@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {

    vehicle: Vehicle;
    readonly rootURL = 'http://linkinben158993-001-site1.ftempurl.com/api/vehicles';
    constructor(private http: HttpClient) {}
  
    getVehiclePlate(id) {
     return this.http
        .get(`${this.rootURL}/${id}`)
        
    }
}
