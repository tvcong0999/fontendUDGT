import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  public className;
  ngAfterViewInit(): void {
    $('.contain .name .' + this.router.url.slice(-1)).addClass('active');
  }
  ngOnInit(): void {

  }

}
