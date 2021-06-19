import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username;
  public lastname;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  postName(username,lastname){
    if((isUndefined(username) || username=='') || (isUndefined(lastname) || lastname=='')){
      alert('You did something wrong :D')
    }else{
      let userObject = {
        "firstname": username,
        "lastname": lastname
      }
      //if is not get you dont use "data"
      this.api.postServiceName(userObject).subscribe((response) => {
        let _response;
        _response = response;
        alert(_response.message);
      })
    }
  }

  getGreetings(){
    this.api.getServiceGreeting().subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })
  }
}
