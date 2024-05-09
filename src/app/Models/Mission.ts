export class Mission {

    id: string;
    datedebut: string;
    datefin: string;
    tjm: string;
    codemission: string;
    clientid: string;
    salariesid: string;

    constructor(
      id: string,
      codemission: string,
      datedebut: string,
      datefin: string,
      tjm: string,
      clientid: string,
      salariesid: string,
     
    ) {
      this.id = id;
      this.codemission = codemission;
      this.datedebut = datedebut;
      this.datefin = datefin;
      this.tjm = tjm;
      this.clientid = clientid;
      this.salariesid = salariesid;
    }
  }
