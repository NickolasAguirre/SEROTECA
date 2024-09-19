import { PortaMuestra } from './../../../models/seroteca/portaMuesta';
import { PortamuestraService } from './../../../../services/portamuestra.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seroteca-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seroteca-create.component.html',
  styleUrl: './seroteca-create.component.css',
  providers: [PortamuestraService],
})
export class SerotecaCreateComponent implements OnInit {
  constructor(private _portamuestraService: PortamuestraService) {}
  columnCount = 0;
  ngOnInit(): void {
    this.getLimits();
  }

  public limits$!: Observable<PortaMuestra>;
  getLimits() {
    this.limits$ = this._portamuestraService.GetLimitPortaMuestra();
    this.limits$.subscribe((data: PortaMuestra) => {
      debugger;
      console.log(data);
      console.log(data.columnas);
      console.log(data.filas);
      this.columnCount = data.columnas; // Asigna el número de columnas
    });
  }
}
