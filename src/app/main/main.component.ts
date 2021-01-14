import { AfterViewChecked, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MainserviceService } from '../shared/mainservice.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public mainservice: MainserviceService) { }
   

  ngOnInit(): void {
  }
  refresh(){
    window.location.reload();
  }
}
