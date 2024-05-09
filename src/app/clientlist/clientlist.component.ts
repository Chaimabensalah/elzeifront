import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Client';
import { ClientService } from '../Services/Client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogAnimationsExampleDialogComponent } from '../dialog-animations-example-dialog/dialog-animations-example-dialog.component';
@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'] // Use styleUrls instead of styleUrl
})
export class ClientlistComponent implements OnInit {

  clients: Client[] = []; // Renamed client to clients to represent an array of clients
  searchTerm: string = '';
  selectedClient: Client | null = null; // Renamed selectedSalary to selectedClient to reflect the entity

  constructor(private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute,public dialog: MatDialog,) { }

 
  ngOnInit(): void {
    this.loadClients(); // Renamed loadClient to loadClients for consistency
  }

  loadClients(): void { // Renamed loadClient to loadClients for consistency
    this.clientService.getClients().subscribe(clients => { // Renamed client to clients
      this.clients = clients; // Renamed client to clients
    });
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.clientService.searchClient(this.searchTerm).subscribe(clients => { // Renamed client to clients
        this.clients = clients; // Renamed client to clients
      });
    } else {
      this.loadClients(); // Renamed loadClient to loadClients for consistency
    }
  }

  viewDetails(client: Client): void {
    this.router.navigate(['clientdetails', client.id]);
  }
  
  selectClient(client: Client): void { // Renamed selectClienty to selectClient for consistency
    this.selectedClient = client; // Renamed selectedSalary to selectedClient to reflect the entity
  }

  deleteCompte(id: String) {
    this.clientService.delete(id).subscribe(
      (client) => {
        this.selectedClient = client;
        const dialogRef = this.dialog.open(DialogAnimationsExampleDialogComponent, {
          width: '300px',
          data: { ...this.selectedClient } // Passez une copie des données pour éviter les problèmes de référence
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.deleteCompte(result);
          }
        });
        console.log("client deleted successfully.");
        this.loadClients();
      
        this.router.navigate(['/clientlist']);
      },
      (error: HttpErrorResponse) => {
        console.error("Error deleting client:", error);
      }
    );
  }
}
