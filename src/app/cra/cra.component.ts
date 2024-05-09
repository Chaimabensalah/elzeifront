import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CRA } from '../Models/CRA';
import { CRAService } from '../Services/CRA.service';
import { MissionService } from '../Services/Mission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from '../Models/Mission';
import { MatSelect } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cra',
  templateUrl: './cra.component.html',
  styleUrl: './cra.component.css'
})
export class CRAComponent implements OnInit {

  
    CRA: CRA = {
      id: "",
      mois: "",
      nbjour: "",
      missionid: "",
      montantH: "",
      montantTTC: "",
    }

    myForm!: FormGroup;
    showParagraph: boolean | undefined;
    coefficientOptions: string[] = [];
  
    constructor(private fb: FormBuilder, private CRAService: CRAService , private MissionService: MissionService , private activatedRoute: ActivatedRoute ,
      private router: Router,private http: HttpClient) {} // Inject SimulatorService
    MissionS:any;
    selectedMission: Mission | undefined;
    MissionId: any;
  
  
    ngOnInit(): void {     
        this.myForm = this.fb.group({
          mois: [''],
          nbjour: [''],
          missionid: [''],
          pays: [''],
          montantH: [''],
          montantTTC: [''],
        });
    this.listMission()
     
    }

    
    save(): void {
     // Récupérer les valeurs des champs du formulaire
     const formData = this.myForm.value;
      
     // Créer l'objet de données à envoyer au backend
     const bodyData = {
       id: formData.id,
       mois: formData.mois,
       nbjour: formData.nbjour,
       montantH: formData.montantH,
       montantTTC: formData.montantTTC,
       missionid: {
         id: formData.missionid,    
       }
     };
      this.CRAService.create(bodyData).subscribe(
        (res: any) => {
          console.log('CRA created successfully:', res);
        },
        (error: any) => {    
            console.log('CRA created successfully:', bodyData);

          console.error('Error occurred while creating CRA:', error);
        }
      );
    }
  
  
    listMission(){
      this.MissionService.getMissionS().subscribe((res:any) =>{
        this.MissionS=res
      
       
      }
      )
    }
  
  
  }
  