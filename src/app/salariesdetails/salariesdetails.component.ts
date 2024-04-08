// salariesdetails.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salaries } from '../Models/Salaries';
import { SalariesService } from '../Services/Salaries.service';

@Component({
  selector: 'app-salariesdetails',
  templateUrl: './salariesdetails.component.html',
  styleUrls: ['./salariesdetails.component.css']
})
export class SalariesdetailsComponent implements OnInit {
  employeeForm!: FormGroup; // Define FormGroup
  selectedSalaries?: Salaries;

  constructor(private formBuilder: FormBuilder , private activatRoute:ActivatedRoute ,   private router: Router, private salariesService: SalariesService) { }

  ngOnInit(): void {
    this.activatRoute.params.subscribe(params => {
      const SalariesId = +params['id']; // Extraire simulateurId des paramètres et le convertir en nombre
      this.loadsalariesDetails(SalariesId); // Appeler la méthode pour charger les détails du simulateur
    });
  }
  
  loadsalariesDetails(SalariesId: number): void {
    // Récupérer les détails du simulateur depuis le service
    this.salariesService.getSalariesById(SalariesId).subscribe(
      (Salaries: Salaries) => {
        
        this.selectedSalaries = Salaries;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du simulateur', error);
      }
    );
  }
 
  updateSalary(): void {
    if (this.selectedSalaries) {
      const id = this.selectedSalaries.id;
      const updatedData = { /* Construct the updated data object here */ };
      this.salariesService.update(id, updatedData).subscribe(
        (response: Salaries) => {
          // Handle successful update response
          console.log('Salary updated successfully:', response);
        },
        (error: any) => {
          // Handle error
          console.error('Error updating salary:', error);
        }
      );
    }
  }
    
  }
  
  
  
