import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRA } from '../Models/CRA';
import { Mission } from '../Models/Mission';
import { CRAService } from '../Services/CRA.service';
import { MissionService } from '../Services/Mission.service';



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
      private router: Router,private http: HttpClient, private datePipe: DatePipe) {} // Inject SimulatorService
    MissionS:any;
    selectedMission: Mission | undefined;
    MissionId: any;


    ngOnInit(): void {
      const currentDate = new Date();
    // getMonth() returns month index starting from 0 (January) to 11 (December)
  const month = currentDate.getMonth() + 1;
        this.myForm = this.fb.group({
          mois: [month],
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
          this.router.navigate(["/cralist"]);

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
    fill() {
      //this.myForm.patchValue({ codemission: codemission });
      const selectedm = this.myForm.get('missionid')?.value;
      const m=this.MissionS.find((miss:any)=>miss.id === Number(selectedm));
      console.log(m);
      this.selectedMission=m;
    }


    submitForm(): void {
      const tjm = this.selectedMission?.tjm;
      const nbjour = this.myForm.get('nbjour')?.value;

  //les formules de ecrant1
  const result1: number = Number(tjm)*Number(nbjour);
  const result2: number = result1 * 1.2;
console.log(tjm);
console.log(nbjour);

      this.myForm.get('montantH')?.setValue(result1);
      this.myForm.get('montantTTC')?.setValue(result2);

    }

  }
