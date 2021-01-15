import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Vehicle } from 'src/app/shared/vehicle.model';
import { VehicleserviceService } from 'src/app/shared/vehicleservice.service';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.css']
})
export class SearchVehicleComponent implements OnInit {

  constructor(public vehicleservice: VehicleserviceService) { }

  ngOnInit(): void {
  }
  search() {
    var searchText = $('form input').val().toString();
    this.vehicleservice.getVehiclePlate(searchText).subscribe((data) => {
      if (data == "No Vehicle Was Found!") {
        $('.vehicle-specification').html(`<b>${data}</b>`);
      } else {
        this.vehicleservice.vehicle = JSON.parse(data) as Vehicle;
        $('.vehicle-specification').html(`<b>Chủ sở hữu:</b> <i> ${this.vehicleservice.vehicle.owner.ownerId}</i><br>
          <b>Dung tích: </b> <i>${this.vehicleservice.vehicle.vehicleCC}</i><br>
          <b>Màu xe: </b> <i> ${this.vehicleservice.vehicle.vehicleColor}</i><br>
          <b>Ngày mua: </b> <i> ${new Date(this.vehicleservice.vehicle.purchaseDate).toDateString()}</i><br>
          <b>Hãng:  </b> <i>${this.vehicleservice.vehicle.vehicleBrand}</i><br>
          <b>Sô khung: </b> <i> ${this.vehicleservice.vehicle.vehicleChasisNumber ? this.vehicleservice.vehicle.vehicleChasisNumber : ''}</i><br>`)
      }
    });
  }
}
