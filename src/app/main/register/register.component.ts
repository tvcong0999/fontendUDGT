import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  ngAfterViewInit(): void{
    $('.contain .name .' + this.router.url.slice(-1)).addClass('active');
  }
  ngOnInit(): void {
  }

}
