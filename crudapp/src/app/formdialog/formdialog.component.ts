import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { employeeRoles } from '../Model/employeemodel';
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.css']
})
export class FormdialogComponent implements OnInit {

  roles: employeeRoles[] = [
    {id: 1, name:'Chief Executive Officer' },
    {id: 2, name:'Product Manager' },
    {id: 3, name:'Chief Technology Officer' },
    {id: 4, name:'Chief Marketing Officer ' },
    {id: 5, name:'Sales Manager' },
    {id: 6, name:'Chief Financial Officer' },
    {id: 7, name:'Business Development Manager' },
    {id: 8, name:'Customer Service Representative' },

  ]

  constructor( private form: FormBuilder, private service: ApiserviceService) { }

  ngOnInit(): void {
  }


  employeeForm = this.form.group({
    id: [{value:'', disabled: true}],
    fname: ['',Validators.required],
    lname: ['',Validators.required],
    role: ['',Validators.required],
    salary: ['',Validators.required],
    isactive: [true],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  })


  SaveNew(): void{
    if (this.employeeForm.valid){
      this.service.createNew(this.employeeForm.value).subscribe(result =>{
        alert("Saved Successfully")
      })
    }
  }
}
