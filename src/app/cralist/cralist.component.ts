import { Component, OnInit } from '@angular/core';
import { CRA } from '../Models/CRA';
import { CRAService } from '../Services/CRA.service';
import { Router, ActivatedRoute } from '@angular/router'; // Change import statement

@Component({
  selector: 'app-cralist',
  templateUrl: './cralist.component.html',
  styleUrls: ['./cralist.component.css'] // Fix styleUrl to styleUrls
})
export class CralistComponent implements OnInit {

  cra: CRA[] = [];
  searchTerm: string = '';
  searchPrenom: string = '';
  searchMatricule: string = '';
  selectedCRA: CRA | null = null;

  constructor(private craService: CRAService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCRAs();
  }

  loadCRAs(): void {
    this.craService.getCRAS().subscribe(cra => {
      this.cra = cra;
    });
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.craService.searchCRA(this.searchTerm).subscribe(cra => {
        this.cra = cra;
      });
    } else {
      this.loadCRAs();
    }
  }

  viewDetails(cra: CRA): void {
    this.router.navigate(['cra', cra.id]);
  }

  selectCRA(cra: CRA): void {
    this.selectedCRA = cra;
  }
}
