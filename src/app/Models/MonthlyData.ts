export class MonthlyData {
  id: string;
  facture: string;
  cout: string;
  autre: string;
  totalPercu: string;
  missionid: any;
  salariesid: any;
  crasid: any;

  constructor(
    id: string,
    facture: string,
    cout: string,
    autre: string,
    totalPercu: string,
    missionid: any,
    salariesid: any,
    crasid: any,

  ) {
    this.id = id;
    this.facture = facture;
    this.cout = cout;
    this.autre = autre;
    this.totalPercu = totalPercu;
    this.missionid = missionid;
    this.salariesid = salariesid;
    this.crasid = crasid;
  }
}
