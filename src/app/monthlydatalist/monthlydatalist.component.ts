import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MonthlyData } from '../Models/MonthlyData';
import { MonthlyDataService } from '../Services/MonthlyData.service';

@Component({
  selector: 'app-monthlydatalist',
  templateUrl: './monthlydatalist.component.html',
  styleUrl: './monthlydatalist.component.css'
})
export class MonthlydatalistComponent {
  monthlyDatas: MonthlyData[] = []; // Renamed client to clients to represent an array of clients
  searchTerm: string = '';
  selectedmonthlyData: MonthlyData | null = null; // Renamed selectedSalary to selectedClient to reflect the entity

  constructor(private monthlyDataService: MonthlyDataService, private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog,) { }


  ngOnInit(): void {
    this.loadClients(); // Renamed loadClient to loadClients for consistency
  }

  loadClients(): void { // Renamed loadClient to loadClients for consistency
    this.monthlyDataService.getMonthlyDataS().subscribe(monthlyDatas => { // Renamed client to clients
      this.monthlyDatas = monthlyDatas; // Renamed client to clients
    });
  }





  viewDetails(monthlyData: MonthlyData): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: monthlyData
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['clientdetails', monthlyData.id]);
      }})
}



  selectMonthlyData(monthlyData: MonthlyData): void { // Renamed selectClienty to selectClient for consistency
    this.selectedmonthlyData = monthlyData; // Renamed selectedSalary to selectedClient to reflect the entity
  }

  deleteCompte(data:MonthlyData) {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
      width: '300px',
      data: data
       });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.monthlyDataService.delete(data.id).subscribe(
          () => {
            window.location.reload();
          },
          (error: HttpErrorResponse) => {
            console.error("Error deleting client:", error);
          }
        );
      }
    });

    console.log("client deleted successfully.");
    this.loadClients();

    this.router.navigate(['/clientlist']);

  }
}
