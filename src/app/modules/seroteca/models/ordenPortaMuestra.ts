export class OrdenPortaMuestra {
  Numero: number | null;
  IdPortaMuestra: string;

  constructor(Numero: number = 0, IdPortaMuestra: string = '') {
    this.Numero = Numero;
    this.IdPortaMuestra = IdPortaMuestra;
  }
}
