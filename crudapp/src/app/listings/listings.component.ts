import { Component, OnInit } from '@angular/core';
import { employee } from '../Model/employeemodel';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormdialogComponent } from '../formdialog/formdialog.component';
import { ApiserviceService } from '../shared/apiservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  employeedata!: employee[]
  displayedColumns: string[]= ['id','name','contact','role','salary','isactive','action']

  constructor( private dialog: MatDialog, private service: ApiserviceService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.LoadEmployees();
  }


  openformdailog(id: any): void{
    const formData = this.dialog.open(FormdialogComponent,{
      width: '700px',
      data: {
        id: id
      }
    });
    formData.afterClosed().subscribe(x =>{
      this.LoadEmployees();
    })
  }

  LoadEmployees(){
    this.service.getallEmplyees().subscribe(result=> {
      this.employeedata = result;
    });
  }

  editEmployee(id: any){
    this.openformdailog(id);
  }


  deleteEmployee(id: any){
      this.service.deleteEmployee(id).subscribe(result=>{
        this.snackbar.open('Deleted Successfully', 'Close',{
          duration: 3000
        });
        this.LoadEmployees();
      })
    }

}
