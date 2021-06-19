import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  submitProduct(prd1,prd2,prd3,sector,email,tel){
    if(
      (isUndefined(prd1) || prd1=='') ||
      (isUndefined(prd2) || prd2=='') ||
      (isUndefined(prd3) || prd3=='') ||
      (isUndefined(sector) || sector=='') ||
      (isUndefined(email) || email=='') ||
      (isUndefined(tel) || tel=='' || isNaN(tel))
      ){
      console.log(typeof prd1)
    }else{
      alert(
        `Everything ok. Product 1 is ${prd1}, product 2 is ${prd2}, product 3 is ${prd3}, sector is ${sector}, the email is ${email} and the number is ${tel}`
        )
    }
  }

}
