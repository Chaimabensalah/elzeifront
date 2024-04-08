import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Salaries } from '../Models/Salaries';
import { SalariesService } from '../Services/Salaries.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  Salaries: Salaries = {
    id: "",
    prenom: "",
    nom: "",
    dateNais: "",
    adresse: "",
    matricule: "",
    numSS: "",
    dateEntre: "",
    dateSortie: "",
    emploi: "",
    statut: "",
    position: "",
    coefficient: "",
  }

  myForm!: FormGroup;
  router: any;

  constructor(private fb: FormBuilder, private SalariesService: SalariesService) {} // Inject SimulatorService

  ngOnInit(): void {
    this.myForm = this.fb.group({
      prenom: [''],
      nom: [''],
      dateNais: [''],
      adresse: [''],
      matricule: [''],
      numSS: [''],
      dateEntre: [''],
      dateSortie: [''],
      emploi: [''],
      statut: [''],
      position: [''],
      coefficient: [''],
    });
  }

  submitForm(): void {
    const prenom = this.myForm.get('prenom')?.value;
    const nom = this.myForm.get('nom')?.value;
    const dateNais = this.myForm.get('dateNais')?.value;
    const adresse = this.myForm.get('adresse')?.value;
    const matricule = this.myForm.get('matricule')?.value;
    const numSS = this.myForm.get('numSS')?.value;
    const dateEntre = this.myForm.get('dateEntre')?.value;
    const dateSortie = this.myForm.get('dateSortie')?.value;
    const emploi = this.myForm.get('emploi')?.value;
    const statut = this.myForm.get('statut')?.value;
    const position = this.myForm.get('position')?.value;
    const coefficient = this.myForm.get('coefficient')?.value;

    console.log(prenom, nom, dateNais, adresse, matricule, numSS, dateEntre, dateSortie, emploi, statut, position, coefficient);
  }

  save(): void {
    const bodyData = {
      prenom: this.myForm.get('prenom')?.value,
      nom: this.myForm.get('nom')?.value,
      dateNais: this.myForm.get('dateNais')?.value,
      adresse: this.myForm.get('adresse')?.value,
      matricule: this.myForm.get('matricule')?.value,
      numSS: this.myForm.get('numSS')?.value,
      dateEntre: this.myForm.get('dateEntre')?.value,
      dateSortie: this.myForm.get('dateSortie')?.value,
      emploi: this.myForm.get('emploi')?.value,
      statut: this.myForm.get('statut')?.value,
      position: this.myForm.get('position')?.value,
      coefficient: this.myForm.get('coefficient')?.value,
    };

    this.SalariesService.create(bodyData).subscribe(
      (res: any) => {
        console.log('Salary created successfully:', res);
      },
      (error: any) => {
        console.error('Error occurred while creating salary:', error);
      }
    );



  }





 }
