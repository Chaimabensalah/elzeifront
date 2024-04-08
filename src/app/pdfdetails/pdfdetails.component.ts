import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-pdf',
  template: `
    <input type="file" (change)="onFileSelected($event)">
    <button (click)="uploadPDF()">Upload</button>
    <div *ngIf="result">{{ result }}</div>
  `
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
      .subscribe(
        data => {
          this.result = JSON.stringify(data);
        },
        error => {
          console.error('Error:', error);
          this.result = 'Error occurred while uploading the file.';
        }
      );
  }
}
