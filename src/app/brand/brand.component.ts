import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createBrand(name,email,pass){
    if(
      (isUndefined(name) || name=='') ||
      (isUndefined(email) || email=='') ||
      (isUndefined(pass) || pass=='')
      ){

      }else{
        alert(
          `Everything ok. Brand name is ${name}, email is ${email} and the password is ${pass}.`
          )
        }
      }
  }
