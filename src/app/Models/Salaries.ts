export class Salaries {

    id: string;
    prenom: string;
    nom: string;
    dateNais: string;
    adresse: string;
    matricule: string;
    numSS: string;
    dateEntre: string;
    dateSortie: string;
    emploi: string;
    statut: string;
    position: string;
    coefficient: string;
 
  
    constructor(
      id: string,
      prenom: string,
      nom: string,
      dateNais: string,
      adresse: string,
      matricule: string,
      numSS: string,
      dateEntre: string,
      dateSortie: string,
      emploi: string,
      statut: string,
      position: string,
      coefficient: string
    ) {
      this.id = id;
      this.prenom = prenom;
      this.nom = nom;
      this.dateNais = dateNais;
      this.adresse = adresse;
      this.matricule = matricule;
      this.numSS = numSS;
      this.dateEntre = dateEntre;
      this.dateSortie = dateSortie;
      this.emploi = emploi;
      this.statut = statut;
      this.position = position;
      this.coefficient = coefficient;
    }
  }
  