import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.css']
})
export class SubMainComponent implements OnInit {

  constructor() { }
  time = new Date();
  timer;
  dateObj = new Date();
  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  clock() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    $("#sec").css("width",s*300/60+"px");
    $("#min").css("width",m*300/60+"px");
    $("#hour").css("width",h*300/24+"px");
    $("#txthour").html(h.toString());
    $("#txtmin").html(m.toString());
    $("#txtsec").html(s.toString());

    setTimeout("clock()", 1000);
}
}
