import { Component, OnInit } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'app';
  results: any = {};
  constructor(public phoneLookup: ReversePhoneService){ }
  
  ngOnInit(){
    this.searchPhones();
  }
  
  searchPhones(){
    this.phoneLookup.getData().subscribe( wp => {
      this.results = wp;
      console.log(wp);
    });
  }
}
