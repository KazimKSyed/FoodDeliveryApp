import { Component, OnInit } from '@angular/core';

import { RegistrationService } from 'src/app/services/registartion/registration.service';

 import { User } from 'src/app/models/user.model';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.registrationService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }






//   registrationForm: FormGroup;
//   user:User;
//   public globalResponse: any;
//  onRegister(){
//   this.regService.RegisterUser(this.user).subscribe((result) => {
//     this.globalResponse = result;  
//     console.log(result.firstName);            
//   })
  
//  }

}
