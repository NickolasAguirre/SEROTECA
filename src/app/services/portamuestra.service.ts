import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PortaMuestra } from '../modules/seroteca/models/portaMuesta';

const apiUrl = 'https://localhost:44342/PortaMuestra'; //process.env['ApiLimitPortaMuestra'];

@Injectable({
  providedIn: 'root',
})
export class PortamuestraService {
  constructor(private client: HttpClient) {}

  GetLimitPortaMuestra(): Observable<PortaMuestra> {
    let url = apiUrl + '?id=' + '01J8H0A4XCWVRPE3RP3GMZEDMS';
    return this.client.get<PortaMuestra>(url);
  }
}
