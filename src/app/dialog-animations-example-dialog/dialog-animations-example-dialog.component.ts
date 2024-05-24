import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Mission } from '../Models/Mission';
import { SalariesService } from '../Services/Salaries.service';

@Component({
  selector: 'app-dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.component.html',
  styleUrl: './dialog-animations-example-dialog.component.css'
})
export class DialogAnimationsExampleDialogComponent {

mission!:Mission;
  constructor(
    private salariesService : SalariesService,
    public dialogRef: MatDialogRef<DialogAnimationsExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.salariesService.getmissionbyuserid(data.id).subscribe((res:Mission) => {
      this.mission = res;
      console.log(res) ;
         });
    console.log(data)}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
