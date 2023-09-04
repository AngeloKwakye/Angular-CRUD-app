import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { currency, employee, employeeRoles } from '../Model/employeemodel';
import { ApiserviceService } from '../shared/apiservice.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
  

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.css']
})
export class FormdialogComponent implements OnInit {

  values: any;
  editData: any;
  roleSelected: any;
  currencySelected: any;
  saveBtn = 'Save';
  editdataid: any;
  formheader = 'Add New Employee';

  roles: employeeRoles[] = [
    {id: 1, name:'Chief Executive Officer'},
    {id: 2, name:'Product Manager' },
    {id: 3, name:'Chief Technology Officer' },
    {id: 4, name:'Chief Marketing Officer ' },
    {id: 5, name:'Sales Manager' },
    {id: 6, name:'Chief Financial Officer' },
    {id: 7, name:'Business Development Manager' },
    {id: 8, name:'Customer Service Representative' },

  ]

  currency: currency[] = [
    {id: 1, name: 'Cedi', symbol: 'GH₵'},
    {id: 2, name: 'US Dollas', symbol: '$'},
    {id: 3, name: 'Pula', symbol: 'P'},
    {id: 4, name: 'Naira', symbol: '₦'},
    {id: 5, name: 'Kwacha', symbol: 'ZK'},

  ]

  constructor( private form: FormBuilder, private service: ApiserviceService, private dialog: MatDialog, private snackbar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.populateForm();
    console.log('editData',this.editData)
  }


  employeeForm = this.form.group({
    id: [{value:'', disabled: true}],
    fname: ['',Validators.required],
    lname: ['',Validators.required],
    role: ['',Validators.required],
    salary: ['',Validators.required],
    isactive: [true],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    currency: ['', Validators.required],
    contact: ['']
  })

  selectedRolesValue(){
    let xa = this.employeeForm.get('role')?.value;
    let xs = this.employeeForm.get('currency')?.value

    const value = this.roles.filter((val: any)=> val.id === xa);
    const value2 = this.currency.filter((val: any)=> val.id === xs);
    this.roleSelected = value;
    this.currencySelected = value2;
    console.log({value});
  }


  SaveNew(): void{

    this.values = this.employeeForm.value;
    console.log("values",this.values)

    if (this.employeeForm.valid){
      const employeeDetails: employee = {
        id: this.values.id,
        fname: this.values.fname,
        lname: this.values.lname,
        email: this.values.email,
        contact: this.values.contact,
        role: this.roleSelected,
        roleid: this.values.role,
        salary: this.values.salary,
        isactive: this.values.isactive,
        currency: this.currencySelected,
        currencyid: this.values.currency,
        }
        if(this.editData != null || this.editData != undefined){
          this.UpdateData(this.editdataid,employeeDetails)
          console.log(employeeDetails);
        }else{
          this.savedata(employeeDetails)
        }
    }
  }

  populateForm(){
    if(this.data.id != '' && this.data.id != null){
      console.log('edeitpopUpData',this.data)
      this.saveBtn = 'Updata'
      this.formheader = 'Update Employee Details';
      this.editdataid = this.data.id
      this.service.getEmployeeData(this.data.id).subscribe(result =>{
        console.log({result})
        this.editData = result;
        this.employeeForm.setValue({
          id: this.editData.id,
          fname: this.editData.fname,
          lname: this.editData.lname,
          role: this.editData.role[0].id,
          salary: this.editData.salary,
          isactive: this.editData.isactive,
          email: this.editData.email,
          currency: this.editData.currency[0].id,
          contact: this.editData.contact
        })
      })
    }
  }

  savedata(data: any){
    this.service.createNew(data).subscribe(result =>{
      this.closeDialog();
      this.snackbar.open("Saved Successfully", "Close",{
        duration: 3000
      })
    })
  }

  UpdateData(id: any,data: any){
    this.service.UpdateEmployee(id, data).subscribe(result =>{
      this.closeDialog();
      this.snackbar.open("Updated Successfully", "Close",{
        duration: 3000
      })
    })
  }
  


closeDialog(){
  this.dialog.closeAll();
}

}