import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenPortaMuestra } from '../modules/seroteca/models/ordenPortaMuestra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdenportamuestraService {
  constructor(private client: HttpClient) {}

  postOrdenPortaMuestra(opt: OrdenPortaMuestra) {
    debugger;
    const response = this.client.post(
      'https://localhost:44342/api/OrdenPortaMuestra',
      opt
    );
    response.subscribe((x) => console.log(x));
  }

  getAllOrdenPortaMuestra(): Observable<any[]> {
    return this.client.get<any[]>(
      'https://localhost:44342/api/OrdenPortaMuestra'
    );
  }
}
