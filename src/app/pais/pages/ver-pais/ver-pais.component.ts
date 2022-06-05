import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe((res) => {
        this.pais = res[0];
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.paisService.buscarPaisPorCodigo(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
