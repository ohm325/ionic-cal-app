import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public ans = [];
  public first:number;
  public second:number;

  constructor(
    private http : HttpClient
  ) {}

  
  calculate(first,second){

    console.log('ตัวตั้ง',first,'ตัวบวก',second);

    let url = 'https://nextflow-node-calculator-api.azurewebsites.net/Calculator/plus';

    this.http.post(url,{
      "first":  first,
      "second":  second,
      }).toPromise();

    //this.ans = response.results;

  }

}
