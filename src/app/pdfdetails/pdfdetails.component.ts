import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-pdfdetails',
  templateUrl: './pdfdetails.component.html',
  styleUrls: ['./pdfdetails.component.css']
})
export class PdfdetailsComponent {
  result: string | null = null;
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPDF() {
    if (!this.selectedFile) {
      this.result = 'No file selected.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://localhost:8080/api/uploadPDF', formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error:', error);
          let errorMessage = 'Error occurred while uploading the file.';
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `An error occurred: ${error.error.message}`;
          } else {
            // Server-side error
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
          }
          this.result = errorMessage;
          return throwError(errorMessage);
        })
      )
      .subscribe(
        data => {
          this.result = JSON.stringify(data);
        }
      );
  }
}
