import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../user';
import {DataService} from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usernameField: string;
  public passwordField: string;
  public invalidCredential= false;
  public usernameInvalid= false;


  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.usernameField = ""

  }

  ngOnInit() {
  }
  model = new User(1,'Admin','Admin');

  validateLogin(validInput){
    if(validInput) {
      this.usernameField = '';
      this.passwordField = '';
    }
  else {
      this.dataService.loginValidation({username:this.usernameField,password:this.passwordField}).subscribe(data => {
        if(data){
          this.router.navigate(['/homepage'])
        }
        else
        {
          this.invalidCredential=true
        }


      })
    }



  }

}
