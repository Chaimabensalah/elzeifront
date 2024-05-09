import { Component, OnInit } from '@angular/core';
import { Mission } from '../Models/Mission';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MissionService } from '../Services/Mission.service';
import { SalariesService } from '../Services/Salaries.service';

import { ClientService } from '../Services/Client.service';
import { Client } from '../Models/Client';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Salaries } from '../Models/Salaries';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent implements OnInit {

    Mission: Mission = {
      id: "",
      codemission:"",
      datedebut: "",
      datefin: "",
      tjm: "",
      clientid:"",
      salariesid:"",
    }

    myForm!: FormGroup;
    showParagraph: boolean | undefined;
    coefficientOptions: string[] = [];
  
    constructor(private fb: FormBuilder, private SalariesService: SalariesService, private ClientService: ClientService,  private MissionService: MissionService , private activatedRoute: ActivatedRoute ,
      private router: Router,private http: HttpClient) {} // Inject SimulatorService
      Clients:any; 
      Salariess:any;    
      selectedClient: Client | undefined;
      selectedSalaries: Salaries | undefined;
      ClinetId: any;
      SalariesId: any;
      ngOnInit(): void {
        this.myForm = this.fb.group({
          datedebut: [''],
          datefin: [''],
          tjm: [''],
          clientid: [''],
          salariesid: [''],
          codemission: [''] // Ajoutez ce champ pour le code de la mission

        });
    
        this.listClient();
        this.listSalaries();
      }
    
      save(): void {
        // Récupérer les valeurs des champs du formulaire
        const formData = this.myForm.value;
      
        // Créer l'objet de données à envoyer au backend
        const bodyData = {
          id: formData.id,
          datedebut: formData.datedebut,
          datefin: formData.datefin,
          tjm: formData.tjm,
          codemission: formData.codemission,

          clientid: {
            id: formData.clientid,

         
          },
          salariesid: {
            id: formData.salariesid,
          }
        };
      
        // Envoyer les données au backend
        this.MissionService.create(bodyData).subscribe(
          (res: any) => {
            console.log('Mission created successfully:', res);
          },
          (error: any) => {
            console.error('Error occurred while creating Mission:', error);
          }
        );
      }
      
    
      listClient() {
        this.ClientService.getClients().subscribe((res: any) => {
          this.Clients = res;
        });
      }
    
      listSalaries() {
        this.SalariesService.getSalariess().subscribe((res: any) => {
          this.Salariess = res;
        });
      }

fillCode(): void {
    // Récupérez les valeurs sélectionnées des combobox
    const selectedClientLibelle = this.myForm.get('clientid')?.value;
    const selectedSalariesNom = this.myForm.get('salariesid')?.value;

    // Utilisez le libellé sélectionné pour trouver le client correspondant
    const selectedClient = this.Clients.find((client: any) => client.libelle === selectedClientLibelle);
    const selectedSalaries = this.Salariess.find((Salaries: any) => Salaries.nom === selectedSalariesNom);

    // Assurez-vous que le client sélectionné existe
    if (selectedClient && selectedSalaries) {
        // Concaténez le libellé du client et le nom des salariés pour former le code de la mission
        const codemission = `${selectedClient.libelle} - ${selectedSalaries.nom}`;

        // Mettez à jour la valeur du champ "Code Mission" avec le code de la mission
        this.myForm.patchValue({ codemission: codemission });
    } else {
        console.error('Selected client or salaries not found.');
    }
}
      
    }