import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRA } from '../Models/CRA';
import { Mission } from '../Models/Mission';
import { MonthlyData } from '../Models/MonthlyData';
import { CRAService } from '../Services/CRA.service';
import { ClientService } from '../Services/Client.service';
import { MissionService } from '../Services/Mission.service';
import { MonthlyDataService } from '../Services/MonthlyData.service';
import { SalariesService } from '../Services/Salaries.service';

@Component({
  selector: 'app-monthly-data',
  templateUrl: './monthly-data.component.html',
  styleUrl: './monthly-data.component.css'
})
export class MonthlyDataComponent {
  users = new FormControl([]);
  clientss = new FormControl([]);

  currentDate: string = '';
  MonthlyData: MonthlyData = {
      id: "",
      facture:"",
      cout: "",
      fraisrepas: "",
      fraiskilo: "",
      chargesalarial: "",
      chargeannexe: "",
      autre: "",
      totalPercu: "",
      missionid:"",
      salariesid:"",
      crasid:"",
    }

    myForm!: FormGroup;
    showParagraph: boolean | undefined;
    coefficientOptions: string[] = [];

    selectedCRA: CRA | undefined;
    selectedSalaries: any;
    selectedMission: Mission | undefined;

    SalariesId: any;
    missionid: any;
    craid: any;
    s:any;

    constructor(private fb: FormBuilder,private CRAService: CRAService,private MonthlyDataService: MonthlyDataService, private salariesService: SalariesService, private ClientService: ClientService,  private MissionService: MissionService , private activatedRoute: ActivatedRoute ,
      private router: Router,private http: HttpClient, private datePipe: DatePipe) {this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';


      } // Inject SimulatorService
      Clients:any;
      Salariess:any;
      cras!:any;
      MissionS:any;


      ngOnInit(): void {
        this.myForm = this.fb.group({
          id: [''],
          Salariesid: [''],
          missionid: [''],
          crasid: [''] ,
          facture: [''],
          autre: [''],
          totalPercu: [''],
          cout: [''],
          fraisrepas: [''],
          fraiskilo: [''],
          chargesalarial: [''],
          chargeannexe: [''],

        });
        this.listSalaries();
        this.listMission();
        this.listCRA();

      }

    selectedmission:string="";
    selectedsalaries:string="";
    selectedcra:string="";


      save(): void {
        // Récupérer les valeurs des champs du formulaire
        const formData = this.myForm.value;

        // Créer l'objet de données à envoyer au backend
        const bodyData = {
          id: formData.id,
          salariesid: {
            id: formData.salariesid,
          },
          missionid: {
            id: formData.missionid,
          },
          craid: {
            id: formData.craid,
          },
          facture: formData.facture,
          autre: formData.autre,
          totalPercu: formData.totalPercu,
          cout: formData.cout,
          fraisrepas: formData.fraisrepas,
          fraiskilo: formData.fraiskilo,
          chargesalarial: formData.chargesalarial,
          chargeannexe: formData.chargeannexe,




        };
        // Envoyer les données au backend
        console.log(bodyData);
        this.MonthlyDataService.create(bodyData).subscribe(
          (res: any) => {
            console.log('Mission created successfully:', res);
            alert('MonthlyData saved successfully');

          },
          (error: any) => {
            console.error('Error occurred while creating Mission:', error);
          }

        );
      }

      fill() {
        // Retrieve the selected mission id and CRA id from the form
        const selectedMissionId = this.myForm.get('missionid')?.value;
        const selectedCRAId = this.myForm.get('craid')?.value;

        // Find the mission object by id in the MissionS array
        const selectedMission = this.MissionS.find((mission: any) => mission.id === Number(selectedMissionId));
        // Find the CRA object by id in the cras array
        const selectedCRA = this.cras.find((cra: any) => cra.id === Number(selectedCRAId));

        // Log the found mission and CRA objects for debugging
        console.log(selectedMission);
        console.log(selectedCRA);

        // Set the selected mission and CRA to the component properties
        this.selectedMission = selectedMission;
        this.selectedCRA = selectedCRA;
    }


      listMission() {
        this.MissionService.getMissionS().subscribe((res: any) => {
          this.MissionS = res;
        });
      }


      listSalaries() {
        this.salariesService.getSalariess().subscribe((res: any) => {
          this.Salariess = res;
        });
      }



      listCRA() {
        this.CRAService.getCRAS().subscribe((res: any) => {
          this.cras = res;
        });
      }




selectSalaries(){
  console.log(this.users.value);
}


selectedMissionsalaries: Mission | undefined;

chosesalaries(event:any){
const sid = event.target as HTMLSelectElement;
this.selectedSalaries=this.Salariess.filter((salaries:any)=> salaries.id == sid.value as string);

this.salariesService.getmissionbyuserid(sid.value as string).subscribe((res:any)=>{

this.selectedMissionsalaries=res;
this.CRAService.getCRAByMissionId(res.id).subscribe((res:CRA[])=>{
  this.cras=res;
  this.selectedCRA = this.cras[0];
  this.loadpdf();
});
});
    }

    chosedCra(event:any){
        this.selectedCRA = this.cras.find((cra: any) => cra.id === Number(event.target.value));
    }
pdfssalaries!:any;

loadpdf(){
  this.salariesService.getPdfs().subscribe(
    (res:any[]) => {
        const pdfs = res.filter((salaries)=>salaries.matricule==this.selectedSalaries?.matricule );
        this.pdfssalaries=res[0];
        console.log(res);
        console.log(this.selectedSalaries?.matricule);
    },
    (error: any) => {
      console.error('Erreur lors du chargement des détails du simulateur', error);
    }
  );
}
submitForm(): void {
  const tjm = this.selectedMissionsalaries?.tjm;
  const nbjour = this.selectedCRA?.nbjour;
  const netpaye = this.myForm.get('netpaye')?.value;
  const fraisrepas = this.myForm.get('fraisrepas')?.value;
  const fraiskilo = this.myForm.get('fraiskilo')?.value;
  const autre = this.myForm.get('autre')?.value;
  const chargesalarial = this.myForm.get('chargesalarial')?.value;
  const chpatroniales = this.myForm.get('chpatroniales')?.value;

  console.log(tjm);

//les formules de ecrant1
const result1: number = Number(tjm)*Number(nbjour);
const valtotalpercu :  number = Number(netpaye)+Number(fraisrepas)+Number(fraiskilo)+Number(autre) ;
const valcout :  number = Number(netpaye)+Number(fraisrepas)+Number(fraiskilo)+Number(autre)+Number(chargesalarial)+Number(chpatroniales) ;

console.log(tjm);
console.log(nbjour);
console.log('valtotalpercu',valtotalpercu);
console.log('valcout',valcout);
console.log('valcout',result1);




  this.myForm.get('facture')?.setValue(result1);
  this.myForm.get('totalPercu')?.setValue(valtotalpercu);
  this.myForm.get('cout')?.setValue(valcout);

}

  }
