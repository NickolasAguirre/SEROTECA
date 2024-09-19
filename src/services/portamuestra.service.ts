import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortaMuestra } from '../app/models/seroteca/portaMuesta';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:44342/PortaMuestra'; //process.env['ApiLimitPortaMuestra'];

@Injectable({
  providedIn: 'root',
})
export class PortamuestraService {
  constructor(private client: HttpClient) {}

  GetLimitPortaMuestra(): Observable<PortaMuestra> {
    let url = apiUrl + '?id=' + '01J843GFVKGYFJKVS3H3NMW5VX';
    return this.client.get<PortaMuestra>(url);
  }
}
