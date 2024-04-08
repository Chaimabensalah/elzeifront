import { Component } from '@angular/core';
import { Salaries } from '../Models/Salaries';
import { SalariesService } from '../Services/Salaries.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'

})
export class SearchComponent {

// search.component.ts

  salaries: Salaries[] = [];
  searchTerm: string = '';
  searchPrenom: string = ''; // Ajoutez cette propriété pour le prénom
  searchMatricule: string = ''; // Ajoutez cette propriété pour le matricule
  selectedSalary: Salaries | null = null;



  constructor(private salariesService: SalariesService, private router: Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadSalaries();
  }

  loadSalaries(): void {
    this.salariesService.getSalariess().subscribe(salaries => {
      this.salaries = salaries;
    });
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.salariesService.searchSalaries(this.searchTerm).subscribe(salaries => {
        this.salaries = salaries;
      });
    } else {
      this.loadSalaries();
    }
  }
  


 
  viewDetails(salarie: Salaries): void {
    this.router.navigate(['salariesdetails', salarie.id]);
  }

  selectSalary(salaries: Salaries): void {
    this.selectedSalary = salaries;
  }
}
  







