import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../Services/Client.service';
import { Client } from '../Models/Client';
import {Country} from '@angular-material-extensions/select-country'; 
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrl: './clientdetails.component.css'
})
export class ClientdetailsComponent {

  selectedClient?: Client;
  myForm!: FormGroup;
  router: any;
  showParagraph: boolean | undefined;
  coefficientOptions: string[] = [];
  countryFormControl = new FormControl();
  countryFormGroup: FormGroup | undefined;
  currentDate: string = '';
  selectedCountry: Country | undefined;
  constructor(private fb: FormBuilder, private ClientService: ClientService, private activatRoute:ActivatedRoute,private datePipe: DatePipe ) {this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || ''} // Inject SimulatorService

  ngOnInit(): void {
    this.activatRoute.params.subscribe(params => {
      const ClientId = +params['id']; // Extraire simulateurId des paramètres et le convertir en nombre
      this.loadclientDetails(ClientId); // Appeler la méthode pour charger les détails du simulateur
    });
    this.myForm = this.fb.group({
      libelle: [''],
      numtva: [''],
      address: [''],
      pays: [''],
      ville: ['', Validators.required],
      rue: ['', Validators.required],
      codePostal: ['', Validators.required]
    });
  }



  loadclientDetails(ClientId: number): void {
    // Récupérer les détails du simulateur depuis le service
    this.ClientService.getClientById(ClientId).subscribe(
      (Client: Client) => {

        this.selectedClient = Client;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des détails du client', error);
      }
    );
  }

  updateClient(): void {
    if (this.selectedClient) {
      const id = this.selectedClient.id;
      const updatedData = {
          libelle: this.myForm.get('libelle')?.value,
          numtva: this.myForm.get('numtva')?.value,
          address: this.myForm.get('address')?.value,
          pays: this.myForm.get('pays')?.value,
      };
      if (updatedData.libelle==''){
        updatedData.libelle=this.selectedClient.libelle;
      }
      if (updatedData.numtva==''){
        updatedData.numtva=this.selectedClient.numtva;
      }
      if (updatedData.address==''){
        updatedData.address=this.selectedClient.address;
      }
      if (updatedData.pays==''){
        updatedData.pays=this.selectedClient.pays;
      }

      console.log(updatedData);
      this.ClientService.update(id, updatedData).subscribe(
        (response: Client) => {
          // Handle successful update response
          console.log('client updated successfully:', response);
        },
        (error: any) => {
          // Handle error
          console.error('Error updating client:', error);
        }
      );
    }
  }

 


  onCountrySelected(country: Country) {
    const countryName = country.name;
    this.myForm.get('pays')?.setValue(countryName); // Mettre à jour l'attribut 'adresse' avec le nom du pays
    console.log(countryName);
  }

 
 
}

