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
   search(){
    var searchText = $('form input').val().toString();
     this.vehicleservice.getVehiclePlate(searchText).subscribe((data)=>{
        try{
          this.vehicleservice.vehicle = data as Vehicle;
          $('.infos').html(`
          <h1>Thông Tin Phương Tiện</h1>
          <div class="vehicle-specification">
            <b>Chủ sở hữu:</b> <i> ${this.vehicleservice.vehicle.owner.ownerName}</i><br>
            <b>Dung tích: </b> <i>${this.vehicleservice.vehicle.vehicleCC}</i><br>
            <b>Màu xe: </b> <i> ${this.vehicleservice.vehicle.vehicleColor}</i><br>
            <b>Ngày mua: </b> <i> ${new Date(this.vehicleservice.vehicle.purchaseDate).toDateString()}</i><br>
            <b>Hãng:  </b> <i>${this.vehicleservice.vehicle.vehicleBrand}</i><br>
            <b>Sô khung: </b> <i> ${this.vehicleservice.vehicle.vehicleChasisNumber}</i><br>
          <div id="more-infos">
            <h5 class="choose">Miêu Tả</h5>
          </div>
          <div id="info-content">
             <p class="paragraph" style="display: block;">
                    ${'Sở hữu: ' + this.vehicleservice.vehicle.owner.ownerName}<br>
                    ${'CMND: ' + this.vehicleservice.vehicle.owner.ownerIdentificationNumber}<br>
                    ${'Bằng lái: ' + this.vehicleservice.vehicle.owner.drivingLicenseNumber}.
              </p>
          </div>`);
        }
        catch(err){
          $('.infos').html(`
          <h1>Thông Tin Phương Tiện</h1>
          <div class="vehicle-specification">
            <b>Chủ sở hữu:</b> <i> ${'N/A'}</i><br>
            <b>Dung tích: </b> <i>${'N/A'}</i><br>
            <b>Màu xe: </b> <i> ${'N/A'}</i><br>
            <b>Ngày mua: </b> <i> ${'N/A'}</i><br>
            <b>Hãng:  </b> <i>${'N/A'}</i><br>
            <b>Sô khung: </b> <i> ${'N/A'}</i><br>
          </div>
          <div id="more-infos">
            <h5 class="choose">Miêu Tả</h5>
          </div>
          <div id="info-content">
            <p class="paragraph" style="display: block;">
                  'N/A'
            </p>
          </div>
          `);
          console.log(err);
        }
     });
  }
}
