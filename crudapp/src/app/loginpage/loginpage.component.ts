import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  userdata: any;

  constructor( private form: FormBuilder, private service: ServiceService, private router: Router, private snackbar: MatSnackBar) { }

  loginform = this.form.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {
    
  }

  login(): void{
    if(this.loginform.valid){
      this.service.getuser(this.loginform.value.username).subscribe(result =>{
        this.userdata = result;
        if(this.userdata.password === this.loginform.value.password){
          sessionStorage.setItem('username', this.userdata.username);
          sessionStorage.setItem('status', this.userdata.status);
          this.router.navigate(['']);
          this.snackbar.open('Welcome!','Dismiss',{
            duration: 5000,
            panelClass: 'my-snackbar'
          })
        }
      })
    }
  }

}
