import { Component, OnInit } from '@angular/core';
import { Mission } from '../Models/Mission';
import { MissionService } from '../Services/Mission.service';
import { Router, ActivatedRoute } from '@angular/router'; // Changed import for ActivatedRoute

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'] // Corrected styleUrl to styleUrls
})
export class MissionlistComponent  implements OnInit {

  missions: Mission[] = []; // Renamed mission to missions to represent an array of missions
  searchTerm: string = '';
  searchPrenom: string = ''; // Add this property for the first name
  searchMatricule: string = ''; // Add this property for the matricule
  selectedMission: Mission | null = null; // Renamed selectedSalary to selectedMission to reflect the entity

  constructor(private missionService: MissionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMissions(); // Renamed loadMission to loadMissions for consistency
  }

  loadMissions(): void { // Renamed loadMission to loadMissions for consistency
    this.missionService.getMissionS().subscribe(missions => { // Renamed mission to missions
      this.missions = missions; // Renamed mission to missions
    });
  }

 

  viewDetails(mission: Mission): void {
    this.router.navigate(['mission', mission.id]);
  }

  selectMission(mission: Mission): void { // Renamed selectMissiony to selectMission for consistency
    this.selectedMission = mission; // Renamed selectedSalary to selectedMission to reflect the entity
  }
}
