import { OrdenportamuestraService } from './../../services/ordenportamuestra.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortaMuestra } from '../../modules/seroteca/models/portaMuesta';
import { Observable, startWith } from 'rxjs';
import { PortamuestraService } from '../../services/portamuestra.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { OrdenPortaMuestra } from '../../modules/seroteca/models/ordenPortaMuestra';

@Component({
  selector: 'app-portamuestra',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TableModule,
  ],
  templateUrl: './portamuestra.component.html',
  styleUrl: './portamuestra.component.css',
  providers: [PortamuestraService, OrdenportamuestraService],
})
export class PortamuestraComponent implements OnInit {
  constructor(
    private _portamuestraService: PortamuestraService,
    private _ordenPortaMuestraService: OrdenportamuestraService
  ) {}

  numero = new FormControl(0, Validators.required);

  data: OrdenPortaMuestra = new OrdenPortaMuestra();
  ngOnInit(): void {
    this.getAllOrders();
    this.getLimits();
  }

  public limits$!: Observable<PortaMuestra>;
  public dataOrden$!: Observable<any[]>;

  getLimits() {
    this.limits$ = this._portamuestraService.GetLimitPortaMuestra();
  }

  postOrdenPortaMuestra() {
    this.data.Numero = this.numero.value;
    this.data.IdPortaMuestra = '01J8H0A4XCWVRPE3RP3GMZEDMS';
    this._ordenPortaMuestraService.postOrdenPortaMuestra(this.data);
  }

  getAllOrders() {
    debugger;
    this.dataOrden$ = this._ordenPortaMuestraService.getAllOrdenPortaMuestra();
    // .pipe(startWith([]));
  }
}
