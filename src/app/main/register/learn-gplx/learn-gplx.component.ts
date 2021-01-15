import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-learn-gplx',
  templateUrl: './learn-gplx.component.html',
  styleUrls: ['./learn-gplx.component.css']
})
export class LearnGPLXComponent implements OnInit {

  constructor(private http: HttpClient) { }
  HangDK: string;
  Name: string;
  CMND: string;
  NgayCap: Date;
  NoiCap: string;
  DiaChiThuongTru: string;
  NoiCuTru: string;
  SoGPLX: string;
  Hang: string;
  NgayCapGPLX: string;

  ngOnInit(): void {
  }
  onKey(event: any) { // without type info
    switch ((event.target as HTMLInputElement).id) {
      case 'inputHangDK':
        this.HangDK = event.target.value;
        break;
      case 'inputName':
        this.Name = event.target.value;
        break;
      case 'inputCMND':
        this.CMND = event.target.value;
        break;
      case 'NgayCap':
        this.NgayCap = event.target.value;
        break;
      case 'NoiCap':
        this.NoiCap = event.target.value;
        break;
      case 'DiaChiThuongTru':
        this.DiaChiThuongTru = event.target.value;
        break;
      case 'NoiCuTru':
        this.NoiCuTru = event.target.value;
        break;
      case 'SoGPLX':
        this.SoGPLX = event.target.value;
        break;
      case 'Hang':
        this.Hang = event.target.value;
        break;
      case 'NgayCapGPLX':
        this.NgayCapGPLX = event.target.value;
        break;
      default:
        break;
    }
  }
    
  onSave(): void {
    const formData = {
      HangDK: this.HangDK,
      Name: this.Name,
      CMND: this.CMND,
      NgayCap: this.NgayCap,
      NoiCap: this.NoiCap,
      DiaChiThuongTru: this.DiaChiThuongTru,
      NoiCuTru: this.NoiCuTru,
      SoGPLX: this.SoGPLX,
      Hang: this.Hang,
      NgayCapGPLX: this.NgayCapGPLX
    };
    // this.http.get(`https://localhost:5001/api/GPLXs`).subscribe(data => {

    // });
    // this.http.post<string>(`https://localhost:5001/api/GPLXs`,this.Name).subscribe(data => {
    //   console.log(data);
    // });

    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    }
    this.http.post(`https://localhost:5001/api/GPLXs`, formData, httpOptions).subscribe(data => {
      console.log(data);
    });
    console.log(this)
  }
}
