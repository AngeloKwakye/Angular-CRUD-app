import { Component, OnInit } from '@angular/core';
import { employee } from '../Model/employeemodel';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormdialogComponent } from '../formdialog/formdialog.component';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  employeedata!: employee[]
  displayedColumns: string[]= ['name','contact','role','salary','isactive','action']

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openformdailog(id: any): void{
    this.dialog.open(FormdialogComponent,{
      width: '500px',
      data: {
        id: id
      }
    });
  }



}
