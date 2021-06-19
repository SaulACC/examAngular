import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public pass;

  private cUser = 'root';
  private cPass = '1234';

  constructor( public rooter:Router ) { }

  ngOnInit() {
  }

  submit(user, pass){
    if(this.user == this.cUser &&  this.pass == this.cPass){
      //alert('NICE');
      this.rooter.navigate(['home']);
    }else{
      alert('NOT NICE');
    }
  }


}
