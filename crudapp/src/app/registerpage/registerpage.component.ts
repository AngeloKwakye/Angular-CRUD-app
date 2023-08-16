import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(private form: FormBuilder) { }

  registerationform = this.form.group({
    fname: ['', Validators.required],
    lname: [''],
    username: ['', Validators.required],
    email: ['',Validators.required],
    password: ['', Validators.required],
    gender: ['male', Validators.required]
  });

  ngOnInit(): void {
  }




  register(): void{
    return this.register();
  }

}
